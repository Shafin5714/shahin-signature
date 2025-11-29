"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Bed, Bath, Maximize, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
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
        sqft: "2500 Sq Ft",
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
        sqft: "1800 Sq Ft",
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
        sqft: "3200 Sq Ft",
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
        sqft: "2800 Sq Ft",
        status: "For Sale",
        statusColor: "bg-green-500",
        agent: {
            name: "Nusrat Jahan",
            avatar: "/agents/agent4.jpg",
            postedTime: "2 days ago"
        }
    }
];

export default function FeaturedListingsSection() {
    return (
        <section className="py-24 bg-gray-50 relative">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-[#002B4A] mb-3"
                    >
                        Discover Our Featured Listings
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto"
                    >
                        Explore our handpicked selection of premium properties across Dhaka
                    </motion.p>
                </div>

                {/* Slider */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
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
                        className="!pb-16"
                    >
                        {listings.map((listing) => (
                            <SwiperSlide key={listing.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group h-full"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={listing.image}
                                            alt={listing.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />

                                        {/* Status Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className={`${listing.statusColor} text-white text-xs font-semibold px-3 py-1.5 rounded`}>
                                                {listing.status}
                                            </span>
                                        </div>

                                        {/* Action Icons */}
                                        <div className="absolute top-4 right-4 flex gap-2">
                                            <button className="w-8 h-8 bg-white/90 hover:bg-white rounded flex items-center justify-center transition-colors">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                                </svg>
                                            </button>
                                            <button className="w-8 h-8 bg-white/90 hover:bg-white rounded flex items-center justify-center transition-colors">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </button>
                                            <button className="w-8 h-8 bg-white/90 hover:bg-white rounded flex items-center justify-center transition-colors">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Price Tag */}
                                        <div className="absolute bottom-4 left-4">
                                            <div className="bg-[#002B4A] text-white px-3 py-1.5 rounded">
                                                <span className="text-sm font-bold">{listing.priceLabel}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        {/* Title */}
                                        <h3 className="text-base font-bold text-[#002B4A] mb-2 hover:text-[#00AEEF] transition-colors cursor-pointer line-clamp-1">
                                            {listing.title}
                                        </h3>

                                        {/* Address */}
                                        <div className="flex items-start gap-1.5 text-gray-600 mb-3">
                                            <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                                            <span className="text-xs line-clamp-1">{listing.address}</span>
                                        </div>

                                        {/* Property Details */}
                                        <div className="flex items-center gap-3 pb-3 border-b border-gray-200 mb-3">
                                            <div className="flex items-center gap-1">
                                                <Bed className="w-3.5 h-3.5 text-gray-500" />
                                                <span className="text-xs font-medium text-gray-700">{listing.beds}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Bath className="w-3.5 h-3.5 text-gray-500" />
                                                <span className="text-xs font-medium text-gray-700">{listing.baths}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Maximize className="w-3.5 h-3.5 text-gray-500" />
                                                <span className="text-xs font-medium text-gray-700">{listing.sqft}</span>
                                            </div>
                                        </div>

                                        {/* Agent Info */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                                                    <div className="w-full h-full bg-linear-to-br from-[#00AEEF] to-[#002B4A]" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold text-gray-800">{listing.agent.name}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-0.5 text-gray-500">
                                                <Clock className="w-3 h-3" />
                                                <span className="text-[10px]">{listing.agent.postedTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#00AEEF] hover:text-white transition-all duration-300 -ml-6 group">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#00AEEF] hover:text-white transition-all duration-300 -mr-6 group">
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Custom Pagination */}
                    <div className="swiper-pagination-custom !bottom-0 flex justify-center gap-2 mt-8"></div>
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <button className="group inline-flex items-center gap-2 bg-[#00AEEF] hover:bg-[#0095CC] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                        View All Properties
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </motion.div>
            </div>

            <style jsx global>{`
                .swiper-pagination-custom .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background: #CBD5E0;
                    opacity: 1;
                    transition: all 0.3s;
                }
                .swiper-pagination-custom .swiper-pagination-bullet-active {
                    background: #00AEEF;
                    width: 32px;
                    border-radius: 6px;
                }
            `}</style>
        </section>
    );
}
