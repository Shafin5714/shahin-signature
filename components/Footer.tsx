"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
            {/* Decorative Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/3 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12">
                    {/* Brand Column */}
                    <div className="md:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="text-3xl font-cormorant font-bold tracking-wider text-white">
                                SHAHIN <span className="font-light italic text-gray-300">SIGNATURE</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed font-poppins pr-8">
                            Redefining luxury real estate in Bangladesh. We connect discerning clients with exceptional properties, ensuring a seamless and premium experience.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-4 pt-4">
                            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300 group"
                                >
                                    <Icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h4 className="text-lg font-cormorant font-semibold mb-6 text-white">Discover</h4>
                        <ul className="space-y-4 font-poppins text-sm text-gray-400">
                            {["Properties", "New Developments", "Sold Listings", "Agents"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="md:col-span-2">
                        <h4 className="text-lg font-cormorant font-semibold mb-6 text-white">Company</h4>
                        <ul className="space-y-4 font-poppins text-sm text-gray-400">
                            {["About Us", "Our Services", "Careers", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-4">
                        <h4 className="text-lg font-cormorant font-semibold mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-6 font-poppins text-sm text-gray-400">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                                <span>Level 12, Shahin Tower, Gulshan Avenue,<br />Dhaka-1212, Bangladesh</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-gray-300 shrink-0" />
                                <span>+880 1712 345 678</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-gray-300 shrink-0" />
                                <span>info@shahinsignature.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-600 font-poppins uppercase tracking-wider">
                        &copy; {new Date().getFullYear()} Shahin Signature. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-600 font-poppins uppercase tracking-wider">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
