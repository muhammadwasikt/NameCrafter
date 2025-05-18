"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export const metadata = {
  metadataBase: new URL("https://name-crafter.vercel.app"),
  title: "NameCrafter - Contact Us",
  description: "NameCrafter is the ultimate AI-powered random name generator app. Instantly find unique Muslim Boys Names, Muslim Girls Names, Business Names, Fantasy Names, Pet Names, and Instagram usernames in English and Urdu. Perfect for brands, babies, games, and creativity!",
  url: "https://name-crafter.vercel.app/",
   siteName: "NameCrafter",
  images: [
    {
      url: "/favicon.ico",
      width: 1200,
      height: 630,
      alt: "NameCrafter Icon",
    },
  ],
  type: "website",
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
  authors: [{ name: "NameCrafter Team", url: "https://name-crafter.vercel.app/" }],
  creator: "NameCrafter",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "NameCrafter - Contact Us!",
    description: "Get thousands of unique, beautiful, and meaningful names in English and Urdu. Powered by AI. Best for babies, brands, pets, and more!",
    url: "https://name-crafter.vercel.app/",
    siteName: "NameCrafter",
    images: [
      {
        url: "https://name-crafter.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "NameCrafter - Random Name Generator",
      },
    ],
  },
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();


  const onSubmit = (data) => {
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center mb-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 mb-4">
          Contact NameCrafter
        </h1>
        <p className="text-gray-600 text-lg">
          Have a question or suggestion? Drop us a message!
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl space-y-6"
      >
        <div>
          <Input
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            className="text-lg"
          />
          {errors.name && (
            <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            placeholder="Your Email"
            className="text-lg"
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Textarea
            {...register("message", { required: "Message is required" })}
            rows={5}
            placeholder="Your Message..."
            className="text-lg"
          />
          {errors.message && (
            <p className="text-sm text-red-600 mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full text-lg bg-gradient-to-r from-pink-500 to-orange-400 text-white hover:opacity-90"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
