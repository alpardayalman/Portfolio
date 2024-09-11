"use client";  // Enable client-side code
import { motion } from 'framer-motion';
import Link from 'next/link';
import RedButton from '@/components/RedButton';

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16 px-4 lg:py-24">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-4xl lg:text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Alp Arda Yalman, a Passionate Developer
          </motion.h1>
          <motion.p
            className="mt-4 text-lg lg:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3 }}
          >
            I build modern web applications and design user-friendly experiences. Check out my work below!
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            <Link href="/projects" className="bg-white text-purple-600 hover:bg-gray-200 transition px-6 py-3 text-lg font-semibold rounded-md">
              See My Work
            </Link>
          </motion.div>
        </div>
      </section>


      {/* Testimonials/Clients Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <RedButton/>
          <h2 className=" mb-8 text-gray-800"></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div key={testimonial} className="bg-white shadow-md rounded-lg p-6">
                <p className="text-gray-600 italic">
                  "This is an amazing developer who exceeded expectations."
                </p>
                <div className="mt-4 text-gray-800 font-bold">John Doe, CEO of XYZ</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Alp A. Yalman All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
