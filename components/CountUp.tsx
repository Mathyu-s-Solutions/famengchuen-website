"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { useIntro } from "./IntroProvider";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * Cuenta de 0 hasta `to` con easing cubic-out (~1.1s), igual que el count-up del
 * prototipo. Arranca cuando el elemento entra en viewport y la intro terminó.
 */
export function CountUp({
  to,
  duration = 1100,
  className,
}: {
  to: number;
  duration?: number;
  className?: string;
}) {
  const reduce = usePrefersReducedMotion();
  const { introDone } = useIntro();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    // Sin movimiento: se muestra el valor final directamente en el render.
    if (reduce || !inView || !introDone) return;

    let raf = 0;
    let start: number | null = null;
    const step = (now: number) => {
      if (start === null) start = now;
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, introDone, reduce, to, duration]);

  return (
    <span ref={ref} className={className}>
      {reduce ? to : value}
    </span>
  );
}
