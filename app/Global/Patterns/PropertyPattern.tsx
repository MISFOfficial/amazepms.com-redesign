"use client";

import React from "react";

export interface PropertyPatternProps {
  variant?: "blueprint" | "construction" | "skyscraper" | "grid" | "dots";
  className?: string;
  opacity?: number;
  colorClass?: string;
}

/**
 * Reusable Global Property & Construction Pattern Component
 * Represents architectural blueprints, construction scaffolding, tower cranes & structural girders.
 */
export const PropertyPattern: React.FC<PropertyPatternProps> = ({
  variant = "construction",
  className = "",
  opacity = 0.18,
  colorClass = "text-[var(--black)]/30",
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {(variant === "construction" || variant === "blueprint") && (
        <svg
          className={`w-full h-full ${colorClass}`}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="property-construction-pattern"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              {/* Outer Architectural Grid */}
              <rect
                x="0"
                y="0"
                width="120"
                height="120"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />

              {/* Diagonal Structural Steel Truss Bracing */}
              <line
                x1="0"
                y1="0"
                x2="120"
                y2="120"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray="4 2"
              />
              <line
                x1="120"
                y1="0"
                x2="0"
                y2="120"
                stroke="currentColor"
                strokeWidth="0.8"
                strokeDasharray="4 2"
              />

              {/* Building Floor Levels & Pillar Columns */}
              <line
                x1="30"
                y1="0"
                x2="30"
                y2="120"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="60"
                y1="0"
                x2="60"
                y2="120"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="90"
                y1="0"
                x2="90"
                y2="120"
                stroke="currentColor"
                strokeWidth="1"
              />

              <line
                x1="0"
                y1="30"
                x2="120"
                y2="30"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="60"
                x2="120"
                y2="60"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="0"
                y1="90"
                x2="120"
                y2="90"
                stroke="currentColor"
                strokeWidth="1"
              />

              {/* Construction Crane & Scaffolding Lattice Motif */}
              <path
                d="M 30 30 L 60 60 L 90 30 M 30 90 L 60 60 L 90 90"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />

              {/* Architectural Anchor Nodes */}
              <circle cx="60" cy="60" r="3" fill="currentColor" />
              <circle cx="30" cy="30" r="2" fill="currentColor" />
              <circle cx="90" cy="30" r="2" fill="currentColor" />
              <circle cx="30" cy="90" r="2" fill="currentColor" />
              <circle cx="90" cy="90" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#property-construction-pattern)"
          />
        </svg>
      )}

      {variant === "skyscraper" && (
        <svg
          className={`w-full h-full ${colorClass}`}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="property-skyscraper-pattern"
              width="100"
              height="140"
              patternUnits="userSpaceOnUse"
            >
              {/* High-rise Tower Outline */}
              <rect
                x="10"
                y="10"
                width="35"
                height="120"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <rect
                x="55"
                y="30"
                width="35"
                height="100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              {/* Tower Crane Top Boom */}
              <path
                d="M 5 10 L 45 10 M 27 2 L 27 10 M 27 2 L 45 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />

              {/* Window & Beam Grid */}
              <line
                x1="18"
                y1="25"
                x2="37"
                y2="25"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="18"
                y1="45"
                x2="37"
                y2="45"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="18"
                y1="65"
                x2="37"
                y2="65"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="18"
                y1="85"
                x2="37"
                y2="85"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="18"
                y1="105"
                x2="37"
                y2="105"
                stroke="currentColor"
                strokeWidth="1"
              />

              <line
                x1="63"
                y1="50"
                x2="82"
                y2="50"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="63"
                y1="70"
                x2="82"
                y2="70"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="63"
                y1="90"
                x2="82"
                y2="90"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="63"
                y1="110"
                x2="82"
                y2="110"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#property-skyscraper-pattern)"
          />
        </svg>
      )}

      {variant === "grid" && (
        <svg
          className={`w-full h-full ${colorClass}`}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="property-grid-pattern"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle cx="0" cy="0" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#property-grid-pattern)" />
        </svg>
      )}

      {variant === "dots" && (
        <svg
          className={`w-full h-full ${colorClass}`}
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="property-dots-pattern"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="3" cy="3" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#property-dots-pattern)" />
        </svg>
      )}
    </div>
  );
};

export default PropertyPattern;
