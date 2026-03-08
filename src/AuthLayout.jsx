
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function AuthLayout({ children, title, subtitle }) {
    const location = useLocation();
    const isSignUp = location.pathname === '/signup';

    return (
        <div className="h-screen bg-[#F3F4F6] flex items-center justify-center p-4">
            {/* Main Container */}
            <div className="bg-white w-full max-w-[1600px] rounded-[2rem] shadow-sm overflow-hidden flex flex-col h-full max-h-[calc(100vh-2rem)]">

                {/* Main Content Grid */}
                <main className="grid grid-cols-1 xl:grid-cols-[1fr_1.1fr] gap-4 lg:gap-6 p-4 pt-10 flex-1 overflow-hidden min-h-0">

                    {/* Left Column: Marketing Content */}
                    <div className="flex flex-col justify-between p-2 lg:p-6 h-full overflow-hidden">

                        {/* Text Logo */}
                        <div className="mb-4">
                            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-black flex items-baseline gap-2">
                                SKYLINE
                                <span className="relative inline-block mt-1">
                                    <span className="relative z-10 text-xl lg:text-2xl">Software</span>
                                    <span className="absolute bottom-1 left-0 w-full h-1.5 lg:h-2 bg-[#D9FF5A] -z-0 opacity-80 rounded-full"></span>
                                </span>
                            </h2>
                        </div>

                        {/* Typography Section */}
                        <div className="max-w-3xl mt-2 flex flex-col justify-center h-full">
                            <p className="text-xs font-medium tracking-[0.2em] text-gray-400 uppercase mb-3">
                                The Ultimate Workspace
                            </p>
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight leading-[1.1] text-black mb-6">
                                BUILD GREAT PRODUCTS WITH
                                <span className="relative inline-block mt-2">
                                    <span className="relative z-10">YOUR TEAM.</span>
                                    <span className="absolute bottom-1 left-0 w-full h-3 bg-[#D9FF5A] -z-0 opacity-80 rounded-full"></span>
                                </span>

                                {/* Overlapping Circles */}
                                <div className="inline-flex items-center ml-2 align-baseline relative top-2">
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-emerald-900 border-2 border-white relative z-30"></div>
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-emerald-600 border-2 border-white -ml-4 relative z-20"></div>
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#D9FF5A] border-2 border-white -ml-4 relative z-10"></div>
                                </div>
                            </h1>

                            <div className="flex flex-col items-start gap-3 mt-8">
                                <p className="text-base text-gray-500">New to SkyLine?</p>
                                <a href="#" className="group flex items-center gap-2 text-lg font-medium text-black border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">
                                    Create workspace
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                                </a>
                            </div>
                        </div>

                        {/* Bottom Image Block */}
                        <div className="relative w-full h-40 lg:h-52 rounded-[1.5rem] overflow-hidden mt-6 group shrink-0">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="Team working" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col md:flex-row gap-2 md:gap-8 items-start md:items-end">
                                <h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-white shrink-0">Why SkyLine</h3>
                                <p className="text-sm lg:text-base text-gray-200 leading-relaxed max-w-lg">
                                    Have real-time <strong className="text-white font-semibold">chats</strong> with your project team, share updates instantly, and keep everyone aligned in <span className="relative inline-block pb-1 after:content-[''] after:absolute after:w-full after:h-px after:bg-white/50 after:bottom-0 after:left-0">sync.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Dynamic Form Area */}
                    <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black flex flex-col justify-center items-center">
                        {/* Background Image */}
                        <img src="/src/assets/imgg.jpg" alt="Modern office architecture" className="absolute inset-0 w-full h-full object-cover opacity-60" />

                        {/* Top Status Text */}
                        <div className="absolute top-6 left-0 w-full text-center z-10">
                            <p className="text-xs text-white/70 uppercase tracking-widest mb-1">{subtitle}</p>
                            <p className="text-base text-white font-medium">{title}</p>
                        </div>

                        {/* Centered Form Card Wrapper */}
                        <div className="relative z-20 w-full max-w-[420px] px-4">
                            {children}
                        </div>

                        {/* Bottom Controls (Navigation) */}
                        <div className="absolute bottom-6 left-0 w-full px-8 flex justify-end items-center z-10">
                            <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-xl p-1 border border-white/20">
                                <Link
                                    to="/"
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${!isSignUp ? 'bg-white text-black shadow-sm' : 'text-white hover:bg-white/10'}`}
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/signup"
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${isSignUp ? 'bg-white text-black shadow-sm' : 'text-white hover:bg-white/10'}`}
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
