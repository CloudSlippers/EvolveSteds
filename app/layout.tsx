import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientThemeWrapper from "@/components/ClientThemeWrapper";
import Footer from "@/components/Footer";  // <-- import footer

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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body>
        <ClientThemeWrapper>
          {children}
          <Footer />  {/* Add footer here */}
        </ClientThemeWrapper>
      </body>
    </html>
  );
}
