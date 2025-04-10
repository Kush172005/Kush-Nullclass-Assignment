"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { RefreshCw, AlertCircle } from "lucide-react";
import { tradingNewsData, Article } from "../app/data/tradingNewsData";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

const NewsFeed = () => {
    const [news, setNews] = useState<Article[]>([]);
    const [displayedNews, setDisplayedNews] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [refreshing, setRefreshing] = useState(false);
    const [visibleCount, setVisibleCount] = useState(9);
    const loadingRef = useRef(loading);
    const refreshingRef = useRef(refreshing);

    const shuffleArray = (array: Article[]): Article[] => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const fetchNews = async () => {
        try {
            setLoading(true);
            setError(null);

            await new Promise((resolve) => setTimeout(resolve, 800));

            const shuffledNews = shuffleArray(tradingNewsData);
            setNews(shuffledNews);
            setDisplayedNews(shuffledNews.slice(0, 9));
        } catch (error) {
            console.error("Error processing news:", error);
            setError(error instanceof Error ? error.message : "Unknown error");
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    };

    const handleRefresh = () => {
        setRefreshing(true);
        fetchNews();
    };

    const handleLoadMore = () => {
        setVisibleCount((prevCount) => prevCount + 9);
        setDisplayedNews(news.slice(0, visibleCount + 9));
    };

    useEffect(() => {
        loadingRef.current = loading;
    }, [loading]);

    useEffect(() => {
        refreshingRef.current = refreshing;
    }, [refreshing]);

    useEffect(() => {
        fetchNews();
        const interval = setInterval(() => {
            if (!loadingRef.current && !refreshingRef.current) {
                setRefreshing(true);
                fetchNews();
            }
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div {...fadeInUp} className="my-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">
                    Market News & Insights
                </h2>
                <motion.button
                    onClick={handleRefresh}
                    disabled={loading || refreshing}
                    className="flex items-center text-blue-500 hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <RefreshCw
                        size={16}
                        className={`mr-1 ${refreshing ? "animate-spin" : ""}`}
                    />
                    Refresh
                </motion.button>
            </div>

            {loading && !refreshing ? (
                <div className="flex justify-center items-center h-64">
                    <div className="h-12 w-12 border-4 border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent rounded-full animate-spin"></div>
                </div>
            ) : error && displayedNews.length === 0 ? (
                <motion.div
                    className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <AlertCircle
                        className="mx-auto mb-2 text-red-500"
                        size={32}
                    />
                    <p className="text-red-400">Error loading news: {error}</p>
                </motion.div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedNews.map((article, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-800/50 backdrop-blur-sm border border-white/5 p-4 rounded-xl shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <div className="relative overflow-hidden rounded-lg h-48 mb-3">
                                        <img
                                            src={
                                                article.urlToImage ||
                                                "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop" ||
                                                "/placeholder.svg"
                                            }
                                            alt={article.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white line-clamp-2 hover:text-blue-500 transition-colors">
                                        {article.title}
                                    </h3>
                                </a>
                                <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                                    {article.description ||
                                        "No description available."}
                                </p>
                                <div className="flex justify-between items-center mt-3">
                                    <p className="text-gray-500 text-xs">
                                        {new Date(
                                            article.publishedAt
                                        ).toLocaleString()}
                                    </p>
                                    <p className="text-blue-500 text-xs font-medium">
                                        {article.source.name}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    {visibleCount < news.length && (
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={handleLoadMore}
                                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </>
            )}
        </motion.div>
    );
};

export default NewsFeed;
