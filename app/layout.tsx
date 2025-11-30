import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Shahin Signature",
  description: "Luxury Real Estate",
};

import Footer from "@/components/Footer";
import { LoadingProvider } from "@/context/LoadingContext";
import PageLoader from "@/components/PageLoader";

// ... (existing imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${cormorantGaramond.variable} ${poppins.variable} font-sans antialiased`}
      >
        <LoadingProvider>
          <PageLoader />
          {children}
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
