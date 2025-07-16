'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(value);

export default function BagPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Gold Plated Necklace',
      price: 1499,
      quantity: 1,
      image: '/products/necklace.jpg',
    },
    {
      id: 2,
      name: 'Kundan Earrings',
      price: 799,
      quantity: 2,
      image: '/products/earrings.jpg',
    },
  ]);

  const updateQuantity = (id: number, qty: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 100 : 0;
  const totalAmount = subtotal + shipping;

  return (
    <main className="min-h-screen py-20 px-4 md:px-20 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-extrabold font-serif mb-20 text-center text-black">Shopping Bag</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <Image
            src="/empty-cart.png"
            alt="Empty Cart"
            width={200}
            height={200}
            className="mx-auto mb-4"
          />
          <p className="text-lg text-gray-600">Your bag is empty.</p>
          <Link href="/#collections" className="text-pink-600 hover:underline text-sm mt-2 block">
            ← Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-6">
            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={`cart-item-${item.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row items-center bg-white p-5 rounded-2xl shadow-sm border"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-xl object-cover border w-full md:w-[100px] h-[100px]"
                  />
                  <div className="flex-1 md:ml-6 mt-4 md:mt-0 w-full">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">{formatCurrency(item.price)}</p>
                    <div className="flex items-center mt-3 gap-3">
                      <span>Qty:</span>
                      <div className="flex items-center gap-2 border px-2 py-1 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 mt-4 md:mt-0 md:ml-4 text-sm"
                    aria-label={`Remove ${item.name}`}
                  >
                    Remove
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="bg-white p-10 rounded-xl shadow-md border md:w-[400px] sticky top-24">
            <h3 className="text-2xl font-bold font-serif mb-4 text-black">Order Summary</h3>
            <div className="flex justify-between mb-2 text-sm">
              <span>Total Items:</span>
              <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            <div className="flex justify-between mb-2 text-sm">
              <span>Subtotal:</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between mb-2 text-sm">
              <span>Shipping:</span>
              <span>{formatCurrency(shipping)}</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between font-bold text-base">
              <span>Total:</span>
              <span>{formatCurrency(totalAmount)}</span>
            </div>
            <button className="w-full mt-6 bg-[#7c2b28] text-white py-2 px-4 rounded-xl hover:bg-[#5a1e1c] transition">
              Proceed to Checkout
            </button>
            <Link href="/#collections" className="block text-center mt-4 text-pink-600 hover:underline text-sm">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      )}

    </main>
  );
}
