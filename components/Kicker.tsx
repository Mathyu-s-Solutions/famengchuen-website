/**
 * Etiqueta "kicker" repetida en cada sección:
 *   [barra roja 34×2]  LABEL EN OSWALD DORADO  ([barra] opcional a la derecha)
 */
export function Kicker({
  children,
  both = false,
  className = "",
}: {
  children: React.ReactNode;
  /** Muestra una segunda barra a la derecha (cabeceras centradas). */
  both?: boolean;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span className="h-0.5 w-[34px] shrink-0 bg-red" />
      <span className="font-label text-[12.5px] uppercase tracking-[0.34em] text-gold">
        {children}
      </span>
      {both && <span className="h-0.5 w-[34px] shrink-0 bg-red" />}
    </div>
  );
}
