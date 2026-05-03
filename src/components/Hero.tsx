import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Instagram, Twitter, Download } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/muhammadrizky", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/muhammadrizky", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/muhammadrizky", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/muhammadrizky", label: "Twitter" },
];

const roles = ["UI/UX Designer", "Front-End Developer", "Creative Coder", "Digital Creator"];

export default function Hero() {
  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(262,83%,68%), transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(198,93%,60%), transparent)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(262,83%,68%), hsl(198,93%,60%))" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(210,40%,95%) 1px, transparent 1px), linear-gradient(90deg, hsl(210,40%,95%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Tersedia untuk proyek baru
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-muted-foreground text-lg mb-2">Halo, saya</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none mb-4">
                <span className="text-foreground">Muhammad</span>
                <br />
                <span className="gradient-text">Rizky</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-primary/60" />
              <div className="flex gap-2 flex-wrap">
                {roles.map((role, i) => (
                  <span
                    key={role}
                    className={`text-sm font-medium ${i === 0 ? "text-primary" : "text-muted-foreground"}`}
                  >
                    {role}{i < roles.length - 1 && <span className="ml-2 text-border">·</span>}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg"
            >
              Saya seorang desainer dan pengembang web yang bersemangat menciptakan
              pengalaman digital yang indah, intuitif, dan berdampak. Setiap piksel
              saya rancang dengan penuh perhatian.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3 rounded-xl font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                Lihat Karya Saya
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3 rounded-xl font-semibold text-sm border border-border/60 text-foreground/80 hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Download size={15} />
                Unduh CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-4"
            >
              <span className="text-xs text-muted-foreground">Temukan saya di</span>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full opacity-20 blur-2xl bg-gradient-to-br from-primary to-accent" />

              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />

              {/* Skill badges floating */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 z-10 px-3 py-1.5 rounded-lg bg-card border border-border/60 shadow-lg text-xs font-medium text-foreground flex items-center gap-2"
              >
                <span className="text-base">🎨</span> UI/UX Design
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -right-4 z-10 px-3 py-1.5 rounded-lg bg-card border border-border/60 shadow-lg text-xs font-medium text-foreground flex items-center gap-2"
              >
                <span className="text-base">💻</span> Web Dev
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-6 z-10 px-3 py-1.5 rounded-lg bg-card border border-border/60 shadow-lg text-xs font-medium text-foreground flex items-center gap-2"
              >
                <span className="text-base">🚀</span> 3+ Tahun
              </motion.div>

              {/* Photo container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-card shadow-2xl animate-float">
                <img
                  src="https://img.sanishtech.com/u/63bd18995588a2526c9ed91bf0a4e54c.jpg"
                  alt="Muhammad Rizky"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.background = "linear-gradient(135deg, hsl(262,83%,30%) 0%, hsl(198,93%,25%) 100%)";
                      const initials = document.createElement("div");
                      initials.className = "w-full h-full flex items-center justify-center text-white text-6xl font-extrabold";
                      initials.textContent = "MR";
                      parent.appendChild(initials);
                    }
                  }}
                />
                {/* Overlay shimmer */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Stats cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-8 bottom-12 px-4 py-3 rounded-xl bg-card border border-border/60 shadow-xl"
              >
                <p className="text-2xl font-bold gradient-text">50+</p>
                <p className="text-xs text-muted-foreground mt-0.5">Proyek Selesai</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -right-8 top-12 px-4 py-3 rounded-xl bg-card border border-border/60 shadow-xl"
              >
                <p className="text-2xl font-bold gradient-text">30+</p>
                <p className="text-xs text-muted-foreground mt-0.5">Klien Puas</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <span className="text-xs text-muted-foreground">Gulir ke bawah</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
