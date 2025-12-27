"use client";

import { useState } from "react";
import Meteors from "@/components/ui/meteors";

export default function ContactForm() {
  const [formData, setFormData] = useState({
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

    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ email: "", message: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <section className="relative min-h-screen bg-[#0b1220] overflow-hidden flex items-center justify-center px-4 pt-32 sm:pt-40">
      {/* Meteors background */}
      <Meteors number={80}/>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl text-center">
        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          Contact Us
        </h1>

        <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-sm sm:text-base">
          We&apos;re here to help with any questions about our courses, programs,
          or events. Reach out and let us know how we can assist you.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
            value={formData.email}
            onChange={handleChange}
            className="
              w-full rounded-xl bg-black/70 px-5 py-4
              text-white placeholder-neutral-500
              border border-cyan-500/40
              focus:outline-none focus:ring-2 focus:ring-cyan-400
              shadow-[0_0_25px_rgba(34,211,238,0.2)]
            "
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="
              w-full rounded-xl bg-black/70 px-5 py-4
              text-white placeholder-neutral-500
              border border-cyan-500/30
              focus:outline-none focus:ring-2 focus:ring-cyan-400
              shadow-[0_0_25px_rgba(34,211,238,0.15)]
              resize-none
            "
          />

          {/* Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="
                px-8 py-3 rounded-xl
                bg-gradient-to-r from-emerald-400 to-cyan-400
                text-black font-semibold
                hover:opacity-90 transition
                shadow-[0_0_30px_rgba(34,211,238,0.4)]
                disabled:opacity-60 cursor-pointer
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
