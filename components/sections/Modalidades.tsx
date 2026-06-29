import Image from "next/image";
import { Reveal } from "../Reveal";
import { Kicker } from "../Kicker";

const MODALIDADES = [
  {
    img: "/assets/taichi.jpg",
    position: "center 30%",
    kicker: "Equilibrio · Energía · Bienestar",
    title: "Tai Chi Chuan",
    text: "Movimiento lento y consciente que cultiva salud, respiración y calma. Para todas las edades y niveles.",
    gradient:
      "linear-gradient(to top,#08080a 12%,rgba(8,8,10,.35) 55%,rgba(8,8,10,.55))",
  },
  {
    img: "/assets/sanda.jpg",
    position: "center 25%",
    kicker: "Combate · Disciplina · Control",
    title: "Sanda",
    text: "El boxeo del Kung Fu: golpes, patadas y derribos. Deporte de contacto que forja reflejos, carácter y confianza.",
    gradient:
      "linear-gradient(to top,#08080a 12%,rgba(8,8,10,.3) 55%,rgba(8,8,10,.5))",
  },
  {
    img: "/assets/taolu.jpg",
    position: "center 28%",
    kicker: "Formas · Técnica · Tradición",
    title: "Taolu",
    text: "Rutinas tradicionales y modernas, a mano vacía y con armas. La esencia técnica y estética del Wushu.",
    gradient:
      "linear-gradient(to top,#08080a 12%,rgba(8,8,10,.4) 55%,rgba(8,8,10,.55))",
  },
];

export function Modalidades() {
  return (
    <section
      id="modalidades"
      className="bg-alt px-[clamp(20px,5vw,56px)] py-[clamp(72px,9vw,128px)]"
    >
      <div className="mx-auto max-w-content">
        <Reveal className="mb-[clamp(40px,5vw,64px)] flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker className="mb-4">Lo que entrenamos</Kicker>
            <h2 className="m-0 font-display text-[clamp(36px,5.5vw,68px)] font-normal uppercase leading-[0.95] tracking-[0.01em]">
              Tres caminos,
              <br />
              una misma raíz
            </h2>
          </div>
          <p className="m-0 max-w-[38ch] text-[16.5px] leading-[1.6] text-muted">
            Del movimiento sereno del Tai Chi al combate del Sanda. Elige tu
            disciplina o practícalas todas: cuerpo, mente y espíritu en armonía.
          </p>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[18px]">
          {MODALIDADES.map((m, i) => (
            <Reveal
              key={m.title}
              as="article"
              delay={i * 0.08}
              className="group relative h-[480px] overflow-hidden rounded-[3px] border border-line"
            >
              <Image
                src={m.img}
                alt={m.title}
                fill
                sizes="(max-width: 900px) 100vw, 380px"
                style={{ objectPosition: m.position }}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0" style={{ background: m.gradient }} />
              <div className="absolute inset-x-0 bottom-0 px-[26px] pb-7 pt-7">
                <div className="font-label text-[11.5px] uppercase tracking-[0.22em] text-gold">
                  {m.kicker}
                </div>
                <h3 className="mb-[10px] mt-2 font-display text-[34px] font-normal uppercase tracking-[0.01em]">
                  {m.title}
                </h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-secondary">
                  {m.text}
                </p>
              </div>
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-red transition-[width] duration-500 ease-out group-hover:w-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
