import { Geist, Geist_Mono, Manrope, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/navbar";
import Layout from "@/Components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'], // Customize as needed
})

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Karan's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`hide-scrollbar ${manrope.variable}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
