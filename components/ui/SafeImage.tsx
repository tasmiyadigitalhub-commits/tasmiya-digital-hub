"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface SafeImageProps {
  src: StaticImageData | string;
  alt: string;
  fallbackTitle?: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export function SafeImage({
  src,
  alt,
  fallbackTitle,
  className,
  containerClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#24143D] via-[#342056] to-[#4A2E78] p-6 text-center text-[#F8F7FC]",
          containerClassName
        )}
      >
        <ImageOff className="mb-3 h-7 w-7 text-[#9875E8]" aria-hidden="true" />
        <p className="text-sm font-medium text-[#F8F7FC]/90">
          {fallbackTitle || alt}
        </p>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-[#24143D]/10", containerClassName)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={cn("object-cover", className)}
      />
    </div>
  );
}
