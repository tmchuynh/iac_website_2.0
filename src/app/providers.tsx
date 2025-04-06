"use client";

import { ThemeProvider } from "next-themes";
import { JSX, ReactNode } from "react";
import { NotFoundProvider } from "./context/NotFoundContext";
import { TabsProvider } from "./context/TabsContext";
import { TooltipProvider } from "@/components/ui/tooltip";

/**
 * A component that wraps the application with various context providers.
 *
 * This provider component sets up:
 * - Theme management through ThemeProvider
 * - NotFound state management
 * - Tab state management
 * - Tooltip functionality
 *
 * @param {Object} props - The component props
 * @param {ReactNode} props.children - The child elements to be wrapped by the providers
 * @returns {JSX.Element} The wrapped children with all providers
 *
 * @example
 * ```tsx
 * <Providers>
 *   <App />
 * </Providers>
 * ```
 */
export function Providers({ children }: { children: ReactNode }): JSX.Element {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <NotFoundProvider>
        <TabsProvider>
          <TooltipProvider>{children}</TooltipProvider>
        </TabsProvider>
      </NotFoundProvider>
    </ThemeProvider>
  );
}
