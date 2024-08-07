import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import PlausibleProvider from "next-plausible";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Twan Luttik",
  description: "Welcome into my space",
};

const HomeHeader = dynamic(() => import("./parts/HomeHeader"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-full w-full flex-col">
            <PlausibleProvider domain="twanluttik.com">
              <HomeHeader />
              <div className="mx-auto flex h-full w-full max-w-screen-lg flex-1 px-5">
                {children}
              </div>
              <Footer />
            </PlausibleProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
