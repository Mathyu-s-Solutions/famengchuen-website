import Image from "next/image";
import { Reveal } from "../Reveal";
import { Kicker } from "../Kicker";
import { WhatsAppIcon } from "../icons";
import { wa, WA_MESSAGES, EXTERNAL } from "@/lib/site";

type Product = {
  img: string;
  alt: string;
  title: string;
  detail: string;
  price: string;
  note: React.ReactNode;
  href: string;
};

const PRODUCTS: Product[] = [
  {
    img: "/assets/merch-polos.jpg",
    alt: "Polos oficiales Fa Meng Chuen",
    title: "Polos oficiales",
    detail: "Algodón · Blanco y negro · Tallas S·M·L",
    price: "28",
    note: (
      <>
        Regular <span className="line-through">S/30</span>
      </>
    ),
    href: wa(WA_MESSAGES.polo),
  },
  {
    img: "/assets/merch-casacas.jpg",
    alt: "Casacas oficiales Fa Meng Chuen",
    title: "Casacas oficiales",
    detail: "Impermeable · Malla interior · Tallas S·M·L",
    price: "90",
    note: "Preventa",
    href: wa(WA_MESSAGES.casaca),
  },
];

function MerchCard({ product, delay }: { product: Product; delay: number }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-[3px] border border-line bg-surface"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-black">
        <Image
          src={product.img}
          alt={product.alt}
          fill
          sizes="(max-width: 900px) 100vw, 580px"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 rounded-[2px] bg-red px-3 py-[6px] font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
          Preventa
        </span>
      </div>
      <div className="flex flex-1 flex-col px-[26px] pb-7 pt-[26px]">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="mb-[6px] mt-0 font-display text-[28px] font-normal uppercase tracking-[0.01em]">
              {product.title}
            </h3>
            <div className="font-label text-[12.5px] uppercase tracking-[0.06em] text-dim">
              {product.detail}
            </div>
          </div>
          <div className="shrink-0 text-right leading-none">
            <div className="flex items-start justify-end gap-[3px]">
              <span className="mt-[5px] font-label text-[15px] text-sand">S/</span>
              <span className="font-display text-[40px] text-gold">
                {product.price}
              </span>
            </div>
            <div className="mt-1 font-label text-[11px] uppercase tracking-[0.08em] text-dimmer">
              {product.note}
            </div>
          </div>
        </div>
        <a
          href={product.href}
          {...EXTERNAL}
          className="mt-[22px] inline-flex items-center justify-center gap-[10px] rounded-[2px] bg-whatsapp px-[22px] py-[14px] font-label text-[14px] font-semibold uppercase tracking-[0.06em] text-whatsapp-ink transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(37,211,102,.3)]"
        >
          <WhatsAppIcon size={18} />
          Comprar por WhatsApp
        </a>
      </div>
    </Reveal>
  );
}

export function Tienda() {
  return (
    <section
      id="tienda"
      className="relative overflow-hidden bg-base px-[clamp(20px,5vw,56px)] py-[clamp(72px,9vw,128px)]"
    >
      <div className="mx-auto max-w-content">
        <Reveal className="mb-[clamp(40px,5vw,60px)] flex flex-wrap items-end justify-between gap-6">
          <div>
            <Kicker className="mb-4">Tienda oficial</Kicker>
            <h2 className="m-0 font-display text-[clamp(36px,5.5vw,68px)] font-normal uppercase leading-[0.95]">
              Lleva la marca
              <br />
              contigo
            </h2>
          </div>
          <p className="m-0 max-w-[38ch] text-[16.5px] leading-[1.6] text-muted">
            Indumentaria oficial de la Asociación Fa Meng Chuen. Disciplina que
            se viste — escríbenos por WhatsApp para reservar tu talla.
          </p>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {PRODUCTS.map((product, i) => (
            <MerchCard key={product.title} product={product} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
