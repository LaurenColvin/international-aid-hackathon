import { createClient } from '@supabase/supabase-js'
let supabaseUrl = process.env.REACT_APP_SUPABASE_URL
let supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

export const dbClient = createClient(supabaseUrl, supabaseAnonKey)

