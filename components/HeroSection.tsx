"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, BedDouble, DollarSign, Home } from "lucide-react";

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState("all");

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 md:py-0">
            {/* Background Image with Ken Burns Effect */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('/hero-bg-luxury.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-[#002B4A]/60 via-[#002B4A]/40 to-[#002B4A]/70 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-8 md:mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-5xl mx-auto"
                >
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-cormorant font-light text-white mb-8 leading-none tracking-tight drop-shadow-lg">
                        Welcome To <br className="md:hidden" />
                        <span className="font-bold italic">Shahin Signature</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto mb-16 font-light font-poppins tracking-wide leading-relaxed drop-shadow-md">
                        An innovative real estate platform ensuring your success in a competitive market.
                    </p>
                </motion.div>

                {/* Search Box */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-full max-w-5xl"
                >
                    {/* Floating Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6">
                        {["all", "rent", "sale"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 backdrop-blur-md border ${activeTab === tab
                                    ? "bg-white text-[#002B4A] border-white shadow-lg transform scale-105"
                                    : "bg-black/20 text-white border-white/20 hover:bg-black/40 hover:border-white/50"
                                    }`}
                            >
                                {tab === "all" ? "All Status" : `For ${tab}`}
                            </button>
                        ))}
                    </div>

                    {/* Segmented Search Bar */}
                    <div className="bg-white rounded-3xl md:rounded-full shadow-2xl p-2 flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-gray-100">

                        {/* Looking For */}
                        <div className="w-full md:w-1/4 px-6 py-3 relative group">
                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 text-left group-hover:text-[#00AEEF] transition-colors">Looking For</label>
                            <div className="flex items-center gap-2">
                                <Home size={18} className="text-[#002B4A]" />
                                <select className="w-full bg-transparent text-gray-800 font-semibold text-sm focus:outline-none cursor-pointer appearance-none truncate">
                                    <option>Property Type</option>
                                    <option>Apartment</option>
                                    <option>Villa</option>
                                    <option>Office</option>
                                </select>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="w-full md:w-1/4 px-6 py-3 relative group">
                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 text-left group-hover:text-[#00AEEF] transition-colors">Location</label>
                            <div className="flex items-center gap-2">
                                <MapPin size={18} className="text-[#002B4A]" />
                                <select className="w-full bg-transparent text-gray-800 font-semibold text-sm focus:outline-none cursor-pointer appearance-none truncate">
                                    <option>All Cities</option>
                                    <option>Dhaka</option>
                                    <option>Chittagong</option>
                                    <option>Sylhet</option>
                                    <option>Cox's Bazar</option>
                                </select>
                            </div>
                        </div>

                        {/* Size */}
                        <div className="w-full md:w-1/5 px-6 py-3 relative group">
                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 text-left group-hover:text-[#00AEEF] transition-colors">Size</label>
                            <div className="flex items-center gap-2">
                                <BedDouble size={18} className="text-[#002B4A]" />
                                <select className="w-full bg-transparent text-gray-800 font-semibold text-sm focus:outline-none cursor-pointer appearance-none truncate">
                                    <option>Bedrooms</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3+</option>
                                </select>
                            </div>
                        </div>

                        {/* Budget */}
                        <div className="w-full md:w-1/5 px-6 py-3 relative group">
                            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 text-left group-hover:text-[#00AEEF] transition-colors">Budget</label>
                            <div className="flex items-center gap-2">
                                <span className="text-[#002B4A] font-bold text-lg">৳</span>
                                <select className="w-full bg-transparent text-gray-800 font-semibold text-sm focus:outline-none cursor-pointer appearance-none truncate">
                                    <option>Max Price</option>
                                    <option>10,000</option>
                                    <option>50,000</option>
                                    <option>1 Lakh+</option>
                                </select>
                            </div>
                        </div>

                        {/* Search Button */}
                        <div className="p-1.5 w-full md:w-auto ml-auto">
                            <button className="w-full md:w-14 h-14 bg-[#002B4A] hover:bg-[#00AEEF] text-white rounded-xl md:rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 group">
                                <Search size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                            </button>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
