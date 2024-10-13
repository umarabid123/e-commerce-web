import React from 'react';

const About = () => {
    return (
        <div className="about-page">
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
                        About Us
                    </h1>
                    <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto">
                        Discover the story behind our brand and why fashion is our passion.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-6">Our Story</h2>
                    <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-700 leading-relaxed">
                        Fashion Store started with a dream to bring style and confidence to every individual. We believe that fashion is more than just clothing — it’s a form of self-expression. From our humble beginnings, we have grown into a global brand, offering the latest trends and timeless pieces, all designed with love and care.
                    </p>
                </div>
            </section>

            {/* Our Mission & Vision */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-6">Our Mission & Vision</h2>
                    <div className="flex flex-col md:flex-row justify-around gap-8">
                        <div className="max-w-md mx-auto">
                            <h3 className="text-xl font-bold text-pink-500 mb-4">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Our mission is to empower people through fashion. We aim to provide high-quality, stylish clothing that lets individuals showcase their unique style and personality.
                            </p>
                        </div>
                        <div className="max-w-md mx-auto">
                            <h3 className="text-xl font-bold text-yellow-500 mb-4">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We envision a world where fashion is accessible, sustainable, and a true representation of personal identity. We’re dedicated to creating innovative designs that align with these values.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-6">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-pink-500 mb-4">Unique Designs</h3>
                            <p className="text-gray-700">
                                We offer exclusive pieces that stand out, ensuring you always look your best with unique fashion designs.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-yellow-500 mb-4">Sustainable Fashion</h3>
                            <p className="text-gray-700">
                                Our products are crafted with eco-friendly materials, promoting sustainability without compromising on style.
                            </p>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-blue-500 mb-4">Customer Satisfaction</h3>
                            <p className="text-gray-700">
                                Our customers are our top priority, and we go above and beyond to ensure your shopping experience is exceptional.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section (Optional) */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 mb-6">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6">
                            <img src="/team-member1.jpg" alt="Team Member" className="rounded-full w-32 h-32 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-800">Jane Doe</h3>
                            <p className="text-gray-600">CEO & Founder</p>
                        </div>
                        <div className="p-6">
                            <img src="/team-member2.jpg" alt="Team Member" className="rounded-full w-32 h-32 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-800">John Smith</h3>
                            <p className="text-gray-600">Lead Designer</p>
                        </div>
                        <div className="p-6">
                            <img src="/team-member3.jpg" alt="Team Member" className="rounded-full w-32 h-32 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-gray-800">Emily Johnson</h3>
                            <p className="text-gray-600">Marketing Director</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-gradient-to-r from-pink-500 to-yellow-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-4">Ready to Explore?</h2>
                    <p className="text-lg md:text-xl mb-8">Dive into our exclusive collections and elevate your wardrobe with Fashion Store.</p>
                    <a href="#shop" className="px-8 py-4 bg-white text-pink-500 font-semibold rounded-full hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out">
                        Shop Now
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;

