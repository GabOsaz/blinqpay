export function QtyBtn({
  text,
  className,
  onClick,
}: {
  text: string;
  className?: string;
  onClick: () => void;
}) {
  return (
    <button type="button" onClick={onClick} className={`border border-gray-400 px-1.5 rounded-md ${className}`}>
      {text}
    </button>
  );
}

export function Th({ text, className }: { text: string; className?: string }) {
  return (
    <th className={`text-start uppercase w-full ${className}`}>
      {text}
    </th>
  );
}
