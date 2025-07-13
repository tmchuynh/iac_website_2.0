interface RegistrationTemplateProps {
  studentName: string;
  preferredName?: string;
  grade: string;
  teacherName: string;
  afterClassCare: string;
  elementarySchool: string;
  classTypes: string[];
  parentName: string;
  phoneNumber: string;
  emailAddress: string;
  alternateContactName?: string;
  alternateContactPhone?: string;
  paymentType: string;
}

export default function RegistrationTemplate({
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
}: RegistrationTemplateProps) {
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
          New Class Registration
        </h2>
        <p style={{ color: "#6b7280", margin: "0", fontSize: "14px" }}>
          A student has been registered for classes
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
          Student Information
        </h3>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Student Name:</strong>
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
            {studentName}
          </span>
          {preferredName && (
            <span style={{ color: "#6b7280", marginLeft: "8px" }}>
              (Preferred: {preferredName})
            </span>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Grade:</strong>
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
            {grade}
          </span>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Teacher:</strong> {teacherName}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>School:</strong>{" "}
          {elementarySchool}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#1f2937" }}>After Class Care:</strong>
          <span style={{ color: "#6b7280", marginLeft: "5px" }}>
            {afterClassCare}
          </span>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "#1f2937" }}>Registered Classes:</strong>
          <div style={{ marginTop: "8px" }}>
            {classTypes.map((classType, index) => (
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
                {classType}
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
          Parent/Guardian Information
        </h3>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Parent Name:</strong>{" "}
          {parentName}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Email:</strong>
          <a
            href={`mailto:${emailAddress}`}
            style={{
              color: "#2563eb",
              textDecoration: "none",
              marginLeft: "5px",
            }}
          >
            {emailAddress}
          </a>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Phone:</strong>
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

        {(alternateContactName || alternateContactPhone) && (
          <div
            style={{
              marginTop: "15px",
              padding: "10px",
              backgroundColor: "#f3f4f6",
              borderRadius: "6px",
            }}
          >
            <strong style={{ color: "#1f2937", fontSize: "12px" }}>
              Emergency Contact:
            </strong>
            {alternateContactName && (
              <div style={{ fontSize: "12px", color: "#6b7280" }}>
                Name: {alternateContactName}
              </div>
            )}
            {alternateContactPhone && (
              <div style={{ fontSize: "12px", color: "#6b7280" }}>
                Phone:{" "}
                <a
                  href={`tel:${alternateContactPhone}`}
                  style={{ color: "#2563eb", textDecoration: "none" }}
                >
                  {alternateContactPhone}
                </a>
              </div>
            )}
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
          Payment Information
        </h3>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Payment Method:</strong>
          <span
            style={{
              backgroundColor:
                paymentType === "check"
                  ? "#fef3c7"
                  : paymentType === "credit-card"
                    ? "#f3f4f6"
                    : "#f0f9ff",
              color:
                paymentType === "check"
                  ? "#92400e"
                  : paymentType === "credit-card"
                    ? "#374151"
                    : "#1e40af",
              padding: "6px 12px",
              borderRadius: "4px",
              marginLeft: "5px",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            {paymentType === "check"
              ? "💳 Check"
              : paymentType === "credit-card"
                ? "💳 Credit Card (Square)"
                : "💳 Zelle"}
          </span>
        </div>
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
          📚 <strong>Next Steps:</strong>
          {paymentType === "credit-card"
            ? `Send Square invoice to ${emailAddress} once minimum enrollment is reached.`
            : paymentType === "zelle"
              ? `Contact ${parentName} at ${emailAddress} with Zelle payment instructions.`
              : `Expect check payment from ${parentName} to be mailed to the address on the program flyer.`}
        </p>
      </div>
    </div>
  );
}
