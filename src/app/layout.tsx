import type { Metadata } from "next";
import { Merriweather_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FooterCreds } from "./parts/footer-creds";

const MW = Merriweather_Sans({
  subsets: ['latin'],
  variable: '--merri-weather',
  style: ['normal'],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Twan Luttik - Personal website",
  description: "Check my website to see all my socials and links for contact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${MW.variable} font-serif bg-white dark:bg-[#080d08] text-black dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <FooterCreds />
        </ThemeProvider>
      </body>
    </html>
  );
}
