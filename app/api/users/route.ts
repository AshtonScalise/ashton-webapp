import { NextRequest, NextResponse } from "next/server";
import supabase from "@/supabase/supabaseClient";

export async function GET(request: NextRequest) {
  // Fetch users from Supabase
  const { data: users, error } = await supabase
    .from("users") // Change 'users' to the actual name of your table if it's different
    .select("*"); // Select all columns

  if (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(users);
}
