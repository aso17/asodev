import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Rocket, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[radial-gradient(45%_45%_at_50%_50%,rgba(37,99,235,0.05)_0%,rgba(255,255,255,0)_100%)]">
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold mb-6 animate-fade-in">
            <Rocket size={16} /> <span>Available for New Projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-slate-900 tracking-tight">
            Build the Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Beyond Limits.
            </span>
          </h1>

          <p className="text-slate-500 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
            Bersama <span className="font-bold text-slate-800">ASODEV</span>,
            kami mengubah ide kompleks menjadi website dan sistem aplikasi web
            yang
            <span className="text-slate-800 font-semibold">
              {" "}
              cepat, aman, & scalable.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
          </div>

          {/* Minimalist Tech Stack */}
          <div className="flex items-center gap-6 pt-4 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Tech Stack:
            </span>
            <div className="flex gap-4 grayscale opacity-50 hover:opacity-100 transition-all cursor-default">
              <Code2 size={24} title="React" />
              <ShieldCheck size={24} title="Secure Code" />
              <Zap
                size={24}
                title="Fast Performance"
                className="text-yellow-500 opacity-100 grayscale-0"
              />
            </div>
          </div>
        </div>

        {/* Visual Element */}
        <div className="order-1 md:order-2 relative">
          {/* Main Image with Floating Effect */}
          <div className="relative z-10 animate-[bounce_4s_ease-in-out_infinite]">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=450"
              alt="ASODEV Web Development"
              className="rounded-[2.5rem] shadow-2xl border-8 border-white"
            />

            {/* Overlay Card 1 */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 hidden lg:flex animate-pulse">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">
                  Uptime Score
                </p>
                <p className="text-lg font-black text-slate-800">99.9%</p>
              </div>
            </div>
          </div>

          {/* Background Circle Decor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full -z-10 opacity-50"></div>
        </div>
      </div>
    </section>
  );
}

// Tambahkan icon Zap yang belum di-import tadi
const Zap = ({ size, className, title }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <title>{title}</title>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);
