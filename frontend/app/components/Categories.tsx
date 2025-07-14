'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';

const allCategories = [
  { title: 'Earrings', image: '/categories/earrings.jpg', badge: 'New', metal: 'Gold', price: 'Under ₹1000', tag: 'Modern' },
  { title: 'Necklaces', image: '/categories/necklace.webp', badge: 'Bestseller', metal: 'Silver', price: '₹1000 - ₹3000', tag: 'Traditional' },
  { title: 'Rings', image: '/categories/rings.jpg', badge: 'Trending', metal: 'Platinum', price: 'Above ₹3000', tag: 'Modern' },
  { title: 'Bracelets', image: '/categories/bracelets.webp', badge: 'Limited', metal: 'Gold', price: '₹1000 - ₹3000', tag: 'Traditional' },
  { title: 'Bangles', image: '/categories/bangles.jpg', badge: 'Hot', metal: 'Silver', price: 'Under ₹1000', tag: 'Modern' },
  { title: 'Brooches', image: '/categories/brooches.jpg', badge: 'Elegant', metal: 'Gold', price: 'Above ₹3000', tag: 'Traditional' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function CategoriesPage() {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    metal: new Set<string>(),
    price: new Set<string>(),
    tag: new Set<string>(),
  });

  const toggleFilter = (type: 'metal' | 'price' | 'tag', value: string) => {
    setFilters((prev) => {
      const updated = new Set(prev[type]);
      updated.has(value) ? updated.delete(value) : updated.add(value);
      return { ...prev, [type]: updated };
    });
  };

  const filteredCategories = useMemo(() => {
    return allCategories.filter((cat) => {
      const metalMatch = !filters.metal.size || filters.metal.has(cat.metal);
      const priceMatch = !filters.price.size || filters.price.has(cat.price);
      const tagMatch = !filters.tag.size || filters.tag.has(cat.tag);
      return metalMatch && priceMatch && tagMatch;
    });
  }, [filters]);

  return (
    <main className="relative bg-[#efeee2] text-gray-800 min-h-screen px-4 sm:px-6 py-20 overflow-x-hidden">
      {/* Heading and Quote */}
      <div className="text-center mb-10 px-2">
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-gray-900">
          Shop by <span className="text-[#7c2b28]">Category</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 italic mt-2">
          “Jewelry is like the perfect spice – it always complements what’s already there.”
        </p>
      </div>

      {/* Filter Button */}
      <div className="mb-10 flex justify-start">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-[#7c2b28] text-white rounded-full hover:bg-[#611d1b] transition"
          onClick={() => setFilterOpen(true)}
        >
          <FaFilter /> Filters
        </button>
      </div>

      {/* Filter Sidebar */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-sky-200/40 backdrop-blur-[6px] z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFilterOpen(false)}
            />

            <motion.div
              className="fixed top-0 left-0 w-80 h-full z-50 p-6 bg-white/20 backdrop-blur-lg shadow-xl border-r border-white/30 rounded-r-xl"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <h2 className="text-2xl font-bold text-[#7c2b28] mb-6 border-b border-[#7c2b28]/30 pb-2">Filter By</h2>

              <div className="space-y-8 text-sm text-gray-800">
                <div>
                  {(['metal', 'price', 'tag'] as const).map((type) => {
                    const values = Array.from(new Set(allCategories.map((c) => c[type])));
                    return (
                      <motion.div
                        key={type}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <h3 className="font-semibold text-md capitalize mb-3 border-l-4 border-[#7c2b28] pl-2">{type}</h3>
                        <div className="space-y-2">
                          {values.map((val) => (
                            <label
                              key={val}
                              className="flex items-center gap-3 cursor-pointer hover:text-[#7c2b28] transition"
                            >
                              <input
                                type="checkbox"
                                checked={filters[type].has(val)}
                                onChange={() => toggleFilter(type, val)}
                                className="w-4 h-4 text-[#7c2b28] bg-white border border-gray-300 rounded focus:ring-[#7c2b28] transition"
                              />
                              <span>{val}</span>
                            </label>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setFilterOpen(false)}
                className="mt-10 w-full bg-gradient-to-r from-[#7c2b28] to-[#611d1b] text-white font-semibold py-2 rounded-full shadow-md hover:shadow-lg transition"
              >
                Apply Filters
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden bg-white/50 border border-white/30 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-[1.03]"
            >
              <div className="overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={500}
                  height={400}
                  className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-3 left-3 bg-[#7c2b28] text-white text-xs px-3 py-1 rounded-full shadow">
                {cat.badge}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold">{cat.title}</h2>
                <p className="text-sm text-gray-600">Explore →</p>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center text-lg font-medium text-gray-600">
            No results match selected filters.
          </div>
        )}
      </div>
    </main>
  );
}
