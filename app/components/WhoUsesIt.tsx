import FadeIn from "./ui/FadeIn";
import { Building2, Stethoscope, HeartPulse } from "lucide-react";

// ─── İÇERİK PLACEHOLDER — Güncelle ─────────────────────────────────────────
const SECTION_LABEL = "Kimler Kullanır";
const HEADLINE = "Rehabilitasyon ekosistemindeki her paydaş için.";
const SEGMENTS = [
  {
    title: "Klinik Sahipleri",
    desc: "Operasyonel yükü azaltın. Klinik geneli performansı gerçek zamanlı izleyin. Randevu, raporlama ve ekip yönetimini tek platformdan yürütün.",
    link: "Klinikler için →",
    Icon: Building2,
  },
  {
    title: "Terapistler",
    desc: "Standart değerlendirme araçlarını dijital uygulayın. Hasta ilerlemesini veriye dayalı takip edin. Seans notlarına daha az, hastaya daha fazla zaman ayırın.",
    link: "Terapistler için →",
    Icon: Stethoscope,
  },
  {
    title: "Hastalar",
    desc: "Egzersizlerinize her yerden ulaşın. İlerlemenizi görün. Terapistinizle seans dışında da bağlantıda kalın.",
    link: "Hastalar için →",
    Icon: HeartPulse,
  },
];
// ────────────────────────────────────────────────────────────────────────────

export default function WhoUsesIt() {
  return (
    <section id="kimler-kullanir" className="bg-canvas py-24">
      <div className="max-w-[980px] mx-auto px-6">
        <FadeIn>
          <p className="text-[12px] font-normal text-ink-muted tracking-[-0.12px] uppercase mb-5">
            {SECTION_LABEL}
          </p>
          <h2 className="text-ink mb-16 max-w-[520px]">
            {HEADLINE}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SEGMENTS.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <div className="bg-canvas border border-hairline rounded-[18px] p-6 h-full flex flex-col hover:border-ink transition-colors duration-200">
                <s.Icon size={24} className="text-ink-muted mb-5" strokeWidth={1.5} />
                <h3 className="text-ink text-[17px] font-semibold mb-3 tracking-[-0.016em]">
                  {s.title}
                </h3>
                <p className="text-ink-muted text-[17px] leading-[1.47] flex-1 mb-5">
                  {s.desc}
                </p>
                <a
                  href="#demo"
                  className="text-primary text-[17px] font-normal tracking-[-0.022em] hover:opacity-75 transition-opacity"
                >
                  {s.link}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
