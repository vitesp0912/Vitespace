"use client";

import { cn } from "@/lib/utils";
import { SvgGlobe } from "@/components/globe/svg-globe";

export interface GlobeRegion {
  id: string;
  name: string;
  lat: number;
  lng: number;
  coverage: readonly { lat: number; lng: number }[];
}

interface MealRecommendationGlobeProps {
  regions: readonly GlobeRegion[];
  selectedId: string;
  selectedName?: string;
  selectedCuisine?: string;
  className?: string;
}

function formatCoordinates(lat: number, lng: number) {
  const latDir = lat >= 0 ? "N" : "S";
  const lngDir = lng >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(0)}°${latDir} · ${Math.abs(lng).toFixed(0)}°${lngDir}`;
}

export function MealRecommendationGlobe({
  regions,
  selectedId,
  selectedName,
  selectedCuisine,
  className,
}: MealRecommendationGlobeProps) {
  const selected = regions.find((region) => region.id === selectedId);
  const highlightCoverage =
    selected && selected.coverage.length > 0
      ? selected.coverage
      : selected
        ? [{ lat: selected.lat, lng: selected.lng }]
        : [];

  return (
    <div
      className={cn(
        "relative flex min-h-[320px] w-full flex-col overflow-hidden bg-bg-secondary sm:min-h-[380px] lg:h-full lg:min-h-0",
        className,
      )}
    >
      <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center p-3 sm:p-4">
        <div className="aspect-square h-full w-full min-h-0 origin-center scale-[1.06]">
          <SvgGlobe
            className="h-full w-full"
            highlightCoverage={highlightCoverage}
            focusLocation={
              selected ? { lat: selected.lat, lng: selected.lng } : null
            }
          />
        </div>
      </div>

      {/* Region readout */}
      {selected && selectedName && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 shrink-0 bg-gradient-to-t from-bg-secondary via-bg-secondary/90 to-transparent px-6 pb-6 pt-16 sm:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              {selectedCuisine && (
                <p className="text-[10px] font-medium tracking-[0.16em] text-accent-green uppercase">
                  {selectedCuisine}
                </p>
              )}
              <p className="mt-1 font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                {selectedName}
              </p>
            </div>
            <p className="shrink-0 font-mono text-[10px] tracking-wide text-text-muted">
              {formatCoordinates(selected.lat, selected.lng)}
            </p>
          </div>
        </div>
      )}

      {/* Corner hint */}
      <div className="pointer-events-none absolute top-4 left-4 z-20 hidden sm:block">
        <span className="rounded-md border border-white/[0.06] bg-black/40 px-2 py-1 text-[10px] tracking-wide text-text-muted backdrop-blur-sm">
          Interactive
        </span>
      </div>
    </div>
  );
}
