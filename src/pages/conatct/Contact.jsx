import React from 'react';

const ContactUs = () => {
    return (
        <div className="contact-us-page">
            {/* Hero Section with Background Video */}
            <section className="relative h-[70vh] w-full">
                <div className="absolute inset-0">
                    <video
                        src="/bg-video-3.mp4" // Ensure the video file path is correct
                        loop
                        autoPlay
                        muted
                        className="object-cover h-full w-full"
                    ></video>
                </div>
                {/* Black opacity overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                {/* Centered text over the video */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Contact Us
                    </h1>
                    <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto">
                        We would love to hear from you! Reach out with any questions or feedback.
                    </p>
                </div>
            </section>

            {/* Contact Form Section with Beautiful Background */}
            <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Get in Touch</h2>
                    <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-pink-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300 ease-in-out"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Contact Information Section with Soft Teal Background */}
            <section className="py-16 bg-teal-100"> {/* Soft teal background */}
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-6">Our Location</h2>
                    <p className="text-lg md:text-xl mb-4 text-gray-700">
                        You can find us at the following address:
                    </p>
                    <p className="text-gray-600 mb-2">123 Fashion Ave</p>
                    <p className="text-gray-600 mb-4">Fashion City, FC 12345</p>
                    <h3 className="text-xl font-bold text-pink-500 mb-4">Contact Details</h3>
                    <p className="text-gray-600 mb-2">Email: support@fashionstore.com</p>
                    <p className="text-gray-600 mb-2">Phone: (123) 456-7890</p>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-gradient-to-r from-pink-500 to-yellow-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-4">We're Here to Help!</h2>
                    <p className="text-lg md:text-xl mb-8">Your feedback is important to us. Reach out today!</p>
                    <a href="#contact" className="px-8 py-4 bg-white text-pink-500 font-semibold rounded-full hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out">
                        Contact Support
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;



