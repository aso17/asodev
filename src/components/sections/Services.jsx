import React from "react";
import { Monitor, Cpu, Gauge, Search, Layout, Database } from "lucide-react";

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
    {
      title: "API Integration",
      desc: "Menghubungkan website Anda dengan layanan pihak ketiga seperti Payment Gateway, RajaOngkir, dll.",
      icon: <Database className="w-8 h-8" />,
      color: "bg-slate-50 text-slate-600",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h4 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Apa yang Kami Lakukan
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Layanan Unggulan <span className="text-blue-600">ASODEV.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Kami tidak hanya membuat kode, kami membangun solusi digital yang
            membantu bisnis Anda naik kelas dengan standar teknologi terbaru.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-10 rounded-[2rem] border border-slate-100 bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 relative overflow-hidden"
            >
              {/* Decorative Circle on Hover */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-blue-50 rounded-full group-hover:scale-[3] transition-transform duration-700 -z-0 opacity-0 group-hover:opacity-100"></div>

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-500 leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm cursor-pointer">
                  Pelajari Lebih Lanjut
                  <span className="group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
