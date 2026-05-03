import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  {
    title: "Mengapa Desain yang Baik Dimulai dari Empati",
    excerpt:
      "Desain bukan sekadar membuat sesuatu terlihat indah. Ini tentang memahami kebutuhan, rasa frustrasi, dan harapan pengguna — dan menciptakan solusi yang benar-benar menjawabnya.",
    tag: "UI/UX Design",
    date: "15 April 2025",
    readTime: "5 menit",
    color: "from-purple-600 to-violet-700",
    emoji: "🎨",
  },
  {
    title: "React 19 dan Masa Depan Front-End Development",
    excerpt:
      "React terus berkembang dan versi terbarunya membawa banyak fitur revolusioner. Saya mencoba memahami apa artinya ini bagi para developer dan bagaimana kita bisa bersiap.",
    tag: "Teknologi",
    date: "2 Maret 2025",
    readTime: "8 menit",
    color: "from-cyan-600 to-blue-700",
    emoji: "⚛️",
  },
  {
    title: "Perjalanan Menjadi Freelancer di Usia 22 Tahun",
    excerpt:
      "Meninggalkan zona nyaman untuk terjun ke dunia freelance adalah keputusan terbesar dalam hidup saya. Inilah pelajaran paling berharga yang saya pelajari dalam 2 tahun pertama.",
    tag: "Cerita Pribadi",
    date: "10 Januari 2025",
    readTime: "6 menit",
    color: "from-orange-500 to-rose-600",
    emoji: "💼",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 opacity-5 blur-3xl rounded-full"
        style={{ background: "radial-gradient(circle, hsl(262,83%,68%), transparent)" }} />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Blog
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tulisan <span className="gradient-text">Terbaru</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Saya suka berbagi pemikiran tentang desain, teknologi, dan perjalanan hidup. Semoga tulisan ini memberi inspirasi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.12 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl bg-card border border-border/50 hover:border-border overflow-hidden transition-all duration-300 cursor-pointer"
            >
              {/* Header */}
              <div className={`h-36 bg-gradient-to-br ${post.color} flex items-center justify-center relative`}>
                <span className="text-5xl">{post.emoji}</span>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-3 right-3">
                  <ArrowUpRight size={18} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="inline-block px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold mb-3">
                  {post.tag}
                </span>
                <h3 className="font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 pt-3">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock size={11} />
                    <span>{post.readTime} baca</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
