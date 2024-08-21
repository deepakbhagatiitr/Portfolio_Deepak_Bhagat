import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <React.Fragment>
            <header className="flex absolute z-40 top-0 left-0 right-0 items-center justify-between max-w-[1250px] mx-auto bg-black py-4 px-4 sm:px-6 md:px-6 lg:px-6">
                <a href="#home" className="flex items-center space-x-3">
                    <span className="text-3xl font-semibold text-white sm:text-4xl"><span className="text-red-600">D</span>eepak.</span>
                </a>

                {/* Hamburger icon for small and medium screens */}
                <div className="md:hidden">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 bg-white shadow-sm gap-x-2 dark:bg-transparent dark:text-white"
                        onClick={toggleNav}
                        aria-controls="sidenav-default"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <RxCross2 size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Navbar for large screens */}
                <div className="hidden md:flex sm:items-center sm:space-x-8">
                    <nav id="navbar-default" className="flex space-x-8 text-center">
                        <ul className="flex space-x-10">
                            <li className="relative group">
                                <a href="#home" className="block py-1 text-base text-white transition-all duration-200 rounded-md sm:text-lg">Home</a>
                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="relative group">
                                <a href="#about" className="block py-1 text-base text-white transition-all duration-200 rounded-md sm:text-lg">About</a>
                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="relative group">
                                <a href="#skills" className="block py-1 text-base text-white transition-all duration-200 rounded-md sm:text-lg">Skills</a>
                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="relative group">
                                <a href="#services" className="block py-1 text-base text-white transition-all duration-200 rounded-md sm:text-lg">Services</a>
                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="relative group">
                                <a href="#works" className="block py-1 text-base text-white transition-all duration-200 rounded-md sm:text-lg">Works</a>
                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                            <li className="relative group">
                                <a href="#contact" className="block py-1 text-base text-white transition-all duration-200 rounded-md sm:text-lg">Contact</a>
                                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Sidenav for small and medium screens */}
            <aside className={`fixed top-0 left-0 z-40 w-64 h-full pt-20 bg-red-600 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`} id="sidenav-default">
                <nav className="flex flex-col gap-5 px-4 mt-5 font-medium">
                    <ul className="flex flex-col gap-5">
                        <li className="relative group decoration-none">
                            <a href="#home" className="block py-1 text-lg text-center text-white transition-all duration-200 rounded-md sm:text-lg">Home</a>
                        </li>
                        <li className="relative group">
                            <a href="#about" className="block py-1 text-lg text-center text-white transition-all duration-200 rounded-md sm:text-lg">About</a>
                        </li>
                        <li className="relative group">
                            <a href="#skills" className="block py-1 text-lg text-center text-white transition-all duration-200 rounded-md sm:text-lg">Skills</a>
                        </li>
                        <li className="relative group">
                            <a href="#services" className="block py-1 text-lg text-center text-white transition-all duration-200 rounded-md sm:text-lg">Services</a>
                        </li>
                        <li className="relative group">
                            <a href="#works" className="block py-1 text-lg text-center text-white transition-all duration-200 rounded-md sm:text-lg">Works</a>
                        </li>
                        <li className="relative group">
                            <a href="#contact" className="block py-1 text-lg text-center text-white transition-all duration-200 rounded-md sm:text-lg">Contact</a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Overlay for small and medium screens */}
            <div
                className={`fixed inset-0 z-30 bg-black opacity-50 transition-opacity md:hidden ${isOpen ? 'block' : 'hidden'}`}
                onClick={toggleNav}
            ></div>
        </React.Fragment>
    );
}

export default Navbar;
