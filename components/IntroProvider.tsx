"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Loader } from "./Loader";

/**
 * Coordina la secuencia de intro: el Loader cubre la pantalla, y cuando termina
 * (o el usuario prefiere menos movimiento) marca `introDone = true`. Las
 * animaciones del hero (Reveal con `intro`) esperan esta señal para entrar
 * justo cuando el loader se levanta, igual que en el prototipo (GSAP timeline).
 */
const IntroContext = createContext<{ introDone: boolean }>({ introDone: false });

export function useIntro() {
  return useContext(IntroContext);
}

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [introDone, setIntroDone] = useState(false);
  const handleDone = useCallback(() => setIntroDone(true), []);

  // Failsafe: pase lo que pase con el loader, el contenido nunca queda oculto.
  useEffect(() => {
    const t = setTimeout(handleDone, 4500);
    return () => clearTimeout(t);
  }, [handleDone]);

  return (
    <IntroContext.Provider value={{ introDone }}>
      <Loader onDone={handleDone} />
      {children}
    </IntroContext.Provider>
  );
}
