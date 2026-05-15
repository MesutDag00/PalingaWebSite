import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "KVKK Aydınlatma Metni — Palinga",
  description: "Palinga Sağlık Teknolojileri A.Ş. KVKK Aydınlatma Metni",
};

export default function KVKKPage() {
  return (
    <>
      <Navbar />
      <main className="bg-canvas pt-28 pb-24">
        <div className="max-w-[740px] mx-auto px-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-muted mb-3">
            Kişisel Verilerin Korunması
          </p>
          <h1 className="mb-8" style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}>
            KVKK Aydınlatma Metni
          </h1>

          <div className="prose-palinga">
            <Section title="1. Veri Sorumlusu">
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında
                veri sorumlusu sıfatıyla{" "}
                <strong>Palinga Sağlık Teknolojileri A.Ş.</strong> (&quot;Şirket&quot;
                veya &quot;Palinga&quot;) faaliyetlerini yürütmektedir.
              </p>
            </Section>

            <Section title="2. İşlenen Kişisel Veriler">
              <p>Palinga, hizmetlerin sunulması amacıyla aşağıdaki kategorilerde kişisel veri işleyebilir:</p>
              <ul>
                <li>Kimlik verisi: ad, soyad, T.C. kimlik numarası (gerekli hallerde)</li>
                <li>İletişim verisi: e-posta adresi, telefon numarası</li>
                <li>Sağlık verisi: afazi tanısı, terapi geçmişi, egzersiz sonuçları (yalnızca hasta ve terapist profilleri için)</li>
                <li>Kullanım verisi: platform üzerindeki oturum bilgileri, aktivite logları</li>
                <li>Klinik işlem verisi: seans notları, değerlendirme sonuçları</li>
              </ul>
            </Section>

            <Section title="3. Kişisel Verilerin İşlenme Amaçları">
              <ul>
                <li>Rehabilitasyon hizmetlerinin sunulması ve yönetilmesi</li>
                <li>Hasta-terapist eşleşmesinin gerçekleştirilmesi</li>
                <li>Klinik raporlama ve analiz hizmetlerinin sağlanması</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                <li>Teknik destek ve sistem güvenliğinin sağlanması</li>
              </ul>
            </Section>

            <Section title="4. Kişisel Verilerin Aktarılması">
              <p>
                Kişisel veriler; yalnızca ilgili kliniğin yetkili personeli, yasal zorunluluk
                halleri ve açık rıza alınması koşuluyla üçüncü taraflarla paylaşılabilir.
                Sağlık verileri hiçbir koşulda ticari amaçla üçüncü taraflara aktarılmaz.
              </p>
            </Section>

            <Section title="5. Kişisel Verilerin Saklanması">
              <p>
                Veriler, hizmet ilişkisinin devam ettiği süre boyunca ve ilgili mevzuatın
                öngördüğü süreler dahilinde saklanır. Saklama süresi sona erdiğinde veriler
                güvenli biçimde silinir, yok edilir veya anonim hale getirilir.
              </p>
            </Section>

            <Section title="6. İlgili Kişinin Hakları">
              <p>KVKK Madde 11 kapsamında aşağıdaki haklara sahipsiniz:</p>
              <ul>
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenen verilerinize ilişkin bilgi talep etme</li>
                <li>Verilerin işlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
                <li>Verilerin silinmesini veya yok edilmesini isteme</li>
                <li>Otomatik sistemler vasıtasıyla aleyhinize çıkan sonuçlara itiraz etme</li>
                <li>Zararın giderilmesini talep etme</li>
              </ul>
            </Section>

            <Section title="7. Başvuru Yöntemi">
              <p>
                Yukarıdaki haklarınızı kullanmak için{" "}
                <a href="mailto:kvkk@palinga.com" className="text-primary hover:underline">
                  kvkk@palinga.com
                </a>{" "}
                adresine yazılı başvuruda bulunabilirsiniz. Başvurular 30 gün içinde
                yanıtlanır.
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
