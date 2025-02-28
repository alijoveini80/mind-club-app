import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  scripts: [
    {
      src: "https://tapi.bale.ai/miniapp.js?1",
      strategy: "beforeInteractive", // or 'lazyOnload', 'afterInteractive'
    },
    // Add other scripts here
  ],
  // other: {
  //   "my-custom-element": '<meta name="custom" content="value" />',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
