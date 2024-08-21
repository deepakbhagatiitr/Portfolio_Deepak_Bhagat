import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'ML/AI Engineer',
                'Developer',
                'DevOps Engineer'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1500,
            loop: true,
        };

        const typed = new Typed(typedElement.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="bg-black h-screen max-w-[1200px] mx-auto flex items-center justify-center bg-cover bg-center bg-[url('images/home.png')] sm:bg-none" id="home">

            {/* Container for the image and text */}
            <div className="relative flex flex-col w-full h-full overflow-hidden md:justify-center">
                {/* Image */}
                <img
                    src="images/home.png"
                    alt="Deepak Bhagat"
                    className="absolute hidden top-0 right-0 z-10 object-cover h-full 
                               
                               sm:flex
                               md:flex
                               lg:w-8/12 /* Slightly smaller on larger screens */"
                />

                <div className="relative z-20 p-4 text-center text-white mt-14 sm:p-6 md:w-8/12 xl:w-6/12 md:text-left xl:p-0">
                    {/* Responsive Heading with breakpoints */}
                    <h1 className="mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">
                        <span ref={typedElement}></span>
                    </h1>

                    <p className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl sm:leading-normal md:leading-relaxed" style={{ lineHeight: '1.6' }}>
                        Hi, I'm <span className="text-red-600">Deepak Bhagat</span> From Delhi, India.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Home;
