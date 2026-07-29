"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export default function SmoothScroller({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2, // Scroll animation duration in seconds
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration for high-end feel
        smoothWheel: true,
        syncTouch: false, // Keep native feel on touch devices to avoid lagging/stuttering
        wheelMultiplier: 1.0, // Wheel sensitivity multiplier
        touchMultiplier: 1.5, // Touch sensitivity multiplier
      }}
    >
      {children}
    </ReactLenis>
  );
}
