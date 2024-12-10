import React from "react";
import { Link,NavLink } from "react-router-dom";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2trxBht1JoAkMVkjxaMuGLq1s1yR-uXOWnQ&s"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Software Developer At Techcanopy Software Labs
                        </h2>
                        <p className="mt-6 text-gray-600">
                        I solve problems in creative ways. As a full-time professional at Techcanopy Software Labs, 
                        I worked extensively on automation using Angular, React, Selenium, and WebDriver to enhance efficiency and deliver high-quality solutions. My experience also includes working with Linux and AWS, 
                        where I contributed to managing cloud infrastructure and optimizing system performance.
                        </p>
                        <p className="mt-4 text-gray-600">
                        As a working professional, I specialize in Node.js backend, Java backend, system monitoring, Grafana, and AWS. 
                        I am dedicated to mastering data structures and algorithms with C++ and continue to expand my expertise in HTML, CSS, and JavaScript.
                        My passion for learning keeps me exploring new technologies and adapting to industry advancements.
                        </p>
                    </div>
                </div>

                <br></br>

                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.cryptotask.org/eyJidWNrZXQiOiJjcnlwdG90YXNrLXB1YmxpYyIsImtleSI6IjM0NzY3XzE2NzUzNTk3NTE2NzVfNTUxMTI1LmpwZWciLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6MzIwLCJoZWlnaHQiOjMyMH19fQ=="
                            alt="image"
                            className="w-17"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                           Ex Intern at Spirinova Technology Private Ltd.
                        </h2>
                        <p className="mt-6 text-gray-600">
                        During my internship at Spirinova, I gained valuable experience working 
                        on Linux and AWS, where I honed my skills in cloud infrastructure and system administration. 
                        This experience provided me with a strong foundation in managing and optimizing systems for
                        performance and reliability.
                        </p>
                        <p className="mt-4 text-gray-600">
                        As a working professional, I specialize in Node.js backend, Java backend, system monitoring, Grafana, and AWS. 
                        I am also dedicated to mastering data structures and algorithms with C++ and have a solid background in HTML, CSS, and JavaScript.
                         My passion for continuous learning drives me to explore and adopt new technologies to deliver innovative solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}