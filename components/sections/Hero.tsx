import Image from "next/image";
import { HeroBackground } from "../HeroBackground";
import { Reveal } from "../Reveal";
import { CountUp } from "../CountUp";
import { Kicker } from "../Kicker";
import { WhatsAppIcon } from "../icons";
import { wa, WA_MESSAGES, EXTERNAL } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-base"
    >
      <HeroBackground />

      {/* Grulla decorativa (logo) flotando arriba-derecha */}
      <Image
        src="/assets/logo.png"
        alt=""
        aria-hidden="true"
        width={290}
        height={290}
        className="fmc-crane pointer-events-none absolute right-[5%] top-[12%] z-[1] h-auto w-[clamp(150px,21vw,290px)] opacity-[0.06]"
      />

      <div className="relative z-[2] mx-auto w-full max-w-content px-[clamp(20px,5vw,56px)] pb-20 pt-[120px]">
        <Reveal intro delay={0} className="mb-[26px]">
          <Kicker>Asociación · Miraflores, Lima</Kicker>
        </Reveal>

        <Reveal
          as="h1"
          intro
          delay={0.12}
          className="m-0 max-w-[14ch] text-balance font-display text-[clamp(48px,9vw,128px)] font-normal uppercase leading-[0.92] tracking-[0.005em]"
        >
          Vive el arte
          <br />
          marcial <span className="text-red">chino</span>
        </Reveal>

        <Reveal
          as="p"
          intro
          delay={0.24}
          className="mt-[26px] max-w-[50ch] text-[clamp(16px,1.9vw,21px)] leading-[1.55] text-secondary"
        >
          Arte marcial tradicional y deporte de contacto en un mismo lugar. Únete
          a nuestra asociación y empieza a vivir el Kung Fu de la mano de nuestro
          Maestro Alessandro Paredes.
        </Reveal>

        <Reveal intro delay={0.36} className="mt-[38px] flex flex-wrap gap-[14px]">
          <a
            href={wa(WA_MESSAGES.reservar)}
            {...EXTERNAL}
            className="inline-flex items-center gap-[10px] rounded-[2px] bg-red px-7 py-4 font-label text-[15px] font-semibold uppercase tracking-[0.06em] text-white transition hover:-translate-y-0.5 hover:bg-red-hi"
          >
            <WhatsAppIcon size={19} />
            Reservar por WhatsApp
          </a>
          <a
            href="#modalidades"
            className="inline-flex items-center gap-[10px] rounded-[2px] border-[1.5px] border-[rgba(244,241,234,.28)] px-[26px] py-4 font-label text-[15px] font-medium uppercase tracking-[0.06em] text-cream transition hover:border-gold hover:bg-[rgba(227,178,60,.08)]"
          >
            Conoce las modalidades
          </a>
        </Reveal>

        <Reveal
          intro
          delay={0.48}
          className="mt-[clamp(48px,7vw,76px)] flex flex-wrap gap-[clamp(24px,5vw,64px)]"
        >
          <div>
            <div className="font-display text-[clamp(34px,5vw,52px)] leading-none text-gold">
              <CountUp to={10} />+
            </div>
            <div className="mt-2 font-label text-[12px] uppercase tracking-[0.18em] text-dim">
              Años formando
            </div>
          </div>
          <div className="w-px self-stretch bg-line-14" />
          <div>
            <div className="font-display text-[clamp(34px,5vw,52px)] leading-none text-gold">
              3
            </div>
            <div className="mt-2 font-label text-[12px] uppercase tracking-[0.18em] text-dim">
              Modalidades + 2 programas
            </div>
          </div>
          <div className="w-px self-stretch bg-line-14" />
          <div>
            <div className="font-display text-[clamp(34px,5vw,52px)] leading-none text-gold">
              ★
            </div>
            <div className="mt-2 font-label text-[12px] uppercase tracking-[0.18em] text-dim">
              Reconocidos por el Congreso del Perú
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-[26px] left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-2 text-dim">
        <span className="font-label text-[10px] uppercase tracking-[0.3em]">
          Desliza
        </span>
        <span className="h-[34px] w-px bg-[linear-gradient(#e3b23c,transparent)]" />
      </div>
    </section>
  );
}
