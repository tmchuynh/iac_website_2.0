interface RequestUsTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  school: string;
  principalName: string;
  schoolContact: string;
  grades: string;
  programs: string;
}

export default function RequestUsTemplate({
  firstName,
  lastName,
  email,
  school,
  principalName,
  schoolContact,
  grades,
  programs,
}: RequestUsTemplateProps) {
  return (
    <div>
      <h2>New Request Submission</h2>
      <p>
        <strong>First Name:</strong> {firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {lastName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>School:</strong> {school}
      </p>
      <p>
        <strong>Principal's Name:</strong> {principalName}
      </p>
      <p>
        <strong>School's Contact Email:</strong> {schoolContact}
      </p>
      <p>
        <strong>Grades:</strong> {grades}
      </p>
      <p>
        <strong>Programs Interested In:</strong> {programs}
      </p>
    </div>
  );
}
