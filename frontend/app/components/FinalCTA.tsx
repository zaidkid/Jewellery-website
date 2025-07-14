'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section
      className="relative bg-[#fefcf9] text-black text-center py-24 px-8 overflow-hidden"
      style={{
        backgroundImage: 'url(/textures/shine-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* 🔆 Animated Glow Background */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500 rounded-full opacity-20 blur-[150px] z-0"
        style={{
          animation: 'pulseGlow 6s ease-in-out infinite',
        }}
      />

      {/* 🌟 CTA Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
        >
          Ready to <span className="text-[#7c2b28]">Shine?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-800 mb-10"
        >
          Dive into our handcrafted collections and find jewellery that defines your style.
        </motion.p>

        <motion.a
          href="#collections"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-block bg-amber-300 text-black px-8 py-4 rounded-full text-base font-semibold shadow-md overflow-hidden group transition duration-300"
        >
          <span className="relative z-10">Explore Now</span>
          <span className="absolute top-0 left-0 w-full h-full bg-white opacity-10 blur-[50px] transition-opacity group-hover:opacity-20"></span>
        </motion.a>
      </div>

      {/* ✨ Gradient Underline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
      />
    </section>
  );
}
