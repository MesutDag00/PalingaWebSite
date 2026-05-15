"use client";

import { Smartphone, LayoutDashboard, Building2, Settings2 } from "lucide-react";
import FadeIn from "./ui/FadeIn";

const modules = [
  {
    icon: Smartphone,
    title: "Hasta Uygulaması",
    description:
      "Hastanın ev egzersizlerine, sesli aktivitelerine ve ilerlemesini görebildiği panele eriştiği mobil uygulama. Terapistin atadığı egzersizler anlık güncellenir.",
    platform: "iOS · Android",
  },
  {
    icon: LayoutDashboard,
    title: "Terapist Paneli",
    description:
      "Hasta atama, seans planlama, gerçek zamanlı ilerleme takibi ve aktivite özelleştirme arayüzü. Her seansın verisi otomatik olarak kaydedilir.",
    platform: "Web uygulaması",
  },
  {
    icon: Building2,
    title: "Klinik Yönetim Arayüzü",
    description:
      "Klinik sahibinin terapistleri, hastaları ve çoklu klinik raporlamayı yönettiği operasyon merkezi. Klinikler arası veri tamamen izoledir.",
    platform: "Web uygulaması",
  },
  {
    icon: Settings2,
    title: "SuperAdmin İçerik Yönetimi",
    description:
      "Platform içeriklerinin (aktiviteler, protokoller, kelime havuzları) yönetildiği sistem arayüzü. Klinik bağımsızlığı bu katmanda korunur.",
    platform: "Web · Kısıtlı erişim",
  },
];

export default function ProductArchitecture() {
  return (
    <section id="urun-mimarisi" className="bg-parchment py-24">
      <div className="max-w-[980px] mx-auto px-6">
        <FadeIn>
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-muted mb-3">
            Ürün Mimarisi
          </p>
          <h2 className="mb-4">
            Aphasia Reverbis, dört modülden oluşan
            <br className="hidden md:block" /> bütünleşik bir rehabilitasyon sistemidir.
          </h2>
          <p className="text-[17px] text-ink-muted leading-[1.47] max-w-[560px] mb-14">
            Her modül bağımsız çalışır; ancak veriler merkezi bir yapıda buluşarak
            klinik kararları gerçek zamanlı destekler.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <FadeIn key={mod.title} delay={i * 0.08}>
                <div className="bg-canvas rounded-[18px] border border-hairline p-8 h-full flex flex-col gap-5 transition-all duration-200 hover:border-[#b0b0b8] hover:shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-parchment flex items-center justify-center">
                      <Icon size={22} className="text-primary" strokeWidth={1.6} />
                    </div>
                    <span className="text-[11px] font-medium text-primary bg-[#e8f0fb] rounded-full px-3 py-1">
                      {mod.platform}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[17px] font-semibold text-ink tracking-[-0.022em] mb-2">
                      {mod.title}
                    </h3>
                    <p className="text-[15px] text-ink-muted leading-[1.53]">
                      {mod.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
