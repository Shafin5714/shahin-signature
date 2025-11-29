"use client";

import { motion } from "framer-motion";
import { Search, Sliders, Settings, ArrowRight, GitCompare, UserCheck } from "lucide-react";

const services = [
    {
        icon: Search,
        title: "Enable Radius Search Functionality",
        description: "Search properties by their proximity to you in kilometers or miles on all search pages",
        color: "text-red-400",
        bgColor: "bg-red-50",
        hoverColor: "group-hover:bg-red-400"
    },
    {
        icon: Sliders,
        title: "Complete Search Filters",
        description: "Allow your clients to fine-tune their search results and focus on the details that matter the most",
        color: "text-orange-400",
        bgColor: "bg-orange-50",
        hoverColor: "group-hover:bg-orange-400"
    },
    {
        icon: Settings,
        title: "Advanced Search Options Panel",
        description: "Customize your search layout easily with a complete and advanced search option panel",
        color: "text-pink-400",
        bgColor: "bg-pink-50",
        hoverColor: "group-hover:bg-pink-400"
    },
    {
        icon: Settings,
        title: "Property Settings",
        description: "Create property listings with all the features you'd expect: land size, price range, amenities and more",
        color: "text-red-400",
        bgColor: "bg-red-50",
        hoverColor: "group-hover:bg-red-400"
    },
    {
        icon: GitCompare,
        title: "Compare Properties",
        description: "Let your users compare different properties based on their features and parameters",
        color: "text-pink-400",
        bgColor: "bg-pink-50",
        hoverColor: "group-hover:bg-pink-400"
    },
    {
        icon: UserCheck,
        title: "Agent Contact Forms",
        description: "Help your agents make sales by placing an easy-to-use contact form in the header of each listing",
        color: "text-red-400",
        bgColor: "bg-red-50",
        hoverColor: "group-hover:bg-red-400"
    }
];

export default function ServicesSection() {
    return (
        <section className="py-16 bg-gray-50 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#00AEEF] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#002B4A] rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[100px] border-gray-200 rounded-full opacity-20"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold text-[#002B4A] mb-3"
                    >
                        Services We Provide
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 leading-relaxed text-sm"
                    >
                        We offer comprehensive real estate solutions designed to streamline your property search and management experience.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.25, 0.4, 0.25, 1]
                            }}
                            whileHover={{ y: -8 }}
                            className="group bg-white p-6 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden"
                        >
                            {/* Hover Background Effect */}
                            <div className="absolute inset-0 bg-linear-to-br from-[#00AEEF]/5 to-[#002B4A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Icon Container */}
                            <motion.div
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                                className={`w-14 h-14 ${service.bgColor} rounded-lg flex items-center justify-center mb-5 relative z-10 transition-all duration-500 ${service.hoverColor}`}
                            >
                                <service.icon className={`w-6 h-6 ${service.color} group-hover:text-white transition-colors duration-500`} />
                            </motion.div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-lg font-bold text-[#002B4A] mb-2 group-hover:text-[#00AEEF] transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                                    {service.description}
                                </p>

                                {/* Read More Link */}
                                <motion.div
                                    initial={{ x: 0 }}
                                    className="flex items-center gap-2 text-[#00AEEF] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                                >
                                    <span>Read more</span>
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Decorative Corner Element */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-[#00AEEF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 mb-4 text-sm">
                        Want to learn more about our comprehensive services?
                    </p>
                    <button className="group relative inline-flex items-center gap-3 bg-[#002B4A] hover:bg-[#00AEEF] text-white font-semibold px-8 py-3 transition-all duration-300 shadow-lg hover:shadow-xl">
                        <span>Explore All Services</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
