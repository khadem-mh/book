import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";
import HeroProvider from "@/components/providers/HeroProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Toaster
          toastOptions={{
            duration: 2000,
            style: {
              fontFamily: "inherit",
              fontSize: "0.85rem",
              padding: "4px 12px",
              borderRadius: "0.75rem",
            },
          }}
        />
        <HeroProvider>
          <Header />
          <div className="relative max-w-7xl mx-auto">{children}</div>
          <Footer />
        </HeroProvider>
      </body>
    </html>
  );
}