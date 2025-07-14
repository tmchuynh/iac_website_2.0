import RegistrationTemplate from "@/components/email_templates/registrationTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const {
      studentName,
      preferredName,
      grade,
      teacherName,
      afterClassCare,
      elementarySchool,
      classTypes,
      parentName,
      phoneNumber,
      emailAddress,
      alternateContactName,
      alternateContactPhone,
      paymentType,
      iacAuthorization,
    } = await request.json();

    // Basic validation: ensure required fields are present.
    if (
      !studentName ||
      !grade ||
      !teacherName ||
      !afterClassCare ||
      !elementarySchool ||
      !classTypes ||
      classTypes.length === 0 ||
      !parentName ||
      !phoneNumber ||
      !emailAddress ||
      !paymentType ||
      iacAuthorization !== true
    ) {
      console.error("Registration validation failed:", {
        studentName: !!studentName,
        grade: !!grade,
        teacherName: !!teacherName,
        afterClassCare: !!afterClassCare,
        elementarySchool: !!elementarySchool,
        classTypes: classTypes?.length || 0,
        parentName: !!parentName,
        phoneNumber: !!phoneNumber,
        emailAddress: !!emailAddress,
        paymentType: !!paymentType,
        iacAuthorization,
      });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Initialize Resend with your API key.
    const resend = new Resend(process.env.RESEND_API_KEY as string);

    // Check for required environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    if (!process.env.FROM_REGISTRATION_EMAIL) {
      console.error("Missing FROM_REGISTRATION_EMAIL environment variable");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    if (!process.env.TO_EMAIL) {
      console.error("Missing TO_EMAIL environment variable");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Send the email with a formatted HTML message.
    const emailResult = await resend.emails.send({
      from: process.env.FROM_REGISTRATION_EMAIL as string, // Verified sender email.
      to: process.env.TO_EMAIL as string, // Recipient email.
      subject: `Class Registration: ${studentName} (${grade}) - ${elementarySchool}`,
      react: RegistrationTemplate({
        studentName,
        preferredName,
        grade,
        teacherName,
        afterClassCare,
        elementarySchool,
        classTypes,
        parentName,
        phoneNumber,
        emailAddress,
        alternateContactName,
        alternateContactPhone,
        paymentType,
      }),
    });

    if (!emailResult.data) {
      console.error("Failed to send email:", emailResult.error);
      return NextResponse.json(
        { error: "Failed to send registration email" },
        { status: 500 }
      );
    }

    console.log("Registration email sent successfully:", emailResult.data.id);

    return NextResponse.json(
      { message: "Registration sent successfully" },
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
