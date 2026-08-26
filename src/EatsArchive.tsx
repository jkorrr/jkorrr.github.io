import { useEffect, useMemo, useState } from "react";
import { eatsPrototype } from "./eatsData";
import { createWorldPath, layoutGeoMarkers, mapHeight, mapWidth, type LandCollection } from "./mapGeometry";

export function EatsArchive() {
  const [worldPath, setWorldPath] = useState("");
  const [activeSlug, setActiveSlug] = useState(eatsPrototype.cities[0].slug);
  const [activeNeighborhood, setActiveNeighborhood] = useState(eatsPrototype.cities[0].neighborhoods[0].name);
  const markers = useMemo(() => layoutGeoMarkers(eatsPrototype.cities, 78, 62), []);
  const activeCity = eatsPrototype.cities.find(({ slug }) => slug === activeSlug) ?? eatsPrototype.cities[0];
  const activeCityIndex = eatsPrototype.cities.findIndex(({ slug }) => slug === activeCity.slug);
  const neighborhood = activeCity.neighborhoods.find(({ name }) => name === activeNeighborhood)
    ?? activeCity.neighborhoods[0];
  const largestCity = Math.max(...eatsPrototype.cities.map(({ restaurantCount }) => restaurantCount));

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

  const selectCity = (slug: string) => {
    const city = eatsPrototype.cities.find((entry) => entry.slug === slug)!;
    setActiveSlug(slug);
    setActiveNeighborhood(city.neighborhoods[0].name);
  };

  return (
    <section className="taste-archive" aria-labelledby="taste-archive-title">
      <div className="taste-archive-meta">
        <div>
          <span>prototype / sample data</span>
          <h2 id="taste-archive-title">where i've eaten, so far.</h2>
        </div>
        <a href="https://beliapp.co/app/jkorr" target="_blank" rel="noreferrer">
          full rankings on beli <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="eats-atlas-map-shell">
        <div className="eats-atlas-map-meta">
          <span>world view</span>
          <span>select a city to open its local index <span aria-hidden="true">↓</span></span>
        </div>
        <div className="eats-atlas-map-stage">
          <svg
            className="eats-atlas-map"
            viewBox={`0 0 ${mapWidth} ${mapHeight}`}
            role="img"
            aria-labelledby="eats-map-title eats-map-description"
          >
            <title id="eats-map-title">Sample city-level restaurant atlas</title>
            <desc id="eats-map-description">Restaurants are aggregated into city markers. Nearby cities fan apart from their geographic position.</desc>
            {worldPath ? <path className="eats-atlas-land" d={worldPath} /> : null}
            {markers.filter(({ isDisplaced }) => isDisplaced).map(({ item, anchor, point }) => (
              <g key={`${item.slug}-tether`} aria-hidden="true">
                <line className="eats-atlas-tether" x1={anchor.x} y1={anchor.y} x2={point.x} y2={point.y} />
                <circle className="eats-atlas-anchor" cx={anchor.x} cy={anchor.y} r="2.2" />
              </g>
            ))}
          </svg>
          {markers.map(({ item: city, point }) => {
            const markerSize = 1.45 + (city.restaurantCount / largestCity) * 1.25;
            return (
              <button
                className={`eats-city-marker${activeCity.slug === city.slug ? " is-active" : ""}`}
                key={city.slug}
                type="button"
                style={{
                  "--marker-x": `${(point.x / mapWidth) * 100}%`,
                  "--marker-y": `${(point.y / mapHeight) * 100}%`,
                  "--marker-size": `${markerSize}rem`,
                } as React.CSSProperties}
                aria-pressed={activeCity.slug === city.slug}
                aria-label={`${city.name}, ${city.restaurantCount} sample restaurants`}
                onClick={() => selectCity(city.slug)}
                onFocus={() => selectCity(city.slug)}
                onMouseEnter={() => selectCity(city.slug)}
              >
                <span>{city.restaurantCount}</span>
                <small>{city.name}</small>
              </button>
            );
          })}
        </div>
        <div className="eats-atlas-map-readout" aria-live="polite">
          <span>{String(activeCityIndex + 1).padStart(2, "0")} / {String(eatsPrototype.cities.length).padStart(2, "0")}</span>
          <strong>{activeCity.name}</strong>
          <small>{activeCity.restaurantCount} sample restaurants</small>
        </div>
      </div>

      <div className="eats-city-lens">
        <header>
          <span>world / {activeCity.name}</span>
          <div>
            <h3>{activeCity.name}</h3>
            <p>choose a neighborhood to narrow the future restaurant index.</p>
          </div>
        </header>
        <div className="eats-neighborhoods" aria-label={`${activeCity.name} sample neighborhoods`}>
          {activeCity.neighborhoods.map((entry) => (
            <button
              className={neighborhood.name === entry.name ? "is-active" : undefined}
              key={entry.name}
              type="button"
              aria-pressed={neighborhood.name === entry.name}
              onClick={() => setActiveNeighborhood(entry.name)}
            >
              <span>{entry.name}</span>
              <small>{entry.restaurantCount}</small>
            </button>
          ))}
        </div>
        <div className="eats-neighborhood-readout" aria-live="polite">
          <span>{neighborhood.restaurantCount} sample places</span>
          <div key={`${activeCity.slug}-${neighborhood.name}`}>
            <strong>{neighborhood.name}</strong>
            <small>{neighborhood.note}</small>
          </div>
          <span>restaurant index connects here <span aria-hidden="true">→</span></span>
        </div>
      </div>

      <p className="taste-prototype-note">
        the live version keeps the world layer light, then makes each city searchable by neighborhood, cuisine,
        year, and ranking after the Beli export is connected.
      </p>
    </section>
  );
}
