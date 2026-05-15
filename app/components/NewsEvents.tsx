import FadeIn from "./ui/FadeIn";
import { FileText, EyeOff, BrainCircuit } from "lucide-react";

const problems = [
  {
    tag: "Klinik Süreç",
    title: "Seans kayıtları hâlâ kâğıt tabanlı.",
    desc: "Türkiye'deki pek çok rehabilitasyon kliniği, hasta notları ve değerlendirme sonuçlarını elle yönetiyor. Bu hem zamana hem veriye mal oluyor.",
    Icon: FileText,
  },
  {
    tag: "Hasta Takibi",
    title: "Seans dışında hasta görünmez olur.",
    desc: "Terapistler hastalarının evdeki pratik performansını bilmiyor. Seans aralarında ne kadar çalıştıkları, iyileşip iyileşmedikleri takip edilemiyor.",
    Icon: EyeOff,
  },
  {
    tag: "Terapist Yükü",
    title: "Belgeleme, terapinin önüne geçiyor.",
    desc: "Bir terapist, hastasından daha çok bilgisayar ya da kâğıt başında vakit geçiriyor. Bu yük zamanla tükenmişliğe dönüşüyor.",
    Icon: BrainCircuit,
  },
];

export default function NewsEvents() {
  return (
    <section id="haberler" className="bg-parchment py-24">
      <div className="max-w-[980px] mx-auto px-6">
        <FadeIn>
          <p className="text-[12px] font-normal text-ink-muted tracking-[-0.12px] uppercase mb-5">
            Neyi Çözüyoruz
          </p>
          <h2 className="text-ink mb-16 max-w-[520px]">
            Rehabilitasyon sisteminin bugünkü kırıklıkları.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="border border-hairline rounded-[18px] p-6 h-full flex flex-col bg-canvas">
                <div className="mb-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-muted border border-hairline rounded-full px-2.5 py-1">
                    {item.tag}
                  </span>
                </div>
                <item.Icon size={24} className="text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-[17px] font-semibold text-ink leading-snug tracking-[-0.016em] mb-3 flex-1">
                  {item.title}
                </h3>
                <p className="text-[14px] text-ink-muted leading-[1.57]">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
