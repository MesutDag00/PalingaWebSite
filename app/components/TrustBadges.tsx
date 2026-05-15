import FadeIn from "./ui/FadeIn";
import { ShieldCheck, Lock, FlaskConical, Activity } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "KVKK Uyumlu" },
  { icon: Lock, label: "Kurumsal Veri İzolasyonu" },
  { icon: FlaskConical, label: "Kanıt Temelli Protokoller" },
  { icon: Activity, label: "7/24 Sistem İzleme" },
];

export default function TrustBadges() {
  return (
    <section className="bg-surface py-12 border-y border-border-line">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {badges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2.5 text-sm font-medium text-mid"
              >
                <b.icon size={17} className="text-ink opacity-70" />
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
