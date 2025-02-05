import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Provider from "@/components/theme-provider";
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
  title: "React Checkbox Pro",
  description:
    "A modern, customizable checkbox component for React with TypeScript support and Tailwind CSS integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider enableSystem={false} disableTransitionOnChange>
          {children}
        </Provider>
      </body>
    </html>
  );
}
