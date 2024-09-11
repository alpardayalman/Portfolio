"use client"; // Ensure this is client-side

import { useState } from 'react'; // Manage mobile menu state
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and Close Icons


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-black-500 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.div
          className="text-white text-2xl font-semibold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href={`/`} className="text-white text-lg font-medium hover:text-gray-200 transition duration-300">
          Alp A. Yalman
          </Link>
        </motion.div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? (
              <HiX className="w-8 h-8" /> // Close icon when menu is open
            ) : (
              <HiMenu className="w-8 h-8" /> // Hamburger icon when menu is closed
            )}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex space-x-8">
          {["About", "Projects", "Contact"].map((link) => (
            <motion.li key={link}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={`/${link.toLowerCase()}`} className="text-white text-lg font-medium hover:text-gray-200 transition duration-300">
                {link}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu (Visible when isOpen is true) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:hidden bg-purple-700"
        >
          <ul className="flex flex-col space-y-4 py-4 px-6">
            {["About", "Projects", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="text-white text-lg font-medium hover:text-gray-200 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
