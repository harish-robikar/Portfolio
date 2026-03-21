/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "name") {
      // Only allow alphabets and spaces
      const cleanedValue = value.replace(/[^a-zA-Z\s]/g, "");
      setForm({ ...form, [name]: cleanedValue });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const sendEmail = async () => {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!resp.ok) {
        const err = await resp.json();
        throw new Error(err.error || "Failed to send message.");
      }

      setForm({ name: "", email: "", message: "" });
      return "Message sent successfully!";
    };

    toast.promise(sendEmail(), {
      loading: "Sending your message...",
      success: "Message sent! I will contact you as soon as possible.",
      error: (err) => `Error: ${err.message}`,
    });
  };

  return (
    <section
      id="contact"
      className="relative w-full py-18 sm:py-14 lg:py-14 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Let's build
            something amazing together.
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-md hover:shadow-xl transition p-6 sm:p-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Let's Talk
            </h3>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Mail className="text-gray-700" size={22} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">harishrobikar@.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <MapPin className="text-gray-700" size={22} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">Bengaluru, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Phone className="text-gray-700" size={22} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600">+91 8073809019</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-10">
              <h4 className="font-medium text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  {
                    icon: <Linkedin size={20} />,
                    href: "https://www.linkedin.com/in/harish-robikar-612934280/",
                  },
                  {
                    icon: <Github size={20} />,
                    href: "https://github.com/harish-robikar",
                  },
                  {
                    icon: <Instagram size={20} />,
                    href: "https://www.instagram.com/harish__robikar",
                  },
                  {
                    icon: <MessageCircle size={20} />,
                    href: "https://wa.me/918073809019",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-black hover:text-white text-gray-700 p-3 rounded-full transition cursor-pointer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-md hover:shadow-xl transition p-6 sm:p-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hello, I would like to talk about..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-900 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
