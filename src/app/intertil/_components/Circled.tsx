export default function Circled({ children }: { children: string }) {
  return (
    <span className="relative inline-block px-2">
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="absolute inset-x-0 -inset-y-1 -z-0 rounded-full border-2 border-wheat"
        style={{ transform: "rotate(-1.5deg)" }}
      />
    </span>
  );
}
