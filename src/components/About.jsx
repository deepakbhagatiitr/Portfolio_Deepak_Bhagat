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
                        src="images/about4.png"
                        alt="Card Image"
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>
                <div className="w-full md:w-7/12 lg:w-8/12 md:px-5 lg:px-10">
                    <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-4xl lg:text-5xl">
                        About Me
                    </h2>
                    <p className="mb-6 leading-relaxed text-gray-400">
                        I am Deepak Bhagat, a second-year Mechanical Engineering student at IIT Roorkee, passionate about coding, development, and emerging technologies. With expertise in Full Stack Development, Generative AI, and DevOps, I've built scalable web applications and innovative solutions, focusing on machine learning and AI-driven innovation. I'm eager to collaborate and create transformative ideas—let's connect and make something big!
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
                                        Managing deployments and cloud infrastructure.
                                    </p>
                                </div>
                                <div className="mb-3 space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        Developer
                                    </span>
                                    <p className="text-gray-400">
                                        Building web and mobile applications.
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        ML/AI Engineer
                                    </span>
                                    <p className="text-gray-400">
                                        Creating intelligent systems.
                                    </p>
                                </div>
                            </div>
                        )}
                        {activeSection === 'experience' && (
                            <div>
                                <div className="mb-3 space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        June, 2024 - August, 2024
                                    </span>
                                    <p className="text-gray-400">
                                        Software Developer at Absolute Dimension
                                    </p>
                                </div>
                                <div className="mb-3 space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        June, 2024
                                    </span>
                                    <p className="text-gray-400">
                                        Full Stack Developer at EazePlace
                                    </p>
                                </div>
                                <div className="space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        May, 2024 - June, 2024
                                    </span>
                                    <p className="text-gray-400">
                                        Full Stack Developer at Ryzen Tech
                                    </p>
                                </div>
                            </div>
                        )}
                        {activeSection === 'education' && (
                            <div>
                                <div className="space-y-1">
                                    <span className="block font-medium text-pink-500">
                                        2023
                                    </span>
                                    <p className="text-gray-400">
                                        B-Tech from IIT Roorkee - Present
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
