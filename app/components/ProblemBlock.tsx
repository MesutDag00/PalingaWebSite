import FadeIn from "./ui/FadeIn";

// ─── İÇERİK PLACEHOLDER — Güncelle ─────────────────────────────────────────
const SECTION_LABEL = "Temel İlkelerimiz";
const PILLARS = [
  {
    title: "Klinik bağımsızlık.",
    desc: "Her klinik kendi protokolünü uygular. Palinga standartları dayatmaz; mevcut klinik bilgeliği dijitalleştirir.",
  },
  {
    title: "Gerçek zamanlı şeffaflık.",
    desc: "Hasta ilerlemesi terapist, klinik ve hasta tarafından eş zamanlı izlenir. Sürpriz yok, gecikme yok.",
  },
  {
    title: "Güvenlik, sonradan değil, en baştan.",
    desc: "KVKK uyumluluğu ve kurumsal veri izolasyonu bir özellik değil, mimarinin kendisidir.",
  },
];
// ────────────────────────────────────────────────────────────────────────────

export default function ProblemBlock() {
  return (
    <section id="platform" className="bg-canvas py-24">
      <div className="max-w-[980px] mx-auto px-6">
        <FadeIn>
          <p className="text-[12px] font-normal text-ink-muted tracking-[-0.12px] uppercase mb-20">
            {SECTION_LABEL}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {PILLARS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <div className="pt-8 border-t border-hairline md:pr-12 last:pr-0">
                <h3 className="text-ink text-[21px] font-semibold tracking-[-0.022em] leading-[1.19] mb-4">
                  {p.title}
                </h3>
                <p className="text-ink-muted text-[17px] leading-[1.47]">
                  {p.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
