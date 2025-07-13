import RequestParentStudentTemplate from "@/components/email_templates/requestParentStudentTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const { name, grades, school, principal, contactInfo, message } =
      await request.json();

    // Basic validation: ensure required fields are present.
    if (!name || !grades || !school || !principal || !contactInfo || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Initialize Resend with your API key.
    const resend = new Resend(process.env.RESEND_API_KEY as string);

    // Send the email with a formatted HTML message.
    await resend.emails.send({
      from: process.env.FROM_REQUEST_PARENT_STUDENT_EMAIL as string, // Verified sender email.
      to: process.env.TO_EMAIL as string, // Recipient email.
      subject: `Parent/Student Program Request: ${school} - ${name}`,
      react: RequestParentStudentTemplate({
        name,
        grades,
        school,
        principal,
        contactInfo,
        message,
      }),
    });

    return NextResponse.json(
      { message: "Request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email with Resend:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
