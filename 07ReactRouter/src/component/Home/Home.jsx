import React from 'react';

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Main Section */}
      <section className="relative text-black rounded-lg sm:mx-16 mx-4 sm:py-16 py-10 flex flex-col sm:flex-row items-center sm:items-start">
        {/* Text Section */}
        <div className="relative z-10 max-w-lg px-4 sm:px-6 lg:px-8 sm:text-left text-center">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Software Developer{' '}
            <span className="block text-2xl sm:text-4xl text-blue-600">
              At Techcanopy
            </span>
          </h2>
        </div>

        {/* Background Image Section */}
        <div className="relative z-0 mt-10 sm:mt-0 sm:ml-10">
          <img
            className="w-64 sm:w-96 object-contain"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="Remote work illustration"
          />
        </div>
      </section>

      {/* Resume Image Section */}
      <section className="grid place-items-center sm:mt-20 mt-12">
        <a
          href="https://drive.google.com/file/d/14qGZ8Zqvriq0OLz0sFa47ihZsS8v0fOc/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sm:w-96 w-48 transition-transform hover:scale-105 duration-300"
            src="https://i.ibb.co/2M7rtLk/Remote1.png"
            alt="Resume thumbnail"
          />
        </a>
      </section>

      {/* Resume Heading */}
      <section className="py-10">
        <h1 className="text-center text-xl sm:text-5xl font-medium">
          My Resume
        </h1>
      </section>
    </div>
  );
}
