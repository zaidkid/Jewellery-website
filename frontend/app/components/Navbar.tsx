'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHeart,
  FaShoppingBag,
  FaUser,
  FaSearch,
  FaHome,
  FaInfoCircle,
  FaPhone,
} from 'react-icons/fa';
import { useUser } from '../context/UserContext';
import toast from 'react-hot-toast';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTop, setIsTop] = useState(true);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const router = useRouter();
  const { user, setUser } = useUser();

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'home', icon: <FaHome /> },
    { label: 'Collections', href: '#collections', id: 'collections', icon: <FaHeart /> },
    { label: 'About', href: '#about', id: 'about', icon: <FaInfoCircle /> },
    { label: 'Contact', href: '#contact', id: 'contact', icon: <FaPhone /> },
  ];

  const handleSearch = () => {
    console.log('Searching:', searchQuery);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    toast.success('Logged out successfully 👋');
    router.push('/login');
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
      {/* ✅ Top Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 shadow backdrop-blur-md ${
          isTop ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        {/* ✅ Mobile Top Navbar */}
        <div className="flex items-center justify-between px-4 py-3 md:hidden">
          <button onClick={() => setIsOpen(true)} className="text-2xl font-bold">
            ☰
          </button>

          <h1
            className="text-3xl font-extrabold tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif', color: '#7c2b28' }}
          >
            Jewelora
          </h1>

           <div className="flex items-center gap-4 text-xl">
            <button onClick={() => setIsSearchModalOpen(true)} className="hover:text-[#7c2b28]">
              <FaSearch />
            </button>
            <a href="/bag" className="hover:text-[#7c2b28]">
              <FaShoppingBag />
            </a>
          </div>
        </div>

        {/* ✅ Desktop Navbar */}
        <div className="max-w-7xl mx-auto px-4 py-4 hidden md:flex items-center justify-between relative">
          <h1
            className="text-4xl font-extrabold tracking-wide"
            style={{ fontFamily: 'Playfair Display, serif', color: '#7c2b28' }}
          >
            Jewelora
          </h1>

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

            <div className={`flex gap-4 text-xl ml-6 ${isTop ? 'text-white' : 'text-black'}`}>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="text-base font-bold text-red-600 hover:underline"
                >
                  Log out
                </button>
              ) : (
                <a href="/login" className="hover:text-gray-700" aria-label="Login">
                  <FaUser />
                </a>
              )}
              <a href="#wishlist" className="hover:text-rose-500" aria-label="Wishlist">
                <FaHeart />
              </a>
              <a href="/bag" className="hover:text-emerald-500" aria-label="Bag">
                <FaShoppingBag />
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* ✅ Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blurry Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[998]"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 z-[999] w-64 bg-white shadow-lg px-6 py-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#7c2b28] font-serif">Menu</h2>
                <button onClick={() => setIsOpen(false)} className="text-2xl text-gray-800">
                  &times;
                </button>
              </div>

              <ul className="flex flex-col gap-5 text-base font-medium">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-2 py-1 rounded-md transition ${
                        activeSection === link.id
                          ? 'text-[#7c2b28] bg-gray-100'
                          : 'text-gray-800 hover:text-[#7c2b28]'
                      }`}
                    >
                      <span className="text-lg">{link.icon}</span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <hr className="my-6 border-gray-300" />

              <div className="mt-auto">
                {user ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="w-full py-2 px-4 rounded-full bg-red-100 text-red-600 font-semibold hover:bg-red-200 transition"
                  >
                    Log out
                  </button>
                ) : (
                  <a
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="w-full block py-2 px-4 rounded-full bg-blue-500 text-white text-center font-semibold hover:bg-[#7c2b28] transition"
                  >
                    Login
                  </a>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ✅ Bottom Navbar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t shadow-lg flex justify-around items-center py-2 text-xs">
        {[
          { id: 'home', icon: <FaHome />, label: 'Home', href: '#hero' },
          { id: 'collections', icon: <FaHeart />, label: 'Collection', href: '#collections' },
          { id: 'bag', icon: <FaShoppingBag />, label: 'Bag', href: '/bag' },
        ].map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`flex flex-col items-center ${
              activeSection === item.id ? 'text-[#7c2b28]' : 'text-black'
            }`}
          >
            <div className="text-xl">{item.icon}</div>
            <span className="text-[10px] mt-1">{item.label}</span>
          </a>
        ))}

        <button
          type="button"
          onClick={() => setIsSearchModalOpen(true)}
          className="flex flex-col items-center text-gray-700"
        >
          <FaSearch className="text-xl" />
          <span className="text-[10px] mt-1">Search</span>
        </button>
      </nav>

      {/* ✅ Search Modal (Mobile) */}
      <AnimatePresence>
        {isSearchModalOpen && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-white px-4 py-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg text-black font-serif font-bold">Search</h2>
              <button
                type="button"
                onClick={() => setIsSearchModalOpen(false)}
                className="text-2xl text-black"
              >
                &times;
              </button>
            </div>

            <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 shadow">
              <FaSearch className="text-black mr-2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                autoFocus
                className="w-full outline-none text-sm text-black"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
