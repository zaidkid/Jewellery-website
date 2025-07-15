'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in:', { email, password });
    // TODO: Add your auth logic here (API call)
  };

  return (
    <main className="min-h-screen bg-gradient-to-b bg-[#d4dde0] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-white  p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-black dark:text-black">
          Log in to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-black dark:text-black">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-white dark:text-black focus:outline-none focus:ring-2 focus:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-black dark:text-black">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-800 dark:bg-white dark:black focus:outline-none focus:ring-2 focus:ring-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between text-sm text-black dark:text-black">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <Link href="/forgot-password" className="text-blue-700 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-black-500 text-white font-semibold py-2 rounded-lg transition"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-center text-black dark:text-black mt-4">
          Don’t have an account?{' '}
          <Link href="/register" className="text-blue-700 hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </main>
  );
}
