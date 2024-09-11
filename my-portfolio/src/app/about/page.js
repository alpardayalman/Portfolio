'use client';

const projects = [
    { id: 1, title: 'Project One', description: 'A cool project about web development.' },
    { id: 2, title: 'Project Two', description: 'A mobile app built using React Native.' },
  ];
  
  export default function Projects() {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800">
            About Me
          </h2>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto text-gray-600">
            I am a passionate full-stack developer with a focus on creating modern, performant web applications.
            I specialize in technologies like React, Next.js, and Node.js to build scalable, user-friendly platforms.
          </p>
        </div>
      </section>
    );
  }
  