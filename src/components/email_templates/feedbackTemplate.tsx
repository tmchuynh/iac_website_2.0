interface FeedbackTemplateProps {
  name: string;
  email: string;
  message: string;
}

export default function FeedbackTemplate({
  name,
  email,
  message,
}: FeedbackTemplateProps) {
  return (
    <div>
      <h2>New Feedback Submission</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Feedback:</strong>
      </p>
      <p>{message}</p>
    </div>
  );
}
