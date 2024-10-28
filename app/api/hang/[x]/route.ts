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

  // Delay function to "hang" for x seconds
  await new Promise((resolve) => setTimeout(resolve, x * 1000));

  return NextResponse.json({
    message: `Hello world, hung for ${x} seconds`,
  });
}
