import FadeIn from "./ui/FadeIn";

// ─── İÇERİK PLACEHOLDER — Güncelle ─────────────────────────────────────────
const VISION_HEADLINE = "Türkiye'de her yıl binlerce insan dil kaybıyla yüzleşiyor. Biz bu tablonun değişebileceğine inanıyoruz.";
const VISION_BODY = "Palinga'yı bir yazılım şirketi olarak görmüyoruz. Biz klinik süreçlerin veriyle yeniden tasarlanabileceğine inanan bir ekibiz. Teknoloji burada araç; amaç, her hastanın en iyi bakımı alabilmesi.";
const PILLARS = [
  {
    num: "01",
    title: "Veri, sezgiden önce gelir.",
    desc: "Terapist kararları klinik kanıta dayanmalı. Sezgiye değil, ölçülebilir ilerlemeye.",
  },
  {
    num: "02",
    title: "Erişim bir hak, ayrıcalık değil.",
    desc: "Coğrafya ya da klinik büyüklüğü hastanın aldığı bakım kalitesini belirlememelidir.",
  },
  {
    num: "03",
    title: "Platform görünmez olmalı.",
    desc: "En iyi yazılım, kullanıcının varlığını unuttuğu yazılımdır. Terapist hastasına odaklanmalı.",
  },
  {
    num: "04",
    title: "Hasta sürecin öznesidir.",
    desc: "Tedavi, seans odasında başlar ama orada bitmez. Hastanın sürece katılımı sonucu doğrudan etkiler.",
  },
];
// ────────────────────────────────────────────────────────────────────────────

export default function Vision() {
  return (
    <section id="vizyon" className="bg-tile-dark py-24 overflow-hidden">
      <div className="max-w-[980px] mx-auto px-6">

        <FadeIn>
          <p className="text-[12px] font-normal text-ink-muted-dark tracking-[-0.12px] uppercase mb-16">
            Neden Palinga
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — vizyon ifadesi */}
          <FadeIn className="lg:col-span-5">
            <h2 className="text-ink-on-dark mb-8 leading-[1.1]">
              {VISION_HEADLINE}
            </h2>
            <p className="text-ink-muted-dark text-[17px] leading-[1.6] max-w-sm">
              {VISION_BODY}
            </p>
          </FadeIn>

          {/* Right — 4 inanç */}
          <div className="lg:col-span-7">
            {PILLARS.map((item, i) => (
              <FadeIn key={item.num} delay={i * 0.07}>
                <div className="py-7 border-t border-[#2d2d2d] last:border-b grid grid-cols-12 gap-4">
                  <div className="col-span-1 pt-0.5">
                    <span className="text-[11px] text-[#444] font-mono tracking-wider">
                      {item.num}
                    </span>
                  </div>
                  <div className="col-span-11">
                    <h3 className="text-ink-on-dark text-[17px] font-semibold mb-1.5 tracking-[-0.016em]">
                      {item.title}
                    </h3>
                    <p className="text-ink-muted-dark text-[15px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
