"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
    Search,
    Bell,
    ShoppingCart,
    User,
    TrendingUp,
    Plus,
    ChevronRight,
    BarChart2,
    PieChart,
    DollarSign,
    Activity,
    Menu,
    X,
    ArrowUpRight,
    ArrowDownRight,
    Zap,
    Globe,
    Newspaper,
    Gift,
    HelpCircle,
    Settings,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import News_Feed from "@/components/news-feed";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

const scrollToSection = () => {
    document
        .getElementById("target-section")
        ?.scrollIntoView({ behavior: "smooth" });
};

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const notifications = 3;
    const router = useRouter();

    return (
        <motion.header
            {...fadeInUp}
            className="flex justify-between items-center p-4 bg-black/90 backdrop-blur-lg text-white border-b border-white/10"
        >
            <div className="flex items-center space-x-8">
                <motion.div
                    onClick={() => router.push("/")}
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    TradePro
                </motion.div>
                <nav className="hidden md:block">
                    <ul className="flex space-x-4">
                        <li>
                            <Link
                                href="/"
                                className="text-blue-500 font-semibold flex items-center"
                            >
                                <Zap className="mr-1" size={16} />
                                Explore
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
                            >
                                <Globe className="mr-1" size={16} />
                                Investments
                            </Link>
                        </li>
                        <a
                            href="#target-section"
                            className="text-gray-300
                            hover:text-blue-500 transition-colors flex
                            items-center"
                            onClick={scrollToSection}
                        >
                            <Newspaper className="mr-1" size={16} />
                            News
                        </a>
                    </ul>
                </nav>
            </div>
            <div className="hidden md:flex items-center space-x-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="What are you looking for today?"
                        className="pl-10 pr-4 py-2 bg-gray-800/80 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/10"
                    />
                </div>
                <motion.div
                    className="relative cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Bell className="text-gray-300 hover:text-blue-500 transition-colors" />
                    {notifications > 0 && (
                        <motion.span
                            className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                            }}
                        >
                            {notifications}
                        </motion.span>
                    )}
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ShoppingCart className="text-gray-300 hover:text-blue-500 cursor-pointer transition-colors" />
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <User className="text-gray-300 hover:text-blue-500 cursor-pointer transition-colors" />
                </motion.div>
            </div>
            <div className="md:hidden">
                <motion.button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="focus:outline-none"
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </motion.button>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween" }}
                        className="fixed top-0 right-0 h-full w-64 bg-gray-800/95 backdrop-blur-lg p-4 z-50 border-l border-white/10"
                    >
                        <motion.button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-4 right-4 focus:outline-none"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X />
                        </motion.button>
                        <nav className="mt-16">
                            <ul className="space-y-6">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-blue-500 font-semibold flex items-center"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Zap className="mr-2" size={18} />
                                        Explore
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Globe className="mr-2" size={18} />
                                        Investments
                                    </Link>
                                </li>
                                <a
                                    href="#target-section"
                                    className="text-gray-300
                            hover:text-blue-500 transition-colors flex
                            items-center"
                                    onClick={scrollToSection}
                                >
                                    <Newspaper className="mr-1" size={16} />
                                    News
                                </a>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Gift className="mr-2" size={18} />
                                        Rewards
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <HelpCircle
                                            className="mr-2"
                                            size={18}
                                        />
                                        Support
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Settings className="mr-2" size={18} />
                                        Settings
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

const TabSection = () => {
    const [activeTab, setActiveTab] = useState("Stocks");
    return (
        <motion.div {...fadeInUp} className="border-b border-white/10">
            <div className="container mx-auto px-4 max-w-7xl">
                <ul className="flex space-x-8 overflow-x-auto scrollbar-hide">
                    {[
                        "Stocks",
                        "Mutual Funds",
                        "ETFs",
                        "Options",
                        "Futures",
                    ].map((tab) => (
                        <motion.li
                            key={tab}
                            className={`py-4 cursor-pointer whitespace-nowrap ${
                                activeTab === tab
                                    ? "border-b-2 border-blue-500 text-blue-500 font-medium"
                                    : "text-gray-300 hover:text-blue-500 transition-colors"
                            }`}
                            onClick={() => setActiveTab(tab)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {tab}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const generateRandomChange = (value: number) => {
    const change = (Math.random() * 2 - 1) * 100;
    const percentChange = (change / value) * 100;
    return { change, percentChange };
};

const MarketIndices = () => {
    const router = useRouter();
    const [marketData, setMarketData] = useState([
        { name: "NIFTY50", value: 18245.32, change: 0, percentChange: 0 },
        { name: "SENSEX", value: 61002.57, change: 0, percentChange: 0 },
        { name: "BANKNIFTY", value: 43123.45, change: 0, percentChange: 0 },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setMarketData((prevData) =>
                prevData.map((index) => {
                    const { change, percentChange } = generateRandomChange(
                        index.value
                    );
                    const newValue = index.value + change;
                    return { ...index, value: newValue, change, percentChange };
                })
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6"
        >
            {marketData.map((index) => (
                <motion.div
                    key={index.name}
                    className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer border border-white/5"
                    whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                        borderColor: "rgba(59, 130, 246, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => router.push(`/dashboard/${index.name}`)}
                >
                    <h3 className="font-semibold text-gray-300">
                        {index.name}
                    </h3>
                    <div className="flex items-center space-x-2 mt-2">
                        <span className="text-lg text-white">
                            {index.value.toLocaleString("en-IN", {
                                style: "currency",
                                currency: "INR",
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}
                        </span>
                        <motion.span
                            key={index.change}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={`text-sm flex items-center ${
                                index.change >= 0
                                    ? "text-green-500"
                                    : "text-red-500"
                            }`}
                        >
                            {index.change >= 0 ? (
                                <ArrowUpRight size={16} />
                            ) : (
                                <ArrowDownRight size={16} />
                            )}
                            {index.change.toFixed(2)} (
                            {index.percentChange.toFixed(2)}%)
                        </motion.span>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

const StockCard = ({
    name,
    initialPrice,
}: {
    name: string;
    initialPrice: number;
}) => {
    const [price, setPrice] = useState(initialPrice);
    const [change, setChange] = useState(0);
    const [percentChange, setPercentChange] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            const { change: randomChange, percentChange: randomPercentChange } =
                generateRandomChange(price);
            setPrice((prevPrice) => prevPrice + randomChange);
            setChange(randomChange);
            setPercentChange(randomPercentChange);
        }, 1000);

        return () => clearInterval(interval);
    }, [price]);

    return (
        <motion.div
            className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer border border-white/5"
            whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                borderColor: "rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push(`/dashboard/${name}`)}
        >
            <h3 className="font-semibold text-white mb-2">{name}</h3>
            <div className="flex items-center justify-between">
                <span className="text-lg text-white">
                    {price.toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}
                </span>
                <motion.span
                    key={change}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-sm flex items-center ${
                        change >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                >
                    {change >= 0 ? (
                        <ArrowUpRight size={16} />
                    ) : (
                        <ArrowDownRight size={16} />
                    )}
                    {change.toFixed(2)} ({percentChange.toFixed(2)}%)
                </motion.span>
            </div>
        </motion.div>
    );
};

const MostBought = () => (
    <motion.div {...fadeInUp} className="my-10">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">
                Most Bought on TradePro
            </h2>
            <motion.a
                href="#"
                className="text-blue-500 text-sm hover:underline flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                View all
                <ChevronRight size={16} className="ml-1" />
            </motion.a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <StockCard name="Reliance" initialPrice={2345.6} />
            <StockCard name="Tata Motors" initialPrice={456.75} />
            <StockCard name="Suzlon Energy" initialPrice={18.45} />
            <StockCard name="Zomato" initialPrice={82.3} />
        </div>
    </motion.div>
);

const ProductsAndTools = () => {
    const products = [
        { name: "F&O", icon: BarChart2 },
        { name: "IPO", icon: DollarSign },
        { name: "ETFs", icon: PieChart },
        { name: "FDs", icon: TrendingUp },
        { name: "US Stocks", icon: Activity },
    ];

    return (
        <motion.div {...fadeInUp} className="my-10">
            <h2 className="text-xl font-semibold text-white mb-6">
                Products & tools
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {products.map((product) => (
                    <motion.div
                        key={product.name}
                        className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-blue-500/10 transition-all duration-300 text-center cursor-pointer border border-white/5"
                        whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(30, 41, 59, 0.7)",
                            boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                            borderColor: "rgba(59, 130, 246, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                        >
                            <product.icon className="text-white" />
                        </motion.div>
                        <span className="text-gray-300 font-medium">
                            {product.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const TopGainers = () => (
    <motion.div {...fadeInUp} className="my-10">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">Top Gainers</h2>
            <motion.a
                href="#"
                className="text-blue-500 text-sm hover:underline flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                See more
                <ChevronRight size={16} className="ml-1" />
            </motion.a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <StockCard name="TCS" initialPrice={845.6} />
            <StockCard name="HDFC" initialPrice={135.6} />
            <StockCard name="ICICI" initialPrice={345.6} />
            <StockCard name="Airtel" initialPrice={535.6} />
        </div>
    </motion.div>
);

const TopByMarketCap = () => {
    const [expandedCompany, setExpandedCompany] = useState<string | null>(null);

    const companies = [
        { name: "Reliance Industries", marketCap: 1523456.78 },
        { name: "TCS", marketCap: 1234567.89 },
        { name: "HDFC Bank", marketCap: 987654.32 },
        { name: "Infosys", marketCap: 7632.1 },
        { name: "ICICI Bank", marketCap: 5410.98 },
    ];

    return (
        <motion.div {...fadeInUp} className="py-10">
            <h2 className="text-xl font-semibold text-white mb-6">
                Top by Market Cap
            </h2>
            <div className="space-y-4">
                {companies.map((company) => (
                    <motion.div
                        key={company.name}
                        className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer border border-white/5"
                        onClick={() =>
                            setExpandedCompany(
                                expandedCompany === company.name
                                    ? null
                                    : company.name
                            )
                        }
                        whileHover={{
                            scale: 1.01,
                            boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                            borderColor: "rgba(59, 130, 246, 0.3)",
                        }}
                        whileTap={{ scale: 0.99 }}
                    >
                        <div className="flex justify-between items-center">
                            <span className="text-white font-medium">
                                {company.name}
                            </span>
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-300">
                                    ₹{company.marketCap.toFixed(2)} Cr
                                </span>
                                <motion.div
                                    animate={{
                                        rotate:
                                            expandedCompany === company.name
                                                ? 180
                                                : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Plus className="text-blue-500" />
                                </motion.div>
                            </div>
                        </div>
                        <AnimatePresence>
                            {expandedCompany === company.name && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-6 text-gray-300"
                                >
                                    <p className="mb-2">
                                        Additional information about{" "}
                                        {company.name} goes here.
                                    </p>
                                    <p className="mb-4">
                                        You can add more details, charts, or any
                                        other relevant data.
                                    </p>
                                    <motion.button
                                        className="mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg flex items-center font-medium"
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow:
                                                "0 0 15px rgba(59, 130, 246, 0.5)",
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Details
                                        <ChevronRight
                                            size={16}
                                            className="ml-1"
                                        />
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default function DashboardPage() {
    return (
        <div className="bg-black min-h-screen text-gray-300">
            <Header />
            <main className="container mx-auto px-4 max-w-7xl pb-20">
                <TabSection />
                <MarketIndices />
                <MostBought />
                <ProductsAndTools />
                <TopGainers />
                <TopByMarketCap />
                <div id="target-section">
                    <News_Feed />
                </div>
            </main>
        </div>
    );
}
