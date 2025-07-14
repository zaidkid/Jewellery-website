'use client';

import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#4B3621] text-white pt-20 pb-10 px-6 relative overflow-hidden">
      {/* ✨ Soft Glow Background */}
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

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* 💎 Brand Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold font-serif mb-4 text-white">Jewelora</h2>
          <p className="text-gray-200 text-sm font-serif leading-relaxed">
            Elevate your elegance with handcrafted artificial jewelry made to dazzle and define your unique shine.
          </p>
        </motion.div>

        {/* 🧭 Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold font-serif mb-5">Quick Links</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            {[
              { label: 'Home', href: '#home' },
              { label: 'Collections', href: '#collections' },
              { label: 'About', href: '#about' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative group transition hover:text-white"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 🌐 Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold font-serif mb-5">Connect With Us</h3>
          <div className="flex justify-center md:justify-start gap-6 text-xl text-gray-300">
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-400 transition duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-400 transition duration-300 hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-cyan-400 transition duration-300 hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </motion.div>
      </div>

      {/* 📜 Footer Bottom */}
      <div className="relative z-10 mt-14 border-t border-[#6b4d33] pt-6 text-center text-sm text-gray-300 tracking-wide">
        © {new Date().getFullYear()}{' '}
        <span className="text-white font-semibold">Jewelora</span>. All rights reserved.
      </div>
    </footer>
  );
}
