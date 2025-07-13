interface ApplicationTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  state: string;
  positionsInterest: string[];
  availabilityDays: string[];
  wednesdayAcknowledgment: boolean;
  experience: string;
  message?: string;
  resumeFileName?: string;
  coverLetterFileName?: string;
  // Position-specific experience fields
  chessExperience?: string;
  adminExperience?: string;
  classroomManagementExperience?: string;
  soccerExperience?: string;
  basketballExperience?: string;
  volleyballExperience?: string;
  flagFootballExperience?: string;
  creativeWritingExperience?: string;
  performingArtsExperience?: string;
  artsCraftsExperience?: string;
  publicSpeakingExperience?: string;
  comicBookExperience?: string;
  substituteExperience?: string;
  childrenExperience?: string;
}

export default function ApplicationTemplate({
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
  resumeFileName,
  coverLetterFileName,
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
}: ApplicationTemplateProps) {
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
          New Job Application Submission
        </h2>
        <p style={{ color: "#6b7280", margin: "0", fontSize: "14px" }}>
          Someone has applied for a position with our team
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
          Personal Information
        </h3>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Applicant Name:</strong>{" "}
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

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Location:</strong> {city},{" "}
          {state}
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
          Position & Availability
        </h3>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Position(s) Applied For:</strong>
          <div style={{ marginTop: "5px" }}>
            {positionsInterest.map((position, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#dbeafe",
                  color: "#1e40af",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  marginRight: "8px",
                  marginBottom: "4px",
                  display: "inline-block",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {position}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Available Days:</strong>
          <div style={{ marginTop: "5px" }}>
            {availabilityDays.map((day, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#ecfdf5",
                  color: "#065f46",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  marginRight: "6px",
                  marginBottom: "4px",
                  display: "inline-block",
                  fontSize: "12px",
                }}
              >
                {day}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>
            Wednesday Acknowledgment:
          </strong>
          <span
            style={{
              backgroundColor: wednesdayAcknowledgment ? "#ecfdf5" : "#fef2f2",
              color: wednesdayAcknowledgment ? "#065f46" : "#dc2626",
              padding: "4px 8px",
              borderRadius: "4px",
              marginLeft: "5px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {wednesdayAcknowledgment ? "✓ Acknowledged" : "✗ Not Acknowledged"}
          </span>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Experience Level:</strong>
          <span
            style={{
              backgroundColor: "#fef3c7",
              color: "#92400e",
              padding: "4px 8px",
              borderRadius: "4px",
              marginLeft: "5px",
              fontSize: "12px",
            }}
          >
            {experience}
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
          Submitted Documents
        </h3>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Resume:</strong>
          {resumeFileName ? (
            <span
              style={{
                backgroundColor: "#f0fdf4",
                color: "#15803d",
                padding: "4px 8px",
                borderRadius: "4px",
                marginLeft: "5px",
                fontSize: "12px",
              }}
            >
              � {resumeFileName} (Attached)
            </span>
          ) : (
            <span style={{ color: "#dc2626", marginLeft: "5px" }}>
              Not provided
            </span>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <strong style={{ color: "#1f2937" }}>Cover Letter:</strong>
          {coverLetterFileName ? (
            <span
              style={{
                backgroundColor: "#f0fdf4",
                color: "#15803d",
                padding: "4px 8px",
                borderRadius: "4px",
                marginLeft: "5px",
                fontSize: "12px",
              }}
            >
              � {coverLetterFileName} (Attached)
            </span>
          ) : (
            <span style={{ color: "#6b7280", marginLeft: "5px" }}>
              Not provided
            </span>
          )}
        </div>

        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            backgroundColor: "#f0f9ff",
            borderRadius: "4px",
            border: "1px solid #0ea5e9",
          }}
        >
          <p
            style={{
              margin: "0",
              fontSize: "12px",
              color: "#0369a1",
              fontWeight: "bold",
            }}
          >
            📎 Documents are attached to this email and can be downloaded
            directly from your email client.
          </p>
        </div>
      </div>

      {message && (
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
            General Information
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
      )}

      {/* Position-specific experience sections */}
      {(chessExperience ||
        adminExperience ||
        classroomManagementExperience ||
        soccerExperience ||
        basketballExperience ||
        volleyballExperience ||
        flagFootballExperience ||
        creativeWritingExperience ||
        performingArtsExperience ||
        artsCraftsExperience ||
        publicSpeakingExperience ||
        comicBookExperience ||
        substituteExperience ||
        childrenExperience) && (
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
            Position-Specific Experience
          </h3>

          {chessExperience && (
            <div style={{ marginBottom: "15px" }}>
              <strong
                style={{
                  color: "#1f2937",
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Chess Experience:
              </strong>
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #e5e7eb",
                  whiteSpace: "pre-wrap",
                  fontSize: "14px",
                }}
              >
                {chessExperience}
              </div>
            </div>
          )}

          {adminExperience && (
            <div style={{ marginBottom: "15px" }}>
              <strong
                style={{
                  color: "#1f2937",
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Administrative Experience:
              </strong>
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #e5e7eb",
                  whiteSpace: "pre-wrap",
                  fontSize: "14px",
                }}
              >
                {adminExperience}
              </div>
            </div>
          )}

          {classroomManagementExperience && (
            <div style={{ marginBottom: "15px" }}>
              <strong
                style={{
                  color: "#1f2937",
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Classroom Management Experience:
              </strong>
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #e5e7eb",
                  whiteSpace: "pre-wrap",
                  fontSize: "14px",
                }}
              >
                {classroomManagementExperience}
              </div>
            </div>
          )}

          {soccerExperience && (
            <div style={{ marginBottom: "15px" }}>
              <strong
                style={{
                  color: "#1f2937",
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Soccer Experience:
              </strong>
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #e5e7eb",
                  whiteSpace: "pre-wrap",
                  fontSize: "14px",
                }}
              >
                {soccerExperience}
              </div>
            </div>
          )}

          {basketballExperience && (
            <div style={{ marginBottom: "15px" }}>
              <strong
                style={{
                  color: "#1f2937",
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Basketball Experience:
              </strong>
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #e5e7eb",
                  whiteSpace: "pre-wrap",
                  fontSize: "14px",
                }}
              >
                {basketballExperience}
              </div>
            </div>
          )}

          {volleyballExperience && (
            <div style={{ marginBottom: "15px" }}>
              <strong
                style={{
                  color: "#1f2937",
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Volleyball Experience:
              </strong>
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #e5e7eb",
                  whiteSpace: "pre-wrap",
                  fontSize: "14px",
                }}
              >
                {volleyballExperience}
              </div>
            </div>
          )}

          {flagFootballExperience && (
            <div style={{ marginBottom: "15px" }}>
              <strong
                style={{
                  color: "#1f2937",
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Flag Football Experience:
              </strong>
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #e5e7eb",
                  whiteSpace: "pre-wrap",
                  fontSize: "14px",
                }}
              >
                {flagFootballExperience}
              </div>
            </div>
          )}

          {creativeWritingExperience && (
            <div style={{ marginBottom: "15px" }}>
              <strong
                style={{
                  color: "#1f2937",
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Creative Writing Experience:
              </strong>
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #e5e7eb",
                  whiteSpace: "pre-wrap",
                  fontSize: "14px",
                }}
              >
                {creativeWritingExperience}
              </div>
            </div>
          )}

          {performingArtsExperience && (
            <div style={{ marginBottom: "15px" }}>
              <strong
                style={{
                  color: "#1f2937",
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Performing Arts Experience:
              </strong>
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #e5e7eb",
                  whiteSpace: "pre-wrap",
                  fontSize: "14px",
                }}
              >
                {performingArtsExperience}
              </div>
            </div>
          )}

          {artsCraftsExperience && (
            <div style={{ marginBottom: "15px" }}>
              <strong
                style={{
                  color: "#1f2937",
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Arts & Crafts Experience:
              </strong>
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #e5e7eb",
                  whiteSpace: "pre-wrap",
                  fontSize: "14px",
                }}
              >
                {artsCraftsExperience}
              </div>
            </div>
          )}

          {publicSpeakingExperience && (
            <div style={{ marginBottom: "15px" }}>
              <strong
                style={{
                  color: "#1f2937",
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Public Speaking Experience:
              </strong>
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #e5e7eb",
                  whiteSpace: "pre-wrap",
                  fontSize: "14px",
                }}
              >
                {publicSpeakingExperience}
              </div>
            </div>
          )}

          {comicBookExperience && (
            <div style={{ marginBottom: "15px" }}>
              <strong
                style={{
                  color: "#1f2937",
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Comic Book Experience:
              </strong>
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #e5e7eb",
                  whiteSpace: "pre-wrap",
                  fontSize: "14px",
                }}
              >
                {comicBookExperience}
              </div>
            </div>
          )}

          {substituteExperience && (
            <div style={{ marginBottom: "15px" }}>
              <strong
                style={{
                  color: "#1f2937",
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Substitute/Flexible Instructor Experience:
              </strong>
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #e5e7eb",
                  whiteSpace: "pre-wrap",
                  fontSize: "14px",
                }}
              >
                {substituteExperience}
              </div>
            </div>
          )}

          {childrenExperience && (
            <div style={{ marginBottom: "15px" }}>
              <strong
                style={{
                  color: "#1f2937",
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Experience Working with Children:
              </strong>
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #e5e7eb",
                  whiteSpace: "pre-wrap",
                  fontSize: "14px",
                }}
              >
                {childrenExperience}
              </div>
            </div>
          )}
        </div>
      )}

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
          💼 <strong>Next Steps:</strong> Review the application and download
          the attached documents from this email. If qualified, contact{" "}
          {firstName} at {email} within 1-2 weeks to schedule an interview.
        </p>
      </div>
    </div>
  );
}
