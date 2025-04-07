"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
    Search,
    Bell,
    ShoppingCart,
    User,
    Menu,
    X,
    ArrowUpRight,
    ArrowDownRight,
    Zap,
    Globe,
    BookOpen,
    PlusCircle,
    XCircle,
    RefreshCw,
    Download,
    Share2,
    Settings,
    TrendingUp,
    Activity,
    AlertTriangle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    ReferenceDot,
} from "recharts";

interface AssetType {
    name: string;
    color: string;
}

interface Asset {
    asset: string;
    type: string;
}

interface Indicator {
    id: string;
    name: string;
    color: string;
    period: number;
    stdDev?: number;
}

interface Strategy {
    id: string;
    name: string;
    description: string;
    indicators: string[];
}

interface ChartDataPoint {
    date: string;
    [key: string]: any;
}

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
                                className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
                            >
                                <Zap className="mr-1" size={16} />
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/dashboard/compare"
                                className="text-blue-500 font-semibold flex items-center"
                            >
                                <Globe className="mr-1" size={16} />
                                Compare
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/"
                                className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
                            >
                                <BookOpen className="mr-1" size={16} />
                                Learn
                            </Link>
                        </li>
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
                                        href="/dashboard"
                                        className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Zap className="mr-2" size={18} />
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/dashboard/compare"
                                        className="text-blue-500 font-semibold flex items-center"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Globe className="mr-2" size={18} />
                                        Compare
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-300 hover:text-blue-500 transition-colors flex items-center"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <BookOpen className="mr-2" size={18} />
                                        Learn
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

// Asset types and their corresponding colors
const assetTypes: Record<string, AssetType> = {
    stock: { name: "Stocks", color: "#3b82f6" },
    crypto: { name: "Crypto", color: "#8b5cf6" },
    bond: { name: "Bonds", color: "#10b981" },
    commodity: { name: "Commodities", color: "#f59e0b" },
    forex: { name: "Forex", color: "#ec4899" },
};

// Available assets for each type
const availableAssets: Record<string, string[]> = {
    stock: ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NIFTY50", "SENSEX"],
    crypto: ["BTC", "ETH", "SOL", "ADA", "DOT", "MATIC"],
    bond: ["US 10Y", "US 30Y", "UK 10Y", "GER 10Y", "JPN 10Y"],
    commodity: ["Gold", "Silver", "Crude Oil", "Natural Gas", "Copper"],
    forex: ["EUR/USD", "USD/JPY", "GBP/USD", "USD/CAD", "AUD/USD"],
};

// Available indicators
const indicators: Indicator[] = [
    { id: "sma20", name: "SMA 20", color: "#10b981", period: 20 },
    { id: "sma50", name: "SMA 50", color: "#f59e0b", period: 50 },
    { id: "sma200", name: "SMA 200", color: "#ef4444", period: 200 },
    {
        id: "bb",
        name: "Bollinger Bands",
        color: "#8b5cf6",
        period: 20,
        stdDev: 2,
    },
    { id: "rsi", name: "RSI", color: "#ec4899", period: 14 },
];

// Available strategies
const strategies: Strategy[] = [
    {
        id: "sma_cross",
        name: "SMA Crossover",
        description:
            "Buy when price crosses above SMA 50, sell when it crosses below",
        indicators: ["sma50"],
    },
    {
        id: "bb_bounce",
        name: "Bollinger Bounce",
        description:
            "Buy when price touches lower band, sell when it touches upper band",
        indicators: ["bb"],
    },
    {
        id: "rsi_oversold",
        name: "RSI Oversold/Overbought",
        description:
            "Buy when RSI < 30 (oversold), sell when RSI > 70 (overbought)",
        indicators: ["rsi"],
    },
];

// Generate random historical data for an asset
const generateHistoricalData = (
    assetName: string,
    days: number,
    volatility: number,
    trend: number
): ChartDataPoint[] => {
    const data: ChartDataPoint[] = [];
    let value = 1000 + Math.random() * 9000; // Random starting value between 1000 and 10000

    for (let i = days; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);

        // Add some randomness with trend bias
        const change = (Math.random() - 0.5) * volatility + trend;
        value = Math.max(value * (1 + change / 100), 0.01); // Ensure value doesn't go below 0.01

        const dataPoint: ChartDataPoint = {
            date: date.toISOString().split("T")[0],
        };
        dataPoint[assetName] = value;

        data.push(dataPoint);
    }

    return data;
};

// Calculate Simple Moving Average
const calculateSMA = (
    data: ChartDataPoint[],
    field: string,
    period: number
): ChartDataPoint[] => {
    const result = [...data];

    for (let i = 0; i < result.length; i++) {
        if (i >= period - 1) {
            let sum = 0;
            for (let j = 0; j < period; j++) {
                sum += result[i - j][field] || 0;
            }
            result[i][`${field}_sma${period}`] = sum / period;
        } else {
            result[i][`${field}_sma${period}`] = null;
        }
    }

    return result;
};

// Calculate Bollinger Bands
const calculateBollingerBands = (
    data: ChartDataPoint[],
    field: string,
    period: number,
    stdDev: number
): ChartDataPoint[] => {
    const result = calculateSMA(data, field, period);

    for (let i = 0; i < result.length; i++) {
        if (i >= period - 1) {
            let sum = 0;
            for (let j = 0; j < period; j++) {
                const deviation =
                    (result[i - j][field] || 0) -
                    (result[i][`${field}_sma${period}`] || 0);
                sum += deviation * deviation;
            }
            const standardDeviation = Math.sqrt(sum / period);

            result[i][`${field}_bb_upper`] =
                (result[i][`${field}_sma${period}`] || 0) +
                standardDeviation * stdDev;
            result[i][`${field}_bb_lower`] =
                (result[i][`${field}_sma${period}`] || 0) -
                standardDeviation * stdDev;
        } else {
            result[i][`${field}_bb_upper`] = null;
            result[i][`${field}_bb_lower`] = null;
        }
    }

    return result;
};

// Calculate RSI (Relative Strength Index)
const calculateRSI = (
    data: ChartDataPoint[],
    field: string,
    period: number
): ChartDataPoint[] => {
    const result = [...data];
    let gains = 0;
    let losses = 0;

    // Calculate first average gain and loss
    for (let i = 1; i < period + 1; i++) {
        const change = (result[i][field] || 0) - (result[i - 1][field] || 0);
        if (change >= 0) {
            gains += change;
        } else {
            losses -= change;
        }
    }

    let avgGain = gains / period;
    let avgLoss = losses / period;

    // Calculate RSI for each data point
    for (let i = 0; i < result.length; i++) {
        if (i < period) {
            result[i][`${field}_rsi`] = null;
        } else {
            if (i > period) {
                const change =
                    (result[i][field] || 0) - (result[i - 1][field] || 0);
                const currentGain = change > 0 ? change : 0;
                const currentLoss = change < 0 ? -change : 0;

                // Use smoothed averages
                avgGain = (avgGain * (period - 1) + currentGain) / period;
                avgLoss = (avgLoss * (period - 1) + currentLoss) / period;
            }

            const rs = avgLoss === 0 ? 100 : avgGain / avgLoss;
            result[i][`${field}_rsi`] = 100 - 100 / (1 + rs);
        }
    }

    return result;
};

// Apply trading strategy and find signals
const applyStrategy = (
    data: ChartDataPoint[],
    asset: string,
    strategy: Strategy
): ChartDataPoint[] => {
    const result = [...data];

    if (strategy.id === "sma_cross") {
        for (let i = 1; i < result.length; i++) {
            const prevPrice = result[i - 1][asset] || 0;
            const currPrice = result[i][asset] || 0;
            const prevSMA = result[i - 1][`${asset}_sma50`] || 0;
            const currSMA = result[i][`${asset}_sma50`] || 0;

            if (prevPrice < prevSMA && currPrice > currSMA) {
                result[i][`${asset}_buy_signal`] = currPrice;
            } else if (prevPrice > prevSMA && currPrice < currSMA) {
                result[i][`${asset}_sell_signal`] = currPrice;
            }
        }
    } else if (strategy.id === "bb_bounce") {
        for (let i = 1; i < result.length; i++) {
            const prevPrice = result[i - 1][asset] || 0;
            const currPrice = result[i][asset] || 0;
            const lowerBand = result[i][`${asset}_bb_lower`] || 0;
            const upperBand = result[i][`${asset}_bb_upper`] || 0;

            if (prevPrice > lowerBand && currPrice <= lowerBand) {
                result[i][`${asset}_buy_signal`] = currPrice;
            } else if (prevPrice < upperBand && currPrice >= upperBand) {
                result[i][`${asset}_sell_signal`] = currPrice;
            }
        }
    } else if (strategy.id === "rsi_oversold") {
        for (let i = 1; i < result.length; i++) {
            const prevRSI = result[i - 1][`${asset}_rsi`] || 0;
            const currRSI = result[i][`${asset}_rsi`] || 0;

            if (prevRSI >= 30 && currRSI < 30) {
                result[i][`${asset}_buy_signal`] = result[i][asset];
            } else if (prevRSI <= 70 && currRSI > 70) {
                result[i][`${asset}_sell_signal`] = result[i][asset];
            }
        }
    }

    return result;
};

// Apply indicators to data
const applyIndicators = (
    data: ChartDataPoint[],
    asset: string,
    selectedIndicators: Indicator[]
): ChartDataPoint[] => {
    let result = [...data];

    selectedIndicators.forEach((indicator) => {
        if (indicator.id.startsWith("sma")) {
            result = calculateSMA(result, asset, indicator.period);
        } else if (indicator.id === "bb") {
            result = calculateBollingerBands(
                result,
                asset,
                indicator.period,
                indicator.stdDev || 2
            );
        } else if (indicator.id === "rsi") {
            result = calculateRSI(result, asset, indicator.period);
        }
    });

    return result;
};

// Asset selector component
const AssetSelector = ({
    onAddAsset,
}: {
    onAddAsset: (asset: string, type: string) => void;
}) => {
    const [selectedType, setSelectedType] = useState("stock");
    const [selectedAsset, setSelectedAsset] = useState(
        availableAssets.stock[0]
    );

    return (
        <motion.div
            className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-white/10 mb-6"
            {...fadeInUp}
        >
            <h3 className="text-lg font-medium text-white mb-4">
                Add Asset to Compare
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm text-gray-400 mb-2">
                        Asset Type
                    </label>
                    <select
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={selectedType}
                        onChange={(e) => {
                            setSelectedType(e.target.value);
                            setSelectedAsset(
                                availableAssets[e.target.value][0]
                            );
                        }}
                    >
                        {Object.entries(assetTypes).map(([key, { name }]) => (
                            <option key={key} value={key}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm text-gray-400 mb-2">
                        Asset
                    </label>
                    <select
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={selectedAsset}
                        onChange={(e) => setSelectedAsset(e.target.value)}
                    >
                        {availableAssets[selectedType].map((asset) => (
                            <option key={asset} value={asset}>
                                {asset}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <motion.button
                className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg flex items-center justify-center font-medium w-full md:w-auto"
                whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onAddAsset(selectedAsset, selectedType)}
            >
                <PlusCircle className="mr-2" size={18} />
                Add to Chart
            </motion.button>
        </motion.div>
    );
};

// Asset chip component
const AssetChip = ({
    asset,
    type,
    onRemove,
}: {
    asset: string;
    type: string;
    onRemove: (asset: string) => void;
}) => {
    const assetColor = assetTypes[type].color;

    return (
        <motion.div
            className="flex items-center bg-gray-700/70 rounded-full px-3 py-1 mr-2 mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
        >
            <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: assetColor }}
            />
            <span className="text-white text-sm mr-2">{asset}</span>
            <motion.button
                className="text-gray-400 hover:text-white focus:outline-none"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onRemove(asset)}
            >
                <XCircle size={16} />
            </motion.button>
        </motion.div>
    );
};

// Indicator chip component
const IndicatorChip = ({
    indicator,
    onRemove,
}: {
    indicator: Indicator;
    onRemove: (id: string) => void;
}) => {
    return (
        <motion.div
            className="flex items-center bg-gray-700/70 rounded-full px-3 py-1 mr-2 mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
        >
            <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: indicator.color }}
            />
            <span className="text-white text-sm mr-2">{indicator.name}</span>
            <motion.button
                className="text-gray-400 hover:text-white focus:outline-none"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => onRemove(indicator.id)}
            >
                <XCircle size={16} />
            </motion.button>
        </motion.div>
    );
};

// Time range selector component
const TimeRangeSelector = ({
    selectedRange,
    onRangeChange,
}: {
    selectedRange: string;
    onRangeChange: (range: string, days: number) => void;
}) => {
    const ranges = [
        { id: "1W", label: "1W", days: 7 },
        { id: "1M", label: "1M", days: 30 },
        { id: "3M", label: "3M", days: 90 },
        { id: "6M", label: "6M", days: 180 },
        { id: "1Y", label: "1Y", days: 365 },
        { id: "5Y", label: "5Y", days: 1825 },
    ];

    return (
        <div className="flex space-x-2 mb-6 overflow-x-auto scrollbar-hide">
            {ranges.map((range) => (
                <motion.button
                    key={range.id}
                    className={`px-4 py-2 rounded-lg ${
                        selectedRange === range.id
                            ? "bg-blue-500 text-white font-medium"
                            : "bg-gray-700/50 text-gray-300 hover:bg-gray-700"
                    } transition-all`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onRangeChange(range.id, range.days)}
                >
                    {range.label}
                </motion.button>
            ))}
        </div>
    );
};

// Custom tooltip for the chart
const CustomTooltip = ({
    active,
    payload,
    label,
}: {
    active?: boolean;
    payload?: any[];
    label?: string;
}) => {
    if (active && payload && payload.length) {
        // Filter out indicator data points
        const mainAssets = payload.filter(
            (entry) =>
                !entry.dataKey.includes("_sma") &&
                !entry.dataKey.includes("_bb_") &&
                !entry.dataKey.includes("_rsi")
        );

        // Get indicators
        const indicators = payload.filter(
            (entry) =>
                entry.dataKey.includes("_sma") ||
                entry.dataKey.includes("_bb_") ||
                entry.dataKey.includes("_rsi")
        );

        return (
            <div className="bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-lg">
                <p className="text-gray-300 text-sm mb-2">{label}</p>

                {/* Main assets */}
                {mainAssets.map((entry, index) => (
                    <div
                        key={`asset-${index}`}
                        className="flex items-center mb-1"
                    >
                        <div
                            className="w-2 h-2 rounded-full mr-2"
                            style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-gray-300 text-sm mr-2">
                            {entry.name}:
                        </span>
                        <span className="text-white font-medium">
                            {entry.value?.toLocaleString(undefined, {
                                maximumFractionDigits: 2,
                            })}
                        </span>
                    </div>
                ))}

                {/* Indicators */}
                {indicators.length > 0 && (
                    <>
                        <div className="my-2 border-t border-gray-700"></div>
                        {indicators.map((entry, index) => {
                            const name = entry.dataKey
                                .split("_")
                                .slice(1)
                                .join(" ")
                                .toUpperCase();
                            return (
                                <div
                                    key={`indicator-${index}`}
                                    className="flex items-center mb-1"
                                >
                                    <div
                                        className="w-2 h-2 rounded-full mr-2"
                                        style={{ backgroundColor: entry.color }}
                                    />
                                    <span className="text-gray-300 text-sm mr-2">
                                        {name}:
                                    </span>
                                    <span className="text-white font-medium">
                                        {entry.value?.toLocaleString(
                                            undefined,
                                            { maximumFractionDigits: 2 }
                                        )}
                                    </span>
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
        );
    }
    return null;
};

// Indicator selector component
const IndicatorSelector = ({
    onAddIndicator,
    selectedIndicators,
}: {
    onAddIndicator: (indicatorOrId: Indicator | string) => void;
    selectedIndicators: Indicator[];
}) => {
    const [selectedIndicator, setSelectedIndicator] = useState(
        indicators[0].id
    );

    // Filter out already selected indicators
    const availableIndicators = indicators.filter(
        (indicator) =>
            !selectedIndicators.some((selected) => selected.id === indicator.id)
    );

    return (
        <motion.div
            className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-white/10 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="flex items-center mb-4">
                <Settings className="text-blue-500 mr-2" size={20} />
                <h3 className="text-lg font-medium text-white">
                    Technical Indicators
                </h3>
            </div>

            <div className="flex flex-wrap items-center mb-4">
                <span className="text-gray-400 mr-2 mb-2">
                    Active Indicators:
                </span>
                {selectedIndicators.length === 0 ? (
                    <span className="text-gray-500 italic">None selected</span>
                ) : (
                    <AnimatePresence>
                        {selectedIndicators.map((indicator) => (
                            <IndicatorChip
                                key={indicator.id}
                                indicator={indicator}
                                onRemove={onAddIndicator}
                            />
                        ))}
                    </AnimatePresence>
                )}
            </div>

            {availableIndicators.length > 0 ? (
                <div className="flex items-end gap-4">
                    <div className="flex-grow">
                        <label className="block text-sm text-gray-400 mb-2">
                            Add Indicator
                        </label>
                        <select
                            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={selectedIndicator}
                            onChange={(e) =>
                                setSelectedIndicator(e.target.value)
                            }
                        >
                            {availableIndicators.map((indicator) => (
                                <option key={indicator.id} value={indicator.id}>
                                    {indicator.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <motion.button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center justify-center font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            const indicator = indicators.find(
                                (ind) => ind.id === selectedIndicator
                            );
                            if (indicator) onAddIndicator(indicator);
                        }}
                    >
                        <PlusCircle className="mr-2" size={16} />
                        Add
                    </motion.button>
                </div>
            ) : (
                <p className="text-gray-400 text-sm italic">
                    All available indicators have been added
                </p>
            )}
        </motion.div>
    );
};

// Strategy selector component
const StrategySelector = ({
    onSelectStrategy,
    selectedStrategy,
    selectedIndicators,
}: {
    onSelectStrategy: (strategy: Strategy | null) => void;
    selectedStrategy: Strategy | null;
    selectedIndicators: Indicator[];
}) => {
    // Filter strategies based on required indicators
    const availableStrategies = strategies.filter((strategy) =>
        strategy.indicators.every((indId) =>
            selectedIndicators.some((selected) => selected.id === indId)
        )
    );

    return (
        <motion.div
            className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-white/10 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="flex items-center mb-4">
                <TrendingUp className="text-blue-500 mr-2" size={20} />
                <h3 className="text-lg font-medium text-white">
                    Trading Strategies
                </h3>
            </div>

            {availableStrategies.length === 0 ? (
                <div className="bg-gray-700/30 p-3 rounded-lg flex items-start">
                    <AlertTriangle
                        className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0"
                        size={18}
                    />
                    <p className="text-gray-300 text-sm">
                        Add required indicators first to enable trading
                        strategies.
                        <span className="block mt-1 text-gray-400">
                            For example, add SMA 50 to enable the SMA Crossover
                            strategy.
                        </span>
                    </p>
                </div>
            ) : (
                <>
                    <div className="mb-4">
                        <label className="block text-sm text-gray-400 mb-2">
                            Select Strategy
                        </label>
                        <select
                            className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={selectedStrategy?.id || ""}
                            onChange={(e) => {
                                const strategy = strategies.find(
                                    (s) => s.id === e.target.value
                                );
                                onSelectStrategy(strategy || null);
                            }}
                        >
                            <option value="">None (Disable Signals)</option>
                            {availableStrategies.map((strategy) => (
                                <option key={strategy.id} value={strategy.id}>
                                    {strategy.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {selectedStrategy && (
                        <div className="bg-gray-700/30 p-3 rounded-lg">
                            <div className="flex items-center mb-2">
                                <Activity
                                    className="text-blue-500 mr-2"
                                    size={16}
                                />
                                <h4 className="font-medium text-white">
                                    {selectedStrategy.name}
                                </h4>
                            </div>
                            <p className="text-gray-300 text-sm">
                                {selectedStrategy.description}
                            </p>
                            <div className="mt-2 text-xs text-gray-400">
                                <span className="inline-block mr-2 bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full">
                                    Buy Signal
                                </span>
                                <span className="inline-block bg-red-500/20 text-red-500 px-2 py-0.5 rounded-full">
                                    Sell Signal
                                </span>
                            </div>
                        </div>
                    )}
                </>
            )}
        </motion.div>
    );
};

export default function CompareAssetsPage() {
    const [selectedAssets, setSelectedAssets] = useState<Asset[]>([]);
    const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
    const [timeRange, setTimeRange] = useState("3M");
    const [days, setDays] = useState(90);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedIndicators, setSelectedIndicators] = useState<Indicator[]>(
        []
    );
    const [selectedStrategy, setSelectedStrategy] = useState<Strategy | null>(
        null
    );

    // Generate chart data with indicators and strategies
    const generateChartData = (
        assets: Asset[],
        indicators: Indicator[],
        strategy: Strategy | null
    ): ChartDataPoint[] => {
        if (assets.length === 0) return [];

        // Generate base data for each asset
        let mergedData: ChartDataPoint[] = [];

        assets.forEach(({ asset, type }) => {
            const volatility = type === "crypto" ? 5 : type === "stock" ? 2 : 1;
            const trend = Math.random() > 0.5 ? 0.05 : -0.05;

            // Generate random data
            const assetData = generateHistoricalData(
                asset,
                days,
                volatility,
                trend
            );

            // If this is the first asset, use its data as the base
            if (mergedData.length === 0) {
                mergedData = assetData;
            } else {
                // Merge this asset's data with existing data
                assetData.forEach((point, i) => {
                    if (i < mergedData.length) {
                        mergedData[i] = { ...mergedData[i], ...point };
                    }
                });
            }
        });

        // Apply indicators to each asset
        assets.forEach(({ asset }) => {
            if (indicators.length > 0) {
                mergedData = applyIndicators(mergedData, asset, indicators);
            }
        });

        // Apply strategy if selected
        if (strategy && assets.length > 0) {
            // Apply strategy to the first asset only for simplicity
            const mainAsset = assets[0].asset;
            mergedData = applyStrategy(mergedData, mainAsset, strategy);
        }

        return mergedData;
    };

    // Handle adding an asset to the chart
    const handleAddAsset = (asset: string, type: string) => {
        // Check if asset is already added
        if (selectedAssets.some((item) => item.asset === asset)) {
            return;
        }

        setIsLoading(true);

        // Add asset to selected assets
        const newSelectedAssets = [...selectedAssets, { asset, type }];
        setSelectedAssets(newSelectedAssets);

        // Generate new chart data
        const newChartData = generateChartData(
            newSelectedAssets,
            selectedIndicators,
            selectedStrategy
        );
        setChartData(newChartData);

        setTimeout(() => setIsLoading(false), 500);
    };

    // Handle removing an asset from the chart
    const handleRemoveAsset = (asset: string) => {
        const newSelectedAssets = selectedAssets.filter(
            (item) => item.asset !== asset
        );
        setSelectedAssets(newSelectedAssets);

        if (newSelectedAssets.length === 0) {
            setChartData([]);
        } else {
            const newChartData = generateChartData(
                newSelectedAssets,
                selectedIndicators,
                selectedStrategy
            );
            setChartData(newChartData);
        }
    };

    // Handle changing the time range
    const handleRangeChange = (range: string, rangeDays: number) => {
        setTimeRange(range);
        setDays(rangeDays);
        setIsLoading(true);

        if (selectedAssets.length > 0) {
            // Regenerate data for all assets with new time range
            const newChartData = generateChartData(
                selectedAssets,
                selectedIndicators,
                selectedStrategy
            );
            setChartData(newChartData);
        }

        setTimeout(() => setIsLoading(false), 500);
    };

    // Handle adding/removing indicators
    const handleIndicatorToggle = (indicatorOrId: Indicator | string) => {
        setIsLoading(true);

        let newSelectedIndicators: Indicator[];

        if (typeof indicatorOrId === "string") {
            // Remove indicator
            newSelectedIndicators = selectedIndicators.filter(
                (ind) => ind.id !== indicatorOrId
            );
        } else {
            // Add indicator
            newSelectedIndicators = [...selectedIndicators, indicatorOrId];
        }

        setSelectedIndicators(newSelectedIndicators);

        // If removing an indicator that's required by the selected strategy, disable the strategy
        if (
            typeof indicatorOrId === "string" &&
            selectedStrategy &&
            selectedStrategy.indicators.includes(indicatorOrId)
        ) {
            setSelectedStrategy(null);
        }

        if (selectedAssets.length > 0) {
            const newChartData = generateChartData(
                selectedAssets,
                newSelectedIndicators,
                selectedStrategy
            );
            setChartData(newChartData);
        }

        setTimeout(() => setIsLoading(false), 500);
    };

    // Handle selecting a strategy
    const handleStrategySelect = (strategy: Strategy | null) => {
        setIsLoading(true);
        setSelectedStrategy(strategy);

        if (selectedAssets.length > 0) {
            const newChartData = generateChartData(
                selectedAssets,
                selectedIndicators,
                strategy
            );
            setChartData(newChartData);
        }

        setTimeout(() => setIsLoading(false), 500);
    };

    // Handle refreshing the chart data
    const handleRefresh = () => {
        if (selectedAssets.length === 0) return;

        setIsLoading(true);

        // Regenerate data for all assets
        const newChartData = generateChartData(
            selectedAssets,
            selectedIndicators,
            selectedStrategy
        );
        setChartData(newChartData);

        setTimeout(() => setIsLoading(false), 500);
    };

    // Format dates for X-axis
    const formatXAxis = (tickItem: string) => {
        const date = new Date(tickItem);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
        });
    };

    return (
        <div className="bg-black min-h-screen text-gray-300">
            <Header />
            <main className="container mx-auto px-4 max-w-7xl py-6">
                <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Multi-Asset Comparison
                    </h1>
                    <p className="text-gray-400">
                        Compare performance across different asset classes with
                        technical indicators
                    </p>
                </motion.div>

                <AssetSelector onAddAsset={handleAddAsset} />

                {selectedAssets.length > 0 && (
                    <motion.div
                        className="mb-6 flex flex-wrap"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="flex flex-wrap items-center">
                            <span className="text-gray-400 mr-2 mb-2">
                                Selected Assets:
                            </span>
                            <AnimatePresence>
                                {selectedAssets.map(({ asset, type }) => (
                                    <AssetChip
                                        key={asset}
                                        asset={asset}
                                        type={type}
                                        onRemove={handleRemoveAsset}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}

                <TimeRangeSelector
                    selectedRange={timeRange}
                    onRangeChange={handleRangeChange}
                />

                {selectedAssets.length > 0 && (
                    <>
                        <IndicatorSelector
                            onAddIndicator={handleIndicatorToggle}
                            selectedIndicators={selectedIndicators}
                        />

                        <StrategySelector
                            onSelectStrategy={handleStrategySelect}
                            selectedStrategy={selectedStrategy}
                            selectedIndicators={selectedIndicators}
                        />
                    </>
                )}

                <motion.div
                    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 mb-6 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {isLoading && (
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
                            <div className="flex flex-col items-center">
                                <div className="h-10 w-10 border-4 border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent rounded-full animate-spin mb-4"></div>
                                <span className="text-white">
                                    Loading chart data...
                                </span>
                            </div>
                        </div>
                    )}

                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold text-white">
                            Performance Comparison
                        </h2>
                        <div className="flex space-x-2">
                            <motion.button
                                className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg flex items-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleRefresh}
                            >
                                <RefreshCw size={18} />
                            </motion.button>
                            <motion.button
                                className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg flex items-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download size={18} />
                            </motion.button>
                            <motion.button
                                className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg flex items-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Share2 size={18} />
                            </motion.button>
                        </div>
                    </div>

                    {selectedAssets.length === 0 ? (
                        <div className="h-[400px] flex flex-col items-center justify-center text-gray-400">
                            <Globe size={48} className="mb-4 opacity-50" />
                            <p className="text-lg mb-2">No assets selected</p>
                            <p className="text-sm">
                                Add assets above to start comparing
                            </p>
                        </div>
                    ) : (
                        <div className="h-[500px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    data={chartData}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 20,
                                        bottom: 30,
                                    }}
                                >
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#374151"
                                    />
                                    <XAxis
                                        dataKey="date"
                                        stroke="#9CA3AF"
                                        tickFormatter={formatXAxis}
                                        tick={{ fill: "#9CA3AF" }}
                                    />
                                    <YAxis
                                        stroke="#9CA3AF"
                                        tick={{ fill: "#9CA3AF" }}
                                        tickFormatter={(value) =>
                                            value.toLocaleString(undefined, {
                                                maximumFractionDigits: 0,
                                            })
                                        }
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Legend
                                        verticalAlign="top"
                                        wrapperStyle={{ paddingBottom: "10px" }}
                                    />

                                    {/* Main asset lines */}
                                    {selectedAssets.map(({ asset, type }) => (
                                        <Line
                                            key={asset}
                                            type="monotone"
                                            dataKey={asset}
                                            name={asset}
                                            stroke={assetTypes[type].color}
                                            strokeWidth={2}
                                            dot={false}
                                            activeDot={{
                                                r: 6,
                                                stroke: assetTypes[type].color,
                                                strokeWidth: 2,
                                                fill: "#1F2937",
                                            }}
                                        />
                                    ))}

                                    {/* Indicator lines */}
                                    {selectedAssets.length > 0 &&
                                        selectedIndicators.map((indicator) => {
                                            const asset =
                                                selectedAssets[0].asset; // Apply indicators to first asset only for simplicity

                                            if (
                                                indicator.id.startsWith("sma")
                                            ) {
                                                return (
                                                    <Line
                                                        key={`${asset}_${indicator.id}`}
                                                        type="monotone"
                                                        dataKey={`${asset}_${indicator.id}`}
                                                        name={`${asset} ${indicator.name}`}
                                                        stroke={indicator.color}
                                                        strokeWidth={1.5}
                                                        dot={false}
                                                        strokeDasharray="5 5"
                                                    />
                                                );
                                            } else if (indicator.id === "bb") {
                                                return [
                                                    <Line
                                                        key={`${asset}_bb_upper`}
                                                        type="monotone"
                                                        dataKey={`${asset}_bb_upper`}
                                                        name={`${asset} BB Upper`}
                                                        stroke={indicator.color}
                                                        strokeWidth={1}
                                                        dot={false}
                                                        strokeDasharray="3 3"
                                                    />,
                                                    <Line
                                                        key={`${asset}_sma20`}
                                                        type="monotone"
                                                        dataKey={`${asset}_sma20`}
                                                        name={`${asset} BB Middle`}
                                                        stroke={indicator.color}
                                                        strokeWidth={1}
                                                        dot={false}
                                                        strokeDasharray="5 5"
                                                    />,
                                                    <Line
                                                        key={`${asset}_bb_lower`}
                                                        type="monotone"
                                                        dataKey={`${asset}_bb_lower`}
                                                        name={`${asset} BB Lower`}
                                                        stroke={indicator.color}
                                                        strokeWidth={1}
                                                        dot={false}
                                                        strokeDasharray="3 3"
                                                    />,
                                                ];
                                            }
                                            return null;
                                        })}

                                    {/* Buy/Sell signals */}
                                    {selectedStrategy &&
                                        selectedAssets.length > 0 && (
                                            <>
                                                {/* Buy signals */}
                                                {chartData.map(
                                                    (entry, index) => {
                                                        const asset =
                                                            selectedAssets[0]
                                                                .asset;
                                                        const buySignal =
                                                            entry[
                                                                `${asset}_buy_signal`
                                                            ];

                                                        if (buySignal) {
                                                            return (
                                                                <ReferenceDot
                                                                    key={`buy-${index}`}
                                                                    x={
                                                                        entry.date
                                                                    }
                                                                    y={
                                                                        buySignal
                                                                    }
                                                                    r={6}
                                                                    fill="#10b981"
                                                                    stroke="#10b981"
                                                                />
                                                            );
                                                        }
                                                        return null;
                                                    }
                                                )}

                                                {/* Sell signals */}
                                                {chartData.map(
                                                    (entry, index) => {
                                                        const asset =
                                                            selectedAssets[0]
                                                                .asset;
                                                        const sellSignal =
                                                            entry[
                                                                `${asset}_sell_signal`
                                                            ];

                                                        if (sellSignal) {
                                                            return (
                                                                <ReferenceDot
                                                                    key={`sell-${index}`}
                                                                    x={
                                                                        entry.date
                                                                    }
                                                                    y={
                                                                        sellSignal
                                                                    }
                                                                    r={6}
                                                                    fill="#ef4444"
                                                                    stroke="#ef4444"
                                                                />
                                                            );
                                                        }
                                                        return null;
                                                    }
                                                )}
                                            </>
                                        )}
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </motion.div>

                {selectedAssets.length > 0 && (
                    <motion.div
                        className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-xl font-semibold text-white mb-4">
                            Performance Analysis
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {selectedAssets.map(({ asset, type }) => {
                                if (chartData.length === 0) return null;

                                const firstValue = chartData[0][asset];
                                const lastValue =
                                    chartData[chartData.length - 1][asset];
                                const change = lastValue - firstValue;
                                const percentChange =
                                    (change / firstValue) * 100;

                                return (
                                    <motion.div
                                        key={asset}
                                        className="bg-gray-700/30 p-4 rounded-lg border border-white/5"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <div className="flex items-center mb-2">
                                            <div
                                                className="w-3 h-3 rounded-full mr-2"
                                                style={{
                                                    backgroundColor:
                                                        assetTypes[type].color,
                                                }}
                                            />
                                            <span className="text-white font-medium">
                                                {asset}
                                            </span>
                                            <span className="text-gray-400 text-sm ml-2">
                                                ({assetTypes[type].name})
                                            </span>
                                        </div>
                                        <div className="text-2xl font-bold text-white mb-1">
                                            {lastValue.toLocaleString(
                                                undefined,
                                                { maximumFractionDigits: 2 }
                                            )}
                                        </div>
                                        <div
                                            className={`flex items-center ${
                                                percentChange >= 0
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                            }`}
                                        >
                                            {percentChange >= 0 ? (
                                                <ArrowUpRight
                                                    size={16}
                                                    className="mr-1"
                                                />
                                            ) : (
                                                <ArrowDownRight
                                                    size={16}
                                                    className="mr-1"
                                                />
                                            )}
                                            <span>
                                                {change.toLocaleString(
                                                    undefined,
                                                    { maximumFractionDigits: 2 }
                                                )}
                                                ({percentChange.toFixed(2)}%)
                                            </span>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </main>
        </div>
    );
}
