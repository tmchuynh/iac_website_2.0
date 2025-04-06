import StaticBreadcrumb from "@/components/breadcrumb/BreadcrumbWrapper";
import BackToTop from "@/components/buttons/BackToTop";
import "./globals.css";
import { Providers } from "./providers";
import { NavBar } from "@/components/navigation/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative flex flex-col min-h-screen">
        <Providers>
          <main className="flex-grow">
            <NavBar />
            <StaticBreadcrumb />
            {children}
          </main>
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
