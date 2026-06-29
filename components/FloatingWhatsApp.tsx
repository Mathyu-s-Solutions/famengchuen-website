import { WhatsAppIcon } from "./icons";
import { wa, WA_MESSAGES, EXTERNAL } from "@/lib/site";

/** Botón flotante de WhatsApp, fijo abajo-derecha, con animación de pulso. */
export function FloatingWhatsApp() {
  return (
    <a
      href={wa(WA_MESSAGES.reservar)}
      {...EXTERNAL}
      aria-label="Reservar por WhatsApp"
      className="fmc-pulse fixed bottom-[22px] right-[22px] z-[55] grid h-[58px] w-[58px] place-items-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_rgba(0,0,0,.4)] transition-transform hover:scale-110"
    >
      <WhatsAppIcon size={30} />
    </a>
  );
}
