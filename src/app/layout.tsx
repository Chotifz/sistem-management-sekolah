import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Kautsar | Sekolah Management Sistem",
  description:
    "sistem manajemen sekolah untuk mengelola data siswa, guru, jadwal, dan administrasi secara efisien dengan fitur lengkap dan antarmuka sederhana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased `}>{children}</body>
    </html>
  );
}
