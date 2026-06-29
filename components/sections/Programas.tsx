import Image from "next/image";
import { Reveal } from "../Reveal";
import { Kicker } from "../Kicker";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[2px] border border-[rgba(244,241,234,.18)] px-3 py-[6px] font-label text-[11px] uppercase tracking-[0.1em] text-sand">
      {children}
    </span>
  );
}

export function Programas() {
  return (
    <section
      id="programas"
      className="relative bg-base px-[clamp(20px,5vw,56px)] py-[clamp(72px,9vw,128px)]"
    >
      <div className="mx-auto max-w-content">
        <Reveal className="mb-[clamp(40px,5vw,60px)] text-center">
          <Kicker both className="mb-4">
            Programas especiales
          </Kicker>
          <h2 className="m-0 font-display text-[clamp(36px,5.5vw,68px)] font-normal uppercase leading-[0.95]">
            Más que un deporte
          </h2>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5">
          {/* PAMVA */}
          <Reveal
            as="article"
            className="relative flex flex-col overflow-hidden rounded-[3px] border border-line bg-surface"
          >
            <div className="relative h-[230px] overflow-hidden">
              <Image
                src="/assets/pamva-women.jpg"
                alt="PAMVA — programa para mujeres"
                fill
                sizes="(max-width: 900px) 100vw, 580px"
                className="object-cover object-[center_38%]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top,#141417,rgba(20,20,23,.2) 60%,rgba(20,20,23,.5))",
                }}
              />
              <Image
                src="/assets/pamva.png"
                alt="Logo PAMVA"
                width={118}
                height={118}
                className="absolute -bottom-[26px] right-5 h-[118px] w-[118px] object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,.6)]"
              />
            </div>
            <div className="px-7 pb-8 pt-[30px]">
              <div className="font-label text-[11.5px] uppercase tracking-[0.2em] text-gold">
                Defensa Personal Femenina
              </div>
              <h3 className="mb-[6px] mt-2 font-display text-[30px] font-normal uppercase tracking-[0.01em]">
                PAMVA
              </h3>
              <div className="mb-[14px] text-[13px] italic text-dim">
                Programa de Ayuda a Mujeres Víctimas de Agresión
              </div>
              <p className="mb-[18px] mt-0 text-[15px] leading-[1.6] text-secondary">
                Defensa personal, prevención, asesoría y soporte. Un espacio
                seguro donde toda mujer aprende a protegerse con técnica y
                confianza.
              </p>
              <div className="flex flex-wrap gap-2">
                <Chip>Defensa personal</Chip>
                <Chip>Prevención</Chip>
                <Chip>Asesoría</Chip>
                <Chip>Soporte</Chip>
              </div>
            </div>
          </Reveal>

          {/* El Arte de Luchar */}
          <Reveal
            as="article"
            delay={0.08}
            className="relative flex flex-col overflow-hidden rounded-[3px] border border-line bg-surface"
          >
            <div className="relative grid h-[230px] place-items-center overflow-hidden bg-black">
              <Image
                src="/assets/arte-de-luchar.png"
                alt="El Arte de Luchar"
                width={360}
                height={360}
                className="h-auto w-[88%] max-w-[360px] object-contain"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 40%,transparent 40%,rgba(216,31,38,.12) 100%)",
                }}
              />
            </div>
            <div className="px-7 pb-8 pt-[30px]">
              <div className="font-label text-[11.5px] uppercase tracking-[0.2em] text-gold">
                Artes Marciales Integrales
              </div>
              <h3 className="mb-[6px] mt-2 font-display text-[30px] font-normal uppercase tracking-[0.01em]">
                El Arte de Luchar
              </h3>
              <div className="mb-[14px] text-[13px] italic text-dim">
                con el Maestro Alessandro Paredes
              </div>
              <p className="mb-[18px] mt-0 text-[15px] leading-[1.6] text-secondary">
                Técnica, acondicionamiento y mentalidad de combate. Un programa
                para llevar tu práctica marcial al siguiente nivel, desde el
                primer día.
              </p>
              <div className="flex flex-wrap gap-2">
                <Chip>Técnica</Chip>
                <Chip>Acondicionamiento</Chip>
                <Chip>Mentalidad</Chip>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
