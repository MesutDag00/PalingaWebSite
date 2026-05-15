"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import FadeIn from "./ui/FadeIn";

interface Stat {
  value: string;
  label: string;
  tooltip: string;
}

const stats: Stat[] = [
  {
    value: "24",
    label: "Egzersiz Aktivitesi",
    tooltip: "Ses, görsel, yazma ve anlama kategorilerinde yapılandırılmış aktivite seti.",
  },
  {
    value: "7",
    label: "Analiz Paneli",
    tooltip: "Terapistin hastanın ilerlemesini farklı boyutlarda takip edebildiği görünüm sayısı.",
  },
  {
    value: "8",
    label: "Kademe Fazı",
    tooltip: "Zorluk ilerlemesi için yapılandırılmış, algoritmik ilerleme sistemi.",
  },
  {
    value: "8",
    label: "Afazi Alt-Tipi",
    tooltip: "Her afazi tipi için özelleştirilmiş içerik paleti ve protokol ataması.",
  },
  {
    value: "17",
    label: "İçerik Kategorisi",
    tooltip: "Aktivitelerin tematik olarak sınıflandırıldığı üst gruplar.",
  },
  {
    value: "4+",
    label: "ASHA Kanıtlı Protokol",
    tooltip: "VNeST, PCA, RET, MOR ve destekleyici protokoller dahil klinik temelli yaklaşımlar.",
  },
];

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.06}>
      <div className="bg-canvas py-10 px-8 relative flex flex-col gap-2 min-h-[160px]">
        <div className="flex items-start justify-between gap-2">
          <span
            className="font-semibold text-ink tracking-[-0.04em] leading-none"
            style={{ fontSize: "clamp(2.8rem, 5vw, 4rem)" }}
          >
            {stat.value}
          </span>
          <button
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onClick={() => setOpen((v) => !v)}
            className="mt-1 text-ink-muted hover:text-ink transition-colors"
            aria-label="Detay"
          >
            <HelpCircle size={16} strokeWidth={1.6} />
          </button>
        </div>

        <p className="text-[14px] text-ink-muted leading-[1.4]">{stat.label}</p>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.97 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute bottom-full left-0 mb-2 z-10 w-[220px] bg-tile-dark text-ink-on-dark text-[13px] leading-[1.5] rounded-xl px-4 py-3 shadow-lg pointer-events-none"
            >
              {stat.tooltip}
              <div className="absolute top-full left-6 border-4 border-transparent border-t-tile-dark" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

export default function NumbersSection() {
  return (
    <section id="sayilar" className="bg-parchment py-24">
      <div className="max-w-[980px] mx-auto px-6">
        <FadeIn>
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-muted mb-3">
            Sayılarla Aphasia Reverbis
          </p>
          <h2 className="mb-3">Platform içeriğinin kapsamı.</h2>
          <p className="text-[17px] text-ink-muted leading-[1.47] max-w-[480px] mb-14">
            Her rakamın üzerine gelin — ne anlama geldiğini öğrenin.
          </p>
        </FadeIn>

        {/* Divider grid trick */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline rounded-[18px] overflow-hidden border border-hairline">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
