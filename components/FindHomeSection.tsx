"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Home, TrendingUp, FileText, Camera, ArrowRight } from "lucide-react";

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
        description: "We offer free consultation and professional marketing to help you sell your property at the best price."
    },
    {
        icon: TrendingUp,
        title: "Buy a home",
        description: "Our expert agents will guide you through every step to find your dream property hassle-free."
    },
    {
        icon: FileText,
        title: "Free Appraisal",
        description: "Get a comprehensive market value analysis of your property at no cost."
    },
    {
        icon: Camera,
        title: "Free Photoshoot",
        description: "Professional photography services to showcase your property in the best light."
    }
];

export default function FindHomeSection() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Simple Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 border-2 border-[#00AEEF]/5 rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#002B4A]/5 rotate-45 transform"></div>
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
                        {/* First Image - Large, Spans 2 rows */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative h-[450px] overflow-hidden group cursor-pointer"
                        >
                            <Image
                                src={propertyImages[0].image}
                                alt={propertyImages[0].alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                        </motion.div>

                        {/* Second and Third Images - Stacked */}
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="relative h-[215px] overflow-hidden group cursor-pointer"
                            >
                                <Image
                                    src={propertyImages[1].image}
                                    alt={propertyImages[1].alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="relative h-[215px] overflow-hidden group cursor-pointer"
                            >
                                <Image
                                    src={propertyImages[2].image}
                                    alt={propertyImages[2].alt}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
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
                        {/* Header */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-[#00AEEF] font-semibold text-sm uppercase tracking-wider mb-3"
                        >
                            Why Choose Us
                        </motion.p>

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
                            With over <span className="font-bold text-[#002B4A]">৳2 Billion</span> in sales volume, our agency is the industry's top luxury producer with over <span className="font-bold text-[#002B4A]">25 years</span> of experience in Bangladesh.
                        </motion.p>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
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
                                    <div className="flex-1">
                                        <h4 className="font-bold text-[#002B4A] mb-1 text-base">{service.title}</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed">{service.description}</p>
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
                            <button className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-[#002B4A] text-[#002B4A] hover:text-white font-semibold px-8 py-3.5 overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-[#002B4A] before:-translate-x-full hover:before:translate-x-0 before:transition-transform before:duration-300">
                                <span className="relative z-10">More About Us</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
