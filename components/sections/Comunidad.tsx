import Image from "next/image";
import { Reveal } from "../Reveal";
import { Kicker } from "../Kicker";

const VALORES = [
  { title: "Disciplina", sub: "Cuerpo y mente" },
  { title: "Respeto", sub: "Al maestro y al rival" },
  { title: "Constancia", sub: "Día a día" },
  { title: "Comunidad", sub: "Entrenamos juntos" },
];

export function Comunidad() {
  return (
    <section id="comunidad" className="relative">
      <div className="relative flex min-h-[clamp(420px,56vw,620px)] items-center overflow-hidden">
        <Image
          src="/assets/team.jpg"
          alt="Comunidad Fa Meng Chuen"
          fill
          sizes="100vw"
          className="object-cover object-[center_30%] opacity-[0.34]"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(120deg,#0a0a0b 25%,rgba(10,10,11,.7) 70%)",
          }}
        />
        <Reveal className="relative z-[2] mx-auto w-full max-w-content px-[clamp(20px,5vw,56px)] py-[clamp(60px,8vw,110px)]">
          <Kicker className="mb-[18px]">Nuestra escuela</Kicker>
          <h2 className="m-0 max-w-[18ch] font-display text-[clamp(32px,5vw,62px)] font-normal uppercase leading-[0.98]">
            Una familia que entrena, crece y compite junta
          </h2>
          <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.65] text-secondary">
            La Asociación Fa Meng Chuen practica, orienta, fomenta y difunde las
            artes marciales chinas en todas sus modalidades —Wushu Moderno y
            Tradicional, Kung Fu— como deporte base para el desarrollo integral
            del ser humano. Aquí no solo aprendes a luchar: aprendes a vivir con
            disciplina, respeto y propósito.
          </p>

          <div className="mt-[38px] grid max-w-[720px] grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-[14px]">
            {VALORES.map((v) => (
              <div key={v.title} className="border-l-2 border-red py-1 pl-4">
                <div className="font-label text-[17px] uppercase tracking-[0.06em] text-cream">
                  {v.title}
                </div>
                <div className="mt-1 text-[13.5px] text-dim">{v.sub}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
