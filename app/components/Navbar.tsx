"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

const navLinks = [
  { label: "Vizyon", href: "#vizyon" },
  { label: "Platform", href: "#platform" },
  { label: "Klinikler", href: "#kimler-kullanir" },
  { label: "Haberler", href: "#haberler" },
  { label: "Hakkımızda", href: "#hakkimizda" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-parchment/90 backdrop-blur-md border-b border-hairline"
          : "bg-parchment/90 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-[980px] mx-auto px-6 h-[52px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Palinga"
            width={28}
            height={28}
            className="object-contain"
          />
          <span className="text-[17px] font-semibold text-ink tracking-tight">
            Palinga
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[12px] font-normal text-ink-muted hover:text-ink transition-colors duration-150 tracking-[-0.12px]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="#demo"
            className="text-[12px] font-normal text-ink-muted hover:text-ink transition-colors tracking-[-0.12px]"
          >
            Giriş Yap
          </a>
          <Button variant="primary" className="!text-[14px] !px-[18px] !py-[7px]">
            <a href="#demo">Demo Talep Et</a>
          </Button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-ink"
          aria-label="Menü"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-parchment border-t border-hairline px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[17px] text-ink py-2 border-b border-hairline last:border-0"
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" className="w-full mt-2 justify-center !text-[15px]">
            <a href="#demo">Demo Talep Et</a>
          </Button>
        </div>
      )}
    </header>
  );
}
