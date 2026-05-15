"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "./ui/Button";

// ─── İÇERİK PLACEHOLDER — Güncelle ─────────────────────────────────────────
const HEADLINE_LINES = [
  ["Rehabilitasyonun"],
  ["Geleceğini"],
  ["Birlikte", "Yazıyoruz."],
];
const HERO_TAGLINE =
  "Türkiye'nin dil ve konuşma terapistleri için tasarlandı. Klinikler için kuruldu. Hastalar için var oldu.";
const CTA_PRIMARY = "Demo Talep Et";
const CTA_SECONDARY = "Daha Fazla Öğren";
// ────────────────────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => { if (window.scrollY > 80) setScrolled(true); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-canvas flex flex-col items-center justify-center pt-[52px] overflow-hidden">

      {/* Ambient glow — barely visible blue halo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(0,102,204,0.065) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[640px] mx-auto px-6 text-center">

        {/* Category tag */}
        <motion.p
          className="text-primary text-[12px] font-normal tracking-[-0.12px] mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          Sağlık Teknolojisi · Afazi Rehabilitasyon Platformu
        </motion.p>

        {/* H1 — word-by-word blur reveal */}
        <motion.h1
          className="text-ink mb-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {HEADLINE_LINES.map((line, li) => (
            <div key={li} className="block">
              {line.map((word, wi) => (
                <motion.span
                  key={wi}
                  variants={wordVariants}
                  className="inline-block"
                  style={{ marginRight: wi < line.length - 1 ? "0.22em" : 0 }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-ink-muted text-[1.3125rem] font-normal leading-[1.47] tracking-[-0.016em] mb-10 max-w-[520px] mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85, ease: "easeOut" }}
        >
          {HERO_TAGLINE}
        </motion.p>

        {/* CTA pair */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.05, ease: "easeOut" }}
        >
          {/* Primary CTA — single pulse glow ring on load */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(0,102,204,0)",
                "0 0 0 10px rgba(0,102,204,0.2)",
                "0 0 0 0 rgba(0,102,204,0)",
              ],
            }}
            transition={{ duration: 1.8, delay: 2.2, ease: "easeOut" }}
            className="rounded-full"
          >
            <Button variant="primary">
              <a href="#demo">{CTA_PRIMARY}</a>
            </Button>
          </motion.div>

          <Button variant="ghost-pill">
            <a href="#vizyon">{CTA_SECONDARY} →</a>
          </Button>
        </motion.div>

      </div>

      {/* Scroll indicator — disappears on first scroll */}
      {!scrolled && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-default select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-[11px] text-ink-muted tracking-[0.1em] uppercase">
            Keşfet
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} className="text-ink-muted" />
          </motion.div>
        </motion.div>
      )}

    </section>
  );
}
