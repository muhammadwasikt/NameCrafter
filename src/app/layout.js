import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/own/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NameCrafter - Random Name Generator",
  description: "NameCrafter is the ultimate AI-powered random name generator app. Instantly find unique Muslim Boys Names, Muslim Girls Names, Business Names, Fantasy Names, Pet Names, and Instagram usernames in English and Urdu. Perfect for brands, babies, games, and creativity!",
  keywords: [
    "NameCrafter",
    "Random Name Generator",
    "Muslim Boys Names",
    "Muslim Girls Names",
    "Business Names",
    "Fantasy Names",
    "Pet Names",
    "Instagram Usernames",
    "Name Ideas",
    "Name Generator Urdu",
    "Baby Names",
    "Startup Names",
    "Brand Name Generator",
    "AI Name Generator",
    "Unique Names"
  ],
  authors: [{ name: "NameCrafter Team", url: "https://yourwebsite.com" }],
  creator: "NameCrafter",
  openGraph: {
    title: "NameCrafter - Find the Perfect Name Instantly!",
    description: "Get thousands of unique, beautiful, and meaningful names in English and Urdu. Powered by AI. Best for babies, brands, pets, and more!",
    url: "https://yourwebsite.com",
    siteName: "NameCrafter",
    images: [
      {
        url: "https://yourwebsite.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NameCrafter - Random Name Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingScreen>
          {children}
        </LoadingScreen>
      </body>
    </html>
  );
}
