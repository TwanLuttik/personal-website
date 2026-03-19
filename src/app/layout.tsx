import type { Metadata } from "next";
import Script from "next/script";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Twan Luttik | Mobile & Web Developer",
  description: "I build mobile apps with React Native and web apps with Next.js. Passionate about startups and the startup mindset.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", lora.variable, "font-sans", inter.variable)}>
      <head>
        <Script async src="https://plausible.io/js/pa-9NWt0DXEfRfAQfg3zBev9.js" />
        <Script id="plausible-init">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init()`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
