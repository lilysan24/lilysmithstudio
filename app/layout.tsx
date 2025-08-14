// app/layout.tsx
import type { Metadata } from "next";
import { Inter, PT_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ptMono = PT_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pt-mono",
});

export const metadata: Metadata = {
  title: "Lily Smith Studio",
  description: "Artist | Designer | Storyteller",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ptMono.variable} font-inter`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
