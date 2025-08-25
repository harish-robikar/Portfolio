'use client';

import React, { useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // your service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // your template ID
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!   // your public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email error:", error);
          setStatus("❌ Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow-md rounded-lg">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
          {status && <p className="text-center mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
