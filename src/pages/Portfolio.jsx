import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Tambahkan AnimatePresence
import { ExternalLink, Github, Layers, Code2 } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web App", "Landing Page", "Sistem Enterprise"];

  const projects = [
    {
      id: 1,
      title: "Rosidi Sulam Alis Jakarta",
      category: "Landing Page",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600",
      link: "https://rosidisulamalis.id/",
      tech: ["React", "Tailwind CSS", "Vite"],
    },
    {
      id: 2,
      title: "Pesona Media Net",
      category: "Landing Page",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      link: "https://www.pesonamedia.net/",
      tech: ["React", "Tailwind CSS", "High Performance"],
    },
    {
      id: 3,
      title: "Pesona Laundry Landing",
      category: "Landing Page",
      image:
        "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=600",
      link: "https://www.pesonalaundry.com/",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: 4,
      title: "ERP360 Enterprise",
      category: "Sistem Enterprise",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      link: "https://erp360.id/",
      tech: [".NET Framework", "Web API", "SQL Server"],
    },
    {
      id: 5,
      title: "Digantara Platform",
      category: "Web App",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600",
      link: "#",
      tech: ["Laravel", "MySQL", "Rest API"],
    },
    {
      id: 6,
      title: "Sistem Administrasi Laundry",
      category: "Web App",
      image:
        "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=600",
      link: "#",
      tech: ["React.js", "Laravel", "PostgreSQL"],
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h4 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Proven Track Record
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Project Pilihan <span className="text-blue-600">ASODEV.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Portofolio nyata yang telah membantu bisnis berkembang melalui
              teknologi.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  filter === cat
                    ? "text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-200"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid dengan Animasi Re-ordering */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id} // Sangat penting pakai ID unik, bukan index
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 bg-white rounded-full text-blue-600 shadow-xl"
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-4">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] bg-blue-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-4 group-hover:text-blue-600 transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <div className="mt-auto pt-6 flex flex-wrap gap-2 border-t border-slate-50">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter"
                      >
                        • {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
