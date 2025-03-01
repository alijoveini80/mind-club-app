import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScriptLoader from "@/app/components/ScriptLoader";
import ThemeProvider from "@/app/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Telegram Mini App",
  description: "A simple Telegram Mini App built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScriptLoader />
        <ThemeProvider />
        {children}
      </body>
    </html>
  );
}
