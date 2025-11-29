"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const properties = [
    {
        id: 1,
        title: "Townhome",
        count: "20 Properties",
        image: "/property-types/townhome.png",
        className: "md:col-span-2 md:row-span-1",
    },
    {
        id: 2,
        title: "Houses",
        count: "20 Properties",
        image: "/property-types/houses.png",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: 3,
        title: "Offices",
        count: "20 Properties",
        image: "/property-types/offices.jpg",
        className: "md:col-span-1 md:row-span-2",
    },
    {
        id: 4,
        title: "Studio",
        count: "12 Properties",
        image: "/property-types/studio.png",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: 5,
        title: "Apartments",
        count: "19 Properties",
        image: "/property-types/apartments.jpg",
        className: "md:col-span-2 md:row-span-1",
    },
];

export default function PropertyTypesSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 border-2 border-[#00AEEF]/5 rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#002B4A]/5 rotate-45 transform"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#00AEEF] font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
                    >
                        Property Categories
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-[#002B4A] mb-4"
                    >
                        Browse By Property Type
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Find your perfect property from our curated selection
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
                    {properties.map((property, index) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative group overflow-hidden rounded-lg cursor-pointer ${property.className}`}
                        >
                            {/* Background Image - Full Color */}
                            <Image
                                src={property.image}
                                alt={property.title}
                                fill
                                className="object-cover transition-all duration-500 ease-out group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                {/* Count Badge - Always Visible */}
                                <div className="flex justify-end">
                                    <span className="bg-[#E74C3C] text-white text-xs font-semibold px-3 py-1.5 rounded">
                                        {property.count}
                                    </span>
                                </div>

                                {/* Title - Always Visible */}
                                <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                        {property.title}
                                    </h3>

                                    {/* Explore Link - Shows on Hover */}
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-white text-sm font-medium">Explore</span>
                                        <svg className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
