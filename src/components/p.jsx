import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Home = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'ML/Ai Engineer',
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
            <div className="relative flex flex-col w-full h-full md:justify-center md:">
                {/* Image */}
                <img
                    src="images/home.png"
                    alt="Deepak Bhagat"
                    className="absolute hidden top-0 right-0 z-10 object-cover h-full 
                               
                               sm:flex
                               md:flex
                               lg:w-8/12 /* Slightly smaller on larger screens */"
                />

                {/* Text overlay */}
                <div className="absolute z-20 text-center text-white md:w-8/12 md:text-left">
                    <h1 className="mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                        <span ref={typedElement}></span>
                    </h1>
                    <p className="text-3xl font-bold leading-normal sm:text-4xl md:text-5xl" style={{ lineHeight: '1.6' }}>
                        Hi, I'm <span className="text-red-600">Deepak Bhagat</span> From Delhi, India.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
