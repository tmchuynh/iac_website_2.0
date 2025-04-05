"use client";

import { ThemeProvider } from "next-themes";
import { JSX, ReactNode } from "react";
import { NotFoundProvider } from "./context/NotFoundContext";
import { TabsProvider } from "./context/TabsContext";

/**
 * A component that provides various context providers to its children.
 * Sets up theme, 404 handling, and tab management contexts.
 *
 * @component
 * @param {Object} props - The component props
 * @param {ReactNode} props.children - Child elements to be wrapped by the providers
 * @returns {JSX.Element} A provider-wrapped tree of components
 */
export function Providers({ children }: { children: ReactNode }): JSX.Element {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <NotFoundProvider>
        <TabsProvider>{children}</TabsProvider>
      </NotFoundProvider>
    </ThemeProvider>
  );
}
