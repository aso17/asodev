import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Clock, Sparkles } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Hint: Integrasikan dengan Formspree atau EmailJS nanti
    alert("Pesan terkirim! ASODEV akan segera menghubungi Anda.");
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "agus.solihin.572@gmail.com",
      color: "bg-blue-50 text-blue-600",
      hover: "group-hover:bg-blue-600",
    },
    {
      icon: <MessageSquare size={24} />,
      label: "WhatsApp",
      value: "+62 895 1247 0844",
      color: "bg-green-50 text-green-600",
      hover: "group-hover:bg-green-600",
    },
    {
      icon: <Clock size={24} />,
      label: "Working Hours",
      value: "Senin - Jumat, 09:00 - 17:00",
      color: "bg-slate-50 text-slate-600",
      hover: "group-hover:bg-slate-900",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Sisi Kiri: Info Kontak */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} /> Hubungi Kami
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
              Ayo Mulai Proyek <br />
              <span className="text-blue-600">Luar Biasa Anda.</span>
            </h2>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed max-w-md">
              Punya pertanyaan atau ingin diskusi konsep? Saya siap membantu
              mewujudkan visi digital Anda. Kirim pesan dan saya akan membalas
              dalam 24 jam.
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div
                    className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center ${info.hover} group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-sm`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                      {info.label}
                    </p>
                    <p className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sisi Kanan: Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50 relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    placeholder="Agus Solihin"
                    className="w-full px-6 py-4 rounded-2xl border border-white bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all shadow-sm"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    placeholder="agus@example.com"
                    className="w-full px-6 py-4 rounded-2xl border border-white bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all shadow-sm"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Subjek Proyek
                </label>
                <div className="relative">
                  <select className="w-full px-6 py-4 rounded-2xl border border-white bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all shadow-sm appearance-none">
                    <option>Website Company Profile</option>
                    <option>Aplikasi Web Custom</option>
                    <option>E-Commerce</option>
                    <option>Maintenance & Lainnya</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                    ▼
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Detail Pesan
                </label>
                <textarea
                  rows="4"
                  placeholder="Ceritakan sedikit tentang proyek Anda..."
                  className="w-full px-6 py-4 rounded-2xl border border-white bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all shadow-sm resize-none"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-3"
              >
                Kirim Pesan{" "}
                <Send
                  size={20}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
