import React from 'react';

const FAQs = () => {
    const faqData = [
        {
            question: "What is Fashion Store?",
            answer: "Fashion Store is your go-to destination for trendy and stylish clothing, offering a diverse range of products that cater to various tastes and preferences."
        },
        {
            question: "How do I place an order?",
            answer: "To place an order, simply browse our collection, select your desired items, add them to your cart, and proceed to checkout."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods including credit cards, PayPal, and other secure payment gateways."
        },
        {
            question: "What is your return policy?",
            answer: "You can return any unworn items within 30 days for a full refund. Please ensure that the items are in their original packaging."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is shipped, you will receive a tracking number via email, allowing you to monitor its status."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship internationally! Check our shipping policy for more details on rates and delivery times."
        },
    ];

    return (
        <div className="faq-page relative">
            {/* Background Video */}
            <video src="/bg-video-3.mp4" loop autoPlay muted className="absolute top-0 left-0 w-full h-full object-cover z-0"></video>
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* Hero Section with 80vh height */}
            <section className="relative z-20 flex flex-col justify-center h-[80vh] text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Frequently Asked Questions</h1>
                <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto">
                    Find answers to common queries about our products and services.
                </p>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-100 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {faqData.map((faq, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-center relative z-20">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">Still Have Questions?</h2>
                <p className="text-lg mb-8">Our customer support team is here to help you!</p>
                <a href="/contact" className="px-8 py-4 bg-white text-pink-500 font-semibold rounded-full hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out">
                    Contact Us
                </a>
            </section>
        </div>
    );
};

export default FAQs;
