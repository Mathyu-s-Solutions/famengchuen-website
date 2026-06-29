# Asociación Fa Meng Chuen — Web

Landing page de una sola página para la **Asociación Fa Meng Chuen** (escuela de
Kung Fu / Wushu en Miraflores, Lima). Recreación en Next.js del prototipo de
diseño original. La versión estática anterior del sitio se conserva en la rama
[`legacy-static-site`](../../tree/legacy-static-site).

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — los design tokens (colores, fuentes, espaciados) viven en
  [`app/globals.css`](app/globals.css) dentro de `@theme`.
- **next/font** — Anton (display), Oswald (labels), Barlow (cuerpo).
- **next/image** — todas las fotos se optimizan (sharp).
- **motion** (Framer Motion) — loader, reveal-on-scroll, count-up y parallax del hero.

## Desarrollo

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Otros comandos:

```bash
pnpm build        # build de producción
pnpm start        # sirve el build de producción
pnpm lint         # eslint
```

> Nota pnpm: la primera instalación pide aprobar los build scripts nativos
> (`sharp`, `unrs-resolver`). Ya están permitidos en
> [`pnpm-workspace.yaml`](pnpm-workspace.yaml).

## Estructura

```
app/
  layout.tsx            Fuentes, metadata/SEO, <html lang="es">
  page.tsx              Ensambla todas las secciones dentro de <IntroProvider>
  globals.css           Tailwind + design tokens (@theme) + keyframes
  icon.png              Favicon
components/
  IntroProvider.tsx     Coordina loader → entrada del hero (context introDone)
  Loader.tsx            Intro a pantalla completa (respeta reduced-motion)
  Header.tsx            Header fijo (condensa al hacer scroll) + menú móvil (<900px)
  Reveal.tsx            Wrapper de animación (scroll / intro)
  CountUp.tsx           Contador animado de los stats del hero
  Kicker.tsx            Etiqueta "barra roja + label dorado" reutilizable
  HeroBackground.tsx    Fondo del hero con parallax
  FloatingWhatsApp.tsx  Botón flotante de WhatsApp
  icons.tsx             SVGs inline (WhatsApp, ubicación, teléfono, etc.)
  usePrefersReducedMotion.ts
  sections/             Una sección por archivo (Hero, Modalidades, Precios, …)
lib/
  site.ts               Teléfono, redes y mensajes pre-rellenados de WhatsApp
public/assets/          Fotos y logos (copiados del prototipo)
```

## Notas de implementación

- **WhatsApp es el CTA principal.** Todos los botones de acción abren
  `wa.me/51963341350` con un mensaje pre-escrito; los enlaces y mensajes están
  centralizados en [`lib/site.ts`](lib/site.ts).
- **Accesibilidad:** se respeta `prefers-reduced-motion` (sin loader ni
  animaciones; el contenido se muestra directamente). El hook propio
  `usePrefersReducedMotion` lee el valor inicial del media query para no dejar
  contenido oculto.
- **Sin backend.** Sitio estático (`output: static`); todo el contenido se
  prerenderiza.
