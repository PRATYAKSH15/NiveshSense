"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const slider1 = [
    "⚡ Real-time Insights",
    "📊 Smart Tracking",
    "🤖 AI-Powered",
    "💰 Wealth Growth",
  ];
  const slider2 = [
    "📈 Portfolio Management",
    "🔒 Secure Platform",
    "🌍 Global Access",
    "🎯 Goal Tracking",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-40 pb-40 px-6">
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/30 to-green-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-green-300/30 to-blue-400/30 rounded-full blur-2xl"></div>
      </div>

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto text-center relative z-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight"
        >
          <span className="bg-gradient-to-r from-blue-700 via-green-600 to-emerald-500 bg-clip-text text-transparent">
            NiveshSense
          </span>
          <span className="absolute left-0 bottom-2 h-5 w-full bg-orange-400/70 -z-10 rounded-md"></span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Empowering you to make smarter investment decisions. Harness AI-driven
          insights to track, analyze, and optimize your financial journey.
        </motion.p>
      </div>

      {/* Rolling Sliders */}
      <div className="mt-24 space-y-6">
        <div
          className="relative w-full overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...slider1, ...slider1].map((item, i) => (
              <span
                key={i}
                className="mx-4 px-6 py-3 bg-white shadow-md border rounded-lg text-xl font-semibold text-gray-800"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          className="relative w-full overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...slider2, ...slider2].map((item, i) => (
              <span
                key={i}
                className="mx-4 px-6 py-3 bg-gray-50 shadow-md border rounded-lg text-lg font-medium text-gray-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
