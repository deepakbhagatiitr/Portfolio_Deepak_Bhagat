import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';

const works = [
    {
        title: "RAG Chatbot with UI",
        description: "Semantic PDF/DOC Q&A using FAISS and React + Flask",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800", // AI + docs
        link: "https://github.com/deepakbhagatiitr/adv_rag",
    },
    {
        title: "Cold Emailing Bot",
        description: "LLM-driven Discord Bot for Automated Outreach",
        image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=60",
        link: "https://github.com/deepakbhagatiitr/DiscordBot",
    },
    {
        title: "FitKnight",
        description: "Flutter App for Fitness Matchmaking and Chat",
        image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=60",
        link: "https://github.com/deepakbhagatiitr/FitKnight",
    },
    {
        title: "Marketing Website",
        description: "Visionvowresearch",
        image: "images/marketing.jpg",
        link: "https://www.visionvowresearch.com/",
    },
    {
        title: "Search Engine for Blogs",
        description: "LLM-powered Filtered Blog Discovery via Flask",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
        link: "https://github.com/deepakbhagatiitr/Search-Engine-for-Blogs-and-Articles",
    },
    {
        title: "Skin Disease Predictor",
        description: "Image-Based Diagnosis + Chatbot via TensorFlow & Django",
        image: "https://images.pexels.com/photos/5863392/pexels-photo-5863392.jpeg?auto=compress&cs=tinysrgb&w=800", // medical
        link: "https://github.com/deepakbhagatiitr/Syntax-Error-2024",
    },
];



const Work = () => {
    const [visibleWorks, setVisibleWorks] = useState(3);
    const [fadeIn, setFadeIn] = useState(false);

    const showMoreWorks = () => {
        setFadeIn(true);
        setTimeout(() => {
            setVisibleWorks((prev) => prev + 3);
            setFadeIn(false);
        }, 300);
    };

    const showLessWorks = () => {
        setFadeIn(true);
        setTimeout(() => {
            setVisibleWorks(3);
            setFadeIn(false);
        }, 300);
    };

    return (
        <div className="bg-dark p-6 max-w-[1200px] mx-auto text-white h-auto flex flex-col items-center pb-6 xl:pb-6 lg:px-0" id="works">
            {/* Section Title */}
            <h1 className="w-full my-4 text-4xl font-bold text-center xl:my-7 xl:mt-0">My Works</h1>

            {/* Work Items Container with Grid System */}
            <div
                className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 py-6 transition-opacity duration-300 ${fadeIn ? 'opacity-50' : 'opacity-100'}`}
                style={{ minHeight: '400px', width: '100%' }}
            >
                {works.slice(0, visibleWorks).map((work, index) => (
                    <div
                        key={index}
                        className="relative w-full overflow-hidden transition-transform duration-300 rounded-lg shadow-lg h-96 hover:scale-105 group"
                    >
                        {/* Image and Overlay */}
                        <img src={work.image} alt={work.title} className="object-cover object-center w-full h-full" />
                        <div className="absolute flex flex-col items-center justify-center w-full h-full p-4 text-center transition-all duration-700 ease-in-out bg-black bg-opacity-50 opacity-0 top-full group-hover:top-0 group-hover:opacity-100">
                            <h2 className="mb-2 text-2xl font-bold">{work.title}</h2>
                            <p className="mb-4 text-gray-300">{work.description}</p>
                            <a
                                href={work.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center p-2 text-white transition-transform duration-300 bg-red-500 rounded-full hover:scale-110"
                            >
                                <FiExternalLink size={24} />
                            </a>

                        </div>
                    </div>
                ))}
            </div>

            {/* Show More/Show Less Buttons */}
            <div className="flex gap-4 mt-6 md:mt-11">
                {visibleWorks < works.length && (
                    <button
                        onClick={showMoreWorks}
                        className="px-6 py-3 font-bold text-white transition-all duration-300 bg-red-500 rounded-full hover:scale-105 hover:bg-red-600"
                    >
                        See more
                    </button>
                )}
                {visibleWorks > 3 && (
                    <button
                        onClick={showLessWorks}
                        className="px-6 py-3 font-bold text-white transition-all duration-300 bg-gray-500 rounded-full hover:scale-105 hover:bg-gray-600"
                    >
                        See less
                    </button>
                )}
            </div>
        </div>
    );
};

export default Work;
