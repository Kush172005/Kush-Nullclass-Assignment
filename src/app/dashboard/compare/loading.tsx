"use client"

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <motion.div
            className="flex items-center justify-center h-screen bg-black text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="relative w-16 h-16"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 1.2,
                }}
            >
                <div className="absolute top-0 left-0 w-full h-full border-4 border-t-blue-500 border-b-purple-500 border-l-transparent border-r-transparent rounded-full" />
            </motion.div>
        </motion.div>
    );
}