"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

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
