type MarkedPart = {
  text: string;
  mark?: boolean;
};

export function MarkedText({ parts }: { parts: readonly MarkedPart[] }) {
  return parts.map((part, i) =>
    part.mark ? (
      <strong key={i} className="font-semibold text-text-display">
        {part.text}
      </strong>
    ) : (
      <span key={i}>{part.text}</span>
    ),
  );
}
