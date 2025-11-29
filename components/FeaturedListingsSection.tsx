"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Bed, Bath, Maximize, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const listings = [
    {
        id: 1,
        title: "Luxury Apartment in Gulshan",
        price: "৳85,00,000",
        priceLabel: "৳85 Lakh",
        address: "Road 11, Block E, Gulshan-1, Dhaka",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
        beds: 3,
        baths: 2,
        sqft: "2500",
        status: "For Sale",
        statusColor: "bg-green-500",
        agent: {
            name: "Rafiq Ahmed",
            avatar: "/agents/agent1.jpg",
            postedTime: "3 days ago"
        }
    },
    {
        id: 2,
        title: "Modern Flat in Banani",
        price: "৳45,000/mo",
        priceLabel: "৳45,000/mo",
        address: "Road 27, Banani, Dhaka-1213",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
        beds: 3,
        baths: 2,
        sqft: "1800",
        status: "For Rent",
        statusColor: "bg-blue-500",
        agent: {
            name: "Sultana Karim",
            avatar: "/agents/agent2.jpg",
            postedTime: "5 days ago"
        }
    },
    {
        id: 3,
        title: "Duplex Villa in Dhanmondi",
        price: "৳1,20,00,000",
        priceLabel: "৳1.2 Crore",
        address: "Road 8/A, Dhanmondi, Dhaka-1209",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        beds: 4,
        baths: 3,
        sqft: "3200",
        status: "For Sale",
        statusColor: "bg-green-500",
        agent: {
            name: "Mahmud Rahman",
            avatar: "/agents/agent3.jpg",
            postedTime: "1 week ago"
        }
    },
    {
        id: 4,
        title: "Penthouse in Uttara",
        price: "৳95,00,000",
        priceLabel: "৳95 Lakh",
        address: "Sector 7, Uttara, Dhaka-1230",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
        beds: 4,
        baths: 3,
        sqft: "2800",
        status: "For Sale",
        statusColor: "bg-green-500",
        agent: {
            name: "Nusrat Jahan",
            avatar: "/agents/agent4.jpg",
            postedTime: "2 days ago"
        }
    },
    {
        id: 5,
        title: "Duplex Villa in Dhanmondi",
        price: "৳1,20,00,000",
        priceLabel: "৳1.2 Crore",
        address: "Road 8/A, Dhanmondi, Dhaka-1209",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
        beds: 4,
        baths: 3,
        sqft: "3200",
        status: "For Sale",
        statusColor: "bg-green-500",
        agent: {
            name: "Mahmud Rahman",
            avatar: "/agents/agent3.jpg",
            postedTime: "1 week ago"
        }
    },
];

export default function FeaturedListingsSection() {
    return (
        <section className="py-24 bg-gray-50 relative">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[#00AEEF] font-semibold text-sm uppercase tracking-wider mb-2"
                        >
                            Featured Properties
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-bold text-[#002B4A]"
                        >
                            Discover Our Featured Listings
                        </motion.h2>
                    </div>

                    {/* Navigation Arrows for Desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="hidden md:flex gap-2"
                    >
                        <button className="swiper-button-prev-custom w-11 h-11 border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-[#00AEEF] hover:bg-[#00AEEF] hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="swiper-button-next-custom w-11 h-11 border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-[#00AEEF] hover:bg-[#00AEEF] hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>

                {/* Slider */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination-custom',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        className="pb-16!"
                    >
                        {listings.map((listing) => (
                            <SwiperSlide key={listing.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full border border-gray-100"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={listing.image}
                                            alt={listing.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />

                                        {/* Status Badge */}
                                        <div className="absolute top-3 left-3">
                                            <span className={`${listing.statusColor} text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wide`}>
                                                {listing.status}
                                            </span>
                                        </div>

                                        {/* Price Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-4">
                                            <div className="flex items-end justify-between">
                                                <div className="text-white">
                                                    <p className="text-xl font-bold">{listing.priceLabel}</p>
                                                </div>

                                                {/* Action Icons */}
                                                <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <button className="w-7 h-7 bg-white/90 hover:bg-[#00AEEF] hover:text-white rounded flex items-center justify-center transition-colors">
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                                        </svg>
                                                    </button>
                                                    <button className="w-7 h-7 bg-white/90 hover:bg-[#00AEEF] hover:text-white rounded flex items-center justify-center transition-colors">
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                        </svg>
                                                    </button>
                                                    <button className="w-7 h-7 bg-white/90 hover:bg-[#00AEEF] hover:text-white rounded flex items-center justify-center transition-colors">
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4">
                                        {/* Address */}
                                        <div className="flex items-start gap-1 text-gray-500 mb-2">
                                            <MapPin className="w-3 h-3 mt-0.5 shrink-0" />
                                            <span className="text-[11px] line-clamp-1">{listing.address}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-sm font-bold text-[#002B4A] mb-3 hover:text-[#00AEEF] transition-colors cursor-pointer line-clamp-1">
                                            {listing.title}
                                        </h3>

                                        {/* Property Details */}
                                        <div className="flex items-center gap-3 text-gray-600 pb-3 border-b border-gray-100 mb-3">
                                            <div className="flex items-center gap-1">
                                                <Bed className="w-3.5 h-3.5" />
                                                <span className="text-xs font-medium">{listing.beds}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Bath className="w-3.5 h-3.5" />
                                                <span className="text-xs font-medium">{listing.baths}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Maximize className="w-3.5 h-3.5" />
                                                <span className="text-xs font-medium">{listing.sqft} Sq Ft</span>
                                            </div>
                                        </div>

                                        {/* Agent Info */}
                                        <div className="flex items-center justify-between text-xs text-gray-500">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 bg-linear-to-br from-[#00AEEF] to-[#002B4A] rounded-full" />
                                                <span className="font-medium text-gray-700">{listing.agent.name}</span>
                                            </div>
                                            <span className="text-[10px]">{listing.agent.postedTime}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination */}
                    <div className="swiper-pagination-custom bottom-0! flex justify-center gap-2 mt-5"></div>
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-10"
                >
                    <button className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-[#002B4A] text-[#002B4A] hover:text-white font-semibold px-10 py-3.5 overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-[#002B4A] before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-300">
                        <span className="relative z-10">View All Properties</span>
                        <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </motion.div>
            </div>

            <style jsx global>{`
                .swiper-pagination-custom .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: #CBD5E0;
                    opacity: 1;
                    transition: all 0.3s;
                }
                .swiper-pagination-custom .swiper-pagination-bullet-active {
                    background: #00AEEF;
                    width: 28px;
                    border-radius: 5px;
                }
            `}</style>
        </section>
    );
}
