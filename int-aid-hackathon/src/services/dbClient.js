import { createClient } from '@supabase/supabase-js'
//get non-secret env vars. TODO: ENABLE ROW LEVEL SECURITY FOR DB, URL AND PUBLIC KEY WILL BE EXPOSED ON CLIENT!!

let supabaseUrl = process.env.REACT_APP_SUPABASE_URL
let supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

//instantiate instance of SupabaseClient class from supabase-js
export const dbClient = createClient(supabaseUrl, supabaseAnonKey)

