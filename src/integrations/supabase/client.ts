// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://uhgoqhyyfubfzeknzbfc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoZ29xaHl5ZnViZnpla256YmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NTY2ODAsImV4cCI6MjA2MDUzMjY4MH0.UO0K-LT8SPxr9QoyvxwsyaqL3wsOPTpiV4umjtQGLMk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);