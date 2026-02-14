import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Code } from "lucide-react";
import profile from "../assets/aso.webp";

export default function About() {
  const stats = [
    {
      label: "Years Experience",
      value: "3+",
      icon: <Code size={20} className="text-blue-500" />,
    },
    {
      label: "Projects Completed",
      value: "50+",
      icon: <CheckCircle2 size={20} className="text-green-500" />,
    },
    {
      label: "Happy Clients",
      value: "30+",
      icon: <Users size={20} className="text-purple-500" />,
    },
    {
      label: "Awards Won",
      value: "2",
      icon: <Award size={20} className="text-amber-500" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Sisi Kiri: Image & Decoration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 group">
              <img
                src={profile}
                alt="Agus Solihin - ASODEV"
                className="rounded-[3rem] shadow-2xl object-cover w-full h-[500px] grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay bingkai dekoratif */}
              <div className="absolute inset-0 border-2 border-blue-600/20 rounded-[3rem] -m-4 -z-10 group-hover:m-0 transition-all duration-500"></div>
            </div>

            {/* Dekorasi Aksen */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-0"
            ></motion.div>

            {/* Floating Badge Profile */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -top-10 -left-10 p-6 bg-white shadow-2xl rounded-2xl z-20 hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">
                  AS
                </div>
                <div>
                  <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest">
                    Software Engineer
                  </p>
                  <p className="text-sm font-black text-slate-900">
                    Agus Solihin
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Sisi Kanan: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Mengenal ASODEV
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
              Dedikasi untuk Solusi{" "}
              <span className="text-blue-600 italic">Digital Berkualitas.</span>
            </h2>

            <div className="space-y-6 text-slate-500 text-lg leading-relaxed mb-10">
              <p>
                Halo! Saya{" "}
                <span className="text-slate-900 font-bold">Agus Solihin</span>,
                pengembang di balik{" "}
                <span className="text-blue-600 font-bold">ASODEV</span>. Berawal
                dari hobi memecahkan masalah melalui baris kode, kini saya fokus
                membantu bisnis naik kelas.
              </p>
              <p className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl italic text-slate-700">
                "Visi saya sederhana: Memberikan akses teknologi untuk semua
                skala bisnis dari UMKM hingga Corporate."
              </p>
            </div>

            {/* Stats Grid dengan Animasi Pop-up */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 border border-slate-100 rounded-3xl bg-white shadow-sm flex flex-col items-center text-center md:items-start md:text-left group transition-all"
                >
                  <div className="mb-3 p-3 rounded-2xl bg-slate-50 group-hover:bg-white group-hover:shadow-md transition-all">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
