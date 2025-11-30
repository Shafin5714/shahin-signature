"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/context/LoadingContext";

export default function PageLoader() {
    const { isLoading, setIsLoading } = useLoading();
    const [show, setShow] = useState(true);

    useEffect(() => {
        // Simulate loading time or wait for resources
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3500); // Adjust time as needed for the animation to complete

        return () => clearTimeout(timer);
    }, [setIsLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#002B4A] text-white"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    <div className="relative w-48 h-48 flex items-center justify-center">
                        <svg
                            width="120"
                            height="120"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-white stroke-2"
                        >
                            {/* Abstract House Path */}
                            <motion.path
                                d="M20 80 V40 L50 15 L80 40 V80 H60 V55 H40 V80 H20Z"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    repeat: 0,
                                }}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {/* Inner detail or accent */}
                            <motion.path
                                d="M50 35 V55"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 1.5,
                                    ease: "easeInOut",
                                }}
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2, duration: 0.8 }}
                        className="mt-4 text-center"
                    >
                        <h1 className="text-3xl font-cormorant font-bold tracking-widest uppercase">
                            Shahin Signature
                        </h1>
                        <p className="text-xs font-poppins tracking-[0.3em] text-white/70 mt-2">
                            Luxury Real Estate
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
