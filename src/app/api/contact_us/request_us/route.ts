import RequestUsTemplate from "@/components/email_templates/requestUsTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const {
      firstName,
      lastName,
      email,
      phone,
      schoolName,
      principalName,
      schoolEmail,
      gradeLevels,
      interestedPrograms,
      additionalInfo,
    } = await request.json();

    // Basic validation: ensure required fields are present.
    if (
      !firstName ||
      !lastName ||
      !email ||
      !schoolName ||
      !principalName ||
      !schoolEmail ||
      !gradeLevels ||
      gradeLevels.length === 0 ||
      !interestedPrograms ||
      interestedPrograms.length === 0
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Initialize Resend with your API key.
    const resend = new Resend(process.env.RESEND_API_KEY as string);

    // Send the email with a formatted HTML message.
    await resend.emails.send({
      from: process.env.FROM_REQUEST_US_EMAIL as string, // Verified sender email.
      to: process.env.TO_EMAIL as string, // Recipient email.
      subject: `School Program Request from ${schoolName} - ${firstName} ${lastName}`,
      react: RequestUsTemplate({
        firstName,
        lastName,
        email,
        phone,
        schoolName,
        principalName,
        schoolEmail,
        gradeLevels,
        interestedPrograms,
        additionalInfo,
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
