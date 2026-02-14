import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import Motion
import { ArrowRight, Code2, Rocket, ShieldCheck, Zap } from "lucide-react";
import banner from "../../assets/banner.webp";

export default function Hero() {
  // Varians untuk animasi container (Parent)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Elemen muncul bergantian
      },
    },
  };

  // Varians untuk item (Children)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[radial-gradient(45%_45%_at_50%_50%,rgba(37,99,235,0.05)_0%,rgba(255,255,255,0)_100%)]">
      {/* Animasi Background Decor */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full -z-10"
      />

      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content dengan Stagger Effect */}
        <motion.div
          className="order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold mb-6"
          >
            <Rocket size={16} /> <span>Available for New Projects</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-slate-900 tracking-tight"
          >
            Build the Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Beyond Limits.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-slate-500 text-lg md:text-xl mb-10 leading-relaxed max-w-lg"
          >
            Bersama <span className="font-bold text-slate-800">ASODEV</span>,
            kami mengubah ide kompleks menjadi website yang{" "}
            <span className="text-slate-800 font-semibold italic">
              cepat, aman, & scalable.
            </span>
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              to="/contact"
              className="group bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 active:scale-95"
            >
              Konsultasi Gratis{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 border border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center active:scale-95"
            >
              Lihat Portfolio
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 pt-4 border-t border-slate-100 text-slate-400"
          >
            <span className="text-xs font-bold uppercase tracking-widest">
              Tech Stack:
            </span>
            <div className="flex gap-4">
              <Code2
                size={24}
                className="hover:text-blue-600 transition-colors"
              />
              <ShieldCheck
                size={24}
                className="hover:text-blue-600 transition-colors"
              />
              <Zap size={24} className="text-yellow-500 fill-yellow-500" />
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Element dengan Floating Motion */}
        <motion.div
          className="order-1 md:order-2 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Efek Floating Gambar Utama */}
          <motion.div
            className="relative z-10"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={banner}
              alt="ASODEV Development"
              className="rounded-[2.5rem] shadow-2xl border-8 border-white"
            />

            {/* Floating Card */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 hidden lg:flex"
            >
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">
                  Uptime Score
                </p>
                <p className="text-lg font-black text-slate-800">99.9%</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full -z-10 opacity-50"></div>
        </motion.div>
      </div>
    </section>
  );
}
