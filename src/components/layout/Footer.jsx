import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MessageCircle,
  Github,
  Instagram,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Efek Cahaya Dekoratif di Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Kolom 1: Brand & Bio */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-3xl font-black tracking-tighter mb-6 block"
            >
              <span className="text-blue-500">ASO</span>DEV
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm mb-8">
              Membangun infrastruktur digital yang tangguh dan estetis untuk
              membantu bisnis Anda bersinar di dunia internet.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 hover:border-blue-500 hover:text-blue-500 transition-all group"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 hover:border-blue-500 hover:text-blue-500 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 hover:border-blue-500 hover:text-blue-500 transition-all"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Quick Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-6 text-slate-200">
              Navigasi
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2 group"
                >
                  About{" "}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-all"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2 group"
                >
                  Portfolio{" "}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-all"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2 group"
                >
                  Contact{" "}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-all"
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak Langsung */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-6 text-slate-200">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Mail size={16} />
                </div>
                hello@asodev.id
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                  <MessageCircle size={16} />
                </div>
                +62 812 3456 789
              </li>
            </ul>
          </div>
        </div>

        {/* Garis Pemisah & Copyright */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear}{" "}
            <span className="font-bold text-slate-400">
              ASODEV Digital Studio
            </span>
            . Crafted by Agus Solihin.
          </p>
          <div className="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
