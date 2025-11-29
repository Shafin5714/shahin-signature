"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, User, PlusCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
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
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#002B4A] shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
            <div className="text-white font-bold text-2xl tracking-wider">
                SHAHIN <span className="font-light">SIGNATURE</span>
            </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-sm font-semibold hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-white">
            <Phone size={18} />
            <span className="text-sm font-semibold">(800) 987 6543</span>
          </div>
          <button className="text-white hover:text-blue-400 transition-colors">
            <User size={20} />
          </button>
          <Link
            href="/create-listing"
            className="flex items-center gap-2 bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-[#002B4A] transition-all duration-300 text-sm font-bold uppercase"
          >
            Create a Listing
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
            className="lg:hidden bg-[#002B4A] border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-lg font-semibold hover:text-blue-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <div className="flex items-center gap-2 text-white">
                <Phone size={18} />
                <span className="text-sm font-semibold">(800) 987 6543</span>
              </div>
              <Link
                href="/create-listing"
                className="flex items-center justify-center gap-2 bg-white text-[#002B4A] px-4 py-3 rounded font-bold uppercase mt-2"
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
