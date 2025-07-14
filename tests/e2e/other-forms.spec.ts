import { expect, test } from "@playwright/test";

test.describe("Contact Form E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact_us");
  });

  test("should submit contact form successfully", async ({ page }) => {
    // Fill contact form
    await page.getByLabel(/first name/i).fill("John");
    await page.getByLabel(/last name/i).fill("Doe");
    await page.getByLabel(/email address/i).fill("john.doe@example.com");
    await page.getByLabel(/phone number/i).fill("555-123-4567");

    // Select inquiry type
    await page
      .getByRole("combobox", { name: /what can we help you with/i })
      .click();
    await page.getByRole("option", { name: /general question/i }).click();

    // Fill message
    await page
      .getByLabel(/message/i)
      .fill("This is a test message for the contact form.");

    // Submit form
    await page.getByRole("button", { name: /let's talk/i }).click();

    // Verify success dialog
    await expect(page.getByText(/message sent successfully/i)).toBeVisible();

    // Close dialog
    await page.getByRole("button", { name: /close/i }).click();

    // Verify form is cleared
    await expect(page.getByLabel(/first name/i)).toHaveValue("");
  });

  test("should validate required fields", async ({ page }) => {
    // Submit button should be disabled initially
    await expect(
      page.getByRole("button", { name: /let's talk/i })
    ).toBeDisabled();

    // Fill required fields one by one
    await page.getByLabel(/first name/i).fill("John");
    await expect(
      page.getByRole("button", { name: /let's talk/i })
    ).toBeDisabled();

    await page.getByLabel(/last name/i).fill("Doe");
    await expect(
      page.getByRole("button", { name: /let's talk/i })
    ).toBeDisabled();

    await page.getByLabel(/email address/i).fill("john.doe@example.com");
    await expect(
      page.getByRole("button", { name: /let's talk/i })
    ).toBeDisabled();

    await page
      .getByRole("combobox", { name: /what can we help you with/i })
      .click();
    await page.getByRole("option", { name: /general question/i }).click();
    await expect(
      page.getByRole("button", { name: /let's talk/i })
    ).toBeDisabled();

    await page.getByLabel(/message/i).fill("Test message");

    // Now submit button should be enabled
    await expect(
      page.getByRole("button", { name: /let's talk/i })
    ).toBeEnabled();
  });
});

test.describe("Feedback Form E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact_us/provide_feedback");
  });

  test("should complete feedback form flow (non-anonymous)", async ({
    page,
  }) => {
    // Step 1: Anonymous selection
    await expect(page.getByText("Step 1 of 3")).toBeVisible();

    // Choose non-anonymous
    await page.getByRole("radio", { name: /no.*would like.*contact/i }).check();
    await page.getByRole("radio", { name: /yes.*contact.*back/i }).check();

    await page.getByRole("button", { name: /next/i }).click();

    // Step 2: Contact Information
    await expect(page.getByText("Step 2 of 3")).toBeVisible();

    await page.getByLabel(/first name/i).fill("Test");
    await page.getByLabel(/last name/i).fill("User");
    await page.getByLabel(/email/i).fill("test.user@example.com");

    // Select relationship
    await page.getByRole("combobox", { name: /relationship/i }).click();
    await page.getByRole("option", { name: /parent/i }).click();

    await page.getByRole("button", { name: /next/i }).click();

    // Step 3: Feedback
    await expect(page.getByText("Step 3 of 3")).toBeVisible();

    // Fill rating questions
    await page
      .getByRole("radio", { name: /very satisfied/i })
      .first()
      .check();
    await page
      .getByRole("radio", { name: /excellent/i })
      .first()
      .check();
    await page
      .getByRole("radio", { name: /excellent/i })
      .nth(1)
      .check();
    await page.getByRole("radio", { name: /good/i }).first().check();
    await page.getByRole("radio", { name: /good/i }).nth(1).check();
    await page.getByRole("radio", { name: /very likely/i }).check();

    // Fill text areas
    await page.getByLabel(/positive comments/i).fill("Great program overall!");
    await page
      .getByLabel(/improvement suggestions/i)
      .fill("More variety would be nice.");
    await page
      .getByLabel(/additional comments/i)
      .fill("Keep up the good work!");

    // Submit feedback
    await page.getByRole("button", { name: /submit feedback/i }).click();

    // Verify success dialog
    await expect(
      page.getByText(/feedback submitted successfully/i)
    ).toBeVisible();
  });

  test("should handle anonymous feedback", async ({ page }) => {
    // Choose anonymous
    await page.getByRole("radio", { name: /yes.*anonymous/i }).check();

    await page.getByRole("button", { name: /next/i }).click();

    // Should skip step 2 and go directly to step 3
    await expect(page.getByText("Step 3 of 3")).toBeVisible();
    await expect(page.getByText("Your Feedback")).toBeVisible();
  });
});

test.describe("Application Form E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact_us/apply");
  });

  test("should complete application form flow", async ({ page }) => {
    // Step 1: Personal Information
    await expect(page.getByText("Step 1 of 5")).toBeVisible();

    await page.getByLabel(/first name/i).fill("Jane");
    await page.getByLabel(/last name/i).fill("Smith");
    await page.getByLabel(/email/i).fill("jane.smith@example.com");
    await page.getByLabel(/phone/i).fill("555-123-4567");
    await page.getByLabel(/address/i).fill("123 Main St");
    await page.getByLabel(/city/i).fill("Anytown");
    await page.getByLabel(/state/i).fill("CA");
    await page.getByLabel(/zip code/i).fill("12345");
    await page.getByLabel(/date of birth/i).fill("1990-01-01");

    await page.getByRole("button", { name: /next/i }).click();

    // Step 2: Position Information
    await expect(page.getByText("Step 2 of 5")).toBeVisible();

    // Select positions
    await page.getByRole("checkbox", { name: /instructor/i }).check();

    // Select availability
    await page.getByRole("checkbox", { name: /monday/i }).check();
    await page.getByRole("checkbox", { name: /wednesday/i }).check();

    // Select locations
    await page
      .getByRole("checkbox", { name: /arroyo/i })
      .first()
      .check();

    await page.getByRole("button", { name: /next/i }).click();

    // Continue through remaining steps...
    // Step 3: Experience
    await expect(page.getByText("Step 3 of 5")).toBeVisible();

    await page.getByRole("combobox", { name: /education level/i }).click();
    await page.getByRole("option", { name: /bachelor/i }).click();

    await page
      .getByLabel(/relevant experience/i)
      .fill("I have experience working with children...");
    await page
      .getByLabel(/why interested/i)
      .fill("I love working with kids...");

    await page.getByRole("button", { name: /next/i }).click();

    // Step 4: Availability Details
    await expect(page.getByText("Step 4 of 5")).toBeVisible();
    // Add specific availability tests here

    await page.getByRole("button", { name: /next/i }).click();

    // Step 5: Background Check
    await expect(page.getByText("Step 5 of 5")).toBeVisible();

    await page.getByRole("checkbox", { name: /background check/i }).check();
    await page.getByRole("checkbox", { name: /references/i }).check();

    // Submit application
    await page.getByRole("button", { name: /submit application/i }).click();

    // Verify success
    await expect(
      page.getByText(/application submitted successfully/i)
    ).toBeVisible();
  });
});

test.describe("Request School Form E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact_us/request_us");
  });

  test("should complete school request form", async ({ page }) => {
    // Fill contact information
    await page.getByLabel(/first name/i).fill("Principal");
    await page.getByLabel(/last name/i).fill("Johnson");
    await page.getByLabel(/email/i).fill("principal@testschool.edu");
    await page.getByLabel(/phone/i).fill("555-123-4567");
    await page.getByLabel(/title/i).fill("Principal");

    // Fill school information
    await page.getByLabel(/school name/i).fill("Test Elementary School");
    await page.getByLabel(/school district/i).fill("Test District");
    await page.getByLabel(/school address/i).fill("123 School Street");
    await page.getByLabel(/school city/i).fill("Test City");
    await page.getByLabel(/school state/i).fill("CA");
    await page.getByLabel(/school zip code/i).fill("12345");
    await page.getByLabel(/school website/i).fill("https://testschool.edu");

    // Select programs of interest
    await page.getByRole("checkbox", { name: /arts and crafts/i }).check();
    await page.getByRole("checkbox", { name: /soccer/i }).check();

    // Select grades
    await page.getByRole("checkbox", { name: /kindergarten/i }).check();
    await page.getByRole("checkbox", { name: /1st grade/i }).check();

    // Select estimated students
    await page.getByRole("combobox", { name: /estimated students/i }).click();
    await page.getByRole("option", { name: /50-100/i }).click();

    // Select timeframe
    await page.getByRole("combobox", { name: /timeframe/i }).click();
    await page.getByRole("option", { name: /next semester/i }).click();

    // Select budget
    await page.getByRole("combobox", { name: /budget/i }).click();
    await page.getByRole("option", { name: /\\$1000-5000/i }).click();

    // Fill additional information
    await page
      .getByLabel(/current programs/i)
      .fill("We currently have no after-school programs.");
    await page
      .getByLabel(/specific needs/i)
      .fill("We need art supplies and sports equipment.");
    await page
      .getByLabel(/additional information/i)
      .fill("We are excited about this partnership opportunity.");

    // Submit form
    await page.getByRole("button", { name: /submit request/i }).click();

    // Verify success
    await expect(
      page.getByText(/request submitted successfully/i)
    ).toBeVisible();
  });
});
