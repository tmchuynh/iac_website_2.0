interface RequestParentStudentTemplateProps {
  name: string;
  grades: string;
  school: string;
  principal: string;
  contactInfo: string;
  message: string;
}

export default function RequestParentStudentTemplate({
  name,
  grades,
  school,
  principal,
  contactInfo,
  message,
}: RequestParentStudentTemplateProps) {
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
          backgroundColor: "#fef3c7",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            color: "#92400e",
            marginBottom: "10px",
            borderBottom: "2px solid #92400e",
            paddingBottom: "10px",
          }}
        >
          Parent/Student Program Request
        </h2>
        <p style={{ color: "#6b7280", margin: "0", fontSize: "14px" }}>
          A parent or student has requested programs at their school
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
          Request Information
        </h3>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Requestor Name:</strong>
          <span
            style={{
              backgroundColor: "#dbeafe",
              color: "#1e40af",
              padding: "4px 8px",
              borderRadius: "4px",
              marginLeft: "5px",
              fontSize: "14px",
            }}
          >
            {name}
          </span>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>School:</strong> {school}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Principal:</strong> {principal}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>School Contact:</strong>
          <a
            href={`mailto:${contactInfo}`}
            style={{
              color: "#2563eb",
              textDecoration: "none",
              marginLeft: "5px",
            }}
          >
            {contactInfo}
          </a>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#1f2937" }}>Grade Level(s):</strong>
          <span
            style={{
              backgroundColor: "#ecfdf5",
              color: "#065f46",
              padding: "4px 8px",
              borderRadius: "4px",
              marginLeft: "5px",
              fontSize: "12px",
            }}
          >
            {grades}
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
          Additional Information
        </h3>

        <div
          style={{
            backgroundColor: "#f9fafb",
            padding: "15px",
            borderRadius: "6px",
            border: "1px solid #e5e7eb",
            whiteSpace: "pre-wrap",
          }}
        >
          {message}
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#fef3c7",
          borderRadius: "6px",
          border: "1px solid #f59e0b",
        }}
      >
        <p style={{ margin: "0", fontSize: "12px", color: "#92400e" }}>
          👨‍👩‍👧‍👦 <strong>Parent/Student Request:</strong> This request came from a
          parent or student. Consider reaching out to both {name} and the school
          administration at {school} to coordinate a program proposal.
        </p>
      </div>
    </div>
  );
}
