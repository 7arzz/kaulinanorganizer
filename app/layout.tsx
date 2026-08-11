import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaulinan Organizer | Outbound & Gathering Bogor",
  description: "Corporate EO Resmi. Team Building, Gathering, Outbound di JKT, BGR, BDG.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
