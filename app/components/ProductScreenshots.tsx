import FadeIn from "./ui/FadeIn";

export default function ProductScreenshots() {
  return (
    <section className="bg-surface py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-mid">
              06 — Platform Arayüzü
            </span>
            <span className="h-px w-10 bg-border-line" />
          </div>
          <h2 className="text-ink mb-3 text-3xl sm:text-4xl">
            Platform tam olarak
            <br />
            böyle görünüyor.
          </h2>
          <p className="text-mid max-w-lg mb-16 leading-relaxed">
            Gerçek klinik arayüzü, sıfır karmaşıklık. İlk kullanımda öğrenme eğrisi yok.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Main dashboard — large */}
          <FadeIn className="lg:col-span-7" delay={0}>
            <div className="bg-[#0D0D0D] rounded-xl border border-[#1E1E1E] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#1E1E1E]">
                <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
                <span className="w-2 h-2 rounded-full bg-[#28C840]" />
                <span className="ml-3 text-[10px] text-[#333]">Klinik Dashboard</span>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-white text-sm font-semibold">Genel Bakış</div>
                  <div className="text-[10px] text-[#28C840] border border-[#28C840]/20 bg-[#28C840]/10 rounded-full px-2.5 py-0.5">● Canlı</div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[["47", "Hasta"], ["89%", "Uyum"], ["12K", "Seans"], ["3.2K", "Aktif"]].map(([v, l]) => (
                    <div key={l} className="bg-[#161616] border border-[#222] rounded-lg p-3">
                      <div className="text-white text-lg font-bold" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>{v}</div>
                      <div className="text-[9px] text-[#444] uppercase tracking-wider">{l}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#161616] border border-[#222] rounded-lg p-4">
                  <div className="text-[10px] text-[#444] uppercase tracking-wider mb-3">Aylık Seans Trendi</div>
                  <div className="flex items-end gap-1.5 h-20">
                    {[30, 45, 38, 60, 55, 72, 65, 80, 70, 88, 78, 92].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: `rgba(255,255,255,${0.04 + i * 0.06})` }} />
                    ))}
                  </div>
                </div>
                <div className="space-y-1.5">
                  {[["Zeynep A.", "WAB Değerlendirme", "Bugün 10:30"], ["Burak T.", "Seans #8 — Tamamlandı", "Dün 14:00"], ["Selin K.", "Yeni Hasta Kaydı", "2 gün önce"]].map(([n, s, t]) => (
                    <div key={n} className="flex items-center gap-3 bg-[#161616] border border-[#1E1E1E] rounded-lg px-3.5 py-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#222] flex items-center justify-center text-[10px] text-[#555] shrink-0">{n[0]}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-[12px] font-medium">{n}</div>
                        <div className="text-[#444] text-[10px]">{s}</div>
                      </div>
                      <div className="text-[10px] text-[#333] shrink-0">{t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right column — two stacked panels */}
          <div className="lg:col-span-5 space-y-5">
            {/* Mobile app mockup */}
            <FadeIn delay={0.1}>
              <div className="bg-[#0D0D0D] rounded-xl border border-[#1E1E1E] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#1E1E1E]">
                  <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                  <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2 h-2 rounded-full bg-[#28C840]" />
                  <span className="ml-3 text-[10px] text-[#333]">Hasta Uygulaması</span>
                </div>
                <div className="p-4 space-y-3">
                  <div className="text-white text-sm font-semibold">Bugünkü Egzersizler</div>
                  {[["Kelime Bulma Egzersizi", "5 dk", "%80"], ["Cümle Tamamlama", "8 dk", "%65"], ["Sesli Okuma", "10 dk", "%90"]].map(([n, d, p]) => (
                    <div key={n} className="bg-[#161616] border border-[#1E1E1E] rounded-lg px-3.5 py-2.5 flex items-center justify-between">
                      <div>
                        <div className="text-[12px] text-white font-medium">{n}</div>
                        <div className="text-[10px] text-[#444]">{d}</div>
                      </div>
                      <div className="text-[11px] text-[#28C840]">{p}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Assessment form mockup */}
            <FadeIn delay={0.2}>
              <div className="bg-[#0D0D0D] rounded-xl border border-[#1E1E1E] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#1E1E1E]">
                  <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
                  <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2 h-2 rounded-full bg-[#28C840]" />
                  <span className="ml-3 text-[10px] text-[#333]">WAB-R Değerlendirme</span>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="text-white text-sm font-semibold">Sonuç Raporu</div>
                    <div className="text-[10px] text-[#28C840] border border-[#28C840]/20 bg-[#28C840]/10 rounded-full px-2.5 py-0.5">Tamamlandı</div>
                  </div>
                  {[["Spontan Konuşma", "16/20"], ["Anlama", "58/60"], ["Tekrar", "70/100"], ["İsimlendirme", "87/100"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between text-[11px]">
                      <span className="text-[#555]">{k}</span>
                      <span className="text-[#888] font-medium">{v}</span>
                    </div>
                  ))}
                  <div className="border-t border-[#1E1E1E] pt-3 flex justify-between">
                    <span className="text-[11px] text-[#444]">Toplam Skor</span>
                    <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}>68.4 / 100</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
