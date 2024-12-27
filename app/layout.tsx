import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ContextProvider from "../context";
import { headers } from "next/headers";

// Define custom fonts using localFont
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the app
export const metadata: Metadata = {
  title: "Reown Wallet Integration",
  description: "Wallet transaction Bharat blockchain network",
};

// RootLayout component
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookies = (await headers()).get("cookie");

  return (
    <html lang="en">
      <body className={geistSans.variable}>
        <ContextProvider cookies={cookies}>{children}</ContextProvider>
      </body>
    </html>
  );
}
