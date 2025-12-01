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
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/patterns/grid.svg')] opacity-[0.03]"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-black/3 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-zinc-800/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-black/50 font-semibold text-sm uppercase tracking-wider mb-2"
                        >
                            Featured Properties
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-bold text-black"
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
                        <button className="swiper-button-prev-custom w-11 h-11 border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="swiper-button-next-custom w-11 h-11 border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed">
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
                            <SwiperSlide key={listing.id} className="h-auto pt-4 px-2">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-60 overflow-hidden">
                                        <Image
                                            src={listing.image}
                                            alt={listing.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                                        {/* Status Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className={`backdrop-blur-md bg-white/90 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm`}>
                                                {listing.status}
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
                                                <span className="text-base font-bold">{listing.priceLabel}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex flex-col grow relative">
                                        {/* Floating Price (Visible by default, hides on hover) */}
                                        <div className="absolute -top-5 right-5 bg-black text-white px-3 py-1.5 rounded-lg shadow-lg group-hover:opacity-0 transition-opacity duration-300">
                                            <span className="text-base font-bold">{listing.priceLabel}</span>
                                        </div>

                                        <div className="flex items-start gap-1.5 text-gray-500 mb-1.5 mt-1">
                                            <MapPin className="w-3.5 h-3.5 mt-0.5 text-black shrink-0" />
                                            <span className="text-xs font-medium line-clamp-1">{listing.address}</span>
                                        </div>

                                        <h3 className="text-lg font-cormorant font-bold text-black mb-3 line-clamp-1 group-hover:text-zinc-700 transition-colors">
                                            {listing.title}
                                        </h3>

                                        {/* Features */}
                                        <div className="flex items-center justify-between py-3 border-t border-gray-100 mb-3">
                                            <div className="flex flex-col items-center gap-0.5">
                                                <Bed className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                                                <span className="text-[10px] font-semibold text-gray-600">{listing.beds} Beds</span>
                                            </div>
                                            <div className="w-px h-6 bg-gray-100" />
                                            <div className="flex flex-col items-center gap-0.5">
                                                <Bath className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                                                <span className="text-[10px] font-semibold text-gray-600">{listing.baths} Baths</span>
                                            </div>
                                            <div className="w-px h-6 bg-gray-100" />
                                            <div className="flex flex-col items-center gap-0.5">
                                                <Maximize className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                                                <span className="text-[10px] font-semibold text-gray-600">{listing.sqft} sqft</span>
                                            </div>
                                        </div>

                                        {/* Agent & Action */}
                                        <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                                                    {/* Placeholder for agent image if not available */}
                                                    <div className="w-full h-full bg-linear-to-br from-black to-zinc-700" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-bold text-black">{listing.agent.name}</span>
                                                    <span className="text-[9px] text-gray-500 uppercase tracking-wider">Agent</span>
                                                </div>
                                            </div>

                                            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-black hover:border-black hover:text-white transition-all duration-300">
                                                <ChevronRight className="w-4 h-4" />
                                            </button>
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
                    <button className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-black text-black hover:text-white font-semibold px-10 py-3.5 overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-black before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-300">
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
                    background: #000000;
                    width: 28px;
                    border-radius: 5px;
                }
            `}</style>
        </section >
    );
}
