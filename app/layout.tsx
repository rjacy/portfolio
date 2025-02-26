import type { Metadata } from "next";
import { Poppins, Syne } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["greek"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tony Akinmide | Portfolio Website",
  description: "Tony Akinmide Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="BryEDNY6ARF6LmSr5ysgQB6xgW7ZfGFJYOmIs72MO9U"
        />
      </head>
      <body className={`${poppins.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
