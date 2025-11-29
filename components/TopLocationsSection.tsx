"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const locations = [
    {
        id: 1,
        name: "Gulshan",
        listings: 45,
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
        className: "md:col-span-2 md:row-span-2"
    },
    {
        id: 2,
        name: "Banani",
        listings: 32,
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 3,
        name: "Dhanmondi",
        listings: 28,
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 4,
        name: "Uttara",
        listings: 38,
        image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 5,
        name: "Bashundhara",
        listings: 25,
        image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800&q=80",
        className: "md:col-span-1 md:row-span-1"
    }
];

export default function TopLocationsSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#00AEEF] font-semibold text-sm uppercase tracking-wider mb-2"
                    >
                        Explore Neighborhoods
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-[#002B4A] mb-3"
                    >
                        Top Locations
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Discover prestigious addresses offering unparalleled lifestyle and timeless value
                    </motion.p>
                </div>

                {/* Locations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
                    {locations.map((location, index) => (
                        <motion.div
                            key={location.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative group overflow-hidden cursor-pointer ${location.className}`}
                        >
                            {/* Background Image */}
                            <Image
                                src={location.image}
                                alt={location.name}
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <motion.div
                                    initial={{ y: 0 }}
                                    className="transform group-hover:-translate-y-2 transition-transform duration-500"
                                >
                                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-1">
                                        {location.name}
                                    </h3>
                                    <p className="text-white/80 text-sm font-medium mb-3">
                                        {location.listings} Listings
                                    </p>

                                    {/* View Link - Shows on Hover */}
                                    <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                        <span className="text-sm font-semibold">View Properties</span>
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00AEEF]/30 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* View All Locations Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-10"
                >
                    <button className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-[#002B4A] text-[#002B4A] hover:text-white font-semibold px-10 py-3.5 overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-[#002B4A] before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-300">
                        <span className="relative z-10">View All Locations</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
