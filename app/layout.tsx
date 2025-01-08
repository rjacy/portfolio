import type { Metadata } from "next";
import { Poppins, Syne } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"]
})

const syne = Syne({
  subsets: ["greek"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Alec O. | Portfolio Website",
  description: "Alec Ogunniran Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${syne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
