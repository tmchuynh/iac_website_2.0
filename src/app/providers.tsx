"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

/**
 * Providers component that wraps its children with a ThemeProvider.
 *
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child components to be wrapped by the ThemeProvider.
 *
 * @returns {JSX.Element} The ThemeProvider component wrapping the children.
 */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
}
