import React, { useState } from 'react';

const About = () => {
    const [activeSection, setActiveSection] = useState('skills');

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="w-full h-auto px-4 pb-12 mx-auto pt-14 xl:py-24 bg-dark md sm:px-8 md:px-6 lg:px-16 xl:px-20" id="about">
            <div className="flex flex-col max-w-[1200px] h-full mx-auto  md:flex-row ">
                <div className="flex w-full h-full mb-6 md:w-5/12 lg:w-4/12 bg-zinc-800 rounded-2xl md:mb-0">
                    <img
                        src="images/about4.jpg"
                        alt="Card Image"
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>
                <div className="w-full md:w-7/12 lg:w-8/12 md:px-5 lg:px-10">
                    <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-4xl lg:text-5xl">
                        About Me
                    </h2>
                    <p className="mb-6 leading-relaxed text-gray-400">
                        I’m Deepak Bhagat, a B.Tech. student at IIT Roorkee with a strong passion for building scalable systems and AI-driven tools. I’ve worked on many projects across IITR initiatives and multiple internships, spanning full-stack development, ML, and cloud infrastructure. Proficient in React, Django, Flutter, GCP, and AWS, I aim to craft impactful tech and drive innovation through real-world solutions.
                    </p>

                    <nav className="my-5">
                        <ul className="flex mt-4 space-x-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                            {['skills', 'experience', 'education'].map((section) => (
                                <li key={section} className="relative group">
                                    <button
                                        onClick={() => handleSectionClick(section)}
                                        className={`block rounded py-1 text-gray-400 hover:text-white transition-colors ${activeSection === section ? 'text-white' : ''}`}
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </button>
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 w-0 bg-red-600 transition-all duration-300 ${activeSection === section ? 'w-full' : 'group-hover:w-full'}`}
                                    ></span>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex flex-col mt-6 space-y-4">
                        {activeSection === 'skills' && (
                            <div>
                                <div className="mb-3 space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        DevOps Engineer
                                    </span>
                                    <p className="text-gray-400">
                                        Deploying scalable cloud-based apps with Docker, GCP, and AWS.
                                    </p>
                                </div>
                                <div className="mb-3 space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        Developer
                                    </span>
                                    <p className="text-gray-400">
                                        Building full-stack web/mobile platforms using React, Django, and Flutter.
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        AI Engineer
                                    </span>
                                    <p className="text-gray-400">
                                        Creating LLM-based systems, RAG bots, and intelligent user tools.
                                    </p>
                                </div>
                            </div>
                        )}
                        {activeSection === 'experience' && (
                            <div>
                                <div className="mb-3 space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        June, 2024 - September, 2024
                                    </span>
                                    <p className="text-gray-400">
                                        Software Developer at Absolute Dimension
                                    </p>
                                </div>
                                <div className="mb-3 space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        December, 2024 - February, 2025
                                    </span>
                                    <p className="text-gray-400">
                                        Full Stack Developer at Region Infinity
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        May, 2025 - June, 2025
                                    </span>
                                    <p className="text-gray-400">
                                        Software Engineer at Eve
                                    </p>
                                </div>
                            </div>
                        )}
                        {activeSection === 'education' && (
                            <div>
                                <div className="space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        2023 – Present
                                    </span>
                                    <p className="text-gray-400">
                                        B.Tech. in Mechanical Engineering at IIT Roorkee
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
