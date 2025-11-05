"use client"

import { HeroUIProvider } from "@heroui/react";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <HeroUIProvider>
          <div className="mt-44">
            {children}
          </div>
        </HeroUIProvider>
      </body>
    </html>
  );
}