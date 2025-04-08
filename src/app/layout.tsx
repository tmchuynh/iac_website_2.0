import StaticBreadcrumb from "@/components/breadcrumb/BreadcrumbWrapper";
import BackToTop from "@/components/buttons/BackToTop";
import { NavBar } from "@/components/navigation/NavBar";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative flex flex-col min-h-screen">
        <Providers>
          <main className="flex-grow pb-24 md:pb-0">
            <NavBar />
            <StaticBreadcrumb />
            {children}
            <ScrollToTop />
          </main>
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
