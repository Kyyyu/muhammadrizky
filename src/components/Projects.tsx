import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const categories = ["Semua", "UI/UX", "Web Dev", "Mobile", "Branding"];

const projects = [
  {
    title: "NusaPay — Dompet Digital",
    category: "UI/UX",
    desc: "Aplikasi dompet digital dengan antarmuka yang bersih dan alur pembayaran yang intuitif. Dirancang untuk mempermudah transaksi keuangan masyarakat Indonesia.",
    tags: ["Figma", "Prototyping", "UX Research"],
    color: "from-purple-600 to-violet-700",
    emoji: "💳",
    year: "2026",
    github: "#",
    live: "#",
  },
  {
    title: "GreenSpace — Toko Tanaman",
    category: "Web Dev",
    desc: "Platform e-commerce tanaman hias modern dengan sistem keranjang belanja, filter cerdas, dan halaman detail produk yang memukau.",
    tags: ["React", "Next.js", "TailwindCSS"],
    color: "from-emerald-600 to-teal-700",
    emoji: "🌿",
    year: "2026",
    github: "#",
    live: "#",
  },
  {
    title: "Katalis — Learning Platform",
    category: "UI/UX",
    desc: "Platform belajar online untuk pelajar Indonesia dengan desain yang memotivasi, sistem gamifikasi, dan dashboard kemajuan belajar yang interaktif.",
    tags: ["Figma", "Adobe XD", "User Testing"],
    color: "from-orange-500 to-rose-600",
    emoji: "📚",
    year: "2026",
    github: "#",
    live: "#",
  },
  {
    title: "KabarKini — Portal Berita",
    category: "Web Dev",
    desc: "Portal berita digital berkecepatan tinggi dengan kategori topik, pencarian canggih, dan mode gelap yang elegan.",
    tags: ["React", "TypeScript", "Node.js"],
    color: "from-blue-600 to-indigo-700",
    emoji: "📰",
    year: "2025",
    github: "#",
    live: "#",
  },
  {
    title: "TrackFit — Fitness App",
    category: "Mobile",
    desc: "Aplikasi mobile untuk pelacak olahraga harian dengan visualisasi data yang menarik, reminder pintar, dan program latihan terskalakan.",
    tags: ["React Native", "Figma", "TypeScript"],
    color: "from-pink-600 to-rose-700",
    emoji: "🏋️",
    year: "2025",
    github: "#",
    live: "#",
  },
  {
    title: "WarmBrew — Brand Identity",
    category: "Branding",
    desc: "Identitas brand lengkap untuk kedai kopi artisan lokal meliputi logo, palet warna, tipografi, dan panduan brand yang komprehensif.",
    tags: ["Illustrator", "Photoshop", "Branding"],
    color: "from-amber-600 to-yellow-700",
    emoji: "☕",
    year: "2025",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState("Semua");

  const filtered = active === "Semua" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-80 h-80 opacity-5 blur-3xl rounded-full"
        style={{ background: "radial-gradient(circle, hsl(198,93%,60%), transparent)" }} />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Portofolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Karya <span className="gradient-text">Terpilih</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Beberapa proyek terbaik yang pernah saya kerjakan — dari desain UI/UX hingga pengembangan web penuh.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl bg-card border border-border/50 hover:border-border overflow-hidden transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail */}
              <div className={`h-44 bg-gradient-to-br ${project.color} relative flex items-center justify-center overflow-hidden`}>
                <span className="text-6xl">{project.emoji}</span>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute top-3 right-3 flex gap-2">
                  <a
                    href={project.github}
                    className="w-8 h-8 rounded-lg bg-black/30 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-black/50"
                  >
                    <Github size={14} />
                  </a>
                  <a
                    href={project.live}
                    className="w-8 h-8 rounded-lg bg-black/30 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-black/50"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 rounded-md bg-black/30 backdrop-blur text-white text-xs font-medium">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-foreground text-base leading-tight">{project.title}</h3>
                  <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-200 flex-shrink-0 mt-0.5" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/muhammadrizky"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/60 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
          >
            <Github size={16} />
            Lihat Semua di GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
