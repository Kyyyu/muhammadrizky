import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Coffee, Heart } from "lucide-react";

const facts = [
  { icon: MapPin, label: "Lokasi", value: "Pekanbaru, Riau, Indonesia" },
  { icon: Calendar, label: "Bergabung", value: "2021 — Aktif hingga sekarang" },
  { icon: Coffee, label: "Bahan bakar", value: "Kopi hitam & musik lo-fi" },
  { icon: Heart, label: "Passion", value: "Desain, Teknologi & Inovasi" },
];

const stats = [
  { number: "50+", label: "Proyek Selesai" },
  { number: "30+", label: "Klien Puas" },
  { number: "3+", label: "Tahun Pengalaman" },
  { number: "10+", label: "Penghargaan" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 blur-3xl rounded-full"
        style={{ background: "radial-gradient(circle, hsl(198,93%,60%), transparent)" }} />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Tentang Saya
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kenalan dengan <span className="gradient-text">Rizky</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-foreground text-lg font-medium">
                Saya Muhammad Rizky, seorang desainer digital dan pengembang web
                yang tinggal di Pekanbaru, Riau — kota yang terus berkembang dengan semangat inovasi.
              </p>
              <p>
                Perjalanan saya dimulai saat saya duduk di bangku SMA, ketika saya pertama
                kali mengenal dunia desain grafis dan mulai bereksperimen dengan berbagai
                alat digital. Sejak saat itu, saya jatuh cinta pada proses menciptakan
                sesuatu dari nol — dari sebuah ide sederhana menjadi produk nyata yang
                digunakan orang banyak.
              </p>
              <p>
                Saat ini saya fokus di bidang <strong className="text-foreground">UI/UX Design</strong> dan{" "}
                <strong className="text-foreground">Front-End Development</strong>, menggabungkan
                estetika yang kuat dengan kode yang bersih dan efisien. Saya percaya bahwa
                desain yang baik bukan hanya soal tampilan, tapi juga tentang bagaimana
                pengguna <em>merasakan</em> setiap interaksi.
              </p>
              <p>
                Di luar dunia digital, saya gemar membaca buku teknologi, menonton film
                fiksi ilmiah, dan sesekali mendaki gunung untuk menyegarkan pikiran.
                Filosofi hidup saya sederhana: <span className="italic text-foreground">"Buat setiap hari lebih berarti dari hari sebelumnya."</span>
              </p>
            </div>

            {/* Fact cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {facts.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={15} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats + Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map(({ number, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="gradient-border rounded-xl p-6 text-center hover:glow-purple transition-all duration-300"
                >
                  <p className="text-3xl font-extrabold gradient-text">{number}</p>
                  <p className="text-sm text-muted-foreground mt-1">{label}</p>
                </motion.div>
              ))}
            </div>

            {/* Timeline */}
            <div className="space-y-5">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Perjalanan Karier</h3>
              {[
                {
                  year: "2024 — Sekarang",
                  role: "Senior UI/UX Designer & Developer",
                  company: "Freelance & Remote",
                  desc: "Mengerjakan proyek klien internasional dan lokal, membangun produk digital dari konsep hingga peluncuran.",
                },
                {
                  year: "2022 — 2024",
                  role: "UI/UX Designer",
                  company: "Startup Teknologi Bandung",
                  desc: "Merancang antarmuka aplikasi mobile dan web, bekerja sama langsung dengan tim produk dan pengembang.",
                },
                {
                  year: "2021 — 2022",
                  role: "Junior Front-End Developer",
                  company: "Agensi Digital Lokal",
                  desc: "Membangun website klien menggunakan React, Next.js, dan TailwindCSS dengan standar kode yang tinggi.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.15 }}
                  className="relative pl-5 border-l-2 border-border/50 hover:border-primary/50 transition-colors duration-300 group"
                >
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-300" />
                  <p className="text-xs text-primary font-semibold mb-0.5">{item.year}</p>
                  <p className="text-sm font-semibold text-foreground">{item.role}</p>
                  <p className="text-xs text-muted-foreground mb-1">{item.company}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
