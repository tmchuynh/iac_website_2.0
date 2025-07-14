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
      !iacAuthorization
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
