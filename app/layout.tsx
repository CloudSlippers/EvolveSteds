import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientThemeWrapper from "@/components/ClientThemeWrapper";
import Footer from "@/components/Footer";  // <-- import footer
import Head from 'next/head';

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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
       <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <ClientThemeWrapper>
          <main className="pt-[80px] bg-white text-black dark:bg-zinc-900 dark:text-white">
            {children}
          </main>
          <Footer />
        </ClientThemeWrapper>
      </body>
    </html>
  );
}

