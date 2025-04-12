"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Compare", href: "/dashboard/compare" },
    { name: "News", href: "/dashboard#news-section" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
                isScrolled ? "bg-black/50 backdrop-blur-lg" : "bg-transparent"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="container mx-auto px-4 md:px-6 max-w-7xl flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <motion.div
                        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        TradeMaster
                    </motion.div>
                </Link>

                <nav className="hidden md:flex items-center space-x-1">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            {item.href.startsWith("#") ? (
                                <a
                                    href={item.href}
                                    className="px-4 py-2 text-sm font-medium transition-colors hover:text-blue-500 flex items-center"
                                >
                                    {item.name}
                                </a>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="px-4 py-2 text-sm font-medium transition-colors hover:text-blue-500 flex items-center"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                    >
                        <Link
                            href="/dashboard"
                            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition-all duration-200"
                        >
                            Start Trading
                        </Link>
                    </motion.div>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-white focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10"
                    >
                        <div className="container mx-auto px-4 py-4">
                            <nav className="flex flex-col gap-4">
                                {navItems.map((item, i) => (
                                    <Link
                                        key={i}
                                        href={item.href}
                                        className="text-lg font-medium px-2 py-2 hover:text-blue-500 transition-colors"
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/dashboard"
                                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium transition-all duration-200 w-full"
                                >
                                    Start Trading
                                </Link>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
