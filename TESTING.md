# Testing Guide for IAC Website Forms

This comprehensive testing setup provides multiple layers of testing for the forms in the IAC website project.

## 📋 Test Categories

### 1. Unit Tests (Jest + React Testing Library)
- **Purpose**: Test individual components in isolation
- **Location**: `__tests__/components/forms/`
- **Run**: `npm run test`
- **Coverage**: `npm run test:coverage`

### 2. API Tests (Node.js)
- **Purpose**: Test API endpoints directly
- **Location**: `scripts/test-api.js`
- **Run**: `npm run test:api`

### 3. End-to-End Tests (Playwright)
- **Purpose**: Test complete user workflows
- **Location**: `tests/e2e/`
- **Run**: `npm run test:e2e`
- **UI Mode**: `npm run test:e2e:ui`

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
# Install all testing dependencies
npm install --save-dev \\
  @types/jest \\
  @testing-library/jest-dom \\
  @testing-library/react \\
  @testing-library/user-event \\
  @playwright/test \\
  jest \\
  jest-environment-jsdom

# Install Playwright browsers (for E2E tests)
npx playwright install
```

### 2. Environment Setup

Create a `.env.test.local` file for testing:

```env
# Test environment variables
RESEND_API_KEY=test-key-for-testing
FROM_EMAIL=test@example.com
TO_EMAIL=test@example.com
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 3. Update TypeScript Config

Add to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["jest", "@testing-library/jest-dom"]
  },
  "include": [
    "__tests__/**/*",
    "tests/**/*"
  ]
}
```

## 🧪 Test Structure

### Unit Tests

Each form has comprehensive unit tests covering:

- **Rendering**: Component renders correctly
- **Validation**: Form validation works as expected
- **Navigation**: Multi-step forms navigate properly
- **Data Persistence**: Form data persists between steps
- **Submission**: Form submits correctly
- **Error Handling**: API errors are handled gracefully
- **Form Clearing**: Forms clear after successful submission

Example test file: `__tests__/components/forms/RegisterForm.test.tsx`

### API Tests

Direct testing of API endpoints:

- **Valid Data**: Accepts valid form submissions
- **Validation**: Rejects invalid data
- **Required Fields**: Validates required fields
- **Email Format**: Validates email format
- **Error Handling**: Handles missing environment variables

Example: `scripts/test-api.js`

### E2E Tests

Complete user workflows:

- **Full Form Flow**: Complete form submission from start to finish
- **Field Validation**: Required field validation
- **Step Navigation**: Multi-step form navigation
- **Mobile Testing**: Mobile device compatibility
- **Success Dialogs**: Success confirmation dialogs

Example: `tests/e2e/registration-form.spec.ts`

## 📊 Test Data Generators

Centralized test data generators in `__tests__/test-utils.tsx`:

```typescript
// Generate complete registration form data
const registrationData = generateRegistrationFormData({
  studentName: 'Custom Student Name' // Override specific fields
})

// Generate contact form data
const contactData = generateContactFormData()

// Generate application form data
const applicationData = generateApplicationFormData()
```

## 🎯 Running Tests

### Development Workflow

```bash
# Run all unit tests in watch mode
npm run test:watch

# Run specific test file
npm test RegisterForm.test.tsx

# Run tests with coverage
npm run test:coverage

# Test API endpoints (requires dev server running)
npm run dev  # In one terminal
npm run test:api  # In another terminal

# Run E2E tests (requires dev server running)
npm run test:e2e

# Run E2E tests with UI for debugging
npm run test:e2e:ui
```

### CI/CD Pipeline

```bash
# Full test suite for CI
npm run lint
npm run test:coverage
npm run build
npm run test:api
npm run test:e2e
```

## 🔧 Test Utilities

### Custom Render Function

Wraps components with necessary providers:

```typescript
import { render, screen } from '../test-utils'
// Instead of @testing-library/react
```

### API Mocking

```typescript
// Mock successful API response
mockFetch.mockResolvedValueOnce(mockAPIResponse({ success: true }))

// Mock API error
mockFetch.mockRejectedValueOnce(new Error('API Error'))
```

### Form Interaction Helpers

```typescript
// Fill form field
await fillFormField(getByLabelText, 'Student Name', 'John Doe', userEvent)

// Select dropdown option
await selectOption(getByRole, 'Grade', '3rd Grade', userEvent)

// Check checkbox
await checkCheckbox(getByRole, 'Arts and Crafts', userEvent)
```

## 📋 Test Checklist

For each form, ensure tests cover:

- [ ] **Rendering**: All form fields render correctly
- [ ] **Required Fields**: Required field validation works
- [ ] **Email Validation**: Email format validation
- [ ] **Phone Validation**: Phone number format validation
- [ ] **Multi-Step Navigation**: Step progression and regression
- [ ] **Data Persistence**: Data preserved between steps
- [ ] **Form Submission**: Successful submission flow
- [ ] **API Integration**: API calls with correct data
- [ ] **Error Handling**: Network errors handled gracefully
- [ ] **Success Dialog**: Success confirmation displayed
- [ ] **Form Clearing**: Form resets after successful submission
- [ ] **Mobile Compatibility**: Works on mobile devices
- [ ] **Accessibility**: Screen reader compatibility

## 🐛 Debugging Tests

### Unit Tests

```bash
# Run specific test with debug output
npm test -- --verbose RegisterForm.test.tsx

# Run tests with coverage and open report
npm run test:coverage && open coverage/lcov-report/index.html
```

### E2E Tests

```bash
# Run with headed browser for debugging
npx playwright test --headed

# Run with debug mode (step through tests)
npx playwright test --debug

# Run specific test file
npx playwright test registration-form.spec.ts
```

### API Tests

```bash
# Run with detailed output
DEBUG=* npm run test:api

# Test specific endpoint
node -e "
const { testAPI, generateTestData } = require('./scripts/test-api.js');
testAPI('/contact_us/register', generateTestData.registration(), 'Manual Test')
"
```

## 📈 Coverage Goals

- **Unit Tests**: > 80% coverage for form components
- **API Tests**: 100% coverage for happy path and error cases
- **E2E Tests**: Cover all critical user workflows

## 🚨 Common Issues and Solutions

### 1. Mock Issues

```typescript
// If mocks aren't working, clear them between tests
beforeEach(() => {
  jest.clearAllMocks()
})
```

### 2. Async Test Issues

```typescript
// Always await async operations
await waitFor(() => {
  expect(screen.getByText('Success')).toBeInTheDocument()
})
```

### 3. E2E Test Timeouts

```typescript
// Increase timeout for slow operations
await expect(page.getByText('Loading...')).toBeVisible({ timeout: 10000 })
```

### 4. API Test Environment

```bash
# Ensure dev server is running for API tests
npm run dev &
sleep 5  # Wait for server to start
npm run test:api
```

This comprehensive testing setup ensures that all forms are thoroughly tested at multiple levels, providing confidence in the reliability and user experience of the IAC website forms.
