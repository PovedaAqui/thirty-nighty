-- Thirty Nighty — Waitlist table
-- Run this in the Supabase SQL Editor once the project is created.

CREATE TABLE IF NOT EXISTS waitlist (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  locale TEXT,
  source TEXT DEFAULT 'landing_page',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS (the API route uses the service role key, which bypasses RLS,
-- so no public policies are needed — this just locks the table down from
-- anonymous/public REST access by default).
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Optional: index for faster lookups by email (already covered by UNIQUE,
-- but explicit for clarity).
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist (email);
