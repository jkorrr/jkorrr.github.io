import { useEffect, useMemo, useState } from "react";
import type { TravelPlace } from "./content";
import { createWorldPath, layoutGeoMarkers, mapHeight, mapWidth, type LandCollection } from "./mapGeometry";

export function TravelMap({ places }: { places: TravelPlace[] }) {
  const [worldPath, setWorldPath] = useState("");
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const markers = useMemo(() => layoutGeoMarkers(places), [places]);
  const activeMarker = markers.find(({ item }) => item.slug === activeSlug) ?? null;
  const activeIndex = activeMarker ? places.findIndex(({ slug }) => slug === activeMarker.item.slug) : -1;

  useEffect(() => {
    let active = true;
    fetch("/world-land.geojson")
      .then((response) => {
        if (!response.ok) throw new Error("Map outline unavailable");
        return response.json() as Promise<LandCollection>;
      })
      .then((collection) => {
        if (active) setWorldPath(createWorldPath(collection));
      })
      .catch(() => {
        if (active) setWorldPath("");
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <div className="travel-map-shell">
      <div className="travel-map-meta">
        <p className="travel-map-count">what i've seen, so far.</p>
        <div className="travel-map-legend" aria-label="map legend">
          <span><i className="is-visited" aria-hidden="true" />visited</span>
          <span><i className="is-wishlist" aria-hidden="true" />want to go</span>
        </div>
      </div>
      <svg
        className="travel-map"
        viewBox={`0 0 ${mapWidth} ${mapHeight}`}
        role="img"
        aria-labelledby="travel-map-title travel-map-description"
      >
        <title id="travel-map-title">Jathin’s travel map</title>
        <desc id="travel-map-description">An interactive map. Visited places are solid blue dots and wishlist places are hollow dots. Nearby places fan out from their geographic position.</desc>
        {worldPath ? <path className="travel-map-land" d={worldPath} /> : null}
        <g className="travel-map-markers">
          {markers.map(({ item: place, anchor, point, isDisplaced }) => {
            const isActive = place.slug === activeSlug;
            return (
              <a
                className={`travel-map-marker is-${place.status}${isActive ? " is-active" : ""}`}
                href={`/travel/${place.slug}/`}
                aria-label={`${place.name}: explore adventure`}
                key={place.slug}
                onFocus={() => setActiveSlug(place.slug)}
                onMouseEnter={() => setActiveSlug(place.slug)}
                onPointerDown={() => setActiveSlug(place.slug)}
              >
                <title>{place.name}: explore adventure</title>
                {isDisplaced ? (
                  <>
                    <line className="travel-map-tether" x1={anchor.x} y1={anchor.y} x2={point.x} y2={point.y} />
                    <circle className="travel-map-anchor" cx={anchor.x} cy={anchor.y} r="2.2" />
                  </>
                ) : null}
                <circle className="travel-map-hit" cx={point.x} cy={point.y} r="16" />
                <circle className="travel-map-halo" cx={point.x} cy={point.y} r="10" />
                <circle className="travel-map-dot" cx={point.x} cy={point.y} r="5.5" />
              </a>
            );
          })}
        </g>
      </svg>
      <div className={`travel-map-readout${activeMarker ? " has-place" : ""}`} aria-live="polite">
        {activeMarker ? (
          <a href={`/travel/${activeMarker.item.slug}/`} key={activeMarker.item.slug}>
            <span className="travel-map-readout-number">
              {String(activeIndex + 1).padStart(2, "0")} / {String(places.length).padStart(2, "0")}
            </span>
            <span className="travel-map-readout-copy">
              <strong>{activeMarker.item.name}</strong>
              <small>{activeMarker.item.route?.join(" · ") ?? activeMarker.item.location}</small>
            </span>
            <span className="travel-map-readout-action">explore adventure <span aria-hidden="true">↗</span></span>
          </a>
        ) : (
          <p>
            <span>each point is a place.</span>
            <span>hover to preview; select to explore the adventure <span aria-hidden="true">↗</span></span>
          </p>
        )}
      </div>
    </div>
  );
}
