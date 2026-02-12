import React from "react";
import { CheckCircle2, Award, Users, Code } from "lucide-react";

export default function About() {
  const stats = [
    {
      label: "Years Experience",
      value: "3+",
      icon: <Code className="text-blue-500" />,
    },
    {
      label: "Projects Completed",
      value: "20+",
      icon: <CheckCircle2 className="text-green-500" />,
    },
    {
      label: "Happy Clients",
      value: "15+",
      icon: <Users className="text-purple-500" />,
    },
    {
      label: "Awards Won",
      value: "2",
      icon: <Award className="text-amber-500" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Sisi Kiri: Image & Decoration */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=750"
                alt="Agus Solihin - ASODEV"
                className="rounded-[3rem] shadow-2xl object-cover w-full h-[500px]"
              />
            </div>

            {/* Dekorasi Aksen */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -top-10 -left-10 p-6 bg-white shadow-xl rounded-2xl z-20 hidden lg:block animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  AS
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase">
                    Founder
                  </p>
                  <p className="text-sm font-black text-slate-900">
                    Agus Solihin
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Text Content */}
          <div>
            <h4 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Mengenal ASODEV
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
              Dedikasi untuk Solusi{" "}
              <span className="text-blue-600">Digital Berkualitas.</span>
            </h2>

            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Halo! Saya <strong>Agus Solihin</strong>, pengembang di balik{" "}
              <strong>ASODEV</strong>. Berawal dari hobi memecahkan masalah
              melalui baris kode, kini saya fokus membantu UMKM dan bisnis
              berkembang di ranah digital.
            </p>

            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Visi saya sederhana:{" "}
              <strong>
                Memberikan akses teknologi kelas dunia untuk semua skala bisnis.
              </strong>{" "}
              Saya percaya bahwa website bukan hanya sekadar pajangan, melainkan
              alat investasi yang harus menghasilkan konversi.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="mb-2 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-slate-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
