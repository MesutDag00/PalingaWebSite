"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "./ui/Button";
import FadeIn from "./ui/FadeIn";
import { CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  institution: string;
  email: string;
  phone: string;
}

// ─── İÇERİK PLACEHOLDER — Güncelle ─────────────────────────────────────────
const DEMO_HEADLINE = "Kliniğiniz için hazırlayalım.";
const DEMO_TAGLINE = "30 dakikalık özelleştirilmiş bir demo ile platformu kendi klinik süreçlerinizde keşfedin.";
// ────────────────────────────────────────────────────────────────────────────

export default function DemoForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log("Demo talebi:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="demo" className="bg-tile-dark py-28">
      <div className="max-w-[560px] mx-auto px-6 text-center">
        <FadeIn>
          <p className="text-[12px] font-normal text-ink-muted-dark tracking-[-0.12px] uppercase mb-6">
            Demo Talep Et
          </p>
          <h2 className="text-ink-on-dark mb-4">
            {DEMO_HEADLINE}
          </h2>
          <p className="text-ink-muted-dark text-[17px] leading-[1.47] mb-12">
            {DEMO_TAGLINE}
          </p>
        </FadeIn>

        {submitted ? (
          <FadeIn>
            <div className="text-center py-8">
              <CheckCircle2 size={36} className="text-ink-on-dark mx-auto mb-4 opacity-60" />
              <h3 className="text-ink-on-dark text-[21px] font-semibold mb-2">Talebiniz Alındı</h3>
              <p className="text-ink-muted-dark text-[17px]">
                Ekibimiz 4 saat içinde sizinle iletişime geçecek.
              </p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Ad Soyad"
                    className="w-full bg-[#2d2d2f] border border-[#3d3d3f] rounded-[10px] px-4 py-3 text-ink-on-dark placeholder-[#6e6e73] text-[17px] focus:outline-none focus:border-[#555] transition-colors"
                  />
                  {errors.name && <p className="text-red-400 text-[12px] mt-1">Zorunlu</p>}
                </div>
                <div>
                  <input
                    {...register("institution", { required: true })}
                    placeholder="Klinik / Kurum"
                    className="w-full bg-[#2d2d2f] border border-[#3d3d3f] rounded-[10px] px-4 py-3 text-ink-on-dark placeholder-[#6e6e73] text-[17px] focus:outline-none focus:border-[#555] transition-colors"
                  />
                  {errors.institution && <p className="text-red-400 text-[12px] mt-1">Zorunlu</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    type="email"
                    placeholder="E-posta"
                    className="w-full bg-[#2d2d2f] border border-[#3d3d3f] rounded-[10px] px-4 py-3 text-ink-on-dark placeholder-[#6e6e73] text-[17px] focus:outline-none focus:border-[#555] transition-colors"
                  />
                  {errors.email && <p className="text-red-400 text-[12px] mt-1">Geçerli e-posta girin</p>}
                </div>
                <div>
                  <input
                    {...register("phone", { required: true })}
                    type="tel"
                    placeholder="Telefon"
                    className="w-full bg-[#2d2d2f] border border-[#3d3d3f] rounded-[10px] px-4 py-3 text-ink-on-dark placeholder-[#6e6e73] text-[17px] focus:outline-none focus:border-[#555] transition-colors"
                  />
                  {errors.phone && <p className="text-red-400 text-[12px] mt-1">Zorunlu</p>}
                </div>
              </div>
              <div className="pt-3 text-center">
                <Button type="submit" variant="primary" className="!px-[32px] !py-[14px] !text-[17px]">
                  Demo Talep Et
                </Button>
              </div>
              <p className="text-center text-[12px] text-ink-muted-dark pt-2 tracking-[-0.012px]">
                Bilgileriniz gizli tutulur · KVKK kapsamında işlenir
              </p>
            </form>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
