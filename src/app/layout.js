import "./globals.css";
import LoadingScreen from "@/components/own/LoadingScreen";
import { Toaster } from "react-hot-toast";


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
      <body className="font-[popins] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <LoadingScreen>
          <Toaster />
          {children}
        </LoadingScreen>
      </body>
    </html>
  );
}
