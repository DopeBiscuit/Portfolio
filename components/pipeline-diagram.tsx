import { site } from "@/lib/site";

export function PipelineDiagram() {
  const { inputs, processor, output, label } = site.hero.diagram;

  return (
    <div className="relative flex min-h-[300px] items-center justify-center">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 64% 45%, var(--brass-glow), transparent 70%)",
        }}
      />
      <svg
        viewBox="0 0 420 300"
        className="relative h-auto w-full max-w-[460px]"
        fill="none"
        strokeLinecap="round"
        role="img"
        aria-label={label}
      >
        <g stroke="#262d34" strokeWidth="1.5">
          <rect x="18" y="44" width="104" height="34" rx="3" />
          <rect x="18" y="96" width="104" height="34" rx="3" />
          <rect x="18" y="148" width="104" height="34" rx="3" />
          <rect x="18" y="200" width="104" height="34" rx="3" />
        </g>
        <g stroke="#3a434b" strokeWidth="1.5" strokeDasharray="5 7" data-flow="">
          <path d="M122 61 C 160 61, 168 150, 184 150" />
          <path d="M122 113 C 156 113, 168 150, 184 150" />
          <path d="M122 165 C 156 165, 168 150, 184 150" />
          <path d="M122 217 C 160 217, 168 150, 184 150" />
        </g>
        <g fill="#7f8891">
          <rect x="30" y="57" width="7" height="7" data-node="" />
          <rect
            x="30"
            y="109"
            width="7"
            height="7"
            data-node=""
            style={{ animationDelay: "0.5s" }}
          />
          <rect
            x="30"
            y="161"
            width="7"
            height="7"
            data-node=""
            style={{ animationDelay: "1s" }}
          />
          <rect
            x="30"
            y="213"
            width="7"
            height="7"
            data-node=""
            style={{ animationDelay: "1.5s" }}
          />
        </g>
        <g fill="#9aa1a8" fontFamily="var(--font-ui)" fontSize="11.5">
          {inputs.map((input, i) => (
            <text key={input} x="46" y={65 + i * 52}>
              {input}
            </text>
          ))}
        </g>
        <rect
          x="184"
          y="126"
          width="92"
          height="48"
          rx="3"
          fill="var(--brass-wash)"
          stroke="var(--brass)"
          strokeWidth="1.5"
        />
        <text
          x="230"
          y="155"
          fill="var(--brass)"
          fontFamily="var(--font-ui)"
          fontSize="12.5"
          fontWeight="600"
          textAnchor="middle"
        >
          {processor}
        </text>
        <path
          d="M276 150 L 312 150"
          stroke="var(--brass)"
          strokeWidth="2"
          strokeDasharray="4 8"
          data-flow="out"
        />
        <rect
          x="312"
          y="126"
          width="92"
          height="48"
          rx="3"
          fill="var(--brass-wash-2)"
          stroke="var(--brass)"
          strokeWidth="1.5"
        />
        <text
          x="358"
          y="155"
          fill="var(--brass-hover)"
          fontFamily="var(--font-ui)"
          fontSize="12.5"
          fontWeight="600"
          textAnchor="middle"
        >
          {output}
        </text>
      </svg>
    </div>
  );
}
