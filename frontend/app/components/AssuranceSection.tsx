'use client';

import { motion } from 'framer-motion';
import { FaHammer, FaHeart, FaGem } from 'react-icons/fa';

export default function AssuranceSection() {
  return (
    <section className="bg-[#fefcf9] text-[#3b2f2f] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3b2f2f]">
            Jewelora <span className="text-[#7c2b28]">Assurance</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-medium">
            Crafted with care, designed to inspire — trusted by thousands of elegant souls across India.
          </p>
        </motion.div>

        {/* Right Icons Grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          {/* Point 1 */}
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-yellow-300 to-yellow-500 text-white flex items-center justify-center rounded-full shadow-lg">
              <FaHammer size={28} />
            </div>
            <h4 className="text-base font-semibold">Quality Craftsmanship</h4>
          </div>

          {/* Point 2 */}
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-rose-300 to-pink-500 text-white flex items-center justify-center rounded-full shadow-lg">
              <FaHeart size={26} />
            </div>
            <h4 className="text-base font-semibold">Ethically Sourced</h4>
          </div>

          {/* Point 3 */}
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-amber-300 to-yellow-600 text-white flex items-center justify-center rounded-full shadow-lg">
              <FaGem size={28} />
            </div>
            <h4 className="text-base font-semibold">100% Transparency</h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
