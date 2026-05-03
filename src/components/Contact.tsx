import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "muhammadrizky@bltiwd.com",
    href: "mailto:muhammadrizky@bltiwd.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+62 823-8417-4469",
    href: "https://wa.me/6282384174469",
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: "Pekanbaru, Riau",
    href: "#",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-6 blur-3xl rounded-full"
        style={{ background: "radial-gradient(circle, hsl(262,83%,68%), transparent)" }} />
      <div className="absolute top-0 left-0 w-80 h-80 opacity-5 blur-3xl rounded-full"
        style={{ background: "radial-gradient(circle, hsl(198,93%,60%), transparent)" }} />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Hubungi Saya
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mari <span className="gradient-text">Berkolaborasi</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Punya proyek menarik? Saya selalu terbuka untuk peluang baru, kolaborasi kreatif, atau sekadar ngobrol santai tentang desain dan teknologi.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="p-6 rounded-2xl bg-card border border-border/50 space-y-5">
              <h3 className="font-bold text-foreground text-lg">Informasi Kontak</h3>
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
                    <Icon size={17} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <p className="text-sm font-semibold text-foreground mb-2">Status Ketersediaan</p>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-green-400 font-medium">Tersedia untuk Proyek</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Biasanya merespons dalam 24 jam kerja. Untuk urusan mendesak, silakan hubungi via WhatsApp.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl bg-card border border-border/50">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Pesan Terkirim!</h3>
                  <p className="text-sm text-muted-foreground">
                    Terima kasih sudah menghubungi saya. Saya akan segera membalas pesan Anda.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm text-primary hover:underline"
                  >
                    Kirim pesan lain
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-2 block">
                        Nama Lengkap <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Budi Santoso"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border/60 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-2 block">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="budi@contoh.com"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border/60 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-2 block">
                      Subjek <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Proyek Website Company Profile"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border/60 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-2 block">
                      Pesan <span className="text-primary">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Ceritakan proyek Anda..."
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border/60 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-xl font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={15} />
                        Kirim Pesan
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
