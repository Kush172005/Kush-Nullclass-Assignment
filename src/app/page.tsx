"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    ArrowRight,
    BarChart3,
    ChevronRight,
    Globe,
    LineChart,
    PieChart,
    Shield,
    Zap,
} from "lucide-react";
import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Header />
            <main className="overflow-hidden">
                {/* Hero Section */}
                <section className="relative">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505] to-[#050505]/0 z-10" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

                    {/* Animated background elements */}
                    <div className="absolute top-20 -left-64 w-[500px] h-[500px] rounded-full bg-blue-500/30 blur-[100px] animate-blob" />
                    <div className="absolute top-40 -right-64 w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-[100px] animate-blob animation-delay-2000" />
                    <div className="absolute -bottom-64 left-40 w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[100px] animate-blob animation-delay-4000" />

                    <div className="container relative z-20 pt-32 pb-24 md:pt-40 md:pb-32 px-4 md:px-6 mx-auto max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 mb-6">
                                Elevate Your{" "}
                                <span className="text-blue-500">Trading</span>{" "}
                                Experience
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
                                Advanced analytics, real-time data, and powerful
                                tools to help you make smarter trading
                                decisions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/dashboard"
                                    className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-md font-medium transition-all duration-200 flex items-center justify-center group"
                                >
                                    Start Trading Now
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <button className="bg-transparent hover:bg-white/5 text-white text-lg px-8 py-4 rounded-md font-medium transition-all duration-200 border border-white/20">
                                    Explore Features
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Floating dashboard preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative z-10 mx-auto max-w-6xl px-6 pb-20"
                    >
                        <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-black/40 " />
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/006/741/614/non_2x/business-graph-charts-of-financial-concept-stock-market-exchange-trading-graph-analysis-investment-indicator-free-photo.jpg"
                                width={1600}
                                height={800}
                                alt="Trading Dashboard"
                                className="w-full object-cover"
                            />
                            <div className="absolute bottom-8 left-8 z-20">
                                <div className="flex items-center gap-3 text-lg font-medium">
                                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                                    Live Trading Data
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Stats Section */}
                <section className="py-20 relative">
                    <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { value: "5M+", label: "Active Traders" },
                                { value: "120+", label: "Global Markets" },
                                { value: "99.9%", label: "Uptime" },
                                { value: "24/7", label: "Support" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="text-center"
                                >
                                    <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                Powerful Trading Features
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Everything you need to analyze markets and
                                execute trades with confidence
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Globe className="h-8 w-8" />,
                                    title: "Global Markets",
                                    description:
                                        "Access stocks, forex, crypto, and commodities from markets worldwide",
                                },
                                {
                                    icon: <Zap className="h-8 w-8" />,
                                    title: "Lightning Fast Execution",
                                    description:
                                        "Execute trades in milliseconds with our high-performance infrastructure",
                                },
                                {
                                    icon: <LineChart className="h-8 w-8" />,
                                    title: "Advanced Analytics",
                                    description:
                                        "Powerful charting tools with over 100+ technical indicators",
                                },
                                {
                                    icon: <Shield className="h-8 w-8" />,
                                    title: "Bank-Grade Security",
                                    description:
                                        "Your assets are protected with military-grade encryption and security",
                                },
                                {
                                    icon: <PieChart className="h-8 w-8" />,
                                    title: "Portfolio Management",
                                    description:
                                        "Track performance and optimize your investment strategy",
                                },
                                {
                                    icon: <BarChart3 className="h-8 w-8" />,
                                    title: "Risk Assessment",
                                    description:
                                        "Sophisticated tools to manage and mitigate trading risks",
                                },
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <div className="h-full overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900 border border-white/5 hover:border-blue-500/50 transition-all duration-300 rounded-xl p-6">
                                        <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-5">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-400">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trading Platform Preview */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
                    <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Advanced Trading Platform
                                </h2>
                                <p className="text-xl text-gray-400 mb-8">
                                    Our next-generation platform gives you the
                                    edge with powerful tools and real-time data.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Real-time market data with millisecond updates",
                                        "Advanced charting with customizable indicators",
                                        "One-click trading execution",
                                        "Automated trading strategies and backtesting",
                                    ].map((item, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start"
                                        >
                                            <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                                                <ChevronRight className="h-3 w-3 text-blue-500" />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-200 flex items-center">
                                    Try Demo Platform
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-sm opacity-50" />
                                <div className="relative bg-black rounded-xl overflow-hidden border border-white/10">
                                    <img
                                        src="https://i.ibb.co/C1jWyk9/1.jpg"
                                        width={800}
                                        height={600}
                                        alt="Trading Platform Interface"
                                        className="w-full"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-blue-500/30 blur-xl" />
                                <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-purple-500/30 blur-xl" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Market Analysis Section */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="order-2 md:order-1"
                            >
                                <div className="relative">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur-sm opacity-50" />
                                    <div className="relative bg-black rounded-xl overflow-hidden border border-white/10">
                                        <img
                                            src="https://i.ibb.co/0K3ZTzt/2.jpg"
                                            width={800}
                                            height={600}
                                            alt="Market Analysis Dashboard"
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-blue-500/30 blur-xl" />
                                    <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-purple-500/30 blur-xl" />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="order-1 md:order-2"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Real-Time Market Analysis
                                </h2>
                                <p className="text-xl text-gray-400 mb-8">
                                    Make informed decisions with comprehensive
                                    market data and powerful analytical tools.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {[
                                        {
                                            value: "500+",
                                            label: "Global Markets",
                                        },
                                        {
                                            value: "100+",
                                            label: "Technical Indicators",
                                        },
                                        {
                                            value: "24/7",
                                            label: "Market Updates",
                                        },
                                        {
                                            value: "0.1s",
                                            label: "Data Latency",
                                        },
                                    ].map((stat, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-800/50 border border-white/5 rounded-lg p-4"
                                        >
                                            <div className="text-2xl font-bold text-blue-500 mb-1">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm text-gray-400">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-200 flex items-center">
                                    Explore Analysis Tools
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-24 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-blue-500/5 to-[#050505]" />
                    <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                                Trusted by Traders Worldwide
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Join thousands of successful traders who have
                                elevated their trading with our platform
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    quote: "The analytical tools and real-time data have completely transformed my trading strategy. I've seen a 40% increase in my portfolio since switching.",
                                    name: "Alex Johnson",
                                    title: "Professional Day Trader",
                                },
                                {
                                    quote: "The platform's intuitive interface combined with powerful features makes it perfect for both beginners and experienced traders alike.",
                                    name: "Sarah Williams",
                                    title: "Investment Analyst",
                                },
                                {
                                    quote: "The customer support is exceptional. Any issues I've had were resolved quickly, and the educational resources have been invaluable.",
                                    name: "Michael Chen",
                                    title: "Retail Investor",
                                },
                            ].map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <div className="h-full bg-gray-800/50 backdrop-blur-sm border border-white/5 rounded-xl p-6">
                                        <div className="mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <span
                                                    key={i}
                                                    className="text-blue-500"
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                        <p className="mb-6 italic">
                                            "{testimonial.quote}"
                                        </p>
                                        <div>
                                            <div className="font-semibold">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-sm text-gray-400">
                                                {testimonial.title}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative overflow-hidden rounded-2xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90" />
                            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

                            <div className="relative z-10 px-6 py-16 md:px-16 text-center">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                                    Ready to Transform Your Trading?
                                </h2>
                                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                                    Join thousands of traders worldwide and
                                    experience the power of our advanced trading
                                    platform.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="bg-white text-blue-600 hover:bg-white/90 text-lg px-8 py-4 rounded-md font-medium transition-all duration-200 flex items-center justify-center">
                                        Create Free Account
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </button>
                                    <button className="bg-transparent hover:bg-white/10 text-white border border-white text-lg px-8 py-4 rounded-md font-medium transition-all duration-200">
                                        Schedule Demo
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </>
    );
}
