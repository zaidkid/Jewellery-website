'use client';

import { Sparkle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section
      className="bg-[#f8f3eb] text-neutral-800 font-serif py-32 px-6 md:px-12 lg:px-24"
      id="about"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* ✨ Glowing Corners */}
        <div className="absolute top-0 left-0 w-12 h-12 bg-pink-300 rounded-full blur-2xl opacity-40" />
        <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-300 rounded-full blur-2xl opacity-40" />
        <div className="absolute bottom-0 left-0 w-12 h-12 bg-purple-300 rounded-full blur-2xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-12 h-12 bg-green-300 rounded-full blur-2xl opacity-40" />

        {/* 🟤 Glowing Box */}
        <div className="relative bg-white border-[3px] border-[#4B3621] shadow-2xl rounded-3xl p-10 md:p-16 space-y-24 overflow-hidden z-10">
          {/* Heading */}
          <div className="text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-display"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About <span className="text-[#7c2b28]">Jewelora</span>
            </motion.h2>
            <motion.div
              className="flex justify-center mt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Sparkle size={32} className="text-[#e44e47] animate-pulse" />
            </motion.div>
          </div>

          {/* Sections */}
          {[
            {
              title: null,
              delay: 0.1,
              content: (
                <>
                  <p>
                    <strong>Jewelora</strong> is India's leading destination for <strong>Premium Artificial Jewellery</strong>, combining timeless designs with modern craftsmanship. Our platform brings together elegance, affordability, and artistic expression — giving every woman the chance to sparkle every day.
                  </p>
                  <p>
                    Whether you're dressing up for a wedding, attending a casual outing, or looking for daily wear accents, Jewelora offers the perfect piece. We are proud to design accessories that mirror real jewelry in beauty, yet remain light on the wallet.
                  </p>
                  <p>
                    We focus on <strong>design variety, long-lasting finish, skin-safe materials, and expressive styles</strong>. From intricate bridal sets to minimal office-wear studs, every piece reflects attention to detail, quality, and aesthetic value.
                  </p>
                </>
              ),
            },
            {
              title: 'Why Choose Artificial Jewelry?',
              delay: 0.2,
              content: (
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Affordability:</strong> Get the look of precious metals and gemstones without the high price tag.</li>
                  <li><strong>Versatility:</strong> Perfect for ethnic wear, western outfits, weddings, parties, workwear, and travel.</li>
                  <li><strong>Safe to Wear:</strong> Hypoallergenic materials, nickel-free plating, and skin-safe finishes.</li>
                  <li><strong>Trendy & Seasonal:</strong> Stay updated with ever-evolving fashion trends — without commitment.</li>
                  <li><strong>Lightweight & Comfortable:</strong> Designed for all-day wear with comfort in mind.</li>
                </ul>
              ),
            },
            {
              title: 'Types of Jewelry We Offer',
              delay: 0.3,
              content: (
                <>
                  <p>We curate a wide range of categories that suit every taste and occasion:</p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li><strong>Earrings:</strong> Studs, chandbalis, jhumkas, hoops, danglers, and tassel earrings for every mood.</li>
                    <li><strong>Necklaces:</strong> Chokers, pendants, layered chains, statement neckpieces, and antique sets.</li>
                    <li><strong>Rings:</strong> Adjustable, stackable, cocktail, minimalistic, and bridal finger rings.</li>
                    <li><strong>Bracelets:</strong> Kada, cuff, charm, chain, and bangle-style artificial bracelets.</li>
                    <li><strong>Anklets:</strong> Delicate chain anklets, charm ghungroos, oxidised silver styles, and more.</li>
                    <li><strong>Brooches & Hair Accessories:</strong> Elegant pins, clips, and statement pieces.</li>
                    <li><strong>Bridal Jewelry Sets:</strong> Full bridal kits including maang tikka, nath, chokers, haathphool, and earrings.</li>
                  </ul>
                </>
              ),
            },
            {
              title: 'What Makes Jewelora Special?',
              delay: 0.4,
              content: (
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Handpicked Designs:</strong> Curated by our in-house fashion stylists and artisans.</li>
                  <li><strong>Premium Plating:</strong> Long-lasting polish with gold, silver, rose gold, and oxidised finishes.</li>
                  <li><strong>Quality Assurance:</strong> Each piece is quality-checked and crafted with care.</li>
                  <li><strong>Fast Delivery:</strong> Pan-India shipping with secure packaging.</li>
                  <li><strong>Dedicated Support:</strong> Hassle-free returns and personalized customer care.</li>
                </ul>
              ),
            },
            {
              title: null,
              delay: 0.5,
              content: (
                <>
                  <p>
                    At Jewelora, we believe jewelry is not just about beauty — it&rsquo;s about self-expression.
                    Explore our ever-growing catalog and find your sparkle, no matter the occasion.
                  </p>
                  <p className="mt-4 font-semibold text-[#7c2b28]">
                    Discover your story. Wear your statement. Only at Jewelora.
                  </p>
                </>
              ),
            },
          ].map(({ title, delay, content }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay }}
              className="space-y-6 text-lg text-gray-800"
            >
              {title && <h3 className="text-2xl font-bold text-[#7c2b28]">{title}</h3>}
              {content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
