import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Layers,
  Monitor,
  Smartphone,
} from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web App", "Landing Page", "E-Commerce"];

  const projects = [
    {
      title: "Fintech Dashboard",
      category: "Web App",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      link: "#",
      tech: ["React", "Tailwind", "Chart.js"],
    },
    {
      title: "Luxury Property Landing",
      category: "Landing Page",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      link: "#",
      tech: ["Vite", "Framer Motion"],
    },
    {
      title: "Organic Store",
      category: "E-Commerce",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600",
      link: "#",
      tech: ["React", "Redux", "Midtrans"],
    },
    {
      title: "Saas Platform",
      category: "Web App",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600",
      link: "#",
      tech: ["Next.js", "PostgreSQL"],
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h4 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Hasil Karya
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Project Pilihan <span className="text-blue-600">ASODEV.</span>
            </h2>
            <p className="text-slate-500">
              Kumpulan proyek yang telah kami selesaikan dengan fokus pada
              performa, estetika, dan pengalaman pengguna.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Wrapper */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.link}
                    className="p-4 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href="#"
                    className="p-4 bg-white rounded-full text-slate-900 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-md">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-bold text-slate-400 uppercase border border-slate-100 px-2 py-1 rounded"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Portfolio */}
        <div className="mt-20 text-center bg-blue-600 rounded-[3rem] p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Layers size={200} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4 relative z-10">
            Punya Ide Proyek Luar Biasa?
          </h3>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto relative z-10">
            Mari diskusikan bagaimana ASODEV dapat membantu mewujudkan visi
            digital Anda menjadi kenyataan.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-extrabold hover:bg-slate-100 transition-all relative z-10">
            Mulai Diskusi Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
