"use client";

import { motion } from "framer-motion";

const keywords = [
  "Dil ve Konuşma Terapisi",
  "Afazi Rehabilitasyonu",
  "Klinik Yönetim",
  "Seans Planlama",
  "Hasta Takibi",
  "Gerçek Zamanlı Raporlama",
  "Dijital Değerlendirme",
  "Çoklu Klinik Desteği",
  "KVKK Uyumlu Altyapı",
  "Terapist Araçları",
  "Uzaktan Takip",
  "Veri Güvenliği",
];

export default function PartnerStrip() {
  return (
    <section className="bg-parchment border-y border-hairline py-10 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6 mb-6">
        <p className="text-center text-[12px] font-normal text-ink-muted tracking-[-0.12px]">
          Türkiye'de rehabilitasyon pratiğini dijitalleştiriyoruz
        </p>
      </div>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex gap-12 shrink-0 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {[...keywords, ...keywords].map((kw, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center gap-3 text-[14px] font-normal text-ink-muted whitespace-nowrap tracking-[-0.014em]"
            >
              <span className="w-1 h-1 rounded-full bg-ink-muted opacity-40" />
              {kw}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
