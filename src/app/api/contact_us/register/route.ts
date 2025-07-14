import RegistrationTemplate from "@/components/email_templates/registrationTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const requestData = await request.json();

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
    } = requestData;

    // Basic validation: ensure required fields are present.
    console.log("Starting validation...");
    const validationErrors = [];

    if (!studentName) validationErrors.push("studentName missing");
    if (!grade) validationErrors.push("grade missing");
    if (!teacherName) validationErrors.push("teacherName missing");
    if (!afterClassCare) validationErrors.push("afterClassCare missing");
    if (!elementarySchool) validationErrors.push("elementarySchool missing");
    if (!classTypes || classTypes.length === 0)
      validationErrors.push("classTypes missing or empty");
    if (!parentName) validationErrors.push("parentName missing");
    if (!phoneNumber) validationErrors.push("phoneNumber missing");
    if (!emailAddress) validationErrors.push("emailAddress missing");
    if (!paymentType) validationErrors.push("paymentType missing");
    if (iacAuthorization !== true)
      validationErrors.push("iacAuthorization not true");

    if (validationErrors.length > 0) {
      console.error("Validation failed:", validationErrors);
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
        { error: "Missing required fields", details: validationErrors },
        { status: 400 }
      );
    }

    console.log("Validation passed successfully");

    // Initialize Resend with your API key.
    console.log("Initializing Resend...");
    const resend = new Resend(process.env.RESEND_API_KEY as string);

    // Check for required environment variables
    console.log("Checking environment variables...");
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { error: "Server configuration error: Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    if (!process.env.FROM_REGISTRATION_EMAIL) {
      console.error("Missing FROM_REGISTRATION_EMAIL environment variable");
      return NextResponse.json(
        {
          error: "Server configuration error: Missing FROM_REGISTRATION_EMAIL",
        },
        { status: 500 }
      );
    }

    if (!process.env.TO_EMAIL) {
      console.error("Missing TO_EMAIL environment variable");
      return NextResponse.json(
        { error: "Server configuration error: Missing TO_EMAIL" },
        { status: 500 }
      );
    }

    console.log("Environment variables check passed");

    // Send the email with a formatted HTML message.
    console.log("Attempting to send email with:", {
      from: process.env.FROM_REGISTRATION_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `Class Registration: ${studentName} (${grade}) - ${elementarySchool}`,
    });

    let emailResult;
    try {
      // Use the React template
      const templateData = {
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
      };

      emailResult = await resend.emails.send({
        from: process.env.FROM_REGISTRATION_EMAIL as string,
        to: process.env.TO_EMAIL as string,
        subject: `Class Registration: ${studentName} (${grade}) - ${elementarySchool}`,
        react: RegistrationTemplate(templateData),
      });
    } catch (emailError) {
      console.error("Error during email send:", emailError);
      const errorMessage =
        emailError instanceof Error ? emailError.message : String(emailError);
      return NextResponse.json(
        { error: "Failed to send registration email", details: errorMessage },
        { status: 500 }
      );
    }

    console.log("Email result:", JSON.stringify(emailResult, null, 2));

    if (!emailResult.data || emailResult.error) {
      console.error("Failed to send email. Full result:", emailResult);
      return NextResponse.json(
        {
          error: "Failed to send registration email",
          details: emailResult.error,
        },
        { status: 500 }
      );
    }

    console.log("Registration email sent successfully:", emailResult.data?.id);

    return NextResponse.json(
      { message: "Registration sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("=== CRITICAL ERROR in registration API ===");
    console.error("Error type:", typeof error);
    console.error("Error instanceof Error:", error instanceof Error);
    console.error("Full error object:", error);
    console.error(
      "Error message:",
      error instanceof Error ? error.message : String(error)
    );
    console.error(
      "Error stack:",
      error instanceof Error ? error.stack : "No stack trace"
    );

    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : String(error),
        type: typeof error,
      },
      { status: 500 }
    );
  }
}
