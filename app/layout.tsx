import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. On importe le composant Navbar que tu as créé
import Navbar from "@/components/Navbar"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Science App - Portail de recherche",
  description: "Exploration des frontières de la connaissance scientifique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 2. On place la Navbar ici pour qu'elle soit en haut de chaque page */}
        <Navbar />
        
        {/* 3. children représente le contenu de chaque page (Accueil, Blog, etc.) */}
        {children}
      </body>
    </html>
  );
}