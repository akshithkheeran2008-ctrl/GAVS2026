import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreditSaathi AI — Design system",
  description: "The consent-first credit companion for Indian small businesses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
