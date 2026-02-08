import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LLM Mastery for Academia",
  description: "From Prompts to Systems — Workshop for Doctoral & Postdoctoral Researchers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
