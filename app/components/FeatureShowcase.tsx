"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "./ui/FadeIn";
import { Users, CalendarDays, ClipboardList, BarChart3 } from "lucide-react";

const features = [
  {
    id: "patients",
    icon: Users,
    title: "Hasta Yönetimi",
    subtitle: "Tüm hasta dosyaları tek ekranda",
    description:
      "Demografik bilgilerden tanı geçmişine, seans notlarından ilerleme grafiklerine kadar her hasta kaydı eksiksiz ve erişilebilir. Kağıt dosya devri sona erdi.",
    bullets: [
      "Dijital hasta dosyası ve anamnez formu",
      "Seans geçmişi ve ilerleme zaman çizelgesi",
      "Aile ve refakatçi iletişim yönetimi",
      "Egzersiz uyumu takibi",
    ],
    mockup: [
      { label: "Toplam Hasta", value: "247", delta: "+12" },
      { label: "Aktif Seans", value: "89", delta: "+5" },
      { label: "Bu Ay", value: "34", delta: "+8" },
    ],
  },
  {
    id: "scheduling",
    icon: CalendarDays,
    title: "Seans Planlama",
    subtitle: "Takvim görünümü, sıfır çakışma",
    description:
      "Akıllı seans planlama motoru ile randevu çakışmaları ortadan kalktı. Otomatik hatırlatmalar, iptal yönetimi ve terapist kapasite optimizasyonu.",
    bullets: [
      "Sürükle-bırak haftalık takvim",
      "Otomatik SMS/e-posta hatırlatma",
      "İptal ve yeniden planlama akışı",
      "Terapist uygunluk yönetimi",
    ],
    mockup: [
      { label: "Bu Hafta", value: "38", delta: "seans" },
      { label: "İptal Oranı", value: "%4", delta: "↓ düşük" },
      { label: "Doluluk", value: "%91", delta: "↑ yüksek" },
    ],
  },
  {
    id: "assessment",
    icon: ClipboardList,
    title: "Değerlendirme Araçları",
    subtitle: "WAB, BDAE, BNT ve daha fazlası",
    description:
      "Uluslararası standart afazi değerlendirme protokollerinin tamamı dijital formda. Puanlama otomatik, raporlama anlık. Klinik güvenilirliği korurken operasyonel hızı ikiye katlayın.",
    bullets: [
      "WAB, BDAE, BNT dijital formları",
      "Otomatik puanlama ve yorum",
      "Önceki değerlendirmelerle karşılaştırma",
      "PDF rapor tek tıkla dışa aktarım",
    ],
    mockup: [
      { label: "Protokol", value: "WAB-R", delta: "Aktif" },
      { label: "Puan", value: "68.4", delta: "/100" },
      { label: "Önceki", value: "51.2", delta: "↑ İyileşme" },
    ],
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Raporlama & Analitik",
    subtitle: "Klinik KPI'larınızı gerçek zamanlı izleyin",
    description:
      "Bireysel hasta analizinden klinik geneli performans metriklerine kadar veri odaklı karar verme altyapısı. Yönetim raporları otomatik, haftalık özet posta kutunuzda.",
    bullets: [
      "Gerçek zamanlı klinik performans dashboard'u",
      "Hasta ilerleme trend analizleri",
      "Terapist verimlilik raporları",
      "Haftalık otomatik özet e-posta",
    ],
    mockup: [
      { label: "Verimlilik", value: "%89", delta: "↑ %12" },
      { label: "NPS Skoru", value: "74", delta: "Mükemmel" },
      { label: "Aktif Rapor", value: "142", delta: "bu ay" },
    ],
  },
];

export default function FeatureShowcase() {
  const [active, setActive] = useState(features[0].id);
  const current = features.find((f) => f.id === active)!;

  return (
    <section id="urun" className="bg-paper py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-mid">
              04 — Platform Özellikleri
            </span>
            <span className="h-px w-10 bg-border-line" />
          </div>
          <h2 className="text-ink mb-3 text-3xl sm:text-4xl">
            Her şey bir platformda.
          </h2>
          <p className="text-mid max-w-xl mb-14 leading-relaxed">
            Rehabilitasyon kliniğinizin ihtiyacı olan tüm araçlar; birbirine bağlı, akıllı ve kullanımı kolay.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tab list */}
          <div className="lg:col-span-4 space-y-1">
            {features.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`w-full text-left px-5 py-4 rounded-lg transition-all duration-200 group ${
                  active === f.id
                    ? "bg-ink text-white"
                    : "hover:bg-surface text-ink"
                }`}
              >
                <div className="flex items-center gap-3">
                  <f.icon
                    size={17}
                    className={active === f.id ? "text-white/60" : "text-mid group-hover:text-ink"}
                  />
                  <div>
                    <div className={`text-sm font-semibold ${active === f.id ? "text-white" : "text-ink"}`}>
                      {f.title}
                    </div>
                    <div className={`text-[11px] mt-0.5 ${active === f.id ? "text-white/50" : "text-mid"}`}>
                      {f.subtitle}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Mockup panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-[#0D0D0D] rounded-xl border border-[#1E1E1E] overflow-hidden h-full"
              >
                {/* Browser bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#1E1E1E]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  <span className="ml-4 text-[11px] text-[#333]">palinga.app / {current.id}</span>
                </div>

                <div className="p-6 space-y-5">
                  {/* Section header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[11px] text-[#444] uppercase tracking-wider mb-1">{current.subtitle}</div>
                      <div className="text-white text-lg font-semibold">{current.title}</div>
                    </div>
                    <current.icon size={18} className="text-[#444] mt-1" />
                  </div>

                  {/* Metric row */}
                  <div className="grid grid-cols-3 gap-3">
                    {current.mockup.map((m) => (
                      <div key={m.label} className="bg-[#161616] border border-[#1E1E1E] rounded-lg p-3.5">
                        <div
                          className="text-white text-xl font-bold mb-0.5"
                          style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
                        >
                          {m.value}
                        </div>
                        <div className="text-[10px] text-[#444] uppercase tracking-wider">{m.label}</div>
                        <div className="text-[10px] text-[#28C840] mt-1">{m.delta}</div>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <div className="bg-[#161616] border border-[#1E1E1E] rounded-lg p-4">
                    <p className="text-[#888] text-sm leading-relaxed mb-4">{current.description}</p>
                    <ul className="space-y-2">
                      {current.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2.5 text-[12px] text-[#666]">
                          <span className="w-1 h-1 rounded-full bg-[#444] shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
