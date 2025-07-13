import FeedbackTemplate from "@/components/email_templates/feedbackTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const {
      name,
      email,
      participationType,
      program,
      school,
      overallRating,
      feedbackType,
      specificAreas,
      programSuggestions,
      staffRecognition,
      improvements,
      additionalComments,
      anonymous,
      contactBack,
    } = await request.json();

    // Basic validation: ensure required fields are present.
    if (
      !participationType ||
      !overallRating ||
      !feedbackType ||
      feedbackType.length === 0
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Additional validation for non-anonymous submissions
    if (!anonymous && (!name || !email)) {
      return NextResponse.json(
        { error: "Name and email are required for non-anonymous feedback" },
        { status: 400 }
      );
    }

    // Initialize Resend with your API key.
    const resend = new Resend(process.env.RESEND_API_KEY as string);

    // Send the email with a formatted HTML message.
    await resend.emails.send({
      from: process.env.FROM_FEEDBACK_EMAIL as string, // Verified sender email.
      to: process.env.TO_EMAIL as string, // Recipient email.
      subject: `Feedback from ${anonymous ? "Anonymous User" : name}${program ? ` - ${program}` : ""}`,
      react: FeedbackTemplate({
        name: anonymous ? "Anonymous" : name,
        email: anonymous ? "anonymous@feedback.com" : email,
        participationType,
        program,
        school,
        overallRating,
        feedbackType,
        specificAreas,
        programSuggestions,
        staffRecognition,
        improvements,
        additionalComments,
        anonymous,
        contactBack,
      }),
    });

    return NextResponse.json(
      { message: "Feedback sent successfully" },
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
