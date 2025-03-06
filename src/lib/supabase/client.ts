import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "../../../lib/database.types";

/**
 * Creates a Supabase client for client-side operations.
 *
 * This client is used to interact with the Supabase backend
 * from the client-side of the application.
 *
 * @returns A Supabase client instance for the specified database type.
 */
export const createClient = () => {
  // Create and return a Supabase client instance
  return createClientComponentClient<Database>();
};
