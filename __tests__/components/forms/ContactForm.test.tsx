import ContactUs from "@/app/contact_us/page";
import userEvent from "@testing-library/user-event";
import {
  generateContactFormData,
  mockAPIResponse,
  render,
  screen,
  waitFor,
} from "../test-utils";

// Mock fetch
const mockFetch = jest.fn();
global.fetch = mockFetch;

describe("Contact Form", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("renders contact form correctly", () => {
    render(<ContactUs />);

    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("Get in Touch")).toBeInTheDocument();
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/what can we help you with/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("validates required fields", async () => {
    render(<ContactUs />);

    // Submit button should be disabled initially
    const submitButton = screen.getByRole("button", { name: /let's talk/i });
    expect(submitButton).toBeDisabled();

    // Fill required fields one by one
    await user.type(screen.getByLabelText(/first name/i), "John");
    expect(submitButton).toBeDisabled();

    await user.type(screen.getByLabelText(/last name/i), "Doe");
    expect(submitButton).toBeDisabled();

    await user.type(
      screen.getByLabelText(/email address/i),
      "john.doe@example.com"
    );
    expect(submitButton).toBeDisabled();

    // Select inquiry type
    await user.click(
      screen.getByRole("combobox", { name: /what can we help you with/i })
    );
    await user.click(screen.getByRole("option", { name: /general question/i }));
    expect(submitButton).toBeDisabled();

    // Fill message
    await user.type(screen.getByLabelText(/message/i), "Test message");

    // Now submit button should be enabled
    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });
  });

  it("submits form with valid data", async () => {
    mockFetch.mockResolvedValueOnce(mockAPIResponse({ success: true }));

    render(<ContactUs />);

    const formData = generateContactFormData();

    // Fill form
    await user.type(screen.getByLabelText(/first name/i), formData.firstName);
    await user.type(screen.getByLabelText(/last name/i), formData.lastName);
    await user.type(screen.getByLabelText(/email address/i), formData.email);
    await user.type(
      screen.getByLabelText(/phone number/i),
      formData.phoneNumber
    );

    // Select inquiry type
    await user.click(
      screen.getByRole("combobox", { name: /what can we help you with/i })
    );
    await user.click(
      screen.getByRole("option", {
        name: new RegExp(formData.inquiryType, "i"),
      })
    );

    // Fill message
    await user.type(screen.getByLabelText(/message/i), formData.message);

    // Submit form
    await user.click(screen.getByRole("button", { name: /let's talk/i }));

    // Check that API was called
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith("/api/contact_us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: expect.stringContaining(formData.firstName),
      });
    });

    // Check success dialog appears
    await waitFor(() => {
      expect(
        screen.getByText(/message sent successfully/i)
      ).toBeInTheDocument();
    });
  });

  it("validates email format", async () => {
    render(<ContactUs />);

    // Fill form with invalid email
    await user.type(screen.getByLabelText(/first name/i), "John");
    await user.type(screen.getByLabelText(/last name/i), "Doe");
    await user.type(screen.getByLabelText(/email address/i), "invalid-email");

    // Submit button should remain disabled
    const submitButton = screen.getByRole("button", { name: /let's talk/i });
    expect(submitButton).toBeDisabled();

    // Fix email
    await user.clear(screen.getByLabelText(/email address/i));
    await user.type(
      screen.getByLabelText(/email address/i),
      "valid@example.com"
    );

    // Complete form
    await user.click(
      screen.getByRole("combobox", { name: /what can we help you with/i })
    );
    await user.click(screen.getByRole("option", { name: /general question/i }));
    await user.type(screen.getByLabelText(/message/i), "Test message");

    // Now submit button should be enabled
    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });
  });

  it("clears form after successful submission", async () => {
    mockFetch.mockResolvedValueOnce(mockAPIResponse({ success: true }));

    render(<ContactUs />);

    // Fill and submit form
    await user.type(screen.getByLabelText(/first name/i), "John");
    await user.type(screen.getByLabelText(/last name/i), "Doe");
    await user.type(
      screen.getByLabelText(/email address/i),
      "john.doe@example.com"
    );
    await user.type(screen.getByLabelText(/phone number/i), "555-123-4567");

    await user.click(
      screen.getByRole("combobox", { name: /what can we help you with/i })
    );
    await user.click(screen.getByRole("option", { name: /general question/i }));

    await user.type(screen.getByLabelText(/message/i), "Test message");

    await user.click(screen.getByRole("button", { name: /let's talk/i }));

    // Wait for success dialog
    await waitFor(() => {
      expect(
        screen.getByText(/message sent successfully/i)
      ).toBeInTheDocument();
    });

    // Close dialog
    await user.click(screen.getByRole("button", { name: /close/i }));

    // Check that form is cleared
    await waitFor(() => {
      expect(screen.getByLabelText(/first name/i)).toHaveValue("");
      expect(screen.getByLabelText(/last name/i)).toHaveValue("");
      expect(screen.getByLabelText(/email address/i)).toHaveValue("");
      expect(screen.getByLabelText(/phone number/i)).toHaveValue("");
      expect(screen.getByLabelText(/message/i)).toHaveValue("");
    });
  });

  it("handles API errors gracefully", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Network error"));

    render(<ContactUs />);

    // Fill and submit form
    await user.type(screen.getByLabelText(/first name/i), "John");
    await user.type(screen.getByLabelText(/last name/i), "Doe");
    await user.type(
      screen.getByLabelText(/email address/i),
      "john.doe@example.com"
    );

    await user.click(
      screen.getByRole("combobox", { name: /what can we help you with/i })
    );
    await user.click(screen.getByRole("option", { name: /general question/i }));

    await user.type(screen.getByLabelText(/message/i), "Test message");

    await user.click(screen.getByRole("button", { name: /let's talk/i }));

    // Check that error handling occurs
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalled();
    });

    // Form should remain filled for user to retry
    expect(screen.getByLabelText(/first name/i)).toHaveValue("John");
  });
});
