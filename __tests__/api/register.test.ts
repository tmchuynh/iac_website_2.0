import { POST } from "@/app/api/contact_us/register/route";
import { generateRegistrationFormData } from "../../test-utils";

// Mock Resend
jest.mock("resend", () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ id: "test-email-id" }),
    },
  })),
}));

describe("/api/contact_us/register", () => {
  beforeEach(() => {
    // Reset environment variables
    process.env.RESEND_API_KEY = "test-key";
    process.env.FROM_EMAIL = "test@example.com";
    process.env.TO_EMAIL = "test@example.com";
  });

  it("should handle valid registration data", async () => {
    const formData = generateRegistrationFormData();

    const request = new Request(
      "http://localhost:3000/api/contact_us/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.message).toBe("Registration successful");
  });

  it("should reject missing required fields", async () => {
    const incompleteData = {
      studentName: "John Doe",
      // Missing other required fields
    };

    const request = new Request(
      "http://localhost:3000/api/contact_us/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(incompleteData),
      }
    );

    const response = await POST(request);

    expect(response.status).toBe(400);
  });

  it("should validate email format", async () => {
    const formData = generateRegistrationFormData({
      emailAddress: "invalid-email",
    });

    const request = new Request(
      "http://localhost:3000/api/contact_us/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const response = await POST(request);

    expect(response.status).toBe(400);
  });

  it("should handle missing environment variables", async () => {
    delete process.env.RESEND_API_KEY;

    const formData = generateRegistrationFormData();

    const request = new Request(
      "http://localhost:3000/api/contact_us/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const response = await POST(request);

    expect(response.status).toBe(500);
  });
});
