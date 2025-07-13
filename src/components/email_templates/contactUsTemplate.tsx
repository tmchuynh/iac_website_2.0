interface ContactUsTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  message: string;
}

export default function ContactUsTemplate({
  firstName,
  lastName,
  email,
  phoneNumber = "No phone number provided",
  message,
}: ContactUsTemplateProps) {
  return (
    <div>
      <h2>New Contact Us Submission</h2>
      <p>
        <strong>First Name:</strong> {firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {lastName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      {phoneNumber && (
        <p>
          <strong>Phone Number:</strong> {phoneNumber}
        </p>
      )}
      <p>
        <strong>Message:</strong>
      </p>
      <p>{message}</p>
    </div>
  );
}
