"use client";

import { useState } from "react";
import Meteors from "@/components/ui/meteors";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    console.log(formData);

    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 800);
  };

  return (
    // 👇 FULL PAGE / SECTION WRAPPER
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      
      {/* 👇 METEORS BACKGROUND */}
      <Meteors />

      {/* 👇 FORM CARD */}
      <div className="relative z-10 max-w-md w-full bg-black p-6 rounded-lg border border-gray-800">
        <h2 className="text-white text-xl font-semibold mb-4">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-md bg-gray-900 border border-gray-700 px-4 py-2 text-sm text-white resize-none focus:outline-none focus:ring-2 focus:ring-gray-600"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
