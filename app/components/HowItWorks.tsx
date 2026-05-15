import FadeIn from "./ui/FadeIn";

const steps = [
  {
    num: "01",
    title: "Kliniğinizi Kurun",
    description:
      "Platformu dakikalar içinde yapılandırın. Terapist ekibinizi ekleyin, hasta profillerini oluşturun.",
  },
  {
    num: "02",
    title: "Değerlendirme Yapın",
    description:
      "Standart klinik değerlendirme araçlarını dijital olarak uygulayın. Sonuçlar otomatik olarak puanlanır ve raporlanır.",
  },
  {
    num: "03",
    title: "Terapi Planı Oluşturun",
    description:
      "Kanıt temelli protokollerden seçin veya özelleştirin. Hastaya özel egzersiz ve seans planları atayın.",
  },
  {
    num: "04",
    title: "İlerlemeyi İzleyin",
    description:
      "Gerçek zamanlı dashboard ile seans sıklığı, egzersiz uyumu ve klinik sonuçları takip edin.",
  },
  {
    num: "05",
    title: "Raporlayın ve Geliştirin",
    description:
      "Otomatik üretilen raporlarla tedavi etkinliğini ölçün. Klinik kararlarınızı verinize dayandırın.",
  },
];

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="bg-paper py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-mid">
              Adım Adım
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink mt-3">
              Nasıl Çalışır?
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-12">
          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.08}>
              <div
                className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="shrink-0 flex items-center gap-4 md:w-[220px]">
                  <span className="text-5xl font-extrabold text-border-line tracking-tight leading-none">
                    {step.num}
                  </span>
                </div>
                <div className="flex-1 bg-surface rounded-xl border border-border-line p-7 hover:border-ink transition-colors duration-150">
                  <h3 className="text-xl font-bold text-ink mb-2">{step.title}</h3>
                  <p className="text-mid leading-relaxed">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
