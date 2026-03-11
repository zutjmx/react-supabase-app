import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL, 
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
);

export const getUsuarios = async () => {
  try {
    const { data } = await supabase.from("usuarios").select();
    return data;
  } catch (error) {
    console.error("Error fetching usuarios:", error);
    throw error;
  }
}
