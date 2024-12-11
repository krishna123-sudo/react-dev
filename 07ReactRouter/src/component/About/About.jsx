import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-8 md:space-y-0 md:flex md:gap-8 lg:items-center lg:gap-16">
          <div className="md:w-5/12 lg:w-4/12">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2trxBht1JoAkMVkjxaMuGLq1s1yR-uXOWnQ&s"
              alt="Software Developer"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Software Developer at Techcanopy Software Labs
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              As a full-time Software Developer at Techcanopy Software Labs, I specialize in solving complex problems with creative and innovative solutions. I have a strong background in automation technologies, including Angular, React, Selenium, and WebDriver, which I leverage to drive efficiency and deliver high-quality solutions. My expertise extends to cloud infrastructure management using Linux and AWS, where I work to optimize system performance and enhance scalability.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              I am proficient in backend development with Node.js and Java, system monitoring using Grafana, and AWS for cloud solutions. My passion for mastering data structures and algorithms with C++ fuels my commitment to continuous learning and professional growth. I am always exploring new technologies to stay ahead of industry advancements.
            </p>
          </div>
        </div>
        <br></br>
        <div className="space-y-8 md:space-y-0 md:flex md:gap-8 lg:items-center lg:gap-16">
          <div className="md:w-5/12 lg:w-4/12">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2trxBht1JoAkMVkjxaMuGLq1s1yR-uXOWnQ&s"
              alt="Software Developer"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
            Former Intern at Techcanopy Software Labs
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            As a Software Developer at Techcanopy Software Labs, I specialize in solving complex problems with creative and innovative solutions. I have a strong background in automation technologies, including Angular, React, Selenium, and WebDriver, which I leverage to drive efficiency and deliver high-quality solutions. My expertise also extends to cloud infrastructure management using Linux and AWS, focusing on optimizing system performance and enhancing scalability.
            </p>
            {/* <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              I am proficient in backend development with Node.js and Java, system monitoring using Grafana, and AWS for cloud solutions. My passion for mastering data structures and algorithms with C++ fuels my commitment to continuous learning and professional growth. I am always exploring new technologies to stay ahead of industry advancements.
            </p> */}
          </div>
        </div>


        <br />

        <div className="space-y-8 md:space-y-0 md:flex md:gap-8 lg:items-center lg:gap-16">
          <div className="md:w-5/12 lg:w-4/12">
            <img
              src="https://images.cryptotask.org/eyJidWNrZXQiOiJjcnlwdG90YXNrLXB1YmxpYyIsImtleSI6IjM0NzY3XzE2NzUzNTk3NTE2NzVfNTUxMTI1LmpwZWciLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19fQ=="
              alt="Intern at Spirinova Technology"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Former Intern at Spirinova Technology Pvt. Ltd.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              During my internship at Spirinova Technology Pvt. Ltd., I gained valuable experience in cloud infrastructure and system administration. Working with Linux and AWS, I refined my skills in managing and optimizing systems for enhanced performance and reliability. This opportunity provided me with a strong foundation in managing scalable systems and optimizing cloud-based solutions.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              My technical expertise includes backend development with Node.js and Java, as well as system monitoring with Grafana and AWS cloud services. With a passion for data structures and algorithms, I continuously work on mastering new skills and adopting cutting-edge technologies to deliver innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
