"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, User, PlusCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { useLoading } from "@/context/LoadingContext";

export default function Header() {
  const { isLoading } = useLoading();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PROPERTIES", href: "/properties" },
    { name: "PROPERTY", href: "/property" },
    { name: "REALTOR", href: "/realtor" },
    { name: "OTHERS", href: "/others" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isLoading ? -100 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#002B4A]/90 backdrop-blur-md shadow-lg py-3"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-white font-cormorant text-3xl tracking-wider flex flex-col leading-none">
            <span className="font-bold">SHAHIN</span>
            <span className="font-light text-sm tracking-[0.3em] text-gray-300 group-hover:text-white transition-colors">SIGNATURE</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-white text-sm font-medium tracking-wide hover:text-blue-300 transition-colors group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
            <Phone size={18} />
            <span className="text-sm font-poppins font-medium tracking-wide">(800) 987 6543</span>
          </div>
          <button className="text-white/90 hover:text-blue-400 transition-colors">
            <User size={22} />
          </button>
          <Link
            href="/create-listing"
            className="relative px-6 py-2.5 rounded overflow-hidden group bg-transparent border border-white/30 hover:border-transparent transition-all duration-300"
          >
            <div className="absolute inset-0 w-0 bg-linear-to-r from-[#00AEEF] to-[#0077A3] transition-all duration-[250ms] ease-out group-hover:w-full" />
            <span className="relative text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              Create Listing
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#002B4A]/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-lg font-cormorant font-semibold hover:text-blue-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <div className="flex items-center gap-2 text-white">
                <Phone size={18} />
                <span className="text-sm font-poppins font-medium">(800) 987 6543</span>
              </div>
              <Link
                href="/create-listing"
                className="flex items-center justify-center gap-2 bg-linear-to-r from-[#00AEEF] to-[#0077A3] text-white px-4 py-3 rounded font-bold uppercase mt-2 shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Create a Listing
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
