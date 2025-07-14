'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Typewriter } from 'react-simple-typewriter';
import { useCallback } from 'react';
import type { Engine } from 'tsparticles-engine';

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden text-white flex flex-col justify-center items-center px-6 text-center"
      id="hero"
    >
      {/* 🖼 Background shimmer video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 object-cover w-full h-full opacity-100 z-0"
      >
        <source src="/gold-shimmer.mp4" type="video/mp4" />
      </video>

      {/* ✨ Particle sparkles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: { color: 'transparent' },
          particles: {
            number: { value: 40 },
            size: { value: 1.5 },
            color: { value: '#ffffff' },
            opacity: { value: 0.2 },
            move: { enable: true, speed: 0.3 },
            shape: { type: 'circle' },
          },
        }}
      />

      {/* 💎 Main Hero Content */}
      <div className="relative z-10 py-28">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold font-display mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Crafted for <br />
          <span className="text-white">
            <Typewriter
              words={['Luxury', 'Timeless Beauty', 'Handcrafted Elegance']}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-xl text-gray-200 max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Discover radiant designs made to celebrate your brilliance.
        </motion.p>

        <motion.a
          href="#collections"
          whileHover={{ scale: 1.08, boxShadow: '0 0 20px rgba(255,255,255,0.5)' }}
          className="bg-white text-black px-8 py-3 rounded-full font-semibold transition-all shadow-xl"
        >
          Shop Now
        </motion.a>
      </div>

      {/* ⬇️ Scroll-down indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={28} className="text-white opacity-60" />
      </motion.div>
    </section>
  );
}
