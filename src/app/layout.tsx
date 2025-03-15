import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";

import Header from "@/components/header"
import Footer from "@/components/footer"

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eoin Mag Ualghairg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cabin.variable} antialiased min-h-screen table w-full`}> 
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
