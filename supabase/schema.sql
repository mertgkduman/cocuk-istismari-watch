-- Çocuk İstismarı Takip public data schema
-- Run in Supabase SQL editor. The static app also works without Supabase.

create extension if not exists pgcrypto;

create type public.record_type as enum (
  'abuse_case'
);

create type public.abuse_type as enum (
  'sexual_abuse',
  'physical_abuse',
  'neglect',
  'institutional_abuse',
  'multiple_or_unclear'
);

create type public.record_status as enum (
  'reported',
  'investigation',
  'indictment',
  'trial',
  'conviction',
  'acquittal',
  'dismissed_or_closed',
  'unknown'
);

create type public.verification_status as enum (
  'draft',
  'needs_review',
  'verified',
  'rejected'
);

create type public.source_type as enum (
  'official',
  'court',
  'rights_org',
  'news',
  'report',
  'social_media',
  'other'
);

create type public.geocode_precision as enum (
  'exact',
  'venue_approx',
  'district_centroid',
  'province_centroid',
  'unknown'
);

create table public.cases (
  id uuid primary key default gen_random_uuid(),
  public_id text unique not null,
  record_type public.record_type not null default 'abuse_case',
  abuse_type public.abuse_type not null default 'multiple_or_unclear',
  status public.record_status not null default 'unknown',
  title text not null,
  summary text not null,
  institution text,
  legal_status text,
  affected_child_count integer check (affected_child_count is null or affected_child_count >= 0),
  event_date date,
  reported_date date,
  indictment_date date,
  trial_date date,
  decision_date date,
  verification_status public.verification_status not null default 'draft',
  last_verified_at date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.case_locations (
  id uuid primary key default gen_random_uuid(),
  case_id uuid not null references public.cases(id) on delete cascade,
  label text not null,
  province_key text,
  province text not null,
  district text,
  lat numeric(9,6) not null,
  lng numeric(9,6) not null,
  geocode_precision public.geocode_precision not null default 'unknown',
  location_basis text,
  created_at timestamptz not null default now(),
  constraint case_locations_lat check (lat between -90 and 90),
  constraint case_locations_lng check (lng between -180 and 180)
);

create table public.case_sources (
  id uuid primary key default gen_random_uuid(),
  case_id uuid not null references public.cases(id) on delete cascade,
  title text not null,
  url text not null,
  publisher text,
  type public.source_type not null default 'other',
  published_at date,
  created_at timestamptz not null default now(),
  constraint case_sources_http_url check (url ~* '^https?://')
);

create table public.case_timeline (
  id uuid primary key default gen_random_uuid(),
  case_id uuid not null references public.cases(id) on delete cascade,
  date date,
  status public.record_status not null default 'unknown',
  note text not null,
  created_at timestamptz not null default now()
);

create table public.case_submissions (
  id uuid primary key default gen_random_uuid(),
  record_type public.record_type not null default 'abuse_case',
  abuse_type public.abuse_type not null,
  title text not null,
  summary text not null,
  province text not null,
  province_key text,
  location_label text,
  reported_date date,
  lat numeric(9,6),
  lng numeric(9,6),
  geocode_precision public.geocode_precision not null default 'unknown',
  source_url text not null,
  source_title text,
  source_type public.source_type not null default 'other',
  submitter_contact text,
  status public.verification_status not null default 'needs_review',
  raw_payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  reviewed_at timestamptz,
  reviewer_note text,
  constraint case_submissions_http_url check (source_url ~* '^https?://'),
  constraint case_submissions_lat check (lat is null or lat between -90 and 90),
  constraint case_submissions_lng check (lng is null or lng between -180 and 180),
  constraint case_submissions_coords_pair check ((lat is null and lng is null) or (lat is not null and lng is not null))
);

create index cases_abuse_type_idx on public.cases(abuse_type);
create index cases_status_idx on public.cases(status);
create index cases_verification_idx on public.cases(verification_status);
create index case_locations_case_idx on public.case_locations(case_id);
create index case_locations_province_idx on public.case_locations(province);
create index case_sources_case_idx on public.case_sources(case_id);
create index case_sources_type_idx on public.case_sources(type);
create index case_timeline_case_idx on public.case_timeline(case_id);
create index case_submissions_status_idx on public.case_submissions(status);

alter table public.cases enable row level security;
alter table public.case_locations enable row level security;
alter table public.case_sources enable row level security;
alter table public.case_timeline enable row level security;
alter table public.case_submissions enable row level security;

create policy "public can read verified cases"
on public.cases for select
using (verification_status = 'verified');

create policy "public can read verified case locations"
on public.case_locations for select
using (
  exists (
    select 1 from public.cases
    where cases.id = case_locations.case_id
      and cases.verification_status = 'verified'
  )
);

create policy "public can read verified case sources"
on public.case_sources for select
using (
  exists (
    select 1 from public.cases
    where cases.id = case_sources.case_id
      and cases.verification_status = 'verified'
  )
);

create policy "public can read verified case timeline"
on public.case_timeline for select
using (
  exists (
    select 1 from public.cases
    where cases.id = case_timeline.case_id
      and cases.verification_status = 'verified'
  )
);

create policy "public can submit cases for review"
on public.case_submissions for insert
with check (status = 'needs_review');

-- Editors should be granted through Supabase auth/RLS policies or service-role workflows.
