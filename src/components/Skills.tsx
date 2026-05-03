import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Desain",
    color: "from-purple-500 to-violet-600",
    accent: "hsl(262,83%,68%)",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 88 },
      { name: "Adobe Photoshop", level: 82 },
      { name: "Adobe Illustrator", level: 78 },
      { name: "Framer", level: 72 },
    ],
  },
  {
    title: "Pengembangan",
    color: "from-cyan-500 to-blue-600",
    accent: "hsl(198,93%,60%)",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "TailwindCSS", level: 95 },
      { name: "Node.js", level: 75 },
      { name: "Git & GitHub", level: 88 },
    ],
  },
  {
    title: "Soft Skills",
    color: "from-rose-500 to-pink-600",
    accent: "hsl(340,83%,68%)",
    skills: [
      { name: "Komunikasi", level: 90 },
      { name: "Problem Solving", level: 93 },
      { name: "Manajemen Waktu", level: 85 },
      { name: "Kerja Tim", level: 92 },
      { name: "Adaptabilitas", level: 88 },
    ],
  },
];

const tools = [
  "Figma", "React", "TypeScript", "Next.js", "TailwindCSS",
  "Node.js", "Git", "Adobe XD", "Photoshop", "Framer",
  "Vercel", "Supabase", "VSCode", "Illustrator", "Notion",
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-5 blur-3xl rounded-full"
        style={{ background: "radial-gradient(circle, hsl(262,83%,68%), transparent)" }} />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Keahlian
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Apa yang <span className="gradient-text">Saya Kuasai</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-border transition-colors duration-300"
            >
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-6 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-border/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 0.8, delay: 0.3 + ci * 0.15 + si * 0.07, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-semibold">Alat & Teknologi</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                whileHover={{ scale: 1.07, y: -2 }}
                className="px-4 py-2 rounded-lg border border-border/60 bg-card text-sm font-medium text-foreground/80 hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
