import Image from "next/image";
import FadeIn from "./ui/FadeIn";

// ─── İÇERİK PLACEHOLDER — Güncelle ─────────────────────────────────────────
const CLINICAL_LABEL = "Kliniklerde Gerçek";
const CLINICAL_HEADLINE = "Her seans bir\nkarar noktasıdır.";
const CLINICAL_BODY =
  "Terapistler 45 dakikalık bir seansta onlarca klinik karar verir. Her değerlendirme, her not, her gözlem — hastanın ilerlemesinin bir parçası. Palinga bu bilgiyi kaybolmaktan kurtarır ve bir sonraki seansa taşır.";
// ────────────────────────────────────────────────────────────────────────────

export default function ClinicalContext() {
  return (
    <section className="bg-canvas py-24 border-b border-hairline">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Sol — görsel (AfaziaContext'in yansıması) */}
          <FadeIn>
            <div className="relative rounded-[18px] overflow-hidden aspect-[4/3] bg-parchment">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop&q=80"
                alt="Klinik ortamında terapist"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

          {/* Sağ — metin */}
          <FadeIn delay={0.12}>
            <p className="text-[12px] font-normal text-ink-muted tracking-[-0.12px] uppercase mb-6">
              {CLINICAL_LABEL}
            </p>
            <h2 className="text-ink mb-6 whitespace-pre-line">
              {CLINICAL_HEADLINE}
            </h2>
            <p className="text-ink-muted text-[17px] leading-[1.6] max-w-md">
              {CLINICAL_BODY}
            </p>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
