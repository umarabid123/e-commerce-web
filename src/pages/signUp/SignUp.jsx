import React from 'react';

const SignUpPage = () => {
    return (
        <div className="signup-page relative h-screen flex items-center justify-center">
            {/* Background Video */}
            <div className="absolute inset-0">
                <video
                    src="/bg-video-3.mp4" // Ensure the video file path is correct
                    loop
                    autoPlay
                    muted
                    className="object-cover w-full h-full"
                ></video>
            </div>
            {/* Black Opacity Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Sign Up Form */}
            <div className="relative z-10 bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="example@example.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="********"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300 ease-in-out"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{' '}
                    <a href="/login" className="text-pink-500 hover:text-yellow-500 font-semibold">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;
