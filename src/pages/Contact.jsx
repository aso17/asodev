import React from "react";
import { Mail, MessageSquare, MapPin, Send, Phone, Clock } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic: Mas Agus bisa tambahkan integrasi EmailJS atau API form di sini
    alert("Pesan terkirim! ASODEV akan segera menghubungi Anda.");
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Sisi Kiri: Info Kontak */}
          <div>
            <h4 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Hubungi Kami
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
              Ayo Mulai Proyek <br />{" "}
              <span className="text-blue-600">Luar Biasa Anda.</span>
            </h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              Punya pertanyaan atau ingin diskusi konsep? Saya siap membantu
              mewujudkan visi digital Anda. Kirim pesan dan saya akan membalas
              dalam 24 jam.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Email
                  </p>
                  <p className="text-lg font-bold text-slate-800">
                    hello@asodev.id
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    WhatsApp
                  </p>
                  <p className="text-lg font-bold text-slate-800">
                    +62 812 3456 7890
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-50 text-slate-600 rounded-2xl flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Working Hours
                  </p>
                  <p className="text-lg font-bold text-slate-800">
                    Senin - Jumat, 09:00 - 17:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Contact Form */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    placeholder="Agus Solihin"
                    className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
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
                    className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Subjek Proyek
                </label>
                <select className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-white appearance-none">
                  <option>Website Company Profile</option>
                  <option>Aplikasi Web Custom</option>
                  <option>E-Commerce</option>
                  <option>Maintenance & Lainnya</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Detail Pesan
                </label>
                <textarea
                  rows="4"
                  placeholder="Ceritakan sedikit tentang proyek Anda..."
                  className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                Kirim Pesan <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
