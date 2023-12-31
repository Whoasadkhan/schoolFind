import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";




export async function POST(request) {
  try {
    // Destructuring properties from the JSON request body
    const {name,address,board, city, image } = await request.json();
    
    console.log("hello");

    await connectMongoDB();
    await Topic.create({ name, address, board, city, image });

    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
