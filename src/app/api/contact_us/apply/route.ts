import ApplicationTemplate from "@/components/email_templates/applicationTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      city,
      state,
      positionsInterest,
      availabilityDays,
      wednesdayAcknowledgment,
      experience,
      message,
      resume,
      coverLetter,
      chessExperience,
      adminExperience,
      classroomManagementExperience,
      soccerExperience,
      basketballExperience,
      volleyballExperience,
      flagFootballExperience,
      creativeWritingExperience,
      performingArtsExperience,
      artsCraftsExperience,
      publicSpeakingExperience,
      comicBookExperience,
      substituteExperience,
      childrenExperience,
    } = await request.json();

    // Basic validation: ensure required fields are present.
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !city ||
      !state ||
      !positionsInterest ||
      !Array.isArray(positionsInterest) ||
      positionsInterest.length === 0 ||
      !availabilityDays ||
      !Array.isArray(availabilityDays) ||
      availabilityDays.length === 0 ||
      wednesdayAcknowledgment !== true ||
      !experience ||
      !resume // Resume is required
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Initialize Resend with your API key.
    const resend = new Resend(process.env.RESEND_API_KEY as string);

    // Create subject line with position(s)
    const positionsText =
      positionsInterest.length > 1
        ? `${positionsInterest.length} Positions`
        : positionsInterest[0];

    // Prepare attachments array
    const attachments = [];
    if (resume) {
      attachments.push({
        filename: resume.name,
        content: resume.data,
      });
    }
    if (coverLetter) {
      attachments.push({
        filename: coverLetter.name,
        content: coverLetter.data,
      });
    }

    // Send the email with a formatted HTML message and attachments.
    await resend.emails.send({
      from: process.env.FROM_APPLICATION_EMAIL as string, // Verified sender email.
      to: process.env.TO_EMAIL as string, // Recipient email.
      subject: `Job Application: ${positionsText} - ${firstName} ${lastName}`,
      react: ApplicationTemplate({
        firstName,
        lastName,
        email,
        phoneNumber,
        city,
        state,
        positionsInterest,
        availabilityDays,
        wednesdayAcknowledgment,
        experience,
        message,
        resumeFileName: resume?.name,
        coverLetterFileName: coverLetter?.name,
        chessExperience,
        adminExperience,
        classroomManagementExperience,
        soccerExperience,
        basketballExperience,
        volleyballExperience,
        flagFootballExperience,
        creativeWritingExperience,
        performingArtsExperience,
        artsCraftsExperience,
        publicSpeakingExperience,
        comicBookExperience,
        substituteExperience,
        childrenExperience,
      }),
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json(
      { message: "Application sent successfully" },
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
