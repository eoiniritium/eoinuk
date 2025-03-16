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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${cabin.variable} antialiased min-h-screen table w-full`}> 
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
