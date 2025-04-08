"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * A component that scrolls the window to the top whenever the pathname changes.
 *
 * This is particularly useful in single-page applications where the browser doesn't
 * automatically scroll to the top on navigation, including when using the browser's
 * back button.
 *
 * The component doesn't render anything in the DOM as it returns null.
 *
 * @returns {null} - This component doesn't render any DOM elements
 */
export default function ScrollToTop(): null {
  const pathname = usePathname();

  useEffect(() => {
    // Force scroll to top on every path change, including back navigation.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
