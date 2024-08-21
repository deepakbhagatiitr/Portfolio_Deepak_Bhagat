import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';

const works = [
    {
        title: "RAG",
        description: "PDF Answering AI",
        image: "images/ai.jpg",
        link: "https://github.com/deepak-bhagat-iitr/PdfAi_backend",
    },
    {
        title: "Marketing Website",
        description: "Visionvowresearch",
        image: "images/marketing.jpg",
        link: "https://www.visionvowresearch.com/",
    },
    {
        title: "Events Page",
        description: "E-Summit IITR Events Page",
        image: "images/ecell.jpg",
        link: "https://events-page-neon.vercel.app/",
    },
    {
        title: "SAC Website",
        description: "SAC Website IIT Roorkee",
        image: "images/sac.jpg",
        link: "#",
    },
    {
        title: "Chat Website",
        description: "Chatting Website using WebSockets",
        image: "images/chatapp.png",
        link: "https://chat-frontend-7r5i.onrender.com/",
    }
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
                            <a href={work.link} className="flex items-center justify-center p-2 text-white transition-transform duration-300 bg-red-500 rounded-full hover:scale-110">
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
