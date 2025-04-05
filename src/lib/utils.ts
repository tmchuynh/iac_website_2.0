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

/**
 * Toggles an accordion section and smoothly scrolls to it if opened.
 *
 * @param id - The unique identifier of the accordion section
 * @param activeSection - The currently active section's ID, or null if none is active
 * @param setActiveSection - Function to update the active section state
 * @param sectionRef - Reference to the DOM element of the accordion section
 *
 * @remarks
 * When opening a section (activeSection !== id), the function will:
 * 1. Update the active section state
 * 2. Scroll to the newly opened section with a smooth animation
 * 3. Apply an offset of 100px from the top of the viewport
 *
 * The scroll behavior has a 100ms delay to ensure DOM updates are complete.
 */
export const toggleAccordionSection = (
  id: string,
  activeSection: string | null,
  setActiveSection: (id: string | null) => void,
  sectionRef: HTMLElement | null
) => {
  setActiveSection(activeSection === id ? null : id);

  if (activeSection !== id && sectionRef) {
    const offset = 100; // Adjust offset if needed

    // Delay scrolling slightly to ensure the DOM has updated
    setTimeout(() => {
      const sectionPosition =
        sectionRef.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: "smooth",
      });
    }, 100); // Delay in milliseconds – adjust if necessary
  }
};
