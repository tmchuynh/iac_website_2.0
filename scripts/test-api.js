/**
 * API Testing Script for IAC Website Forms
 * Run with: npm run test:api
 */

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000/api";

// Test data generators
const generateTestData = {
  registration: () => ({
    studentName: "Test Student",
    preferredName: "Testy",
    grade: "3rd Grade",
    teacherName: "Ms. Test",
    afterClassCare: "Yes",
    elementarySchool: "Test Elementary",
    classTypes: ["arts_and_crafts"],
    parentName: "Test Parent",
    phoneNumber: "555-123-4567",
    emailAddress: "test@example.com",
    alternateContactName: "Alternate Test",
    alternateContactPhone: "555-987-6543",
    paymentType: "monthly",
    iacAuthorization: true,
  }),

  contact: () => ({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "555-123-4567",
    inquiryType: "General question",
    message: "Test message for API testing",
  }),

  application: () => ({
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phoneNumber: "555-123-4567",
    address: "123 Test St",
    city: "Test City",
    state: "CA",
    zipCode: "12345",
    dateOfBirth: "1990-01-01",
    positionsInterested: ["instructor"],
    availability: ["monday", "wednesday"],
    preferredLocations: ["school1"],
    educationLevel: "bachelors",
    relevantExperience: "Test experience",
    whyInterested: "Test interest",
    backgroundCheck: true,
    references: true,
  }),

  feedback: () => ({
    anonymous: false,
    contactBack: true,
    firstName: "Test",
    lastName: "User",
    email: "test.user@example.com",
    relationship: "parent",
    overallSatisfaction: "very_satisfied",
    programQuality: "excellent",
    staffProfessionalism: "excellent",
    communication: "good",
    valueForMoney: "good",
    recommendation: "very_likely",
    positiveComments: "Great program!",
    improvementSuggestions: "More variety",
    additionalComments: "Keep it up",
  }),

  requestSchool: () => ({
    firstName: "Principal",
    lastName: "Johnson",
    email: "principal@testschool.edu",
    phoneNumber: "555-123-4567",
    title: "Principal",
    schoolName: "Test Elementary School",
    schoolDistrict: "Test District",
    schoolAddress: "123 School St",
    schoolCity: "Test City",
    schoolState: "CA",
    schoolZipCode: "12345",
    schoolWebsite: "https://testschool.edu",
    programsOfInterest: ["arts_and_crafts"],
    grades: ["k", "1st", "2nd"],
    estimatedStudents: "50-100",
    timeframe: "next_semester",
    budget: "$1000-5000",
    currentPrograms: "None",
    specificNeeds: "Art supplies",
    additionalInfo: "Looking forward to partnership",
  }),

  requestParentStudent: () => ({
    firstName: "Parent",
    lastName: "Advocate",
    email: "parent@example.com",
    phoneNumber: "555-123-4567",
    studentName: "Student Name",
    studentGrade: "4th Grade",
    schoolName: "Test Elementary",
    programsRequested: ["soccer"],
    additionalInfo: "Please consider our school",
  }),
};

// API test functions
async function testAPI(endpoint, data, description) {
  console.log(`\\n🧪 Testing: ${description}`);
  console.log(`📍 Endpoint: ${endpoint}`);

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.text();

    console.log(`📊 Status: ${response.status} ${response.statusText}`);
    console.log(
      `📦 Response: ${responseData.substring(0, 200)}${responseData.length > 200 ? "..." : ""}`
    );

    if (response.ok) {
      console.log(`✅ SUCCESS: ${description}`);
      return { success: true, status: response.status, data: responseData };
    } else {
      console.log(`❌ FAILED: ${description}`);
      return { success: false, status: response.status, error: responseData };
    }
  } catch (error) {
    console.log(`💥 ERROR: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function testFieldValidation(
  endpoint,
  baseData,
  fieldTests,
  description
) {
  console.log(`\\n🔍 Testing Field Validation: ${description}`);

  for (const test of fieldTests) {
    const testData = { ...baseData };

    // Apply field modification
    if (test.remove) {
      delete testData[test.field];
    } else if (test.value !== undefined) {
      testData[test.field] = test.value;
    }

    console.log(`\\n  🔸 Testing: ${test.description}`);
    const result = await testAPI(endpoint, testData, test.description);

    if (test.shouldFail && result.success) {
      console.log(`    ⚠️  Expected failure but got success`);
    } else if (!test.shouldFail && !result.success) {
      console.log(`    ⚠️  Expected success but got failure`);
    } else {
      console.log(`    ✓ Validation working correctly`);
    }
  }
}

// Main test suite
async function runAPITests() {
  console.log("🚀 Starting API Tests for IAC Website Forms");
  console.log(`🌐 Base URL: ${API_BASE_URL}`);
  console.log("=".repeat(60));

  const results = [];

  // Test 1: Registration Form
  console.log("\\n📝 REGISTRATION FORM TESTS");
  console.log("-".repeat(40));

  const registrationData = generateTestData.registration();
  const regResult = await testAPI(
    "/contact_us/register",
    registrationData,
    "Registration Form Submission"
  );
  results.push({ test: "Registration", ...regResult });

  // Test registration validation
  await testFieldValidation(
    "/contact_us/register",
    registrationData,
    [
      {
        field: "studentName",
        remove: true,
        shouldFail: true,
        description: "Missing student name",
      },
      {
        field: "emailAddress",
        value: "invalid-email",
        shouldFail: true,
        description: "Invalid email format",
      },
      {
        field: "phoneNumber",
        value: "123",
        shouldFail: true,
        description: "Invalid phone number",
      },
      {
        field: "classTypes",
        value: [],
        shouldFail: true,
        description: "No class types selected",
      },
    ],
    "Registration Form"
  );

  // Test 2: Contact Form
  console.log("\\n📞 CONTACT FORM TESTS");
  console.log("-".repeat(40));

  const contactData = generateTestData.contact();
  const contactResult = await testAPI(
    "/contact_us",
    contactData,
    "Contact Form Submission"
  );
  results.push({ test: "Contact", ...contactResult });

  // Test contact validation
  await testFieldValidation(
    "/contact_us",
    contactData,
    [
      {
        field: "firstName",
        remove: true,
        shouldFail: true,
        description: "Missing first name",
      },
      {
        field: "email",
        value: "bad-email",
        shouldFail: true,
        description: "Invalid email",
      },
      {
        field: "message",
        remove: true,
        shouldFail: true,
        description: "Missing message",
      },
    ],
    "Contact Form"
  );

  // Test 3: Application Form
  console.log("\\n💼 APPLICATION FORM TESTS");
  console.log("-".repeat(40));

  const applicationData = generateTestData.application();
  const appResult = await testAPI(
    "/contact_us/apply",
    applicationData,
    "Application Form Submission"
  );
  results.push({ test: "Application", ...appResult });

  // Test 4: Feedback Form
  console.log("\\n📋 FEEDBACK FORM TESTS");
  console.log("-".repeat(40));

  const feedbackData = generateTestData.feedback();
  const feedbackResult = await testAPI(
    "/contact_us/provide_feedback",
    feedbackData,
    "Feedback Form Submission"
  );
  results.push({ test: "Feedback", ...feedbackResult });

  // Test 5: Request School Form
  console.log("\\n🏫 REQUEST SCHOOL FORM TESTS");
  console.log("-".repeat(40));

  const requestSchoolData = generateTestData.requestSchool();
  const reqSchoolResult = await testAPI(
    "/contact_us/request_us",
    requestSchoolData,
    "Request School Form Submission"
  );
  results.push({ test: "Request School", ...reqSchoolResult });

  // Test 6: Request Parent/Student Form
  console.log("\\n👨‍👩‍👧‍👦 REQUEST PARENT/STUDENT FORM TESTS");
  console.log("-".repeat(40));

  const requestParentData = generateTestData.requestParentStudent();
  const reqParentResult = await testAPI(
    "/contact_us/request_parent_student",
    requestParentData,
    "Request Parent/Student Form Submission"
  );
  results.push({ test: "Request Parent/Student", ...reqParentResult });

  // Summary
  console.log("\\n📊 TEST SUMMARY");
  console.log("=".repeat(60));

  const successful = results.filter((r) => r.success).length;
  const total = results.length;

  console.log(`✅ Successful: ${successful}/${total}`);
  console.log(`❌ Failed: ${total - successful}/${total}`);

  results.forEach((result) => {
    const status = result.success ? "✅" : "❌";
    console.log(`${status} ${result.test}: ${result.status || "ERROR"}`);
  });

  console.log("\\n🏁 API Tests Complete!");

  // Exit with error code if any tests failed
  if (successful < total) {
    process.exit(1);
  }
}

// Error handling
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

// Run tests if this script is executed directly
if (require.main === module) {
  runAPITests().catch((error) => {
    console.error("Test suite failed:", error);
    process.exit(1);
  });
}

module.exports = {
  generateTestData,
  testAPI,
  testFieldValidation,
  runAPITests,
};
