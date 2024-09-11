'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
    { id: 1, title: 'Project One', description: 'A cool project about web development.' },
    { id: 2, title: 'Project Two', description: 'A mobile app built using React Native.' },
  ];
  
  export default function Projects() {
    return (
      <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <motion.div
              key={project}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 bg-purple-600"></div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">Project {project}</h3>
                <p className="mt-2 text-gray-600">A short description of this project goes here.</p>
                <Link href={`/projects/${project}`} className="text-purple-600 mt-4 inline-block">
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </section>
    );
  }
  