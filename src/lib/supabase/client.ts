import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../../lib/database.types";

// Initialize the Supabase client for client-side operations
export const createClient = () => {
  return createClientComponentClient<Database>();
};
