import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Gizlilik Politikası — Palinga",
  description: "Palinga Sağlık Teknolojileri A.Ş. Gizlilik Politikası",
};

export default function GizlilikPage() {
  return (
    <>
      <Navbar />
      <main className="bg-canvas pt-28 pb-24">
        <div className="max-w-[740px] mx-auto px-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-muted mb-3">
            Gizlilik
          </p>
          <h1 className="mb-8" style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}>
            Gizlilik Politikası
          </h1>

          <div>
            <Section title="1. Genel İlkeler">
              <p>
                Palinga Sağlık Teknolojileri A.Ş. olarak kullanıcılarımızın gizliliğini
                korumak birinci önceliğimizdir. Bu politika, platformumuzda hangi verilerin
                toplandığını, nasıl kullanıldığını ve nasıl korunduğunu açıklar.
              </p>
            </Section>

            <Section title="2. Toplanan Veriler">
              <p>
                Platform kullanımı sırasında hesap oluşturma, seans kayıtları, egzersiz
                sonuçları ve iletişim bilgileri gibi veriler toplanır. Sağlık verileri
                yalnızca ilgili klinik personelinin erişimine açıktır.
              </p>
            </Section>

            <Section title="3. Verilerin Kullanımı">
              <p>Toplanan veriler şu amaçlarla kullanılır:</p>
              <ul>
                <li>Rehabilitasyon hizmetinin sunulması</li>
                <li>Terapist-hasta iletişiminin desteklenmesi</li>
                <li>Platform güvenliğinin sağlanması</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              </ul>
            </Section>

            <Section title="4. Veri Güvenliği">
              <p>
                Tüm veri iletimi TLS 1.3 şifreleme ile korunur. Hassas sağlık verileri
                at-rest şifrelemesi uygulanarak saklanır. Her kliniğin verisi teknik olarak
                diğerlerinden izole edilmiştir.
              </p>
            </Section>

            <Section title="5. Çerezler">
              <p>
                Platform, oturum yönetimi ve kullanıcı deneyimi iyileştirmesi amacıyla
                teknik çerezler kullanır. Reklam veya üçüncü taraf takip çerezleri
                kullanılmamaktadır.
              </p>
            </Section>

            <Section title="6. Üçüncü Taraflarla Paylaşım">
              <p>
                Kişisel veriler; yasal zorunluluklar dışında ve açık rıza alınmaksızın
                üçüncü taraflarla paylaşılmaz. Sağlık verileri ticari amaçla
                hiçbir şekilde paylaşılmaz.
              </p>
            </Section>

            <Section title="7. İletişim">
              <p>
                Gizlilik politikamıza ilişkin sorularınız için{" "}
                <a href="mailto:gizlilik@palinga.com" className="text-primary hover:underline">
                  gizlilik@palinga.com
                </a>{" "}
                adresine ulaşabilirsiniz.
              </p>
            </Section>

            <p className="text-[13px] text-ink-muted mt-12 pt-8 border-t border-hairline">
              Son güncelleme: Mayıs 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-8">
      <h2
        className="font-semibold text-ink mb-3 tracking-[-0.02em]"
        style={{ fontSize: "1.125rem" }}
      >
        {title}
      </h2>
      <div className="text-[16px] text-ink-muted leading-[1.65] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_p]:mb-3">
        {children}
      </div>
    </div>
  );
}
