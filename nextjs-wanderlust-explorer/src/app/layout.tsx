
import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { FavoritesProvider } from "@/context/favorites-context";
import Navbar from "@/components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wanderlust Explorer",
  description: "Descubre y guarda experiencias únicas alrededor del mundo.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#123b36]">
        <FavoritesProvider>
          <Suspense
            fallback={
              <div className="h-20 bg-[#123b36]" />
            }
          >
            <Navbar />
          </Suspense>

          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}
