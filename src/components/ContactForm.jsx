import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const ContactForm = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-auto py-8 pb-0 mt-0 bg-black xl:pb-8 xl:pt-12" id="contact">
            <div className="max-w-[1200px] rounded-lg shadow-lg px-6 md:px-8 lg:px-10 xl:px-0">
                <div className="flex flex-col items-start justify-between w-full space-y-8 lg:flex-row lg:space-y-0">
                    <div className="space-y-8 lg:w-2/5">
                        <h2 className="text-4xl font-bold text-left text-white md:text-5xl lg:text-6xl">Contact Me</h2>
                        <div className="flex items-center">
                            <FaEnvelope className="mr-4 text-xl text-pink-500 md:text-2xl" />
                            <span className="text-base text-white md:text-lg">deepak988088@gmail.com</span>
                        </div>
                        <div className="flex items-center">
                            <FaPhoneAlt className="mr-4 text-xl text-pink-500 md:text-2xl" />
                            <span className="text-base text-white md:text-lg">+91 7678124123</span>
                        </div>
                        <div className="flex space-x-4 md:space-x-6">
                            <FaFacebookF className="text-xl text-white transition duration-300 cursor-pointer md:text-2xl hover:text-pink-500" />
                            <FaTwitter className="text-xl text-white transition duration-300 cursor-pointer md:text-2xl hover:text-pink-500" />
                            <FaInstagram className="text-xl text-white transition duration-300 cursor-pointer md:text-2xl hover:text-pink-500" />
                            <FaLinkedinIn className="text-xl text-white transition duration-300 cursor-pointer md:text-2xl hover:text-pink-500" />
                        </div>
                        <button className="px-6 py-2 text-base text-white transition duration-300 bg-pink-500 rounded-md md:px-8 md:py-3 md:text-lg hover:bg-pink-600">
                            Download CV
                        </button>
                    </div>
                    <form className="w-full lg:w-3/5">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 mb-4 text-base text-white placeholder-gray-500 rounded-md md:p-4 md:mb-6 md:text-lg bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 mb-4 text-base text-white placeholder-gray-500 rounded-md md:p-4 md:mb-6 md:text-lg bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-3 mb-6 text-base text-white placeholder-gray-500 rounded-md h-36 md:h-48 md:p-4 md:mb-8 md:text-lg bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                        <button
                            type="submit"
                            className="w-full px-6 py-2 text-base text-white transition duration-300 bg-pink-500 rounded-md sm:w-1/2 md:w-1/3 lg:w-1/4 md:px-8 md:py-3 md:text-lg hover:bg-pink-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
