import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vmlnxdnjnisnqylwnskl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtbG54ZG5qbmlzbnF5bHduc2tsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1MzAxMTYsImV4cCI6MjAyODEwNjExNn0.w-v0Cltf6GeiXVkhG0i_9WtI_X_mD6TygiLbgTCHmt8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
