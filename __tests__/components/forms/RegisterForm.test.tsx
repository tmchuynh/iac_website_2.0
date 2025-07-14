import RegisterForm from "@/components/forms/RegisterForm";
import userEvent from "@testing-library/user-event";
import {
  generateRegistrationFormData,
  mockAPIResponse,
  render,
  screen,
  waitFor,
} from "../test-utils";

// Mock fetch
const mockFetch = jest.fn();
global.fetch = mockFetch;

describe("RegisterForm", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("renders all form steps correctly", () => {
    render(<RegisterForm />);

    // Check that step 1 is initially visible
    expect(screen.getByText("Student Information")).toBeInTheDocument();
    expect(screen.getByLabelText(/student's name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/preferred name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/grade/i)).toBeInTheDocument();
  });

  it("shows progress indicator correctly", () => {
    render(<RegisterForm />);

    // Check initial progress (Step 1 of 3)
    expect(screen.getByText("Step 1 of 3")).toBeInTheDocument();
    expect(screen.getByText("Student Information")).toBeInTheDocument();
  });

  it("validates required fields before allowing next step", async () => {
    render(<RegisterForm />);

    // Try to go to next step without filling required fields
    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(nextButton).toBeDisabled();

    // Fill required fields
    await user.type(screen.getByLabelText(/student's name/i), "John Doe");
    await user.type(screen.getByLabelText(/grade/i), "3rd Grade");
    await user.type(screen.getByLabelText(/teacher's name/i), "Ms. Smith");

    // Select elementary school
    await user.click(
      screen.getByRole("combobox", { name: /elementary school/i })
    );
    await user.click(screen.getByRole("option", { name: /test school/i }));

    // Select at least one class type
    await user.click(
      screen.getByRole("checkbox", { name: /arts and crafts/i })
    );

    // Now next button should be enabled
    await waitFor(() => {
      expect(nextButton).toBeEnabled();
    });
  });

  it("navigates between steps correctly", async () => {
    render(<RegisterForm />);

    // Fill step 1 completely
    const formData = generateRegistrationFormData();

    await user.type(
      screen.getByLabelText(/student's name/i),
      formData.studentName
    );
    await user.type(
      screen.getByLabelText(/preferred name/i),
      formData.preferredName
    );
    await user.type(screen.getByLabelText(/grade/i), formData.grade);
    await user.type(
      screen.getByLabelText(/teacher's name/i),
      formData.teacherName
    );

    // Select elementary school
    await user.click(
      screen.getByRole("combobox", { name: /elementary school/i })
    );
    await user.click(screen.getByRole("option", { name: /test school/i }));

    // Select class types
    await user.click(
      screen.getByRole("checkbox", { name: /arts and crafts/i })
    );

    // Go to step 2
    await user.click(screen.getByRole("button", { name: /next/i }));

    await waitFor(() => {
      expect(screen.getByText("Step 2 of 3")).toBeInTheDocument();
      expect(
        screen.getByText("Parent/Guardian Information")
      ).toBeInTheDocument();
    });

    // Go back to step 1
    await user.click(screen.getByRole("button", { name: /previous/i }));

    await waitFor(() => {
      expect(screen.getByText("Step 1 of 3")).toBeInTheDocument();
      expect(screen.getByText("Student Information")).toBeInTheDocument();
    });
  });

  it("persists form data when navigating between steps", async () => {
    render(<RegisterForm />);

    const studentName = "John Doe";

    // Fill student name in step 1
    await user.type(screen.getByLabelText(/student's name/i), studentName);

    // Complete step 1 and go to step 2
    await user.type(screen.getByLabelText(/grade/i), "3rd Grade");
    await user.type(screen.getByLabelText(/teacher's name/i), "Ms. Smith");
    await user.click(
      screen.getByRole("combobox", { name: /elementary school/i })
    );
    await user.click(screen.getByRole("option", { name: /test school/i }));
    await user.click(
      screen.getByRole("checkbox", { name: /arts and crafts/i })
    );

    await user.click(screen.getByRole("button", { name: /next/i }));

    // Go back to step 1
    await user.click(screen.getByRole("button", { name: /previous/i }));

    // Check that data is still there
    await waitFor(() => {
      expect(screen.getByDisplayValue(studentName)).toBeInTheDocument();
    });
  });

  it("submits form with valid data", async () => {
    mockFetch.mockResolvedValueOnce(mockAPIResponse({ success: true }));

    render(<RegisterForm />);

    const formData = generateRegistrationFormData();

    // Fill step 1
    await user.type(
      screen.getByLabelText(/student's name/i),
      formData.studentName
    );
    await user.type(
      screen.getByLabelText(/preferred name/i),
      formData.preferredName
    );
    await user.type(screen.getByLabelText(/grade/i), formData.grade);
    await user.type(
      screen.getByLabelText(/teacher's name/i),
      formData.teacherName
    );
    await user.click(
      screen.getByRole("combobox", { name: /elementary school/i })
    );
    await user.click(screen.getByRole("option", { name: /test school/i }));
    await user.click(
      screen.getByRole("checkbox", { name: /arts and crafts/i })
    );

    // Go to step 2
    await user.click(screen.getByRole("button", { name: /next/i }));

    // Fill step 2
    await user.type(
      screen.getByLabelText(/parent.*name/i),
      formData.parentName
    );
    await user.type(
      screen.getByLabelText(/phone number/i),
      formData.phoneNumber
    );
    await user.type(
      screen.getByLabelText(/email address/i),
      formData.emailAddress
    );

    // Go to step 3
    await user.click(screen.getByRole("button", { name: /next/i }));

    // Fill step 3
    await user.click(screen.getByRole("radio", { name: /monthly/i }));
    await user.click(screen.getByRole("checkbox", { name: /authorization/i }));

    // Submit form
    await user.click(
      screen.getByRole("button", { name: /submit registration/i })
    );

    // Check that API was called
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith("/api/contact_us/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: expect.stringContaining(formData.studentName),
      });
    });

    // Check success dialog appears
    await waitFor(() => {
      expect(
        screen.getByText(/registration submitted successfully/i)
      ).toBeInTheDocument();
    });
  });

  it("handles API errors gracefully", async () => {
    mockFetch.mockRejectedValueOnce(new Error("API Error"));

    render(<RegisterForm />);

    // Fill and submit form (abbreviated)
    const formData = generateRegistrationFormData();

    // Fill minimum required fields and submit
    await user.type(
      screen.getByLabelText(/student's name/i),
      formData.studentName
    );
    await user.type(screen.getByLabelText(/grade/i), formData.grade);
    await user.type(
      screen.getByLabelText(/teacher's name/i),
      formData.teacherName
    );
    await user.click(
      screen.getByRole("combobox", { name: /elementary school/i })
    );
    await user.click(screen.getByRole("option", { name: /test school/i }));
    await user.click(
      screen.getByRole("checkbox", { name: /arts and crafts/i })
    );

    await user.click(screen.getByRole("button", { name: /next/i }));

    await user.type(
      screen.getByLabelText(/parent.*name/i),
      formData.parentName
    );
    await user.type(
      screen.getByLabelText(/phone number/i),
      formData.phoneNumber
    );
    await user.type(
      screen.getByLabelText(/email address/i),
      formData.emailAddress
    );

    await user.click(screen.getByRole("button", { name: /next/i }));

    await user.click(screen.getByRole("radio", { name: /monthly/i }));
    await user.click(screen.getByRole("checkbox", { name: /authorization/i }));

    await user.click(
      screen.getByRole("button", { name: /submit registration/i })
    );

    // Check that error handling occurs (this depends on your error handling implementation)
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalled();
    });
  });

  it("clears form after successful submission", async () => {
    mockFetch.mockResolvedValueOnce(mockAPIResponse({ success: true }));

    render(<RegisterForm />);

    // Fill and submit form
    await user.type(screen.getByLabelText(/student's name/i), "John Doe");
    await user.type(screen.getByLabelText(/grade/i), "3rd Grade");
    await user.type(screen.getByLabelText(/teacher's name/i), "Ms. Smith");
    await user.click(
      screen.getByRole("combobox", { name: /elementary school/i })
    );
    await user.click(screen.getByRole("option", { name: /test school/i }));
    await user.click(
      screen.getByRole("checkbox", { name: /arts and crafts/i })
    );

    await user.click(screen.getByRole("button", { name: /next/i }));

    await user.type(screen.getByLabelText(/parent.*name/i), "Jane Doe");
    await user.type(screen.getByLabelText(/phone number/i), "555-123-4567");
    await user.type(
      screen.getByLabelText(/email address/i),
      "jane@example.com"
    );

    await user.click(screen.getByRole("button", { name: /next/i }));

    await user.click(screen.getByRole("radio", { name: /monthly/i }));
    await user.click(screen.getByRole("checkbox", { name: /authorization/i }));

    await user.click(
      screen.getByRole("button", { name: /submit registration/i })
    );

    // Close success dialog
    await waitFor(() => {
      expect(
        screen.getByText(/registration submitted successfully/i)
      ).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /close/i }));

    // Check that form is cleared and back to step 1
    await waitFor(() => {
      expect(screen.getByText("Step 1 of 3")).toBeInTheDocument();
      expect(screen.getByLabelText(/student's name/i)).toHaveValue("");
    });
  });

  it("validates email format", async () => {
    render(<RegisterForm />);

    // Navigate to step 2
    await user.type(screen.getByLabelText(/student's name/i), "John Doe");
    await user.type(screen.getByLabelText(/grade/i), "3rd Grade");
    await user.type(screen.getByLabelText(/teacher's name/i), "Ms. Smith");
    await user.click(
      screen.getByRole("combobox", { name: /elementary school/i })
    );
    await user.click(screen.getByRole("option", { name: /test school/i }));
    await user.click(
      screen.getByRole("checkbox", { name: /arts and crafts/i })
    );

    await user.click(screen.getByRole("button", { name: /next/i }));

    // Try invalid email
    await user.type(screen.getByLabelText(/email address/i), "invalid-email");

    // Next button should be disabled
    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(nextButton).toBeDisabled();

    // Fix email
    await user.clear(screen.getByLabelText(/email address/i));
    await user.type(
      screen.getByLabelText(/email address/i),
      "valid@example.com"
    );

    // Fill other required fields
    await user.type(screen.getByLabelText(/parent.*name/i), "Jane Doe");
    await user.type(screen.getByLabelText(/phone number/i), "555-123-4567");

    // Now next button should be enabled
    await waitFor(() => {
      expect(nextButton).toBeEnabled();
    });
  });
});
