import { createClient } from "@supabase/supabase-js";
import type { Database } from "../../../lib/database.types";

// Initialize the Supabase client for server-side operations
const supabaseUrl = "https://sbqbapsyxquugsztzhtr.supabase.co";
const supabaseServiceKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicWJhcHN5eHF1dWdzenR6aHRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0MDc3MjgsImV4cCI6MjA1NTk4MzcyOH0.3B0NIomcn03dm6bybRug6mDk2W0HEYnnK17B9gEi1y4";

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabaseServer = createClient<Database>(
  supabaseUrl,
  supabaseServiceKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);
