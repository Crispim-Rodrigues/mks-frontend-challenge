import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./ui/globals.scss";
import Navbar from './ui/layout/navbar';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}