import { NextRequest, NextResponse } from "next/server";
import supabase from "@/supabase/supabaseClient";

// GET Request: Fetch all flights
export async function GET(request: NextRequest) {
  try {
    // Fetch all flights from Supabase
    const { data: flights, error } = await supabase
      .from("flights") // Ensure "flights" matches your table name
      .select("*"); // Select all columns

    if (error) {
      console.error("Error fetching flights:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: flights }, { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST Request: Add multiple flights
export async function POST(request: NextRequest) {
  try {
    // Parse the request body as JSON
    const body = await request.json();

    // Validate that the body is an array of flight objects with the correct attributes
    if (!Array.isArray(body)) {
      return NextResponse.json(
        {
          success: false,
          error: "Request body must be an array of flight objects",
        },
        { status: 400 }
      );
    }

    // Validate each flight object has the necessary attributes
    for (const flight of body) {
      const { flight_number, date, stops, price } = flight;
      if (
        !flight_number ||
        !date ||
        typeof stops !== "number" ||
        typeof price !== "number"
      ) {
        return NextResponse.json(
          {
            success: false,
            error:
              "Each flight object must have 'flight_number', 'date', 'stops' (number), and 'price' (number)",
          },
          { status: 400 }
        );
      }
    }

    // Insert the flights array into the "flights" table
    const { data, error } = await supabase
      .from("flights") // Ensure "flights" matches your table name
      .insert(body); // Insert the array of flight objects

    if (error) {
      console.error("Error adding flights:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
