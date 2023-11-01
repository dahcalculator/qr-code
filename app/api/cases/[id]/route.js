
import connectMongoDB from "@/libs/mongodb";
import Case from "@/models/case";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Case.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "case updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const x = await Case.findOne({ _id: id });
  return NextResponse.json({ x }, { status: 200 });
}
