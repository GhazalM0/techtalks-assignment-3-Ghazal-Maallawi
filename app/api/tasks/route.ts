import { NextResponse } from "next/server";

let tasks = [
  {
    id: 1,
    title: "Review Route Handlers",
    completed: false
  }
];

export async function GET() {
  return NextResponse.json({data: tasks}, { status: 200 }); 
}

export async function POST(request: Request) {
  const body = await request.json();
  if (!body.title || body.title.trim() === "") 
    { return NextResponse.json({ message: "Title is required" }, { status: 400 }); }
  const newTask = {
    id: tasks.length + 1,
    title: body.title,
    completed: false
  };
  tasks.push(newTask);
  return NextResponse.json(newTask, { status: 201 });
}