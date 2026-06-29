"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

type Phase = "intro" | "exit" | "done";

/**
 * Pantalla de carga: logo → nombre → barra de progreso → subtítulo, y al
 * terminar sube (yPercent:-100) revelando el hero. Avisa con `onDone()` en el
 * momento en que empieza a levantarse para encadenar la entrada del hero.
 * Respeta prefers-reduced-motion (se oculta sin animación).
 */
export function Loader({ onDone }: { onDone: () => void }) {
  const reduce = usePrefersReducedMotion();
  const [phase, setPhase] = useState<Phase>("intro");

  useEffect(() => {
    // Sin movimiento: no se muestra el loader; sólo revelamos el contenido.
    if (reduce) {
      onDone();
      return;
    }
    // setPhase dentro del timeout (callback async) no dispara render en cascada.
    const t = setTimeout(() => {
      setPhase("exit");
      onDone();
    }, 2300);
    return () => clearTimeout(t);
  }, [reduce, onDone]);

  if (reduce || phase === "done") return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-200 flex flex-col items-center justify-center gap-6 bg-base"
      initial={{ y: 0 }}
      animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (phase === "exit") setPhase("done");
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.82, rotate: -12 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Image
          src="/assets/logo.png"
          alt="Fa Meng Chuen"
          width={150}
          height={150}
          priority
          className="h-auto w-[clamp(112px,16vw,150px)]"
        />
      </motion.div>

      <div className="overflow-hidden py-0.5">
        <motion.div
          className="font-display text-[clamp(22px,4.4vw,36px)] uppercase leading-none tracking-[0.16em] text-cream"
          initial={{ y: "120%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
        >
          FA MENG CHUEN
        </motion.div>
      </div>

      <div className="h-0.5 w-[min(220px,52vw)] overflow-hidden bg-line-14">
        <motion.div
          className="h-full w-full origin-left"
          style={{ background: "linear-gradient(90deg,#d81f26,#e3b23c)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.0, delay: 0.7, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="font-label text-[11px] uppercase tracking-[0.4em] text-dim"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.95 }}
      >
        Kung Fu · Wushu
      </motion.div>
    </motion.div>
  );
}
