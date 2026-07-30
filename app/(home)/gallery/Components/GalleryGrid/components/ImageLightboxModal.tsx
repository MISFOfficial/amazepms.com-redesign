"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImageItem } from "./Content";

interface ImageLightboxModalProps {
  item: GalleryImageItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  item,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--black)]/90 backdrop-blur-md p-4 transition-all duration-300">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-[var(--white)]/20 text-[var(--white)] hover:bg-[var(--secondary)] hover:text-[var(--white)] transition-colors"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[var(--white)]/20 text-[var(--white)] hover:bg-[var(--secondary)] hover:text-[var(--white)] transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[var(--white)]/20 text-[var(--white)] hover:bg-[var(--secondary)] hover:text-[var(--white)] transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Center Image Container */}
      <div className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center space-y-4">
        <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden border border-[var(--white)]/20 shadow-2xl">
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Caption */}
        <div className="text-center space-y-1 max-w-xl">
          <span className="text-xs font-mono font-bold text-[var(--secondary)] uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--white)]/10 border border-[var(--white)]/20 inline-block mb-1 text-[var(--white)]">
            {item.category}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[var(--white)] tracking-tight">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-[var(--white)]/80 font-sans">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageLightboxModal;

