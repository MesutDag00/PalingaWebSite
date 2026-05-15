import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Kullanım Şartları — Palinga",
  description: "Palinga Sağlık Teknolojileri A.Ş. Kullanım Şartları",
};

export default function KullanimSartlariPage() {
  return (
    <>
      <Navbar />
      <main className="bg-canvas pt-28 pb-24">
        <div className="max-w-[740px] mx-auto px-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink-muted mb-3">
            Hukuki Bilgi
          </p>
          <h1 className="mb-8" style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}>
            Kullanım Şartları
          </h1>

          <div>
            <Section title="1. Kabul">
              <p>
                Palinga platformunu kullanarak bu şartları kabul etmiş sayılırsınız.
                Şartları kabul etmiyorsanız platforma erişmeyiniz.
              </p>
            </Section>

            <Section title="2. Hizmetin Kapsamı">
              <p>
                Palinga, afazi rehabilitasyonu süreçlerini destekleyen bir yazılım
                platformudur. Platform bir tıbbi cihaz değildir; klinik karar desteği
                sağlar. Nihai klinik kararlar her zaman lisanslı bir dil-konuşma
                terapisti tarafından verilmelidir.
              </p>
            </Section>

            <Section title="3. Kullanıcı Yükümlülükleri">
              <ul>
                <li>Hesap bilgilerinizi gizli tutmakla yükümlüsünüz.</li>
                <li>Platforma yetkisiz erişim girişiminde bulunmak yasaktır.</li>
                <li>Sağlık verilerinin doğruluğundan ilgili klinik personeli sorumludur.</li>
                <li>Platform üzerinden yasadışı faaliyette bulunmak yasaktır.</li>
              </ul>
            </Section>

            <Section title="4. Fikri Mülkiyet">
              <p>
                Platform içeriği, tasarımı, yazılımı ve tüm içerikler Palinga Sağlık
                Teknolojileri A.Ş.&apos;ye aittir. İzinsiz kopyalama, dağıtım veya
                ticari kullanım yasaktır.
              </p>
            </Section>

            <Section title="5. Sorumluluk Sınırlaması">
              <p>
                Palinga, platform kullanımından doğabilecek dolaylı zararlardan sorumlu
                tutulamaz. Platform sağlık hizmeti sunmaz; yalnızca klinik süreci
                destekleyen bir yazılım aracıdır.
              </p>
            </Section>

            <Section title="6. Şartların Değiştirilmesi">
              <p>
                Palinga bu şartları önceden bildirmeksizin değiştirme hakkını saklı tutar.
                Değişiklikler platform üzerinde yayınlandığı tarihte yürürlüğe girer.
              </p>
            </Section>

            <Section title="7. Uygulanacak Hukuk">
              <p>
                Bu şartlar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda
                İstanbul mahkemeleri yetkilidir.
              </p>
            </Section>

            <Section title="8. İletişim">
              <p>
                Kullanım şartlarına ilişkin sorularınız için{" "}
                <a href="mailto:hukuk@palinga.com" className="text-primary hover:underline">
                  hukuk@palinga.com
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
