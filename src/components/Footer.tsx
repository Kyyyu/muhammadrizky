import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Heart, ArrowUp } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/muhammadrizky", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/muhammadrizky", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/muhammadrizky", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/muhammadrizky", label: "Twitter" },
];

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Keahlian", href: "#skills" },
  { label: "Portofolio", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Kontak", href: "#contact" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border/40 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(hsl(210,40%,95%) 1px, transparent 1px), linear-gradient(90deg, hsl(210,40%,95%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-14 relative">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-3">
              <span className="gradient-text">Muhammad Rizky</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Desainer & Pengembang Web yang bersemangat menciptakan pengalaman digital yang indah dan bermakna dari Bandung, Indonesia.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Mulai Proyek</h4>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Siap mewujudkan ide Anda? Mari berdiskusi dan ciptakan sesuatu yang luar biasa bersama.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} Muhammad Rizky. Dibuat dengan{" "}
            <Heart size={11} className="text-rose-400 fill-rose-400" />
            di Bandung, Indonesia.
          </p>
          <button
            onClick={scrollTop}
            className="w-9 h-9 rounded-xl border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
