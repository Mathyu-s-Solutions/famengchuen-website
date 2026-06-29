"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Detecta `prefers-reduced-motion: reduce` con `useSyncExternalStore`, que lee
 * el valor INICIAL del media query (snapshot) además de suscribirse a cambios.
 * El hook equivalente de `motion` puede perder el estado inicial cuando la
 * preferencia ya está activa antes de montar, dejando contenido animado oculto.
 * En el servidor devuelve `false` (coincide con el render de hidratación).
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
