"use client";

import FadeIn from "./ui/FadeIn";

const protocols = [
  {
    abbr: "VNeST",
    name: "Verb Network Strengthening Treatment",
    description:
      "Fiil ağlarını güçlendirerek cümle üretimini destekler. Broca afazisinde primer protokol olarak uygulanır; semantik ilişkilerin yeniden kurulmasına odaklanır.",
    types: ["Broca", "Anomik"],
  },
  {
    abbr: "PCA",
    name: "Phonological Components Analysis",
    description:
      "Sözcük bulma güçlüğü için fonetik ipuçları ve bileşen analizi kullanır. Anomik afazide birincil protokol; kelimeye erişim yollarını çoğaltır.",
    types: ["Anomik", "Broca"],
  },
  {
    abbr: "RET",
    name: "Response Elaboration Training",
    description:
      "Wh- ipuçlarıyla desteklenen genişletilmiş yanıt eğitimidir. Telegrafik konuşmayı açar, hastanın kendi ürettiği sözcükleri genişletmesini sağlar.",
    types: ["Broca", "Global"],
  },
  {
    abbr: "MOR",
    name: "Melodic Intonation Reading",
    description:
      "Melodik ritim desteğiyle sesli okuma becerisi kazandırır. Müzikal sol hemisfer aktivasyonu ile dil üretimini destekleyen kanıt temelli bir yaklaşım.",
    types: ["Broca", "Wernicke"],
  },
  {
    abbr: "TK",
    name: "Tekrar Köprüsü — Spaced Retrieval Protocol",
    description:
      "Aralıklı tekrar prensibine dayanan kalıcı sözcük yerleşimi protokolüdür. Kronik evrede tüm afazi tiplerinde destekleyici olarak kullanılır.",
    types: ["Tüm tipler"],
  },
];

export default function ClinicalFoundation() {
  return (
    <section id="klinik-temel" className="bg-tile-dark py-24">
      <div className="max-w-[980px] mx-auto px-6">
        <FadeIn>
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-muted-dark mb-3">
            Klinik Temel
          </p>
          <h2 className="text-ink-on-dark mb-4 max-w-[640px]">
            ASHA kanıtlı protokollerle desteklenen,
            <br className="hidden md:block" /> klinik literatüre dayalı bir sistem.
          </h2>
          <p className="text-[17px] text-ink-muted-dark leading-[1.47] max-w-[520px] mb-16">
            Her protokol, belirli afazi tipleri için etkinliği literatürde
            kanıtlanmış müdahale yöntemlerine dayanır.
          </p>
        </FadeIn>

        <div className="flex flex-col">
          {protocols.map((p, i) => (
            <FadeIn key={p.abbr} delay={i * 0.07}>
              <div className="border-t border-[#333] py-7 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start group">
                {/* Kısaltma */}
                <div className="lg:col-span-2">
                  <span className="text-[22px] font-semibold text-[#2997ff] tracking-[-0.02em] font-mono">
                    {p.abbr}
                  </span>
                </div>

                {/* İsim + Açıklama */}
                <div className="lg:col-span-7">
                  <p className="text-[15px] font-semibold text-ink-on-dark mb-1 tracking-[-0.015em]">
                    {p.name}
                  </p>
                  <p className="text-[14px] text-ink-muted-dark leading-[1.57]">
                    {p.description}
                  </p>
                </div>

                {/* Afazi tipleri */}
                <div className="lg:col-span-3 flex flex-wrap gap-2 lg:justify-end">
                  {p.types.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium text-ink-muted-dark border border-[#3a3a3a] rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
          <div className="border-t border-[#333]" />
        </div>

        <FadeIn delay={0.4}>
          <p className="mt-10 text-[12px] text-ink-muted-dark leading-[1.57]">
            * Protokoller ASHA (American Speech-Language-Hearing Association) Practice Portal
            referansları ve klinik dil-konuşma terapisi literatürüne dayanmaktadır.
            Aphasia Reverbis içindeki uyarlamalar lisanslı dil-konuşma terapistleri gözetiminde
            gerçekleştirilmiştir.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
