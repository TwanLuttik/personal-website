import "./globals.css";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import PlausibleProvider from "next-plausible";

export const metadata: Metadata = {
  title: "Twan Luttik",
  description: "Welcome into my place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <div className="h-full">
          <PlausibleProvider domain="twanluttik.com">
            {children}
          </PlausibleProvider>
        </div>
      </body>
    </html>
  );
}
