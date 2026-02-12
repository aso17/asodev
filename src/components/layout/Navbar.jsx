import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Logic 1: Deteksi Scroll untuk merampingkan Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logic 2: Tutup menu mobile otomatis jika pindah halaman
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo ASODEV */}
        <Link
          to="/"
          className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-1"
        >
          <span className="text-blue-600">ASO</span>DEV
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold tracking-wide transition-all duration-300 hover:text-blue-600 relative group ${
                location.pathname === link.path
                  ? "text-blue-600"
                  : "text-slate-600"
              }`}
            >
              {link.name}
              {/* Garis bawah aktif/hover */}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  location.pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 hover:shadow-lg transition-all active:scale-95"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl overflow-hidden transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xl font-bold transition-colors ${
                location.pathname === link.path
                  ? "text-blue-600"
                  : "text-slate-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-blue-600 text-white text-center py-4 rounded-2xl font-extrabold shadow-lg shadow-blue-100"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
}
