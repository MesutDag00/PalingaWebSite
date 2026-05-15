import Image from "next/image";
import FadeIn from "./ui/FadeIn";

// ─── İÇERİK PLACEHOLDER — Güncelle ─────────────────────────────────────────
const CONTEXT_LABEL = "Afazi Nedir";
const CONTEXT_HEADLINE = "Dil kaybı,\nhayat kaybıdır.";
const CONTEXT_BODY =
  "Afazi; inme, beyin tümörü veya kafa travması sonrasında gelişen bir iletişim bozukluğudur. Hasta düşüncelerini anlar — ancak ifade edemez. Türkiye'de her yıl onbinlerce kişi bu tanıyı alıyor ve büyük çoğunluğu yeterli terapiye erişemiyor.";
// ────────────────────────────────────────────────────────────────────────────

export default function AfaziaContext() {
  return (
    <section className="bg-canvas py-24 border-b border-hairline">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Sol — metin */}
          <FadeIn>
            <p className="text-[12px] font-normal text-ink-muted tracking-[-0.12px] uppercase mb-6">
              {CONTEXT_LABEL}
            </p>
            <h2 className="text-ink mb-6 whitespace-pre-line">
              {CONTEXT_HEADLINE}
            </h2>
            <p className="text-ink-muted text-[17px] leading-[1.6] max-w-md">
              {CONTEXT_BODY}
            </p>
          </FadeIn>

          {/* Sağ — görsel */}
          <FadeIn delay={0.12}>
            <div className="relative rounded-[18px] overflow-hidden aspect-[4/3] bg-parchment">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80"
                alt="Terapist ve hasta rehabilitasyon seansında"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
