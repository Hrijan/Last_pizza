import { createClient } from "@/utils/supabase/server";

export async function getAllMenuItems() {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from("menu items")
    .select("*")
    .in("category", ["Pizza", "Salad", "Side", "Drink"]);

  if (error) {
    console.error("Error fetching menu items:", error);
    return [];
  }

  return data;
}
