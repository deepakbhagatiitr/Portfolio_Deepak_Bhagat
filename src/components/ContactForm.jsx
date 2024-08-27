import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const isFormValid = () => form.name && form.email && form.message;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormValid()) {
            try {
                await axios.post('https://portfolio-backend-f8ja.onrender.com/send-email', form);
                toast.success('Message sent successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
            } catch (error) {
                toast.error('Failed to send message.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-auto py-8 pb-0 mt-0 bg-black xl:pb-8 xl:pt-12" id="contact">
            <div className="max-w-[1200px] rounded-lg shadow-lg px-6 md:px-8 lg:px-10 xl:px-0">
                <div className="flex flex-col items-start justify-between w-full space-y-8 lg:flex-row lg:space-y-0">
                    <div className="space-y-8 lg:w-2/5">
                        <h2 className="text-4xl font-bold text-left text-white md:text-5xl lg:text-6xl">Contact Me</h2>
                        <div className="flex items-center">
                            <a href="mailto:deepak988088@gmail.com" className="flex items-center">
                                <FaEnvelope className="mr-4 text-xl text-pink-500 md:text-2xl" />
                                <span className="text-base text-white md:text-lg">deepak988088@gmail.com</span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <a href="tel:+917678124123" className="flex items-center">
                                <FaPhoneAlt className="mr-4 text-xl text-pink-500 md:text-2xl" />
                                <span className="text-base text-white md:text-lg">+91 7678124123</span>
                            </a>
                        </div>
                        <div className="flex space-x-4 md:space-x-6">
                            <a href="https://www.facebook.com/profile.php?id=100017290535071" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF className="text-xl text-white transition duration-300 cursor-pointer md:text-2xl hover:text-pink-500" />
                            </a>
                            <a href="https://x.com/?lang=en-in" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-xl text-white transition duration-300 cursor-pointer md:text-2xl hover:text-pink-500" />
                            </a>
                            <a href="https://www.instagram.com/deepakbhagat__/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-xl text-white transition duration-300 cursor-pointer md:text-2xl hover:text-pink-500" />
                            </a>
                            <a href="https://www.linkedin.com/in/deepak-bhagat-233149280/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn className="text-xl text-white transition duration-300 cursor-pointer md:text-2xl hover:text-pink-500" />
                            </a>
                        </div>
                        <a
                            href="/pdf/Deepak_Bhagat_CV.pdf"
                            download
                            className="inline-block px-6 py-2 text-base text-white transition duration-300 bg-pink-500 rounded-md md:px-8 md:py-3 md:text-lg hover:bg-pink-600"
                        >
                            Download CV
                        </a>
                    </div>
                    <form className="w-full lg:w-3/5" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleInputChange}
                            className="w-full p-3 mb-4 text-base text-white placeholder-gray-500 rounded-md md:p-4 md:mb-6 md:text-lg bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleInputChange}
                            className="w-full p-3 mb-4 text-base text-white placeholder-gray-500 rounded-md md:p-4 md:mb-6 md:text-lg bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleInputChange}
                            className="w-full p-3 mb-6 text-base text-white placeholder-gray-500 rounded-md h-36 md:h-48 md:p-4 md:mb-8 md:text-lg bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                        <button
                            type="submit"
                            disabled={!isFormValid()}
                            className={`w-full px-6 py-2 text-base text-white transition duration-300 bg-pink-500 rounded-md sm:w-56 md:px-8 md:py-3 md:text-lg hover:bg-pink-600 ${!isFormValid() ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </div>
        </div>
    );
};

export default ContactForm;
