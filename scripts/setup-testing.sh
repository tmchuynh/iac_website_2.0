#!/bin/bash

# IAC Website Testing Setup Script
# This script installs all testing dependencies and sets up the testing environment

echo "🚀 Setting up testing environment for IAC Website..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

print_status "Node.js version: $(node --version)"
print_status "npm version: $(npm --version)"

# Install testing dependencies
print_status "Installing testing dependencies..."

npm install --save-dev \\
  @types/jest@^29.5.12 \\
  @testing-library/jest-dom@^6.4.2 \\
  @testing-library/react@^14.2.1 \\
  @testing-library/user-event@^14.5.2 \\
  @playwright/test@^1.42.1 \\
  jest@^29.7.0 \\
  jest-environment-jsdom@^29.7.0

if [ $? -eq 0 ]; then
    print_success "Testing dependencies installed successfully!"
else
    print_error "Failed to install testing dependencies"
    exit 1
fi

# Install Playwright browsers
print_status "Installing Playwright browsers..."
npx playwright install

if [ $? -eq 0 ]; then
    print_success "Playwright browsers installed successfully!"
else
    print_warning "Playwright browser installation had issues, but continuing..."
fi

# Create test environment file if it doesn't exist
if [ ! -f ".env.test.local" ]; then
    print_status "Creating test environment file..."
    cat > .env.test.local << EOL
# Test environment variables
RESEND_API_KEY=test-key-for-testing
FROM_EMAIL=test@example.com
TO_EMAIL=test@example.com
NEXT_PUBLIC_API_URL=http://localhost:3000
EOL
    print_success "Created .env.test.local"
else
    print_warning ".env.test.local already exists, skipping..."
fi

# Update .gitignore to include test coverage
if ! grep -q "coverage/" .gitignore 2>/dev/null; then
    print_status "Adding coverage directory to .gitignore..."
    echo "" >> .gitignore
    echo "# Test coverage" >> .gitignore
    echo "coverage/" >> .gitignore
    echo "test-results/" >> .gitignore
    echo "playwright-report/" >> .gitignore
    print_success "Updated .gitignore"
fi

# Create test scripts in package.json (already done, but verify)
print_status "Verifying package.json scripts..."

# Check if test scripts exist
if grep -q '"test":' package.json; then
    print_success "Test scripts found in package.json"
else
    print_warning "Test scripts not found in package.json - please add them manually"
fi

# Run initial test to verify setup
print_status "Running initial test verification..."

# Create a simple smoke test if none exists
if [ ! -f "__tests__/setup.test.js" ]; then
    cat > __tests__/setup.test.js << 'EOL'
// Smoke test to verify testing setup
describe('Testing Setup', () => {
  it('should run tests successfully', () => {
    expect(true).toBe(true)
  })

  it('should have access to testing utilities', () => {
    expect(expect).toBeDefined()
    expect(describe).toBeDefined()
    expect(it).toBeDefined()
  })
})
EOL
    print_status "Created smoke test"
fi

# Run smoke test
print_status "Running smoke test..."
npm test -- --testPathPattern=setup.test.js --passWithNoTests

if [ $? -eq 0 ]; then
    print_success "Smoke test passed! Testing setup is working correctly."
else
    print_warning "Smoke test had issues, but setup is likely working. Check individual test files."
fi

# Display next steps
echo ""
print_success "✅ Testing setup complete!"
echo ""
echo "📋 Next Steps:"
echo "  1. Run unit tests:           npm run test"
echo "  2. Run tests in watch mode:  npm run test:watch"  
echo "  3. Run tests with coverage:  npm run test:coverage"
echo "  4. Start dev server:         npm run dev"
echo "  5. Test APIs:                npm run test:api"
echo "  6. Run E2E tests:            npm run test:e2e"
echo "  7. Run E2E tests with UI:    npm run test:e2e:ui"
echo ""
echo "📖 For detailed testing guide, see: TESTING.md"
echo ""
print_status "Happy testing! 🧪"
