import Image from "next/image";
import { LINKS, PHONE_DISPLAY, wa, EXTERNAL } from "@/lib/site";

const COLUMNS = [
  {
    title: "Disciplinas",
    links: [
      { label: "Tai Chi Chuan", href: "#modalidades" },
      { label: "Sanda", href: "#modalidades" },
      { label: "Taolu", href: "#modalidades" },
    ],
  },
  {
    title: "Programas",
    links: [
      { label: "PAMVA", href: "#programas" },
      { label: "El Arte de Luchar", href: "#programas" },
      { label: "Precios", href: "#precios" },
      { label: "Tienda oficial", href: "#tienda" },
    ],
  },
];

const LINK_CLASS = "block text-[14px] text-dim transition-colors hover:text-white";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(244,241,234,.08)] bg-footer px-[clamp(20px,5vw,56px)] pb-9 pt-[clamp(44px,6vw,72px)]">
      <div className="mx-auto flex max-w-content flex-wrap items-start justify-between gap-[30px]">
        <div className="max-w-[340px]">
          <div className="mb-4 flex items-center gap-[13px]">
            <Image
              src="/assets/logo.png"
              alt="Fa Meng Chuen"
              width={46}
              height={46}
              className="h-[46px] w-[46px] shrink-0 object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[18px] tracking-[0.06em]">
                FA MENG CHUEN
              </span>
              <span className="mt-[3px] font-label text-[9px] tracking-[0.4em] text-dim">
                ASOCIACIÓN · KUNG FU · WUSHU
              </span>
            </span>
          </div>
          <p className="m-0 text-[13.5px] leading-[1.6] text-dimmer">
            Arte marcial tradicional chino · Deportes de contacto · Cultura
            oriental. Cuerpo, mente y espíritu en armonía.
          </p>
        </div>

        <div className="flex flex-wrap gap-[clamp(36px,6vw,72px)]">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="mb-[14px] font-label text-[11px] uppercase tracking-[0.18em] text-gold">
                {col.title}
              </div>
              <div className="flex flex-col gap-[9px]">
                {col.links.map((link) => (
                  <a key={link.label} href={link.href} className={LINK_CLASS}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div>
            <div className="mb-[14px] font-label text-[11px] uppercase tracking-[0.18em] text-gold">
              Contacto
            </div>
            <div className="flex flex-col gap-[9px]">
              <a href={wa()} {...EXTERNAL} className={LINK_CLASS}>
                {PHONE_DISPLAY}
              </a>
              <a href={LINKS.instagram} {...EXTERNAL} className={LINK_CLASS}>
                Instagram
              </a>
              <a href={LINKS.facebook} {...EXTERNAL} className={LINK_CLASS}>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-9 flex max-w-content flex-wrap justify-between gap-3 border-t border-[rgba(244,241,234,.08)] pt-6 text-[12.5px] text-faint">
        <span>© 2026 Asociación Fa Meng Chuen · Miraflores, Lima — Perú</span>
        <span>武術之道 · El camino del arte marcial</span>
      </div>
    </footer>
  );
}
