import { Geist, Geist_Mono, Manrope, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/navbar";
import Layout from "@/Components/layout";
import { Bricolage_Grotesque } from "next/font/google";
import DraggableBox from "@/Components/draggable";
import Head from "next/head";
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
  title: "Karan Roushan",
  description:"Full Stack Web Developer & UI/UX Designer based in India.",
  openGraph: {
    images: [
      {
        url: "/scene.jpg", // replace with your actual image path or full URL
        width: 630,
        height: 630,
        alt: "Karan Roushan Portfolio Preview",
      },
    ],
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`hide-scrollbar ${bricolage.variable}`}
      >
        <Head >
          {/* Basic */}
          <title>Karan Roushan | Full Stack Developer</title>
          <meta name="description" content="Portfolio of Karan Roushan - Full Stack Web Developer & UI/UX Designer based in India." />

          {/* Open Graph */}
          <meta property="og:title" content="Karan Roushan | Full Stack Developer" />
          <meta property="og:description" content="Karan Roushan is a Full Stack Web Developer & UI/UX Designer based in India." />
          <meta property="og:url" content="https://karanroushan.com" />
          <meta property="og:type" content="website" />


        </Head>
        <main
          className={`flex-grow w-screen`}
        >
        <DraggableBox />
          {children}
        </main>
      </body>
    </html>
  );
}
