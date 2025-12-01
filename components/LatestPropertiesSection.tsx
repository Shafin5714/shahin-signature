"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Bed, Bath, Maximize, MapPin, ChevronRight } from "lucide-react";

const latestProperties = [
    {
        id: 1,
        title: "Light And Modern Apartment",
        price: "৳45,000/mo",
        address: "Road 11, Gulshan-2, Dhaka",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
        beds: 2,
        baths: 2,
        sqft: "1200",
        status: "For Rent",
        statusColor: "bg-blue-500",
        type: "APARTMENT"
    },
    {
        id: 2,
        title: "New Apartment Nice View",
        price: "৳75,00,000",
        address: "Banani DOHS, Dhaka-1213",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
        beds: 3,
        baths: 2,
        sqft: "1780",
        status: "For Sale",
        statusColor: "bg-green-500",
        type: "APARTMENT"
    },
    {
        id: 3,
        title: "Luxury Modern Apartment",
        price: "৳55,000/mo",
        address: "Baridhara J Block, Dhaka",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        beds: 3,
        baths: 2,
        sqft: "2400",
        status: "For Rent",
        statusColor: "bg-blue-500",
        type: "APARTMENT"
    },
    {
        id: 4,
        title: "Green View Design",
        price: "৳35,000/mo",
        address: "Mohammadpur, Dhaka-1207",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        beds: 3,
        baths: 1,
        sqft: "1760",
        status: "For Rent",
        statusColor: "bg-blue-500",
        type: "APARTMENT"
    },
    {
        id: 5,
        title: "Modern Loft Apartment",
        price: "৳37,500/mo",
        address: "Mirpur DOHS, Dhaka-1216",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        beds: 1,
        baths: 1,
        sqft: "1074",
        status: "For Rent",
        statusColor: "bg-blue-500",
        type: "APARTMENT"
    },
    {
        id: 6,
        title: "Renovated Modern Apartment",
        price: "৳18,900/mo",
        address: "Uttara Sector 7, Dhaka-1230",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
        beds: 2,
        baths: 2,
        sqft: "1300",
        status: "For Rent",
        statusColor: "bg-blue-500",
        type: "APARTMENT"
    }
];

export default function LatestPropertiesSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-black/50 font-semibold text-sm uppercase tracking-wider mb-2"
                    >
                        Latest Listings
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-black mb-3"
                    >
                        Check Our Selection Of Finest Properties
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Explore our carefully curated collection of premium properties
                    </motion.p>
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {latestProperties.map((property, index) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                {/* Status Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className={`backdrop-blur-md bg-white/90 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm`}>
                                        {property.status}
                                    </span>
                                </div>

                                {/* Like Button */}
                                <button className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-red-500 rounded-full flex items-center justify-center transition-all duration-300 group/btn">
                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                </button>

                                {/* Price Tag */}
                                <div className="absolute bottom-4 left-4">
                                    <div className="bg-black text-white px-3 py-1.5 rounded-lg shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <span className="text-base font-bold">{property.price}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col grow relative">
                                {/* Floating Price (Visible by default, hides on hover) */}
                                <div className="absolute -top-5 right-5 bg-black text-white px-3 py-1.5 rounded-lg shadow-lg group-hover:opacity-0 transition-opacity duration-300">
                                    <span className="text-base font-bold">{property.price}</span>
                                </div>

                                <div className="flex items-start gap-1.5 text-gray-500 mb-1.5 mt-1">
                                    <MapPin className="w-3.5 h-3.5 mt-0.5 text-black shrink-0" />
                                    <span className="text-xs font-medium line-clamp-1">{property.address}</span>
                                </div>

                                <h3 className="text-lg font-cormorant font-bold text-black mb-3 line-clamp-1 group-hover:text-zinc-700 transition-colors">
                                    {property.title}
                                </h3>

                                {/* Features */}
                                <div className="flex items-center justify-between py-3 border-t border-gray-100 mb-3">
                                    <div className="flex flex-col items-center gap-0.5">
                                        <Bed className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                                        <span className="text-[10px] font-semibold text-gray-600">{property.beds} Beds</span>
                                    </div>
                                    <div className="w-px h-6 bg-gray-100" />
                                    <div className="flex flex-col items-center gap-0.5">
                                        <Bath className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                                        <span className="text-[10px] font-semibold text-gray-600">{property.baths} Baths</span>
                                    </div>
                                    <div className="w-px h-6 bg-gray-100" />
                                    <div className="flex flex-col items-center gap-0.5">
                                        <Maximize className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                                        <span className="text-[10px] font-semibold text-gray-600">{property.sqft} sqft</span>
                                    </div>
                                </div>

                                {/* Type & Action */}
                                <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-black">{property.type}</span>
                                    </div>

                                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-black hover:border-black hover:text-white transition-all duration-300">
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Load More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                >
                    <button className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-black text-black hover:text-white font-semibold px-10 py-3.5 overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-black before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-300">
                        <span className="relative z-10">Load More</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
