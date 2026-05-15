"use client";

import { Shield, Lock, ClipboardList } from "lucide-react";
import FadeIn from "./ui/FadeIn";

const pillars = [
  {
    icon: Shield,
    title: "Veri İzolasyonu",
    description:
      "Her kliniğin verisi diğerinden tamamen izole edilmiş çok kiracılı (multi-tenant) mimaride saklanır. Klinikler birbirinin verisine hiçbir koşulda erişemez; hasta mahremiyeti mimarinin kendisine gömülüdür.",
  },
  {
    icon: Lock,
    title: "Şifreleme",
    description:
      "Tüm veri iletimi TLS 1.3 ile şifrelenir. Veritabanında hassas hasta kayıtları at-rest şifrelemesi ile korunur. Şifreleme anahtarları merkezi yönetimle döndürülür.",
  },
  {
    icon: ClipboardList,
    title: "Denetim İzi",
    description:
      "Her işlem değiştirilemez audit log ile kaydedilir. Kimin, ne zaman, hangi veriye eriştiği izlenebilir. Klinik şeffaflığı ve yasal uyumluluk için eksiksiz iz.",
  },
];

export default function SecuritySection() {
  return (
    <section id="guvenlik" className="bg-canvas py-24 border-b border-hairline">
      <div className="max-w-[980px] mx-auto px-6">
        <FadeIn>
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-muted mb-3">
            Güvenlik ve Gizlilik
          </p>
          <h2 className="mb-4 max-w-[560px]">
            KVKK uyumluluğu mimarinin kendisidir.
          </h2>
          <p className="text-[17px] text-ink-muted leading-[1.47] max-w-[520px] mb-14">
            Sağlık verisi en hassas kişisel veridir. Palinga bunu sonradan
            eklenen bir özellik olarak değil, sistemin temeli olarak tasarlar.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <FadeIn key={p.title} delay={i * 0.08}>
                <div className="border-t border-hairline pt-8 pb-6 md:pr-10">
                  <div className="w-10 h-10 rounded-lg bg-parchment flex items-center justify-center mb-5">
                    <Icon size={20} className="text-primary" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-[17px] font-semibold text-ink tracking-[-0.022em] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[15px] text-ink-muted leading-[1.57]">
                    {p.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 pt-8 border-t border-hairline flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <p className="text-[14px] text-ink-muted">
              Kişisel veri işleme faaliyetlerimiz hakkında tam bilgi için:
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/kvkk"
                className="text-[14px] text-primary hover:underline transition-colors"
              >
                KVKK Aydınlatma Metni →
              </a>
              <a
                href="/gizlilik"
                className="text-[14px] text-primary hover:underline transition-colors"
              >
                Gizlilik Politikası →
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
