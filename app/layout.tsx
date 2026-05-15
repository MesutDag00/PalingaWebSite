import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Palinga — Rehabilitasyon Yönetimi ve Dijital Terapi Platformu",
  description:
    "Palinga, kliniklerin operasyonel yükünü azaltan, terapistlerin veri odaklı karar almasını sağlayan ve hastaların bakım sürecine aktif katılımını artıran sağlık teknolojisi platformudur.",
  keywords: "afazi terapi, rehabilitasyon platformu, klinik yönetim, dijital terapi, sağlık teknolojisi",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
