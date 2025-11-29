"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Home, TrendingUp, FileText, Camera } from "lucide-react";

const propertyImages = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        alt: "Luxury Property"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        alt: "Modern Architecture"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        alt: "Contemporary Design"
    }
];

const services = [
    {
        icon: Home,
        title: "Sell your home",
        subtitle: "Free service"
    },
    {
        icon: TrendingUp,
        title: "Buy a home",
        subtitle: "No fees asked"
    },
    {
        icon: FileText,
        title: "Free Appraisal",
        subtitle: "No fees asked"
    },
    {
        icon: Camera,
        title: "Free Photoshoot",
        subtitle: "Professional service"
    }
];

export default function FindHomeSection() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top Left Decorative Lines */}
                <div className="absolute top-10 left-10 opacity-10">
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <path d="M0 20 L100 20 M0 40 L100 40 M0 60 L100 60" stroke="#00AEEF" strokeWidth="2" fill="none" />
                    </svg>
                </div>

                {/* Bottom Right Decorative Pattern */}
                <div className="absolute bottom-20 right-20 opacity-5">
                    <div className="w-64 h-64 border-8 border-[#002B4A] rounded-full"></div>
                </div>

                {/* Top Right Small Circles */}
                <div className="absolute top-32 right-32 opacity-10">
                    <div className="w-3 h-3 bg-[#00AEEF] rounded-full mb-4"></div>
                    <div className="w-3 h-3 bg-[#00AEEF] rounded-full mb-4"></div>
                    <div className="w-3 h-3 bg-[#00AEEF] rounded-full"></div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Property Images */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {/* First Image - Spans 2 rows */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative h-[400px] rounded-2xl overflow-hidden group"
                        >
                            <Image
                                src={propertyImages[0].image}
                                alt={propertyImages[0].alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                        </motion.div>

                        {/* Second and Third Images - Stacked */}
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="relative h-[192px] rounded-2xl overflow-hidden group"
                            >
                                <Image
                                    src={propertyImages[1].image}
                                    alt={propertyImages[1].alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="relative h-[192px] rounded-2xl overflow-hidden group"
                            >
                                <Image
                                    src={propertyImages[2].image}
                                    alt={propertyImages[2].alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Decorative Lines */}
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: 60 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex gap-1 mb-6"
                        >
                            <div className="h-0.5 w-8 bg-[#00AEEF]"></div>
                            <div className="h-0.5 w-8 bg-[#00AEEF]"></div>
                            <div className="h-0.5 w-8 bg-[#00AEEF]"></div>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-3xl md:text-4xl font-bold text-[#002B4A] mb-4"
                        >
                            Find your new home with us
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-gray-600 mb-8 leading-relaxed"
                        >
                            With over <span className="font-bold text-[#002B4A]">৳2 Billion</span> in sales. Our agency is the industry's top luxury producer with over <span className="font-bold text-[#002B4A]">25 years</span> of experience.
                        </motion.p>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="flex items-start gap-3 group"
                                >
                                    <div className="w-12 h-12 bg-[#00AEEF]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#00AEEF] transition-colors duration-300">
                                        <service.icon className="w-5 h-5 text-[#00AEEF] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#002B4A] mb-0.5">{service.title}</h4>
                                        <p className="text-sm text-gray-500">{service.subtitle}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            <button className="group relative inline-flex items-center gap-3 bg-[#00AEEF] hover:bg-[#0095CC] text-white font-semibold px-8 py-3.5 transition-all duration-300 shadow-lg hover:shadow-xl">
                                <span>More about us</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
