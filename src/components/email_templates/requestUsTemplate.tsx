interface RequestUsTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  schoolName: string;
  principalName: string;
  schoolEmail: string;
  gradeLevels: string[];
  interestedPrograms: string[];
  additionalInfo?: string;
}

export default function RequestUsTemplate({
  firstName,
  lastName,
  email,
  phone,
  schoolName,
  principalName,
  schoolEmail,
  gradeLevels,
  interestedPrograms,
  additionalInfo,
}: RequestUsTemplateProps) {
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
          backgroundColor: "#f0fdf4",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            color: "#16a34a",
            marginBottom: "10px",
            borderBottom: "2px solid #16a34a",
            paddingBottom: "10px",
          }}
        >
          New School Program Request
        </h2>
        <p style={{ color: "#6b7280", margin: "0", fontSize: "14px" }}>
          A school is interested in bringing our programs to their campus
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
          Contact Information
        </h3>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Contact Person:</strong>{" "}
          {firstName} {lastName}
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

        {phone && (
          <div style={{ marginBottom: "10px" }}>
            <strong style={{ color: "#1f2937" }}>Phone:</strong>
            <a
              href={`tel:${phone}`}
              style={{
                color: "#2563eb",
                textDecoration: "none",
                marginLeft: "5px",
              }}
            >
              {phone}
            </a>
          </div>
        )}
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
          School Information
        </h3>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>School Name:</strong>
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
            {schoolName}
          </span>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Principal:</strong>{" "}
          {principalName}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>School Contact Email:</strong>
          <a
            href={`mailto:${schoolEmail}`}
            style={{
              color: "#2563eb",
              textDecoration: "none",
              marginLeft: "5px",
            }}
          >
            {schoolEmail}
          </a>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Grade Level(s):</strong>
          <div style={{ marginTop: "8px" }}>
            {gradeLevels.map((grade, index) => (
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
                  fontSize: "14px",
                }}
              >
                {grade}
              </span>
            ))}
          </div>
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
          Program Interest
        </h3>

        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#1f2937" }}>Requested Programs:</strong>
          <div style={{ marginTop: "8px" }}>
            {interestedPrograms.map((program, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#fef3c7",
                  color: "#92400e",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  marginRight: "8px",
                  marginBottom: "4px",
                  display: "inline-block",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {program}
              </span>
            ))}
          </div>
        </div>

        {additionalInfo && (
          <div style={{ marginBottom: "15px" }}>
            <strong style={{ color: "#1f2937" }}>
              Additional Information:
            </strong>
            <div
              style={{
                backgroundColor: "#f9fafb",
                padding: "15px",
                borderRadius: "6px",
                marginTop: "8px",
                border: "1px solid #e5e7eb",
                whiteSpace: "pre-wrap",
              }}
            >
              {additionalInfo}
            </div>
          </div>
        )}
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#dbeafe",
          borderRadius: "6px",
          border: "1px solid #3b82f6",
        }}
      >
        <p style={{ margin: "0", fontSize: "12px", color: "#1e40af" }}>
          🏫 <strong>Action Required:</strong> Please respond to this school
          request within 2-3 business days. Contact {firstName} at {email} to
          discuss program options and scheduling.
        </p>
      </div>
    </div>
  );
}
