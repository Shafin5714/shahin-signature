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
        image: "/property-types/offices.png",
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
        image: "/property-types/apartments.png",
        className: "md:col-span-2 md:row-span-1",
    },
];

export default function PropertyTypesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-[#002B4A] mb-4"
                    >
                        Explore Apartment Types
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto"
                    >
                        Explore all the different types of apartments so you can choose the best option for you
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
                    {properties.map((property, index) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`relative group overflow-hidden rounded-xl cursor-pointer shadow-lg ${property.className}`}
                        >
                            {/* Background Image */}
                            <Image
                                src={property.image}
                                alt={property.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <h3 className="text-2xl font-bold mb-1">{property.title}</h3>
                                <p className="text-sm text-gray-300 font-medium">{property.count}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
