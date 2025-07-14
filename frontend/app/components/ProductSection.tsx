'use client';

import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Gold Hoop Earrings',
    price: '₹6,499',
    image: '/products/earring1.jpg',
    description:
      'Elegant gold hoop earrings handcrafted with precision. Perfect for evening elegance or daily sparkle.',
  },
  {
    id: 2,
    name: 'Elegant Necklace',
    price: '₹9,299',
    image: '/products/necklace1.jpg',
    description:
      'A stunning piece featuring delicate stones and polished finish, designed to elevate your grace.',
  },
  {
    id: 3,
    name: 'Crystal Studded Ring',
    price: '₹4,999',
    image: '/products/ring1.jpg',
    description:
      'A ring that sparkles with every move. Modern yet timeless, designed for those who shine bright.',
  },
  {
    id: 4,
    name: 'Charm Bracelet',
    price: '₹3,799',
    image: '/products/bracelet1.jpg',
    description:
      'A playful charm bracelet with modern accents. Carry elegance with you wherever you go.',
  },
];

export default function ProductShowcase() {
  return (
    <section className="px-6 py-32 bg-white text-black relative overflow-hidden">
      {/* 🌟 Floating Sparkle Background */}
      <motion.div
        className="absolute -top-20 right-1/3 w-[600px] h-[600px] bg-[#f5c0c0] blur-[150px] opacity-10 rounded-full pointer-events-none z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 text-center mb-20">
        <motion.h2
          className="text-5xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="text-[#7c2b28]">Products</span>
        </motion.h2>
        <motion.p
          className="text-lg font-medium mt-2 text-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Limited editions with luxurious craftsmanship
        </motion.p>
      </div>

      <div className="relative z-10 space-y-32">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            className={`flex flex-col md:flex-row items-center ${
              idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } gap-12 group`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            {/* ✨ Image Section */}
            <motion.div
              className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-xl relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={500}
                className="w-full h-[400px] object-cover rounded-3xl transition-transform duration-500 group-hover:scale-105"
              />

              {/* Sparkle Overlay */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                animate={{
                  background:
                    'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 40%)',
                }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* 📝 Content Section */}
            <motion.div
              className="w-full md:w-1/2 space-y-5"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold">{product.name}</h3>
              <p className="text-lg text-black font-medium">{product.description}</p>
              <p className="text-2xl font-extrabold text-[#7c2b28]">{product.price}</p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 15px #7c2b28',
                }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-[#7c2b28] text-white font-semibold rounded-full hover:bg-[#611d1b] transition"
              >
                <ShoppingCart size={18} /> Add to Cart
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
