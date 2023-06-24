import dbConnect from "@/utils/dbconnect";
import Contact from "@/app/contact/page";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  try {
    const body = request.json();
    await dbConnect();
    await Contact.create(body);
    return NextResponse.json(
      {
        message: "Message sent successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}
