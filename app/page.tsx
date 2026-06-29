import { IntroProvider } from "@/components/IntroProvider";
import { Header } from "@/components/Header";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Equipo } from "@/components/sections/Equipo";
import { Modalidades } from "@/components/sections/Modalidades";
import { Programas } from "@/components/sections/Programas";
import { Maestro } from "@/components/sections/Maestro";
import { Comunidad } from "@/components/sections/Comunidad";
import { Precios } from "@/components/sections/Precios";
import { Tienda } from "@/components/sections/Tienda";
import { Contacto } from "@/components/sections/Contacto";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <IntroProvider>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Equipo />
        <Modalidades />
        <Programas />
        <Maestro />
        <Comunidad />
        <Precios />
        <Tienda />
        <Contacto />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </IntroProvider>
  );
}
