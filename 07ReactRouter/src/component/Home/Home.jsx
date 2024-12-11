import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Main Section */}
      <section className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Software Developer{' '}
              <span className="hidden sm:block text-4xl">At Techcanopy</span>
            </h2>
          </div>
        </div>

        {/* Background Image Section */}
        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
          <img
            className="w-96"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="Remote work illustration"
          />
        </div>
      </section>

      {/* Resume Image Section */}
      <section className="grid place-items-center sm:mt-20">
        <a
          href="https://drive.google.com/file/d/14qGZ8Zqvriq0OLz0sFa47ihZsS8v0fOc/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="sm:w-96 w-48"
            src="https://i.ibb.co/2M7rtLk/Remote1.png"
            alt="Resume thumbnail"
          />
        </a>
      </section>

      {/* Resume Heading */}
      <section className="py-10">
        <h1 className="text-center text-2xl sm:text-5xl font-medium">My Resume</h1>
      </section>
    </div>
  );
}
