"use client"

import { HeroUIProvider } from "@heroui/react";
import "../styles/globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <HeroUIProvider locale="fa">
          <Header />
          <div className="mt-44">
            {children}
          </div>
          <Footer />
        </HeroUIProvider>
      </body>
    </html>
  );
}