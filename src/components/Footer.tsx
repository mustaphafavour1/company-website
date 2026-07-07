export default function Footer() {
  return (
    <footer className="border-t border-guanabana/10 bg-ember-black py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-[4%] text-center">
        <p className="font-display text-lg text-guanabana">
          Tierra D&apos; Acogida SL
        </p>
        <p className="font-label text-xs uppercase tracking-widest text-guanabana-dim">
          Authentic Cuban Terroir — Havana ⇄ Europe
        </p>
        <p className="mt-4 text-xs text-guanabana-dim/70">
          © {new Date().getFullYear()} Tierra D&apos; Acogida SL. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
