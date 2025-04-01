"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
    Search,
    Bell,
    ShoppingCart,
    User,
    Eye,
    PlusCircle,
    Menu,
    X,
    ArrowUpRight,
    ArrowDownRight,
    Clock,
    DollarSign,
    BarChart2,
    Zap,
    ChevronLeft,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Line,
} from "recharts";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <motion.header
            {...fadeInUp}
            className="flex justify-between items-center p-4 bg-black/90 backdrop-blur-lg text-white sticky top-0 z-50 border-b border-white/10"
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
                                href="/dashboard"
                                className="text-blue-500 font-semibold flex items-center"
                            >
                                <Zap className="mr-1" size={16} />
                                Explore
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboard"
                                className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
                            >
                                <BarChart2 className="mr-1" size={16} />
                                Investments
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="What are you looking for today?"
                        className="pl-10 pr-4 py-2 bg-gray-800/80 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/10"
                    />
                </div>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Bell className="text-gray-300 hover:text-blue-500 cursor-pointer transition-colors" />
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
                <motion.div
                    className="md:hidden"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Menu className="text-gray-300 hover:text-blue-500 cursor-pointer transition-colors" />
                </motion.div>
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
                                        href="/dashboard"
                                        className="text-blue-500 font-semibold flex items-center"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Zap className="mr-2" size={18} />
                                        Explore
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/dashboard"
                                        className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <BarChart2 className="mr-2" size={18} />
                                        Investments
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

const Breadcrumb = ({ stock }) => (
    <motion.div
        {...fadeInUp}
        className="flex items-center space-x-2 text-sm text-gray-400 my-4"
    >
        <Link href="/" className="hover:text-blue-500 transition-colors">
            Home
        </Link>
        <span>/</span>
        <Link
            href="/dashboard"
            className="hover:text-blue-500 transition-colors"
        >
            Stocks
        </Link>
        <span>/</span>
        <span className="text-blue-500">{stock}</span>
    </motion.div>
);

const generateFluctuatingData = (baseValue, points) => {
    let newData = [];
    let lastValue = baseValue;

    for (let i = points - 1; i >= 0; i--) {
        const time = new Date(Date.now() - i * 5000).toLocaleTimeString();

        const fluctuation = Math.random() * 400 - 200;
        lastValue += fluctuation;

        lastValue = Math.max(0, Math.min(lastValue, 500));
        newData.push({ time, value: parseFloat(lastValue.toFixed(2)) });
    }

    return newData;
};

const StockChart = () => {
    const params = useParams();
    const [stockId, setStockId] = useState(null);

    useEffect(() => {
        const fetchParams = async () => {
            const resolvedParams = await React.use(params);
            setStockId(resolvedParams?.id || "Stock");
        };

        fetchParams();
    }, [params]);

    const [timeRange, setTimeRange] = useState("5M");
    const [data, setData] = useState(() => generateFluctuatingData(425371, 50));
    const [currentValue, setCurrentValue] = useState(
        data[data.length - 1]?.value || 425371
    );
    const [change, setChange] = useState({ value: 0, percentage: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const newData = generateFluctuatingData(currentValue, 50);
            setData(newData);

            const newCurrentValue = newData[newData.length - 1]?.value;
            setCurrentValue(newCurrentValue);

            if (newData.length > 1) {
                const initialValue = newData[0]?.value;
                const changeValue = newCurrentValue - initialValue;
                const changePercentage = (changeValue / initialValue) * 100;
                setChange({ value: changeValue, percentage: changePercentage });
            }
        }, 10000);

        return () => clearInterval(interval);
    }, [timeRange, currentValue]);

    return (
        <motion.div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg my-6 border border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-white">{stockId}</h2>
                    <div className="flex items-center space-x-2 mt-1">
                        <span className="text-3xl font-bold text-white">
                            {currentValue.toFixed(2)}
                        </span>
                        <motion.span
                            className={`flex items-center ${
                                change.value >= 0
                                    ? "text-green-500"
                                    : "text-red-500"
                            }`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            key={change.value}
                        >
                            {change.value >= 0 ? (
                                <ArrowUpRight size={20} className="mr-1" />
                            ) : (
                                <ArrowDownRight size={20} className="mr-1" />
                            )}
                            {change.value > 0 ? "+" : ""}
                            {change.value.toFixed(2)} (
                            {change.percentage.toFixed(2)}%)
                        </motion.span>
                    </div>
                </div>
                <div className="flex space-x-3 mt-4 md:mt-0">
                    <motion.button
                        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <PlusCircle className="inline-block mr-2" size={16} />
                        Create Alert
                    </motion.button>
                    <motion.button
                        className="bg-gray-700/80 text-white px-4 py-2 rounded-lg hover:bg-gray-600/80 transition-all flex items-center font-medium border border-white/10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Eye className="inline-block mr-2" size={16} />
                        Watchlist
                    </motion.button>
                </div>
            </div>

            {/* 📈 Line Chart Component */}
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid stroke="#4B5563" strokeDasharray="3 3" />
                    <XAxis dataKey="time" tick={{ fill: "#9CA3AF" }} />
                    <YAxis tick={{ fill: "#9CA3AF" }} />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#1F2937",
                            border: "1px solid #4B5563",
                            color: "#FFF",
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        dot={{ fill: "#3B82F6" }}
                    />
                </LineChart>
            </ResponsiveContainer>

            <div className="flex justify-between mt-6 overflow-x-auto">
                {["5M", "10M", "15M", "30M", "1H"].map((range) => (
                    <motion.button
                        key={range}
                        className={`px-4 py-2 rounded-lg ${
                            timeRange === range
                                ? "bg-blue-500/20 text-blue-500 font-medium"
                                : "text-gray-300 hover:bg-gray-700/50"
                        } transition-all flex items-center`}
                        onClick={() => setTimeRange(range)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Clock size={14} className="mr-1" />
                        {range}
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
};

const OptionsTable = ({ stock }) => {
    const [options, setOptions] = useState([
        {
            strike: 25400,
            callPrice: 115.15,
            callChange: 17.0,
            putPrice: 97.55,
            putChange: -15.55,
        },
        {
            strike: 25300,
            callPrice: 95.4,
            callChange: -10.9,
            putPrice: 96.65,
            putChange: 28.85,
        },
        {
            strike: 25200,
            callPrice: 78.5,
            callChange: 32.78,
            putPrice: 73.65,
            putChange: -12.25,
        },
        {
            strike: 25100,
            callPrice: 29.7,
            callChange: -10.14,
            putPrice: 28.3,
            putChange: 20.74,
        },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setOptions((prevOptions) =>
                prevOptions.map((option) => ({
                    ...option,
                    callPrice: option.callPrice + (Math.random() - 0.5) * 5,
                    callChange: (Math.random() - 0.5) * 10,
                    putPrice: option.putPrice + (Math.random() - 0.5) * 5,
                    putChange: (Math.random() - 0.5) * 10,
                }))
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            {...fadeInUp}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg my-8 overflow-x-auto border border-white/5"
        >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <DollarSign size={24} className="mr-2 text-blue-500" />
                Top {stock} Options
            </h3>
            <table className="w-full text-left">
                <thead>
                    <tr className="text-gray-400 border-b border-gray-700">
                        <th className="py-3 px-4">Strike</th>
                        <th className="py-3 px-4">Call</th>
                        <th className="py-3 px-4">Put</th>
                    </tr>
                </thead>
                <tbody>
                    {options.map((option, index) => (
                        <motion.tr
                            key={index}
                            className="border-b border-gray-700/50"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <td className="py-4 px-4 text-white font-medium">
                                {option.strike}
                            </td>
                            <td className="py-4 px-4">
                                <div className="text-white">
                                    {option.callPrice.toFixed(2)}
                                </div>
                                <motion.div
                                    className={
                                        option.callChange >= 0
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={option.callChange}
                                >
                                    {option.callChange > 0 ? (
                                        <ArrowUpRight
                                            size={14}
                                            className="inline mr-1"
                                        />
                                    ) : (
                                        <ArrowDownRight
                                            size={14}
                                            className="inline mr-1"
                                        />
                                    )}
                                    {option.callChange.toFixed(2)}%
                                </motion.div>
                            </td>
                            <td className="py-4 px-4">
                                <div className="text-white">
                                    {option.putPrice.toFixed(2)}
                                </div>
                                <motion.div
                                    className={
                                        option.putChange >= 0
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={option.putChange}
                                >
                                    {option.putChange > 0 ? (
                                        <ArrowUpRight
                                            size={14}
                                            className="inline mr-1"
                                        />
                                    ) : (
                                        <ArrowDownRight
                                            size={14}
                                            className="inline mr-1"
                                        />
                                    )}
                                    {option.putChange.toFixed(2)}%
                                </motion.div>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    );
};

const OpenInterest = () => {
    const [oiData, setOiData] = useState({
        totalPutOI: 3513795,
        putCallRatio: 0.99,
        totalCallOI: 3555969,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setOiData((prevData) => ({
                totalPutOI:
                    prevData.totalPutOI +
                    Math.floor((Math.random() - 0.5) * 10000),
                putCallRatio:
                    prevData.putCallRatio + (Math.random() - 0.5) * 0.02,
                totalCallOI:
                    prevData.totalCallOI +
                    Math.floor((Math.random() - 0.5) * 10000),
            }));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            {...fadeInUp}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg my-8 border border-white/5"
        >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <BarChart2 size={24} className="mr-2 text-blue-500" />
                Open Interest (OI)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gray-700/30 p-4 rounded-lg border border-white/5"
                >
                    <div className="text-gray-400 mb-2">Total Put OI</div>
                    <div className="text-white text-xl font-medium">
                        {oiData.totalPutOI.toLocaleString()}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gray-700/30 p-4 rounded-lg border border-white/5"
                >
                    <div className="text-gray-400 mb-2">Put/Call ratio</div>
                    <div className="text-white text-xl font-medium">
                        {oiData.putCallRatio.toFixed(2)}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gray-700/30 p-4 rounded-lg border border-white/5"
                >
                    <div className="text-gray-400 mb-2">Total Call OI</div>
                    <div className="text-white text-xl font-medium">
                        {oiData.totalCallOI.toLocaleString()}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default function StockDetailPage({ params }) {
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => setLoading(false), 1500);
    }, []);

    if (loading) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center">
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50"></div>
                    <motion.div
                        className="relative bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/10 flex flex-col items-center"
                        animate={{
                            boxShadow: [
                                "0 0 20px rgba(59, 130, 246, 0.3)",
                                "0 0 40px rgba(59, 130, 246, 0.5)",
                                "0 0 20px rgba(59, 130, 246, 0.3)",
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                        }}
                    >
                        <div className="h-16 w-16 border-4 border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent rounded-full animate-spin mb-4"></div>
                        <span className="text-white text-xl font-medium">
                            Loading {params.id} data...
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen text-gray-300">
            <Header />
            <main className="container mx-auto px-4 max-w-7xl pb-20">
                <div className="flex items-center mt-4">
                    <motion.button
                        onClick={() => router.push("/dashboard")}
                        className="flex items-center text-blue-500 hover:underline mr-4"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ChevronLeft size={16} className="mr-1" />
                        Back to Dashboard
                    </motion.button>
                    <Breadcrumb stock={params.id} />
                </div>
                <StockChart stock={params.id} />
                <OptionsTable stock={params.id} />
                <OpenInterest />
            </main>
        </div>
    );
}
