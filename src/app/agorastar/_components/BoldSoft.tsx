export default function BoldSoft({
  bold,
  soft,
  className = "",
}: {
  bold: string;
  soft: string;
  className?: string;
}) {
  return (
    <span className={className}>
      <span className="block font-semibold text-cream">{bold}</span>
      <span className="block font-normal text-cream-dim">{soft}</span>
    </span>
  );
}
