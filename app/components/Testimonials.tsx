import FadeIn from "./ui/FadeIn";

// ─── İÇERİK PLACEHOLDER — Güncelle ─────────────────────────────────────────
const QUOTE =
  "Palinga'dan önce her seans sonrası en az 20 dakikamı not yazmaya harcıyordum. Şimdi o 20 dakikayı hastama veriyorum. Bu bir verimlilik meselesi değil — bu bakım kalitesi meselesi.";
const AUTHOR_NAME = "Uzm. Dil ve Konuşma Terapisti";
const AUTHOR_INSTITUTION = "Pilot Program Katılımcısı";
// ────────────────────────────────────────────────────────────────────────────

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-tile-dark py-28">
      <div className="max-w-[700px] mx-auto px-6 text-center">
        <FadeIn>
          <p
            className="text-ink-on-dark leading-[1.4] mb-10"
            style={{ fontSize: "clamp(1.375rem, 3.5vw, 1.75rem)", fontWeight: 300, letterSpacing: "-0.022em" }}
          >
            &ldquo;{QUOTE}&rdquo;
          </p>
          <div>
            <p className="text-[14px] font-normal text-ink-on-dark tracking-[-0.014em]">
              {AUTHOR_NAME}
            </p>
            <p className="text-[14px] font-normal text-ink-muted-dark mt-0.5 tracking-[-0.014em]">
              {AUTHOR_INSTITUTION}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
