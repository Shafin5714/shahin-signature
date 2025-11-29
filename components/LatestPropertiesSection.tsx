"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";

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
                        className="text-[#00AEEF] font-semibold text-sm uppercase tracking-wider mb-2"
                    >
                        Latest Listings
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-[#002B4A] mb-3"
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
                            className="bg-white border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Status Badge */}
                                <div className="absolute top-3 left-3">
                                    <span className={`${property.statusColor} text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wide`}>
                                        {property.status}
                                    </span>
                                </div>

                                {/* Featured Badge */}
                                <div className="absolute top-3 right-3">
                                    <span className="bg-[#002B4A] text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wide">
                                        Featured
                                    </span>
                                </div>

                                {/* Overlay with Title and Price */}
                                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/50 to-transparent p-4">
                                    <h3 className="text-white text-lg font-bold mb-1 line-clamp-1">
                                        {property.title}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <p className="text-white text-xl font-bold">{property.price}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                {/* Address */}
                                <div className="flex items-start gap-1 text-gray-500 mb-3">
                                    <MapPin className="w-3 h-3 mt-0.5 shrink-0" />
                                    <span className="text-[11px] line-clamp-1">{property.address}</span>
                                </div>

                                {/* Property Details */}
                                <div className="flex items-center justify-between text-gray-600 pb-3 border-b border-gray-100">
                                    <div className="flex items-center gap-1">
                                        <Bed className="w-3.5 h-3.5" />
                                        <span className="text-xs font-medium">{property.beds}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Bath className="w-3.5 h-3.5" />
                                        <span className="text-xs font-medium">{property.baths}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Maximize className="w-3.5 h-3.5" />
                                        <span className="text-xs font-medium">{property.sqft} Sq Ft</span>
                                    </div>
                                </div>

                                {/* Type */}
                                <div className="mt-3">
                                    <span className="text-xs font-semibold text-gray-700">{property.type}</span>
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
                    <button className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-[#00AEEF] text-[#00AEEF] hover:text-white font-semibold px-10 py-3.5 overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-[#00AEEF] before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-300">
                        <span className="relative z-10">Load More</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
