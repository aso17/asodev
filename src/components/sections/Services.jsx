import React from "react";
import { motion } from "framer-motion"; // Import motion
import { Monitor, Cpu, Gauge, Search, Layout, Megaphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Company Profile",
      desc: "Website eksklusif dengan desain modern yang responsif untuk membangun kepercayaan klien Anda secara instan.",
      icon: <Monitor className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Custom Web Apps",
      desc: "Sistem manajemen, dashboard admin, atau SaaS custom yang dibangun khusus untuk alur bisnis Anda.",
      icon: <Cpu className="w-8 h-8" />,
      color: "bg-indigo-50 text-indigo-600",
    },
    {
      title: "Ads & Marketing",
      desc: "Kelola Facebook, Instagram, & Google Ads secara profesional untuk meningkatkan penjualan & brand awareness secara terukur.",
      icon: <Megaphone className="w-8 h-8" />,
      color: "bg-red-50 text-red-600",
    },
    {
      title: "Speed Optimization",
      desc: "Optimasi Core Web Vitals untuk memastikan website Anda dimuat dalam hitungan milidetik. Anti-lemot!",
      icon: <Gauge className="w-8 h-8" />,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "SEO Strategy",
      desc: "Audit dan implementasi SEO On-Page agar bisnis Anda lebih mudah ditemukan di halaman pertama Google.",
      icon: <Search className="w-8 h-8" />,
      color: "bg-green-50 text-green-600",
    },
    {
      title: "UI/UX Design",
      desc: "Perancangan antarmuka yang intuitif dan nyaman dipandang untuk meningkatkan angka konversi pengunjung.",
      icon: <Layout className="w-8 h-8" />,
      color: "bg-pink-50 text-pink-600",
    },
  ];

  // Varians untuk Grid Container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }, // Muncul satu per satu
    },
  };

  // Varians untuk Card Satuan
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Header Section dengan Animasi Fade Up */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h4 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Apa yang Kami Lakukan
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Solusi Digital <span className="text-blue-600">Terpadu.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Kami tidak hanya membuat kode, kami membantu bisnis Anda naik kelas
            dengan kombinasi teknologi terbaru dan strategi marketing yang
            tepat.
          </p>
        </motion.div>

        {/* Services Grid dengan Stagger Effect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }} // Animasi mulai sebelum bener-bener mentok bawah
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }} // Card naik sedikit saat di-hover
              className="group p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 relative overflow-hidden"
            >
              {/* Decorative Circle: Tetap pakai CSS Transition karena lebih ringan untuk efek hover sederhana */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-blue-50 rounded-full group-hover:scale-[4] transition-transform duration-700 -z-0 opacity-0 group-hover:opacity-100"></div>

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-500 leading-relaxed mb-8">
                  {service.desc}
                </p>

                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm group/link cursor-pointer">
                  <span className="relative overflow-hidden inline-block">
                    <span className="inline-block transition-transform duration-300 group-hover/link:-translate-y-full">
                      Pelajari Lebih Lanjut
                    </span>
                    <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover/link:translate-y-0 text-blue-700 font-black">
                      Konsultasi Sekarang
                    </span>
                  </span>
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
