-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- Users table (extends Supabase auth.users)
create table if not exists profiles (
  id uuid references auth.users on delete cascade not null primary key,
  full_name text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Meetings table
create table if not exists meetings (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  created_by uuid references profiles(id) not null,
  scheduled_for timestamp with time zone,
  duration integer, -- in minutes
  meeting_url text,
  is_active boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Meeting participants
create table if not exists meeting_participants (
  id uuid default uuid_generate_v4() primary key,
  meeting_id uuid references meetings(id) on delete cascade not null,
  user_id uuid references profiles(id) on delete cascade not null,
  role text check (role in ('host', 'participant')) default 'participant',
  joined_at timestamp with time zone,
  left_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(meeting_id, user_id)
);

-- Meeting transcripts
create table if not exists transcripts (
  id uuid default uuid_generate_v4() primary key,
  meeting_id uuid references meetings(id) on delete cascade not null,
  content text not null,
  speaker_id uuid references profiles(id),
  timestamp timestamp with time zone default timezone('utc'::text, now()) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Action items
create table if not exists action_items (
  id uuid default uuid_generate_v4() primary key,
  meeting_id uuid references meetings(id) on delete cascade not null,
  content text not null,
  assigned_to uuid references profiles(id),
  status text check (status in ('pending', 'in_progress', 'completed')) default 'pending',
  due_date timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Meeting summaries
create table if not exists meeting_summaries (
  id uuid default uuid_generate_v4() primary key,
  meeting_id uuid references meetings(id) on delete cascade not null,
  summary text not null,
  key_points text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS Policies
alter table profiles enable row level security;
alter table meetings enable row level security;
alter table meeting_participants enable row level security;
alter table transcripts enable row level security;
alter table action_items enable row level security;
alter table meeting_summaries enable row level security;

-- Profiles policies
create policy "Public profiles are viewable by everyone"
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Meetings policies
create policy "Meetings are viewable by participants"
  on meetings for select
  using (
    auth.uid() in (
      select user_id 
      from meeting_participants 
      where meeting_id = meetings.id
    )
  );

create policy "Users can create meetings"
  on meetings for insert
  with check ( auth.uid() = created_by );

create policy "Meeting hosts can update meetings"
  on meetings for update
  using (
    auth.uid() in (
      select user_id 
      from meeting_participants 
      where meeting_id = meetings.id 
      and role = 'host'
    )
  );

-- Similar policies for other tables...

