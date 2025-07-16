'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const router = useRouter();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-[#f4f0ec] to-[#d4dde0] py-36 px-6 md:px-20 relative">
        {/* 🔙 Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-6 left-6 flex items-center gap-2 text-sm px-2 py-16  transition z-20"
        >
          <FaArrowLeft /> Back
        </button>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg mt-8"
        >
          <h1 className="text-3xl font-bold mb-6 text-black font-serif text-center">
            Get in Touch
          </h1>
          <p className="text-gray-700 text-center mb-10">
            We'd love to hear from you. Whether you have a question about products, pricing, or anything else, our team is ready to help.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="space-y-6 text-gray-700">
              <div className="flex items-center gap-4">
                <FaPhone className="text-black" />
                <span>+91 0001100110</span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-black" />
                <span>xyz@gmail.com</span>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-black mt-1" />
                <span>Lucknow, Uttar Pradesh<br />India - 226010</span>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-[#5a1e1c] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
