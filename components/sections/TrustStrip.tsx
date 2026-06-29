const ITEMS = [
  "Congreso de la República del Perú",
  "Deportes UPC",
  "Wushu Tradicional & Moderno",
  "Federación Peruana de Wushu",
];

export function TrustStrip() {
  return (
    <div className="overflow-hidden bg-red text-white">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-center gap-y-[14px] gap-x-[clamp(28px,6vw,72px)] px-[clamp(20px,5vw,56px)] py-5 text-center font-label text-[13px] uppercase tracking-[0.14em]">
        {ITEMS.map((item, i) => (
          <span key={item} className="contents">
            <span>{item}</span>
            {i < ITEMS.length - 1 && <span className="opacity-50">/</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
