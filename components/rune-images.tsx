"use client";

import Image from "next/image";
import { useState } from "react";
import type { CaseImage } from "@/lib/site";

function isAnimated(src: string) {
  return /\.(gif|webp)$/i.test(src);
}

export function RuneImages({ images }: { images: CaseImage[] }) {
  const [active, setActive] = useState(0);
  const current = images[active];
  if (!current) return null;

  return (
    <figure className="mt-[clamp(24px,3vw,34px)] border-t border-border bg-surface-image">
      {images.length > 1 ? (
        <div className="flex gap-1 px-[clamp(24px,3vw,38px)] pt-3">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActive(index)}
              className={`rounded-[3px] px-2.5 py-1 text-[12px] ${
                index === active
                  ? "text-text-display"
                  : "text-text-faint hover:text-text-display"
              }`}
              aria-pressed={index === active}
            >
              {image.label}
            </button>
          ))}
        </div>
      ) : null}
      {isAnimated(current.src) ? (
        // next/image can flatten animated files. Keep the raw loop.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={current.src}
          alt={current.alt}
          width={current.width}
          height={current.height}
          className="block w-full"
        />
      ) : (
        <Image
          src={current.src}
          alt={current.alt}
          width={current.width}
          height={current.height}
          className="block w-full"
        />
      )}
    </figure>
  );
}
