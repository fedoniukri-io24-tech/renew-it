import type { Metadata } from "next";
import QuoteModalProvider from "@/components/QuoteModalProvider";
import ScrollReveal from "@/components/ScrollReveal";
import StructuredData from "@/components/StructuredData";
import { rootMetadata } from "@/lib/metadata";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <StructuredData />
        <ScrollReveal />
        <QuoteModalProvider>{children}</QuoteModalProvider>
      </body>
    </html>
  );
}
