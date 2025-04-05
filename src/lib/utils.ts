import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smoothly scrolls to a specified section on the page with an offset.
 *
 * @param sectionId - The ID of the section to scroll to
 * @param sectionRefs - React ref object containing references to section elements
 * @param setActiveSection - Optional callback function to update the active section state
 *
 * @remarks
 * This function:
 * - Updates the active section state if a callback is provided
 * - Uses requestAnimationFrame for smooth scrolling animation
 * - Applies a fixed offset of 80px to account for fixed headers
 *
 * @example
 * ```tsx
 * const sectionRefs = useRef({});
 * scrollToSection('about', sectionRefs, setActiveSection);
 * ```
 */
export const scrollToSection = (
  sectionId: string,
  sectionRefs: React.RefObject<{ [key: string]: HTMLElement | null }>,
  setActiveSection?: (sectionId: string) => void
) => {
  if (setActiveSection) {
    setActiveSection(sectionId);
  }

  const section = sectionRefs.current?.[sectionId];
  if (section) {
    const offset = 80; // Fixed offset (e.g., header height)

    // Wait for two animation frames to ensure layout is updated
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const sectionPosition =
          section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: sectionPosition - offset,
          behavior: "smooth",
        });
      });
    });
  }
};
