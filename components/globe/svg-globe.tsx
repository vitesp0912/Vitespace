"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { GlobeRotation } from "@/lib/globe-projection";
import { getCountryIdsForRegion, getCountryPaths } from "@/lib/world-map";

export interface SvgGlobeHighlightPoint {
  lat: number;
  lng: number;
}

interface SvgGlobeProps {
  className?: string;
  /** Coverage samples for the active region — matching countries are highlighted. */
  highlightCoverage?: readonly SvgGlobeHighlightPoint[];
  /** View center — animates toward this when set. */
  focusLocation?: { lat: number; lng: number } | null;
}

const VIEW_SIZE = 200;
const CX = VIEW_SIZE / 2;
const CY = VIEW_SIZE / 2;
const GLOBE_R = 71;
const OCEAN_COLOR = "#14181c";
const LAND_COLOR = "#3d4650";
const LAND_STROKE = "#5c6773";
const REGION_HIGHLIGHT = "rgba(8, 95, 112,0.42)";
const REGION_HIGHLIGHT_STROKE = "rgba(8, 95, 112,0.55)";

/** Shortest signed delta from current longitude to target (−180…180). */
function lngDelta(from: number, to: number) {
  return ((to - from + 540) % 360) - 180;
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/** Duration scales with travel distance so near hops feel snappy and far hops stay smooth. */
function focusDurationMs(latTravel: number, lngTravel: number) {
  const distance = Math.hypot(latTravel, lngTravel);
  return Math.min(1400, Math.max(700, 500 + distance * 7));
}

export function SvgGlobe({
  className,
  highlightCoverage = [],
  focusLocation = null,
}: SvgGlobeProps) {
  const [rotation, setRotation] = useState<GlobeRotation>({ lat: 20, lng: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef(rotation);
  rotationRef.current = rotation;

  const focusLat = focusLocation?.lat ?? null;
  const focusLng = focusLocation?.lng ?? null;

  useEffect(() => {
    if (isDragging || focusLat == null || focusLng == null) return;

    const start = { ...rotationRef.current };
    const target = { lat: focusLat, lng: focusLng };
    const deltaLng = lngDelta(start.lng, target.lng);
    const deltaLat = target.lat - start.lat;

    if (Math.abs(deltaLat) < 0.02 && Math.abs(deltaLng) < 0.02) {
      setRotation(target);
      rotationRef.current = target;
      return;
    }

    const duration = focusDurationMs(deltaLat, deltaLng);
    const startTime = performance.now();
    let frame = 0;
    let running = true;

    const tick = (now: number) => {
      if (!running) return;
      const t = Math.min(1, (now - startTime) / duration);
      const e = easeInOutCubic(t);
      const next = {
        lat: start.lat + deltaLat * e,
        lng: start.lng + deltaLng * e,
      };
      rotationRef.current = next;
      setRotation(next);

      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        rotationRef.current = target;
        setRotation(target);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => {
      running = false;
      cancelAnimationFrame(frame);
    };
  }, [focusLat, focusLng, isDragging]);

  const countryPaths = useMemo(
    () => getCountryPaths(rotation, GLOBE_R, CX, CY),
    [rotation],
  );

  const highlightedCountryIds = useMemo(
    () => getCountryIdsForRegion(highlightCoverage),
    [highlightCoverage],
  );

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    dragRef.current = { x: e.clientX, y: e.clientY };
    (e.currentTarget as SVGSVGElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragRef.current.x;
      const dy = e.clientY - dragRef.current.y;
      dragRef.current = { x: e.clientX, y: e.clientY };

      setRotation((prev) => {
        const next = {
          lat: Math.max(-70, Math.min(70, prev.lat - dy * 0.35)),
          lng: prev.lng - dx * 0.45,
        };
        rotationRef.current = next;
        return next;
      });
    },
    [isDragging],
  );

  const onPointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className={cn("relative mx-auto flex h-full w-full items-center justify-center", className)}>
      <svg
        viewBox={`0 0 ${VIEW_SIZE} ${VIEW_SIZE}`}
        className="block aspect-square h-full max-h-full w-full max-w-full cursor-grab active:cursor-grabbing"
        style={{ touchAction: "none" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <defs>
          <clipPath id="globe-clip">
            <circle cx={CX} cy={CY} r={GLOBE_R} />
          </clipPath>
        </defs>

        {/* Ocean */}
        <circle cx={CX} cy={CY} r={GLOBE_R} fill={OCEAN_COLOR} />

        {/* Continents */}
        <g clipPath="url(#globe-clip)" pointerEvents="none">
          {countryPaths.map((country) => (
            <path
              key={country.id}
              d={country.d}
              fill={LAND_COLOR}
              stroke={LAND_STROKE}
              strokeWidth={0.45}
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {countryPaths
            .filter((country) => highlightedCountryIds.has(country.id))
            .map((country) => (
              <path
                key={`highlight-${country.id}`}
                d={country.d}
                fill={REGION_HIGHLIGHT}
                stroke={REGION_HIGHLIGHT_STROKE}
                strokeWidth={0.45}
                vectorEffect="non-scaling-stroke"
              />
            ))}
        </g>

        {/* Rim */}
        <circle
          cx={CX}
          cy={CY}
          r={GLOBE_R}
          fill="none"
          stroke="rgba(8, 95, 112,0.1)"
          strokeWidth="1"
          pointerEvents="none"
        />
      </svg>
    </div>
  );
}
