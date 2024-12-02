import type { Metadata } from "next";
import { freight, source } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cultivate by Trellis - Discover Your Natural Path to Growth",
  description: "Stop forcing someone else's business model. Start cultivating growth that feels authentically yours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${freight.variable} ${source.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
