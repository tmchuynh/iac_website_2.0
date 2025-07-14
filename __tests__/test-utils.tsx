import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";

// Mock providers wrapper
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };

// Test data generators
export const generateRegistrationFormData = (overrides = {}) => ({
  // Step 1
  studentName: "John Doe",
  preferredName: "Johnny",
  grade: "3rd Grade",
  teacherName: "Ms. Smith",
  afterClassCare: "Yes",
  elementarySchool: "Test Elementary",
  classTypes: ["arts_and_crafts"],

  // Step 2
  parentName: "Jane Doe",
  phoneNumber: "555-123-4567",
  emailAddress: "jane.doe@example.com",
  alternateContactName: "John Doe Sr.",
  alternateContactPhone: "555-987-6543",

  // Step 3
  paymentType: "monthly",
  iacAuthorization: true,
  ...overrides,
});

export const generateContactFormData = (overrides = {}) => ({
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phoneNumber: "555-123-4567",
  inquiryType: "General question",
  message: "Test message",
  ...overrides,
});

export const generateApplicationFormData = (overrides = {}) => ({
  // Personal Information
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phoneNumber: "555-123-4567",
  address: "123 Main St",
  city: "Anytown",
  state: "CA",
  zipCode: "12345",
  dateOfBirth: "1990-01-01",

  // Position Information
  positionsInterested: ["instructor"],
  availability: ["monday", "wednesday"],
  preferredLocations: ["school1"],

  // Experience
  educationLevel: "bachelors",
  relevantExperience: "Test experience",
  whyInterested: "Test reason",

  // Background
  backgroundCheck: true,
  references: true,
  ...overrides,
});

export const generateFeedbackFormData = (overrides = {}) => ({
  // Step 1
  anonymous: false,
  contactBack: true,

  // Step 2 (if not anonymous)
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  relationship: "parent",

  // Step 3
  overallSatisfaction: "very_satisfied",
  programQuality: "excellent",
  staffProfessionalism: "excellent",
  communication: "good",
  valueForMoney: "good",
  recommendation: "very_likely",

  // Comments
  positiveComments: "Great program!",
  improvementSuggestions: "More variety would be nice",
  additionalComments: "Keep up the good work",
  ...overrides,
});

export const generateRequestSchoolFormData = (overrides = {}) => ({
  // Contact Information
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phoneNumber: "555-123-4567",
  title: "Principal",

  // School Information
  schoolName: "Test Elementary School",
  schoolDistrict: "Test District",
  schoolAddress: "123 School St",
  schoolCity: "Anytown",
  schoolState: "CA",
  schoolZipCode: "12345",
  schoolWebsite: "https://testschool.edu",

  // Program Details
  programsOfInterest: ["arts_and_crafts"],
  grades: ["k", "1st", "2nd"],
  estimatedStudents: "50-100",
  timeframe: "next_semester",
  budget: "$1000-5000",

  // Additional Information
  currentPrograms: "None currently",
  specificNeeds: "Art supplies needed",
  additionalInfo: "Looking forward to partnering",
  ...overrides,
});

// Mock API responses
export const mockAPIResponse = (data: any, status = 200) => {
  return Promise.resolve({
    ok: status < 400,
    status,
    json: () => Promise.resolve(data),
    text: () => Promise.resolve(JSON.stringify(data)),
  } as Response);
};

// Form interaction helpers
export const fillFormField = async (
  getByLabelText: any,
  fieldLabel: string,
  value: string,
  userEvent: any
) => {
  const field = getByLabelText(new RegExp(fieldLabel, "i"));
  await userEvent.clear(field);
  await userEvent.type(field, value);
};

export const selectOption = async (
  getByRole: any,
  selectLabel: string,
  optionText: string,
  userEvent: any
) => {
  const select = getByRole("combobox", { name: new RegExp(selectLabel, "i") });
  await userEvent.click(select);
  const option = getByRole("option", { name: new RegExp(optionText, "i") });
  await userEvent.click(option);
};

export const checkCheckbox = async (
  getByRole: any,
  checkboxLabel: string,
  userEvent: any
) => {
  const checkbox = getByRole("checkbox", {
    name: new RegExp(checkboxLabel, "i"),
  });
  await userEvent.click(checkbox);
};
