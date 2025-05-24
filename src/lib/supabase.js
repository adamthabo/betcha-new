import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://inbgnnopftrageflfaku.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImluYmdubm9wZnRyYWdlZmxmYWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNjE5NzUsImV4cCI6MjA2MDczNzk3NX0.DsK6FR2FErgqx3_7Jv5Tohe7I852g5WY3sg8QsJA8Zk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
