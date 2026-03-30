import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Golden Egg Game 🥚",
    template: "%s | Golden Egg Game",
  },
  description:
    "Try to find the golden egg in this simple interactive game built with Next.js and Tailwind CSS.",
  metadataBase: new URL("https://soreng95.github.io/easter-project"),
  openGraph: {
    title: "Golden Egg Game 🥚",
    description: "Find the golden egg and see how many tries it takes you.",
    url: "https://soreng95.github.io/easter-project",
    siteName: "Golden Egg Game",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
