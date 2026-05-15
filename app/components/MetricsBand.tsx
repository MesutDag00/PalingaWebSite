import FadeIn from "./ui/FadeIn";

const stats = [
  { value: "~150K", label: "Yıllık İnme Vakası",     sub: "Türkiye geneli tahmini" },
  { value: "%25",   label: "Afazi Gelişme Riski",    sub: "İnme sonrası dil kaybı" },
  { value: "1/5",   label: "Terapiye Erişim",        sub: "Yeterli bakım alabilen" },
  { value: "40dk+", label: "Seans Başı Kayıt Yükü", sub: "Terapist belgeleme süresi" },
];

export default function MetricsBand() {
  return (
    <section className="bg-tile-dark py-32">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Sol — editorial framing */}
          <FadeIn className="lg:col-span-5">
            <p className="text-[12px] font-normal text-ink-muted-dark tracking-[-0.12px] uppercase mb-10">
              Neden Bu Sorunu Çözüyoruz
            </p>
            <h2 className="text-ink-on-dark mb-6 whitespace-pre-line leading-[1.1]">
              {"Türkiye'de tablo,\nmüdahale bekliyor."}
            </h2>
            <p className="text-ink-muted-dark text-[17px] leading-[1.6]">
              Afazi rehabilitasyonunda sistem düzeyinde ciddi boşluklar var. Bu rakamlar, Palinga'nın neden var olduğunu gösteriyor.
            </p>
          </FadeIn>

          {/* Sağ — 2×2 stat grid */}
          <FadeIn className="lg:col-span-7" delay={0.1}>
            <div className="grid grid-cols-2 gap-px bg-[#2d2d2d]">
              {stats.map((stat, i) => (
                <div key={stat.label} className="bg-tile-dark pt-0 pb-10 px-6">
                  <div className="border-t-2 border-[#2997ff] pt-6 mb-4">
                    <span
                      className="text-ink-on-dark font-semibold leading-none"
                      style={{ fontSize: "clamp(2.4rem, 4vw, 3.5rem)", letterSpacing: "-0.03em" }}
                    >
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-muted-dark mb-1">
                    {stat.label}
                  </div>
                  <div className="text-[13px] text-ink-muted-dark opacity-60">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
