import "@testing-library/jest-dom";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    };
  },
  useSearchParams() {
    return new URLSearchParams();
  },
  usePathname() {
    return "/";
  },
}));

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt || "test image"} />;
  },
}));

// Mock environment variables
process.env.RESEND_API_KEY = "test-key";
process.env.FROM_EMAIL = "test@example.com";
process.env.TO_EMAIL = "test@example.com";

// Mock fetch globally
global.fetch = jest.fn();

// Setup cleanup after each test
afterEach(() => {
  jest.clearAllMocks();
});
