import Image from "next/image";
import { Reveal } from "../Reveal";
import { Kicker } from "../Kicker";

const CREDENTIALS = [
  {
    title: "Actual entrenador de la Selección de Wushu Sanda",
    sub: "Universidad Peruana de Ciencias Aplicadas (UPC)",
  },
  {
    title: "Multicampeón en Kung Fu, Sanda y Tai Chi",
    sub: "Trayectoria competitiva nacional e internacional",
  },
  {
    title: "Fundador del programa PAMVA",
    sub: "Defensa personal para mujeres",
  },
  {
    title: "Ex instructor de la Escuela de Suboficiales de la PNP",
    sub: "y programas de capacitación con el MINSA",
  },
];

export function Maestro() {
  return (
    <section
      id="maestro"
      className="relative overflow-hidden bg-alt px-[clamp(20px,5vw,56px)] py-[clamp(72px,9vw,128px)]"
    >
      <Image
        src="/assets/logo.png"
        alt=""
        aria-hidden="true"
        width={330}
        height={330}
        className="fmc-crane fmc-crane--slow pointer-events-none absolute -bottom-[50px] -left-[50px] z-0 h-auto w-[clamp(170px,26vw,330px)] opacity-[0.05]"
      />

      <div className="relative mx-auto grid max-w-content grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-[clamp(36px,5vw,64px)]">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[3px] border border-line-12">
            <Image
              src="/assets/coach2.jpg"
              alt="Maestro Alessandro Paredes"
              width={900}
              height={1200}
              sizes="(max-width: 1180px) 100vw, 560px"
              className="block h-[clamp(380px,52vw,560px)] w-full object-cover object-[center_20%]"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top,rgba(10,10,11,.6),transparent 45%)",
              }}
            />
          </div>
          <div className="absolute inset-x-[18px] bottom-[18px] flex items-center gap-[14px] rounded-[3px] border border-[rgba(227,178,60,.3)] bg-[rgba(10,10,11,.82)] p-4 backdrop-blur-[6px]">
            <Image
              src="/assets/congreso.jpg"
              alt="Reconocimiento del Congreso"
              width={58}
              height={58}
              className="h-[58px] w-[58px] shrink-0 rounded-[2px] object-cover"
            />
            <div>
              <div className="font-label text-[10.5px] uppercase tracking-[0.16em] text-gold">
                Reconocimiento oficial
              </div>
              <div className="mt-[3px] text-[13.5px] leading-[1.4] text-cream-2">
                Congreso de la República del Perú — 02/06/2021
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <Kicker className="mb-[18px]">El Maestro</Kicker>
          <h2 className="m-0 font-display text-[clamp(34px,5vw,60px)] font-normal uppercase leading-[0.95]">
            Alessandro
            <br />
            Paredes
          </h2>
          <div className="mt-[14px] font-label text-[14px] tracking-[0.04em] text-gold">
            Director de Fa Meng Chuen · Maestro Faja Negra 3.
            <sup className="text-[0.7em]">er</sup> Tuan
          </div>
          <p className="mb-[26px] mt-[18px] max-w-[50ch] text-[17px] leading-[1.6] text-secondary">
            Maestro de Kung Fu, Wushu y Tai Chi, multicampeón en Kung Fu, Sanda y
            Tai Chi. Ha dedicado su vida a formar atletas, instructores y
            practicantes, impulsando el desarrollo del Wushu en el Perú con
            excelencia técnica, disciplina y respeto.
          </p>

          <ul className="m-0 flex list-none flex-col p-0">
            {CREDENTIALS.map((c, i) => (
              <li
                key={c.title}
                className={`flex gap-4 border-t border-line-12 py-[15px] ${
                  i === CREDENTIALS.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="mt-[7px] h-[9px] w-[9px] shrink-0 rotate-45 bg-red" />
                <div>
                  <div className="font-label text-[15px] tracking-[0.02em] text-cream">
                    {c.title}
                  </div>
                  <div className="mt-[2px] text-[14px] text-dim">{c.sub}</div>
                </div>
              </li>
            ))}
          </ul>

          <p className="mb-0 mt-[22px] max-w-[50ch] text-[15px] leading-[1.6] text-muted">
            Hoy lidera la formación de niños, jóvenes y adultos bajo la filosofía
            de Fa Meng Chuen: una enseñanza moderna e inclusiva que forma no solo
            competidores, sino personas con valores y liderazgo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
