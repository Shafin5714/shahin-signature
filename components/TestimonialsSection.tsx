"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Rahim Ahmed",
        role: "Homeowner",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80",
        content: "Shahin Signature made finding our dream home an absolute pleasure. Their attention to detail and understanding of the luxury market is unmatched.",
        rating: 5
    },
    {
        id: 2,
        name: "Fatima Begum",
        role: "Property Investor",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80",
        content: "The professionalism and expertise of the team are outstanding. They guided me through every step of the investment process with transparency and skill.",
        rating: 5
    },
    {
        id: 3,
        name: "Tanvir Hasan",
        role: "Tenant",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
        content: "I was impressed by the seamless rental process. The team went above and beyond to ensure I found a place that perfectly suited my lifestyle.",
        rating: 5
    }
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipe = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = testimonials.length - 1;
            if (nextIndex >= testimonials.length) nextIndex = 0;
            return nextIndex;
        });
    };

    useEffect(() => {
        const timer = setInterval(() => {
            swipe(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-grid.png')] opacity-5"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-zinc-800/30 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white/60 font-semibold text-sm uppercase tracking-wider mb-2"
                    >
                        Testimonials
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-cormorant font-bold text-white mb-4"
                    >
                        What Our Clients Say
                    </motion.h2>
                    <div className="w-24 h-1 bg-linear-to-r from-white/40 to-transparent mx-auto rounded-full"></div>
                </div>

                {/* Carousel */}
                <div className="relative max-w-4xl mx-auto h-[400px] md:h-[300px] flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full flex flex-col items-center text-center"
                        >
                            <div className="mb-8 relative">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl relative z-10">
                                    <Image
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute -top-4 -right-4 bg-white text-black p-2 rounded-full shadow-lg z-20">
                                    <Quote size={16} fill="currentColor" />
                                </div>
                            </div>

                            <p className="text-xl md:text-2xl text-white/90 font-light italic font-cormorant leading-relaxed max-w-2xl mb-8">
                                "{testimonials[currentIndex].content}"
                            </p>

                            <div>
                                <h4 className="text-white font-bold text-lg tracking-wide">
                                    {testimonials[currentIndex].name}
                                </h4>
                                <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-3">
                                    {testimonials[currentIndex].role}
                                </p>
                                <div className="flex items-center justify-center gap-1">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} size={14} className="text-white fill-white" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all backdrop-blur-xs border border-white/10 group z-20"
                        onClick={() => swipe(-1)}
                    >
                        <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    <button
                        className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all backdrop-blur-xs border border-white/10 group z-20"
                        onClick={() => swipe(1)}
                    >
                        <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-8" : "bg-white/20 hover:bg-white/40"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
