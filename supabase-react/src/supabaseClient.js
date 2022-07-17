import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY)
//const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
//const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

//export const supabase = createClient(supabaseUrl, supabaseAnonKey)
const { data: recipes_ingredinets, error } = await supabase
    .from('recipes_ingredinets')
    .select('recipe_id')