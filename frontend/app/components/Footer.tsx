'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaArrowUp,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>('quick');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-white text-white pt-16 pb-10 px-6 relative overflow-hidden">
      {/* ✨ Glow Background */}
      <motion.div
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white rounded-full blur-[140px] z-0 opacity-20"
        initial={{ opacity: 0.15, scale: 0.9 }}
        animate={{ opacity: 0.25, scale: 1.05 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto space-y-10 text-black">

        {/* SECTION: Quick Links */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('quick')}
          >
            <h2 className="text-l font-semibold">Quick Links</h2>
            {openSection === 'quick' ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSection === 'quick' && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-2 text-sm text-black"
            >
              <li><Link href="/" className="hover:text-black">Home</Link></li>
              <li><Link href="/collections" className="hover:text-black">Collections</Link></li>
              <li><Link href="/about" className="hover:text-black">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
            </motion.ul>
          )}
        </div>

        {/* SECTION: Customer Service */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('service')}
          >
            <h2 className="text-l font-semibold">Help & Info</h2>
            {openSection === 'service' ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSection === 'service' && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-2 text-sm text-black"
            >
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-white">Shipping Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/returns" className="hover:text-white">Return & Refund</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
            </motion.ul>
          )}
        </div>

        {/* SECTION: Our Store */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection('store')}
          >
            <h2 className="text-l font-semibold">Our Store</h2>
            {openSection === 'store' ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSection === 'store' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-sm text-black space-y-2"
            >
              <p>📞 +91 0001100110</p>
              <p>📧 xyz@gmail.com</p>
              <p>📍 Lucknow, Uttar Pradesh</p>
            </motion.div>
          )}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl text-black pt-6 border-t">
          <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition"><FaInstagram /></a>
          <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition"><FaFacebook /></a>
          <a href="#" aria-label="Twitter" className="hover:text-cyan-400 transition"><FaTwitter /></a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm py-8 px-4 text-black pt-4">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Jewelora</span>. All rights reserved.
        </div>
      </div>

      {/* 🔝 Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 right-5 p-3 bg-[#7c2b28] text-white rounded-full shadow-lg hover:bg-black transition z-50"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
