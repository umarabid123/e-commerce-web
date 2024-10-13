import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
                
                {/* Company Name or Logo */}
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
                        Fashion Store
                    </h2>
                </div>

                {/* Links Section */}
                <div className="flex space-x-6 mb-6 md:mb-0">
                    <Link to="/products" className="hover:text-yellow-500 transition duration-300">Shop</Link>
                    <Link to="/about" className="hover:text-yellow-500 transition duration-300">About Us</Link>
                    <Link to="/contact" className="hover:text-yellow-500 transition duration-300">Contact</Link>
                    <Link to="/faq" className="hover:text-yellow-500 transition duration-300">FAQ</Link>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-6 text-lg">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-yellow-500 transition duration-300">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-yellow-500 transition duration-300">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-yellow-500 transition duration-300">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-yellow-500 transition duration-300">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
                <p>&copy; 2024 Fashion Store. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

