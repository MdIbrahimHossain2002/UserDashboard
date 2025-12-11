"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] flex items-center justify-center p-6">
      <div className="max-w-4xl w-full p-8">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center"
        >
          Welcome to Your Dashboard
        </motion.h1>

        {/* Static summary section */}
        <p className="mt-4 text-gray-600 text-center text-base md:text-lg">
          Here’s a quick overview of your account.  
          (This is static placeholder content.)
        </p>

        {/* Stats cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Users", "Revenue", "Projects"].map((title, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-gradient-to-r from-[#4c839e] to-[#272c27] text-white rounded-xl p-6 shadow-md flex flex-col items-center"
            >
              <span className="text-2xl font-bold">123</span>
              <span className="mt-2 text-sm">{title}</span>
            </motion.div>
          ))}
        </div>

        {/* Small animated element (example chart-like bars) */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Activity Overview
          </h2>
          <div className="flex items-end space-x-3 h-40">
            {[50, 80, 30, 70, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: h }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="w-6 bg-[#4c839e] rounded-t-md"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
