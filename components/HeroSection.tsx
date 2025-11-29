"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, BedDouble, DollarSign, Home } from "lucide-react";

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState("all");

    return (
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/hero-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#002B4A]/40 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6">
                        Welcome To <span className="font-semibold">Shahin Signature</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 font-light">
                        Shahin Signature is an innovative real estate platform that helps to ensure your website's success in this super-competitive market.
                    </p>
                </motion.div>

                {/* Search Box */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full max-w-5xl"
                >
                    {/* Tabs */}
                    <div className="flex items-center gap-1 mb-0 ">
                        <button
                            onClick={() => setActiveTab("all")}
                            className={`px-8 py-4 text-sm font-bold rounded-t-lg transition-all duration-200 ${activeTab === "all"
                                ? "bg-white text-[#002B4A]"
                                : "bg-[#002B4A]/80 text-white hover:bg-[#002B4A] hover:text-white"
                                }`}
                        >
                            All Status
                        </button>
                        <button
                            onClick={() => setActiveTab("rent")}
                            className={`px-8 py-4 text-sm font-bold rounded-t-lg transition-all duration-200 ${activeTab === "rent"
                                ? "bg-white text-[#002B4A]"
                                : "bg-[#002B4A]/80 text-white hover:bg-[#002B4A] hover:text-white"
                                }`}
                        >
                            For Rent
                        </button>
                        <button
                            onClick={() => setActiveTab("sale")}
                            className={`px-8 py-4 text-sm font-bold rounded-t-lg transition-all duration-200 ${activeTab === "sale"
                                ? "bg-white text-[#002B4A]"
                                : "bg-[#002B4A]/80 text-white hover:bg-[#002B4A] hover:text-white"
                                }`}
                        >
                            For Sale
                        </button>
                    </div>

                    {/* Search Fields */}
                    <div className="bg-white p-8 rounded-b-lg rounded-tr-lg shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-6 items-end">

                        {/* Looking For */}
                        <div className="md:col-span-3">
                            <label className="block text-xs font-bold text-gray-400 uppercase mb-1 text-left">Looking For</label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Home size={18} />
                                </div>
                                <select className="w-full h-12 pl-10 pr-4 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-[#00AEEF] appearance-none bg-transparent">
                                    <option>Property Type</option>
                                    <option>Apartment</option>
                                    <option>Villa</option>
                                    <option>Office</option>
                                </select>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="md:col-span-3">
                            <label className="block text-xs font-bold text-gray-400 uppercase mb-1 text-left">Location</label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <MapPin size={18} />
                                </div>
                                <select className="w-full h-12 pl-10 pr-4 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-[#00AEEF] appearance-none bg-transparent">
                                    <option>All Cities</option>
                                    <option>New York</option>
                                    <option>Los Angeles</option>
                                    <option>Chicago</option>
                                </select>
                            </div>
                        </div>

                        {/* Property Size */}
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold text-gray-400 uppercase mb-1 text-left">Property Size</label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <BedDouble size={18} />
                                </div>
                                <select className="w-full h-12 pl-10 pr-4 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-[#00AEEF] appearance-none bg-transparent">
                                    <option>Bedrooms</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3+</option>
                                </select>
                            </div>
                        </div>

                        {/* Budget */}
                        <div className="md:col-span-2">
                            <label className="block text-xs font-bold text-gray-400 uppercase mb-1 text-left">Your Budget</label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <DollarSign size={18} />
                                </div>
                                <select className="w-full h-12 pl-10 pr-4 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-[#00AEEF] appearance-none bg-transparent">
                                    <option>Max. Price</option>
                                    <option>$1000</option>
                                    <option>$5000</option>
                                    <option>$10000+</option>
                                </select>
                            </div>
                        </div>

                        {/* Search Button */}
                        <div className="md:col-span-2">
                            <button className="w-full h-12 bg-linear-to-r from-[#00AEEF] to-[#0077A3] hover:from-[#0095CC] hover:to-[#006285] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
                                <Search size={20} />
                                Search
                            </button>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
