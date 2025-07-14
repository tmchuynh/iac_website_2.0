# 🧪 IAC Website Form Testing Suite

A comprehensive testing setup for the International Activities Club website forms, providing multiple layers of testing to ensure form reliability, validation, and user experience.

## 🚀 Quick Start

### 1. Install Dependencies & Setup

```bash
# Run the automated setup script
./scripts/setup-testing.sh

# Or install manually:
npm install --save-dev @types/jest @testing-library/jest-dom @testing-library/react @testing-library/user-event @playwright/test jest jest-environment-jsdom
npx playwright install
```

### 2. Run Tests

```bash
# Unit tests
npm run test                    # Run all unit tests
npm run test:watch             # Run in watch mode
npm run test:coverage          # Run with coverage report

# API tests
npm run dev                    # Start dev server first
npm run test:api              # Test API endpoints

# E2E tests  
npm run test:e2e              # Run end-to-end tests
npm run test:e2e:ui           # Run with UI for debugging
```

## 📁 Test Structure

```
__tests__/
├── test-utils.tsx             # Shared testing utilities
├── components/forms/          # Component tests
│   ├── RegisterForm.test.tsx
│   ├── ContactForm.test.tsx
│   └── ...
└── api/                       # API route tests
    ├── register.test.ts
    └── ...

tests/e2e/                     # End-to-end tests
├── registration-form.spec.ts
├── other-forms.spec.ts
└── ...

scripts/
├── test-api.js               # API testing script
└── setup-testing.sh          # Setup automation
```

## 📋 Forms Being Tested

### ✅ Registration Form (`/contact_us/register`)
- **Features**: Multi-step form, student/parent info, payment options
- **Tests**: Field validation, step navigation, data persistence, submission
- **API**: `/api/contact_us/register`

### ✅ Contact Form (`/contact_us`)
- **Features**: General inquiries, multiple inquiry types
- **Tests**: Required fields, email validation, submission, form clearing
- **API**: `/api/contact_us`

### ✅ Application Form (`/contact_us/apply`)
- **Features**: Job applications, multi-step, file uploads
- **Tests**: Complete application flow, validation, background checks
- **API**: `/api/contact_us/apply`

### ✅ Feedback Form (`/contact_us/provide_feedback`)
- **Features**: Anonymous/non-anonymous, ratings, comments
- **Tests**: Anonymous flow, contact info, rating validation
- **API**: `/api/contact_us/provide_feedback`

### ✅ Request School Form (`/contact_us/request_us`)
- **Features**: School partnerships, program requests
- **Tests**: School info validation, program selection, submission
- **API**: `/api/contact_us/request_us`

### ✅ Request Parent/Student Form
- **Features**: Parent advocacy for programs
- **Tests**: Parent/student info, school targeting
- **API**: `/api/contact_us/request_parent_student`

## 🔧 Test Types

### 1. Unit Tests (Jest + React Testing Library)
- **Purpose**: Test individual components and their behavior
- **Coverage**: Form rendering, validation, user interactions
- **Location**: `__tests__/components/forms/`

### 2. API Tests (Node.js Script)
- **Purpose**: Test API endpoints directly with various data scenarios
- **Coverage**: Valid/invalid data, error handling, validation
- **Location**: `scripts/test-api.js`

### 3. E2E Tests (Playwright)
- **Purpose**: Test complete user workflows across browsers
- **Coverage**: Full form submission flows, mobile compatibility
- **Location**: `tests/e2e/`

## 📊 Test Data

Centralized test data generators in `__tests__/test-utils.tsx`:

```typescript
// Example usage
const registrationData = generateRegistrationFormData({
  studentName: 'Custom Name'  // Override specific fields
})

const contactData = generateContactFormData()
const applicationData = generateApplicationFormData()
const feedbackData = generateFeedbackFormData()
const requestSchoolData = generateRequestSchoolFormData()
```

## ✅ What Each Test Covers

For every form, tests verify:

- ✅ **Rendering**: All form fields display correctly
- ✅ **Required Field Validation**: Cannot submit without required fields
- ✅ **Email Format Validation**: Proper email format required
- ✅ **Phone Number Validation**: Valid phone format
- ✅ **Multi-Step Navigation**: Forward/backward navigation (where applicable)
- ✅ **Data Persistence**: Form data preserved between steps
- ✅ **Successful Submission**: Form submits and shows success
- ✅ **API Integration**: Correct data sent to backend
- ✅ **Error Handling**: Network errors handled gracefully
- ✅ **Form Clearing**: Forms reset after successful submission
- ✅ **Mobile Compatibility**: Works on mobile devices
- ✅ **Success Dialogs**: Confirmation messages display

## 🚨 Common Test Scenarios

### Validation Testing
```typescript
// Test required fields
await user.type(screen.getByLabelText(/first name/i), 'John')
expect(submitButton).toBeDisabled() // Still missing other required fields

// Test email validation
await user.type(screen.getByLabelText(/email/i), 'invalid-email')
expect(submitButton).toBeDisabled() // Invalid email format
```

### API Testing
```bash
# Test successful submission
curl -X POST http://localhost:3000/api/contact_us/register \\
  -H "Content-Type: application/json" \\
  -d '{"studentName":"Test","email":"test@example.com",...}'

# Test validation errors
curl -X POST http://localhost:3000/api/contact_us/register \\
  -H "Content-Type: application/json" \\
  -d '{"invalidField":"value"}'
```

### E2E Testing
```typescript
// Test complete user flow
await page.goto('/contact_us/register')
await page.getByLabel(/student name/i).fill('John Doe')
// ... fill entire form
await page.getByRole('button', { name: /submit/i }).click()
await expect(page.getByText(/success/i)).toBeVisible()
```

## 📈 Coverage Reports

After running `npm run test:coverage`, open:
- **HTML Report**: `coverage/lcov-report/index.html`
- **Terminal Summary**: Shows coverage percentages
- **Goals**: >80% coverage for form components

## 🐛 Debugging

### Unit Test Debugging
```bash
# Run specific test with verbose output
npm test -- --verbose ContactForm.test.tsx

# Debug individual test
npm test -- --testNamePattern="validates email format"
```

### E2E Test Debugging
```bash
# Run with visible browser
npx playwright test --headed

# Step through tests
npx playwright test --debug

# Run specific test file
npx playwright test registration-form.spec.ts
```

### API Test Debugging
```bash
# Manual API testing with detailed output
DEBUG=* npm run test:api

# Test specific endpoint
node -e "
const { testAPI, generateTestData } = require('./scripts/test-api.js');
testAPI('/contact_us', generateTestData.contact(), 'Manual Test').then(console.log)
"
```

## 🔄 CI/CD Integration

For continuous integration, run:

```bash
# Full test suite
npm run lint                    # Code quality
npm run test:coverage          # Unit tests with coverage
npm run build                  # Build verification
npm run test:api              # API endpoint tests
npm run test:e2e              # End-to-end tests
```

## 📚 Documentation

- **[TESTING.md](./TESTING.md)**: Detailed testing guide
- **[Jest Configuration](./jest.config.js)**: Unit test configuration
- **[Playwright Configuration](./playwright.config.ts)**: E2E test configuration
- **[API Test Script](./scripts/test-api.js)**: API testing documentation

## 🎯 Next Steps

1. **Install Dependencies**: Run `./scripts/setup-testing.sh`
2. **Run Tests**: Start with `npm run test`
3. **Check Coverage**: Run `npm run test:coverage`
4. **Test APIs**: Start dev server and run `npm run test:api`
5. **E2E Testing**: Run `npm run test:e2e`
6. **Review Results**: Check test reports and coverage

## 🤝 Contributing

When adding new forms or modifying existing ones:

1. **Add Unit Tests**: Create test file in `__tests__/components/forms/`
2. **Update API Tests**: Add test cases to `scripts/test-api.js`
3. **Add E2E Tests**: Create spec file in `tests/e2e/`
4. **Update Test Data**: Add generators to `test-utils.tsx`
5. **Run Full Suite**: Ensure all tests pass

---

**Happy Testing! 🧪** This comprehensive test suite ensures the IAC website forms are reliable, user-friendly, and bug-free.
