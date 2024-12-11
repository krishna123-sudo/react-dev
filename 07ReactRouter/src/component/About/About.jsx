import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6 space-y-12">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-8 p-6 bg-white shadow-lg rounded-lg">
          <div className="md:w-5/12">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2trxBht1JoAkMVkjxaMuGLq1s1yR-uXOWnQ&s"
              alt="Software Developer"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-7/12 flex flex-col justify-center">
            <h2 className="text-2xl text-gray-900 font-bold md:text-3xl">
              Software Developer at Techcanopy Software Labs
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              As a full-time Software Developer at Techcanopy Software Labs, I specialize in solving complex problems with creative and innovative solutions. I have a strong background in automation technologies, including Angular, React, Selenium, and WebDriver, which I leverage to drive efficiency and deliver high-quality solutions.
            </p>
            <p className="mt-2 text-lg text-gray-600 leading-relaxed">
              My expertise extends to cloud infrastructure management using Linux and AWS, optimizing system performance, and enhancing scalability.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row gap-8 p-6 bg-white shadow-lg rounded-lg">
          <div className="md:w-5/12">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2trxBht1JoAkMVkjxaMuGLq1s1yR-uXOWnQ&s"
              alt="Intern at Techcanopy Software Labs"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-7/12 flex flex-col justify-center">
            <h2 className="text-2xl text-gray-900 font-bold md:text-3xl">
              Former Intern at Techcanopy Software Labs
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              During my internship at Techcanopy, I worked on solving complex problems and gaining hands-on experience in automation technologies, including Angular, React, Selenium, and WebDriver. This experience helped me to understand real-world challenges and deliver impactful solutions.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row gap-8 p-6 bg-white shadow-lg rounded-lg">
          <div className="md:w-5/12">
            <img
              src="https://images.cryptotask.org/eyJidWNrZXQiOiJjcnlwdG90YXNrLXB1YmxpYyIsImtleSI6IjM0NzY3XzE2NzUzNTk3NTE2NzVfNTUxMTI1LmpwZWciLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19fQ=="
              alt="Intern at Spirinova Technology"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-7/12 flex flex-col justify-center">
            <h2 className="text-2xl text-gray-900 font-bold md:text-3xl">
              Former Intern at Spirinova Technology Pvt. Ltd.
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              During my internship at Spirinova Technology, I focused on cloud infrastructure and system administration. I worked on optimizing Linux and AWS-based systems for enhanced performance and scalability, gaining valuable hands-on experience.
            </p>
            <p className="mt-2 text-lg text-gray-600 leading-relaxed">
              This internship laid the foundation for my expertise in backend development, system monitoring, and cloud management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
