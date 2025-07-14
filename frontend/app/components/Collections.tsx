'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const collections = [
  {
    title: 'The Festive Edit',
    image: '/collections/festive.jpg',
    link: '#festive',
    description: 'Perfect for Diwali, Eid & Celebrations',
  },
  {
    title: 'Office Elegance',
    image: '/collections/office.jpg',
    link: '#office',
    description: 'Minimalist Jewelry for Your Work Wear',
  },
  {
    title: 'Boho Vibes',
    image: '/collections/boho.jpg',
    link: '#boho',
    description: 'Earthy, Chunky & Bold Statement Pieces',
  },
  {
    title: 'Minimal Gold',
    image: '/collections/minimal.jpg',
    link: '#minimal',
    description: 'Dainty Pieces for Everyday Shine',
  },
  {
    title: 'Wedding Glamour',
    image: '/collections/wedding.jpg',
    link: '#wedding',
    description: 'Complete Looks for Bridal & Sangeet',
  },
  {
    title: 'Monsoon Favorites',
    image: '/collections/monsoon.jpg',
    link: '#monsoon',
    description: 'Trendy, Water-Friendly & Stylish Picks',
  },
];


export default function CollectionsPage() {
  return (
    <section className="bg-[#fffaf5] text-black py-32 px-6 md:px-12 lg:px-20"
    id="collections"
    >
      {/* Hero Heading */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-5xl font-extrabold mb-4">Our Signature <span className="text-[#7c2b28]">Collections</span></h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our diverse range of designer artificial jewelry crafted to elevate your every occasion.
        </p>
      </motion.div>

      {/* Collections Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {collections.map((item, i) => (
          <motion.div
            key={item.title}
            className="bg-white rounded-3xl shadow-xl overflow-hidden group relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={item.link}>
              <div className="relative w-full h-[300px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              </div>
              <div className="p-6 relative z-20">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Final CTA */}
      <motion.div
        className="text-center mt-28"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="#all-products"
          className="inline-block mt-4 px-8 py-4 bg-[#7c2b28] text-white font-semibold text-lg rounded-full hover:bg-[#611d1b] transition duration-300"
        >
          View All Products
        </Link>
      </motion.div>
    </section>
  );
}
