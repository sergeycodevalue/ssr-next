import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    data: [
      { id: 1, name: "name1" },
      { id: 2, name: "name2" },
    ],
    message: "get",
  });
}

export async function POST(request: Request) {
  const data = await request.json();

  return NextResponse.json({ data, message: "post" }, { status: 201 });
}
