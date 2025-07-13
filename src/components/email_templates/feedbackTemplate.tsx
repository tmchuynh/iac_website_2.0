interface FeedbackTemplateProps {
  name: string;
  email: string;
  participationType: string;
  program?: string;
  school?: string;
  overallRating: number;
  feedbackType: string[];
  specificAreas?: string[];
  programSuggestions?: string;
  staffRecognition?: string;
  improvements?: string;
  additionalComments?: string;
  anonymous: boolean;
  contactBack: boolean;
}

export default function FeedbackTemplate({
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
}: FeedbackTemplateProps) {
  const renderStars = (rating: number) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#f0f9ff",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            color: "#0369a1",
            marginBottom: "10px",
            borderBottom: "2px solid #0369a1",
            paddingBottom: "10px",
          }}
        >
          New Feedback Submission
        </h2>
        <p style={{ color: "#6b7280", margin: "0", fontSize: "14px" }}>
          {anonymous ? "Anonymous feedback" : `Feedback from ${name}`} •{" "}
          {contactBack ? "Follow-up requested" : "No follow-up needed"}
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          marginBottom: "15px",
        }}
      >
        <h3 style={{ color: "#374151", marginBottom: "15px" }}>
          Participant Information
        </h3>

        {!anonymous && (
          <>
            <div style={{ marginBottom: "10px" }}>
              <strong style={{ color: "#1f2937" }}>Name:</strong> {name}
            </div>
            <div style={{ marginBottom: "10px" }}>
              <strong style={{ color: "#1f2937" }}>Email:</strong>
              <a
                href={`mailto:${email}`}
                style={{
                  color: "#2563eb",
                  textDecoration: "none",
                  marginLeft: "5px",
                }}
              >
                {email}
              </a>
            </div>
          </>
        )}

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Connection to IAC:</strong>{" "}
          {participationType}
        </div>

        {program && (
          <div style={{ marginBottom: "10px" }}>
            <strong style={{ color: "#1f2937" }}>Program:</strong> {program}
          </div>
        )}

        {school && (
          <div style={{ marginBottom: "10px" }}>
            <strong style={{ color: "#1f2937" }}>School/Location:</strong>{" "}
            {school}
          </div>
        )}

        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#1f2937" }}>Overall Rating:</strong>
          <span
            style={{ marginLeft: "10px", fontSize: "18px", color: "#fbbf24" }}
          >
            {renderStars(overallRating)}
          </span>
          <span style={{ marginLeft: "5px", color: "#6b7280" }}>
            ({overallRating}/5)
          </span>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          marginBottom: "15px",
        }}
      >
        <h3 style={{ color: "#374151", marginBottom: "15px" }}>
          Feedback Categories
        </h3>

        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#1f2937" }}>Feedback Type:</strong>
          <div style={{ marginTop: "8px" }}>
            {feedbackType.map((type, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#dbeafe",
                  color: "#1e40af",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  marginRight: "8px",
                  marginBottom: "4px",
                  display: "inline-block",
                  fontSize: "12px",
                }}
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {specificAreas && specificAreas.length > 0 && (
          <div style={{ marginBottom: "15px" }}>
            <strong style={{ color: "#1f2937" }}>Specific Areas:</strong>
            <div style={{ marginTop: "8px" }}>
              {specificAreas.map((area, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: "#ecfdf5",
                    color: "#065f46",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    marginRight: "8px",
                    marginBottom: "4px",
                    display: "inline-block",
                    fontSize: "12px",
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {(programSuggestions ||
        staffRecognition ||
        improvements ||
        additionalComments) && (
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            marginBottom: "15px",
          }}
        >
          <h3 style={{ color: "#374151", marginBottom: "15px" }}>
            Detailed Feedback
          </h3>

          {programSuggestions && (
            <div style={{ marginBottom: "15px" }}>
              <strong style={{ color: "#1f2937" }}>Program Suggestions:</strong>
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "12px",
                  borderRadius: "6px",
                  marginTop: "8px",
                  border: "1px solid #e5e7eb",
                  whiteSpace: "pre-wrap",
                }}
              >
                {programSuggestions}
              </div>
            </div>
          )}

          {staffRecognition && (
            <div style={{ marginBottom: "15px" }}>
              <strong style={{ color: "#1f2937" }}>Staff Recognition:</strong>
              <div
                style={{
                  backgroundColor: "#fef3c7",
                  padding: "12px",
                  borderRadius: "6px",
                  marginTop: "8px",
                  border: "1px solid #f59e0b",
                  whiteSpace: "pre-wrap",
                }}
              >
                {staffRecognition}
              </div>
            </div>
          )}

          {improvements && (
            <div style={{ marginBottom: "15px" }}>
              <strong style={{ color: "#1f2937" }}>
                Areas for Improvement:
              </strong>
              <div
                style={{
                  backgroundColor: "#fef2f2",
                  padding: "12px",
                  borderRadius: "6px",
                  marginTop: "8px",
                  border: "1px solid #f87171",
                  whiteSpace: "pre-wrap",
                }}
              >
                {improvements}
              </div>
            </div>
          )}

          {additionalComments && (
            <div style={{ marginBottom: "15px" }}>
              <strong style={{ color: "#1f2937" }}>Additional Comments:</strong>
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "12px",
                  borderRadius: "6px",
                  marginTop: "8px",
                  border: "1px solid #e5e7eb",
                  whiteSpace: "pre-wrap",
                }}
              >
                {additionalComments}
              </div>
            </div>
          )}
        </div>
      )}

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: contactBack ? "#dbeafe" : "#f3f4f6",
          borderRadius: "6px",
          border: `1px solid ${contactBack ? "#3b82f6" : "#9ca3af"}`,
        }}
      >
        <p
          style={{
            margin: "0",
            fontSize: "12px",
            color: contactBack ? "#1e40af" : "#4b5563",
          }}
        >
          {contactBack ? (
            <>
              📞 <strong>Follow-up Required:</strong> Customer requested to be
              contacted. Please respond within 3-5 business days.
            </>
          ) : (
            <>
              📝 <strong>No Follow-up:</strong> This is feedback only - no
              response needed unless there are concerns.
            </>
          )}
        </p>
      </div>
    </div>
  );
}
