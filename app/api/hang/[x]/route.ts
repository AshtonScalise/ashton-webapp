import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { x: string } }
): Promise<NextResponse> {
  const x = parseInt(params.x, 10);

  // Validate that x is a valid positive integer
  if (isNaN(x) || x < 0) {
    return NextResponse.json(
      { error: "Invalid seconds provided." },
      { status: 400 }
    );
  }

  // Check if x is 7 to return a 500 status
  if (x === 7) {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }

  // Determine if we should hang for 15 seconds or not hang at all for x = 15
  if (x === 15) {
    const shouldHang = Math.random() < 0.5; // 50% chance

    if (shouldHang) {
      // Delay function to "hang" for 15 seconds
      await new Promise((resolve) => setTimeout(resolve, 15 * 1000));
      return NextResponse.json({
        message: `Hello world, hung for 15 seconds`,
      });
    } else {
      return NextResponse.json({
        message: `Hello world, did not hang at all`,
      });
    }
  } else {
    // Delay function to "hang" for x seconds for all other values
    await new Promise((resolve) => setTimeout(resolve, x * 1000));
    return NextResponse.json({
      message: `Hello world, hung for ${x} seconds`,
    });
  }
}
