import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const columns: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Ürün Mimarisi", href: "#urun-mimarisi" },
      { label: "Klinik Temel", href: "#klinik-temel" },
      { label: "Güvenlik", href: "#guvenlik" },
      { label: "Sayılarla Platform", href: "#sayilar" },
    ],
  },
  {
    title: "Çözümler",
    links: [
      { label: "Klinikler İçin", href: "/klinikler" },
      { label: "Terapistler İçin", href: "/terapistler" },
      { label: "Hastalar İçin", href: "/hastalar" },
      { label: "Demo Talep Et", href: "#demo" },
    ],
  },
  {
    title: "Şirket",
    links: [
      { label: "Hakkımızda", href: "#ekip" },
      { label: "İletişim", href: "#demo" },
      { label: "Aphasia Reverbis", href: "#urun-mimarisi" },
    ],
  },
  {
    title: "Destek",
    links: [
      { label: "KVKK Aydınlatma", href: "/kvkk" },
      { label: "Gizlilik Politikası", href: "/gizlilik" },
      { label: "Kullanım Şartları", href: "/kullanim-sartlari" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-parchment border-t border-hairline">
      <div className="max-w-[980px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Palinga"
                width={28}
                height={28}
                className="object-contain"
              />
              <span className="font-semibold text-[17px] tracking-[-0.022em] text-ink">Palinga</span>
            </div>
            <p className="text-[14px] text-ink-muted leading-[1.57]">
              Rehabilitasyon süreçlerini dijitalleştiren sağlık teknolojisi platformu.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.08em] text-ink mb-4">
                {col.title}
              </h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label} style={{ lineHeight: 2.4 }}>
                    <a
                      href={link.href}
                      className="text-[15px] font-normal text-ink-muted hover:text-ink transition-colors duration-150 tracking-[-0.022em]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-ink-muted">
          <span>© {new Date().getFullYear()} Palinga Sağlık Teknolojileri. Tüm hakları saklıdır.</span>
          <div className="flex items-center gap-5">
            <a href="/kvkk" className="hover:text-ink transition-colors">KVKK</a>
            <a href="/gizlilik" className="hover:text-ink transition-colors">Gizlilik Politikası</a>
            <a href="/kullanim-sartlari" className="hover:text-ink transition-colors">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
