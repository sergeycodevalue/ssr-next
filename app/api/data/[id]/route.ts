import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const data = await request.json();

  return NextResponse.json(
    { data: { ...data, id }, message: "put" },
    { status: 200 }
  );
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const data = await request.json();

  return NextResponse.json(
    { data: { ...data, id }, message: "patch" },
    { status: 200 }
  );
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const data = await request.json();

  return NextResponse.json(
    { data: { ...data, id }, message: "delete" },
    { status: 200 }
  );
}
