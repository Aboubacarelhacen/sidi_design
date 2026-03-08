import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthLayout from './AuthLayout';

export default function SignIn() {
    return (
        <AuthLayout title="Boost productivity" subtitle="Workspace 2.0">
            <div className="bg-white rounded-[1.5rem] p-6 lg:p-8 w-full shadow-2xl">
                <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-black text-center mb-6">
                    Sign in to your workspace
                </h2>

                <form>
                    {/* Input Group: Email */}
                    <div className="mb-4 lg:mb-6 border-b border-gray-200 pb-2 focus-within:border-black transition-colors relative">
                        <label className="block text-xs text-gray-400 mb-1 font-medium">Work Email</label>
                        <input type="email" defaultValue="alex.chen@company.com" className="w-full bg-transparent text-lg text-black outline-none placeholder-gray-300" placeholder="Enter your email" />
                    </div>

                    {/* Input Group: Password */}
                    <div className="mb-4 lg:mb-6 border-b border-gray-200 pb-2 focus-within:border-black transition-colors relative">
                        <label className="block text-xs text-gray-400 mb-1 font-medium">Password</label>
                        <input type="password" defaultValue="••••••••••••" className="w-full bg-transparent text-lg text-black outline-none placeholder-gray-300" placeholder="Enter your password" />
                    </div>

                    {/* Options */}
                    <div className="flex items-center justify-between mb-6">
                        {/* Custom Checkbox */}
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <div className="relative flex items-center justify-center w-4 h-4">
                                <input type="checkbox" className="peer sr-only" defaultChecked />
                                <div className="w-4 h-4 border-2 border-gray-300 rounded peer-checked:bg-[#D9FF5A] peer-checked:border-[#D9FF5A] transition-all"></div>
                                <Check className="absolute text-black w-3 h-3 opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={1.5} />
                            </div>
                            <span className="text-sm lg:text-base text-gray-600 select-none">Remember me</span>
                        </label>

                        <a href="#" className="text-sm lg:text-base text-gray-400 hover:text-black transition-colors">Forgot password?</a>
                    </div>

                    {/* Submit Button */}
                    <button type="button" className="w-full bg-black text-white rounded-xl py-3 lg:py-4 text-lg font-medium hover:bg-gray-800 transition-colors">
                        Sign In
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-6">
                        Don't have an account? <Link to="/signup" className="text-black font-medium hover:underline">Sign up</Link>
                    </p>

                    {/* Bottom Decorative/Abstract Element */}
                    <div className="mt-4 h-12 w-full rounded-xl overflow-hidden relative hidden md:block">
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" alt="Abstract texture" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
                    </div>
                </form>
            </div>
        </AuthLayout>
    );
}
