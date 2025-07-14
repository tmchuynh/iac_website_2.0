import { expect, test } from "@playwright/test";

test.describe("Registration Form E2E Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact_us/register");
  });

  test("should complete full registration flow", async ({ page }) => {
    // Step 1: Student Information
    await expect(page.getByText("Step 1 of 3")).toBeVisible();
    await expect(page.getByText("Student Information")).toBeVisible();

    // Fill student information
    await page.getByLabel(/student's name/i).fill("John Doe");
    await page.getByLabel(/preferred name/i).fill("Johnny");
    await page.getByLabel(/grade/i).fill("3rd Grade");
    await page.getByLabel(/teacher's name/i).fill("Ms. Smith");

    // Select elementary school
    await page.getByRole("combobox", { name: /elementary school/i }).click();
    await page
      .getByRole("option", { name: /arroyo/i })
      .first()
      .click();

    // Select after-class care
    await page.getByRole("radio", { name: /yes/i }).first().click();

    // Select class types
    await page.getByRole("checkbox", { name: /arts and crafts/i }).check();

    // Go to next step
    await page.getByRole("button", { name: /next/i }).click();

    // Step 2: Parent/Guardian Information
    await expect(page.getByText("Step 2 of 3")).toBeVisible();
    await expect(page.getByText("Parent/Guardian Information")).toBeVisible();

    // Fill parent information
    await page.getByLabel(/parent.*name/i).fill("Jane Doe");
    await page.getByLabel(/phone number/i).fill("555-123-4567");
    await page.getByLabel(/email address/i).fill("jane.doe@example.com");
    await page.getByLabel(/alternate contact name/i).fill("John Doe Sr.");
    await page.getByLabel(/alternate contact phone/i).fill("555-987-6543");

    // Go to next step
    await page.getByRole("button", { name: /next/i }).click();

    // Step 3: Payment Information
    await expect(page.getByText("Step 3 of 3")).toBeVisible();
    await expect(page.getByText("Payment Information")).toBeVisible();

    // Select payment type
    await page.getByRole("radio", { name: /monthly/i }).check();

    // Check authorization
    await page.getByRole("checkbox", { name: /authorization/i }).check();

    // Submit form
    await page.getByRole("button", { name: /submit registration/i }).click();

    // Verify success dialog
    await expect(
      page.getByText(/registration submitted successfully/i)
    ).toBeVisible();

    // Close dialog
    await page.getByRole("button", { name: /close/i }).click();

    // Verify form is reset
    await expect(page.getByText("Step 1 of 3")).toBeVisible();
    await expect(page.getByLabel(/student's name/i)).toHaveValue("");
  });

  test("should validate required fields", async ({ page }) => {
    // Next button should be disabled initially
    await expect(page.getByRole("button", { name: /next/i })).toBeDisabled();

    // Fill only student name
    await page.getByLabel(/student's name/i).fill("John Doe");
    await expect(page.getByRole("button", { name: /next/i })).toBeDisabled();

    // Fill required fields one by one
    await page.getByLabel(/grade/i).fill("3rd Grade");
    await expect(page.getByRole("button", { name: /next/i })).toBeDisabled();

    await page.getByLabel(/teacher's name/i).fill("Ms. Smith");
    await expect(page.getByRole("button", { name: /next/i })).toBeDisabled();

    // Select school
    await page.getByRole("combobox", { name: /elementary school/i }).click();
    await page
      .getByRole("option", { name: /arroyo/i })
      .first()
      .click();
    await expect(page.getByRole("button", { name: /next/i })).toBeDisabled();

    // Select class type
    await page.getByRole("checkbox", { name: /arts and crafts/i }).check();

    // Now next button should be enabled
    await expect(page.getByRole("button", { name: /next/i })).toBeEnabled();
  });

  test("should navigate between steps and preserve data", async ({ page }) => {
    // Fill step 1
    await page.getByLabel(/student's name/i).fill("John Doe");
    await page.getByLabel(/grade/i).fill("3rd Grade");
    await page.getByLabel(/teacher's name/i).fill("Ms. Smith");
    await page.getByRole("combobox", { name: /elementary school/i }).click();
    await page
      .getByRole("option", { name: /arroyo/i })
      .first()
      .click();
    await page.getByRole("checkbox", { name: /arts and crafts/i }).check();

    // Go to step 2
    await page.getByRole("button", { name: /next/i }).click();
    await expect(page.getByText("Step 2 of 3")).toBeVisible();

    // Go back to step 1
    await page.getByRole("button", { name: /previous/i }).click();
    await expect(page.getByText("Step 1 of 3")).toBeVisible();

    // Verify data is preserved
    await expect(page.getByLabel(/student's name/i)).toHaveValue("John Doe");
    await expect(page.getByLabel(/grade/i)).toHaveValue("3rd Grade");
    await expect(page.getByLabel(/teacher's name/i)).toHaveValue("Ms. Smith");
  });

  test("should validate email format in step 2", async ({ page }) => {
    // Navigate to step 2
    await page.getByLabel(/student's name/i).fill("John Doe");
    await page.getByLabel(/grade/i).fill("3rd Grade");
    await page.getByLabel(/teacher's name/i).fill("Ms. Smith");
    await page.getByRole("combobox", { name: /elementary school/i }).click();
    await page
      .getByRole("option", { name: /arroyo/i })
      .first()
      .click();
    await page.getByRole("checkbox", { name: /arts and crafts/i }).check();
    await page.getByRole("button", { name: /next/i }).click();

    // Fill parent info with invalid email
    await page.getByLabel(/parent.*name/i).fill("Jane Doe");
    await page.getByLabel(/phone number/i).fill("555-123-4567");
    await page.getByLabel(/email address/i).fill("invalid-email");

    // Next button should be disabled
    await expect(page.getByRole("button", { name: /next/i })).toBeDisabled();

    // Fix email
    await page.getByLabel(/email address/i).fill("jane.doe@example.com");

    // Next button should be enabled
    await expect(page.getByRole("button", { name: /next/i })).toBeEnabled();
  });

  test("should work on mobile devices", async ({ page }) => {
    // Set mobile viewport if not already set
    await page.setViewportSize({ width: 375, height: 667 });

    // Test basic functionality on mobile
    await expect(page.getByText("Student Information")).toBeVisible();

    // Fill form on mobile
    await page.getByLabel(/student's name/i).fill("Mobile Test");
    await page.getByLabel(/grade/i).fill("2nd Grade");
    await page.getByLabel(/teacher's name/i).fill("Mr. Mobile");

    // Test select on mobile
    await page.getByRole("combobox", { name: /elementary school/i }).click();
    await page
      .getByRole("option", { name: /arroyo/i })
      .first()
      .click();

    // Test checkbox on mobile
    await page.getByRole("checkbox", { name: /arts and crafts/i }).check();

    // Navigate to next step
    await page.getByRole("button", { name: /next/i }).click();
    await expect(page.getByText("Step 2 of 3")).toBeVisible();
  });
});
