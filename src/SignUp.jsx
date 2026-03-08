import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayout';

export default function SignUp() {
    return (
        <AuthLayout title="Join your team" subtitle="Get Started">
            <div className="bg-white rounded-[1.5rem] p-6 lg:p-8 w-full shadow-2xl">
                <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-black text-center mb-6">
                    Create your account
                </h2>

                <form>
                    {/* Input Group: Name */}
                    <div className="mb-4 border-b border-gray-200 pb-2 focus-within:border-black transition-colors relative">
                        <label className="block text-xs text-gray-400 mb-1 font-medium">Full Name</label>
                        <input type="text" className="w-full bg-transparent text-lg text-black outline-none placeholder-gray-300" placeholder="John Doe" />
                    </div>

                    {/* Input Group: Email */}
                    <div className="mb-4 border-b border-gray-200 pb-2 focus-within:border-black transition-colors relative">
                        <label className="block text-xs text-gray-400 mb-1 font-medium">Work Email</label>
                        <input type="email" className="w-full bg-transparent text-lg text-black outline-none placeholder-gray-300" placeholder="you@company.com" />
                    </div>

                    {/* Input Group: Password */}
                    <div className="mb-4 border-b border-gray-200 pb-2 focus-within:border-black transition-colors relative">
                        <label className="block text-xs text-gray-400 mb-1 font-medium">Password</label>
                        <input type="password" className="w-full bg-transparent text-lg text-black outline-none placeholder-gray-300" placeholder="Create a password" />
                    </div>

                    {/* Input Group: Confirm Password */}
                    <div className="mb-6 border-b border-gray-200 pb-2 focus-within:border-black transition-colors relative">
                        <label className="block text-xs text-gray-400 mb-1 font-medium">Confirm Password</label>
                        <input type="password" className="w-full bg-transparent text-lg text-black outline-none placeholder-gray-300" placeholder="Confirm your password" />
                    </div>

                    {/* Submit Button */}
                    <button type="button" className="w-full bg-black text-white rounded-xl py-3 lg:py-4 text-lg font-medium hover:bg-gray-800 transition-colors">
                        Sign Up
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-6">
                        Already have an account? <Link to="/" className="text-black font-medium hover:underline">Sign in</Link>
                    </p>

                    {/* Bottom Decorative/Abstract Element */}
                    <div className="mt-4 h-8 w-full rounded-xl overflow-hidden relative hidden md:block">
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" alt="Abstract texture" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
}
