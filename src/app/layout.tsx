import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blinq",
  description: "For the best shopping experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dosis.className}>
        <Navbar />
        <main className="px-6 pb-12 2xl:max-w-[70%] mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
