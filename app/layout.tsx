import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientThemeWrapper from "@/components/ClientThemeWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EvolveSteds",
  description: "Research-based supplements for elite transformation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark"> {/* Add dark class here for default dark */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientThemeWrapper>{children}</ClientThemeWrapper>
      </body>
    </html>
  );
}
