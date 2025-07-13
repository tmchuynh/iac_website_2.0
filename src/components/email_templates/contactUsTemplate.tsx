interface ContactUsTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  inquiryType: string;
  message: string;
}

export default function ContactUsTemplate({
  firstName,
  lastName,
  email,
  phoneNumber,
  inquiryType,
  message,
}: ContactUsTemplateProps) {
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
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            color: "#2563eb",
            marginBottom: "10px",
            borderBottom: "2px solid #2563eb",
            paddingBottom: "10px",
          }}
        >
          New Contact Us Submission
        </h2>
        <p style={{ color: "#6b7280", margin: "0", fontSize: "14px" }}>
          Someone has reached out through the Contact Us form
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ color: "#374151", marginBottom: "15px" }}>
          Contact Information
        </h3>

        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#1f2937" }}>Name:</strong> {firstName}{" "}
          {lastName}
        </div>

        <div style={{ marginBottom: "15px" }}>
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

        {phoneNumber && (
          <div style={{ marginBottom: "15px" }}>
            <strong style={{ color: "#1f2937" }}>Phone Number:</strong>
            <a
              href={`tel:${phoneNumber}`}
              style={{
                color: "#2563eb",
                textDecoration: "none",
                marginLeft: "5px",
              }}
            >
              {phoneNumber}
            </a>
          </div>
        )}

        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#1f2937" }}>Inquiry Type:</strong>
          <span
            style={{
              backgroundColor: "#dbeafe",
              color: "#1e40af",
              padding: "4px 8px",
              borderRadius: "4px",
              marginLeft: "5px",
              fontSize: "12px",
            }}
          >
            {inquiryType}
          </span>
        </div>

        <div style={{ marginTop: "20px" }}>
          <strong style={{ color: "#1f2937" }}>Message:</strong>
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
            {message}
          </div>
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
          📝 <strong>Next Steps:</strong> Please respond to this inquiry within
          1-2 business days. The customer is expecting a timely response.
        </p>
      </div>
    </div>
  );
}
