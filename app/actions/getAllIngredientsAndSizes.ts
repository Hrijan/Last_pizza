import { createClient } from "@/utils/supabase/server";

export async function getAllIngredientsAndSizes() {

  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from("menu items")
    .select("*")

  return data;
}