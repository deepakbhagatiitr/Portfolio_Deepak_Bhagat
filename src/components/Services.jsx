import React, { useState } from 'react';
import { FiLayout } from 'react-icons/fi';
import { FaCode } from "react-icons/fa6";
import { PiAppStoreLogoBold } from "react-icons/pi";
import { FaRobot, FaServer } from 'react-icons/fa'; // Added icons for Generative AI and DevOps

const Services = () => {
    const [visibleServices, setVisibleServices] = useState(3); // State to manage visible services

    const showMoreServices = () => {
        setVisibleServices(services.length); // Show all services
    };

    const showLessServices = () => {
        setVisibleServices(3); // Show only 3 services
    };

    const services = [
        {
            name: "Web Development",
            description: "Creating visually appealing and user-friendly websites tailored to your needs.",
            icon: <FaCode />,
        },
        {
            name: "UI/UX Design",
            description: "Designing intuitive interfaces and seamless user experiences.",
            icon: <FiLayout />,
        },
        {
            name: "App Development",
            description: "Developing modern and efficient mobile applications.",
            icon: <PiAppStoreLogoBold />,
        },
        {
            name: "Generative AI", // Added Generative AI service card
            description: "Implementing AI models to generate creative content and solutions.",
            icon: <FaRobot />,
        },
        {
            name: "DevOps", // Added DevOps service card
            description: "Streamlining software development and IT operations for faster delivery.",
            icon: <FaServer />,
        },
    ];

    return (
        <div className="max-w-[1200px] xl:py-12 mx-auto text-white bg-dark p-6 xl:p-0" id="services">
            {/* Section Title */}
            <p className="w-full text-4xl font-bold text-center mb-14">My Services</p>

            {/* Service Cards Container with Grid System */}
            <div 
                className="grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3"
            >
                {services.slice(0, visibleServices).map((service, index) => (
                    <div 
                        key={index} 
                        className="p-8 transition-transform transform bg-gray-800 rounded-lg hover:scale-105 hover:bg-pink-600 hover:shadow-lg"
                    >
                        <div className="mb-6 text-6xl text-yellow-400">{service.icon}</div>
                        <h2 className="mb-4 text-2xl font-bold">{service.name}</h2>
                        <p className="mb-6 text-white">{service.description}</p>
                        {/* <a href="#" className="text-white">Learn more</a> */}
                    </div>
                ))}
            </div>

            {/* Show More/Show Less Buttons */}
            <div className="flex justify-center gap-4 mt-6 md:mt-11">
                {visibleServices < services.length && (
                    <button
                        onClick={showMoreServices}
                        className="px-6 py-3 font-bold text-white transition-all duration-300 bg-red-500 rounded-full hover:scale-105 hover:bg-red-600"
                    >
                        See more
                    </button>
                )}
                {visibleServices > 3 && (
                    <button
                        onClick={showLessServices}
                        className="px-6 py-3 font-bold text-white transition-all duration-300 bg-gray-500 rounded-full hover:scale-105 hover:bg-gray-600"
                    >
                        See less
                    </button>
                )}
            </div>
        </div>
    );
}

export default Services;
