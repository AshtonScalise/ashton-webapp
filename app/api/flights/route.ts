import { NextRequest, NextResponse } from "next/server";
import supabase from "@/supabase/supabaseClient";

// GET Request: Fetch all flights
export async function GET(request: NextRequest) {
  try {
    // Fetch all flights from Supabase
    console.log(request);
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
      const {
        flight_numbers,
        initial_departure_date,
        return_departure_date,
        stops,
        price,
        duration,
      } = flight;
      if (
        !flight_numbers ||
        !initial_departure_date ||
        !return_departure_date ||
        !duration ||
        typeof stops !== "number" ||
        typeof price !== "number"
      ) {
        return NextResponse.json(
          {
            success: false,
            error:
              "Each flight object must have 'flight_numbers', 'dates', 'stops' (number), and 'price' (number), duration",
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

export async function DELETE(request: NextRequest) {
  try {
    console.log(request);
    // Step 1: Fetch all the ids from the flights table
    const { data: flights, error: fetchError } = await supabase
      .from("flights")
      .select("id"); // Only select the id column

    if (fetchError) {
      console.error("Error fetching flight ids:", fetchError);
      return NextResponse.json(
        { success: false, error: fetchError.message },
        { status: 500 }
      );
    }

    if (!flights || flights.length === 0) {
      return NextResponse.json(
        { success: false, error: "No flights to delete" },
        { status: 400 }
      );
    }

    // Step 2: Extract ids from the fetched flights
    const idsToDelete = flights.map((flight) => flight.id);

    // Step 3: Delete the flights with the fetched ids
    const { error } = await supabase
      .from("flights")
      .delete()
      .in("id", idsToDelete); // Delete flights by ids

    if (error) {
      console.error("Error deleting flights:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "All flights deleted" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
