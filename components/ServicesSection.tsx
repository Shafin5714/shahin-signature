"use client";

import { motion } from "framer-motion";
import { Search, Sliders, Settings, ArrowRight, GitCompare, UserCheck } from "lucide-react";

const services = [
    {
        icon: Search,
        title: "Enable Radius Search Functionality",
        description: "Search properties by their proximity to you in kilometers or miles on all search pages"
    },
    {
        icon: Sliders,
        title: "Complete Search Filters",
        description: "Allow your clients to fine-tune their search results and focus on the details that matter the most"
    },
    {
        icon: Settings,
        title: "Advanced Search Options Panel",
        description: "Customize your search layout easily with a complete and advanced search option panel"
    },
    {
        icon: Settings,
        title: "Property Settings",
        description: "Create property listings with all the features you'd expect: land size, price range, amenities and more"
    },
    {
        icon: GitCompare,
        title: "Compare Properties",
        description: "Let your users compare different properties based on their features and parameters"
    },
    {
        icon: UserCheck,
        title: "Agent Contact Forms",
        description: "Help your agents make sales by placing an easy-to-use contact form in the header of each listing"
    }
];

export default function ServicesSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Simple Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 border-2 border-[#00AEEF]/5 rounded-full"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#002B4A]/5 rotate-45 transform"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#00AEEF] font-semibold text-sm uppercase tracking-wider mb-2"
                    >
                        What We Offer
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-[#002B4A] mb-3"
                    >
                        Services We Provide
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Comprehensive real estate solutions designed to streamline your property search and management experience
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-white border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            {/* Icon Container */}
                            <div className="w-14 h-14 bg-[#00AEEF]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00AEEF] transition-colors duration-300">
                                <service.icon className="w-6 h-6 text-[#00AEEF] group-hover:text-white transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-bold text-[#002B4A] mb-2 group-hover:text-[#00AEEF] transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                {service.description}
                            </p>

                            {/* Read More Link */}
                            <div className="flex items-center gap-2 text-[#00AEEF] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span>Learn more</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
