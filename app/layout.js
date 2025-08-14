import { Geist, Geist_Mono, Manrope, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/navbar";
import Layout from "@/Components/layout";
import { Bricolage_Grotesque } from "next/font/google";
import DraggableBox from "@/Components/draggable";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap", // optional for better performance
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
  title: "Karan Roushan | web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`hide-scrollbar ${bricolage.variable}`}
      >
        <main
          className={`flex-grow w-screen`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
