import { ThemeProvider } from "next-themes";
import { NotFoundProvider } from "./context/NotFoundContext";
import "./globals.css";
import { Providers } from "./providers";
import BackToTop from "@/components/buttons/BackToTop";
import StaticBreadcrumb from "@/components/breadcrumb/BreadcrumbWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Providers>
          <NotFoundProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <main className="flex-grow">
                <StaticBreadcrumb />
                {children}
              </main>
              <BackToTop />
            </ThemeProvider>
          </NotFoundProvider>
        </Providers>
      </body>
    </html>
  );
}
