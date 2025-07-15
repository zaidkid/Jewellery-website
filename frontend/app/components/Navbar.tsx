'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaHome,
  FaInfoCircle,
  FaPhone
} from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTop, setIsTop] = useState(true);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'home', icon: <FaHome /> },
    { label: 'Collections', href: '#collections', id: 'collections', icon: <FaHeart /> },
    { label: 'About', href: '#about', id: 'about', icon: <FaInfoCircle /> },
    { label: 'Contact', href: '#contact', id: 'contact', icon: <FaPhone /> },
  ];

  const handleSearch = () => {
    console.log('Searching:', searchQuery);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsTop(scrollY < window.innerHeight - 100);

      const offsetY = scrollY + 150;
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (
          section &&
          offsetY >= (section as HTMLElement).offsetTop &&
          offsetY < (section as HTMLElement).offsetTop + (section as HTMLElement).offsetHeight
        ) {
          setActiveSection(link.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 shadow backdrop-blur-md ${
          isTop ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        {/* ✅ Mobile Top Navbar */}
        <div className="flex items-center justify-between px-4 py-3 md:hidden">
          {/* Logo */}
          <h1
            className="text-3xl font-extrabold tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif', color: '#7c2b28' }}
          >
            Jewelora
          </h1>

          {/* Search bar */}
          <div className="flex-1 mx-4">
            <div className="bg-gray-100 px-3 py-2 rounded-full flex items-center">
              <FaSearch className="text-black mr-2" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full text-sm bg-transparent outline-none text-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Login/User */}
          <a href="#login" className="text-gray-700 text-xl">
            <FaUser />
          </a>
        </div>

        {/* ✅ Desktop Navbar (Unchanged) */}
        <div className="max-w-7xl mx-auto px-4 py-4 hidden md:flex items-center justify-between relative">
          {/* Logo */}
          <h1
            className="text-4xl font-extrabold tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif', color: '#7c2b28' }}
          >
            Jewelora
          </h1>

          {/* Search bar */}
          <div className="flex justify-center ml-10 flex-1">
            <div className="w-96 max-w-lg bg-white border border-black px-5 py-2 rounded-full shadow-sm flex items-center">
              <input
                type="text"
                placeholder="Search for jewellery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none w-full text-sm text-black"
              />
              <button onClick={handleSearch} className="text-black hover:text-[#7c2b28] text-lg">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="flex items-center gap-6 ml-12">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`relative group transition font-bold ${
                  activeSection === link.id
                    ? 'text-[#7c2b28]'
                    : isTop
                    ? 'text-white hover:text-[#7c2b28]'
                    : 'text-black hover:text-[#7c2b28]'
                }`}
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#7c2b28] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Icons */}
            <div className={`flex gap-4 text-xl ml-6 ${isTop ? 'text-white' : 'text-black'}`}>
              <a href="#login" className="hover:text-gray-700" aria-label="Login">
                <FaUser />
              </a>
              <a href="#wishlist" className="hover:text-rose-500" aria-label="Wishlist">
                <FaHeart />
              </a>
              <a href="#cart" className="hover:text-emerald-500" aria-label="Cart">
                <FaShoppingCart />
              </a>
            </div>
          </nav>
        </div>

        {/* ✅ Mobile Drawer Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black border-t border-gray-200 shadow"
            >
              <ul className="flex flex-col items-center gap-6 py-6">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-semibold ${
                        activeSection === link.id
                          ? 'text-[#7c2b28]'
                          : 'text-gray-300 hover:text-[#7c2b28]'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 w-9/12">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent outline-none text-sm w-full"
                  />
                  <button onClick={handleSearch} className="text-black hover:text-[#7c2b28]">
                    <FaSearch />
                  </button>
                </div>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* ✅ Bottom Navigation (Mobile only) */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t shadow flex justify-around items-center text-xs py-2">
        {[
          { id: 'home', label: 'Home', icon: <FaHome />, href: '#hero' },
          { id: 'collections', label: 'Shop', icon: <FaHeart />, href: '#collections' },
          { id: 'Bag', label: 'Bag', icon: <FaShoppingCart />, href: '#Bag' },
          { id: 'contact', label: 'Contact', icon: <FaPhone />, href: '#contact' },
        ].map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`flex flex-col items-center ${
              activeSection === item.id ? 'text-[#7c2b28]' : 'text-gray-500'
            }`}
          >
            <div className="text-lg">{item.icon}</div>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
