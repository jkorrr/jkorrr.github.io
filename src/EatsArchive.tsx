import { useEffect, useMemo, useState } from "react";
import { eatsData, type TasteCategory } from "./eatsData";
import { createWorldPath, layoutGeoMarkers, mapHeight, mapWidth, type LandCollection } from "./mapGeometry";

const pageSize = 12;

function formatExportDate(value: string) {
  if (!value) return "recent export";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

export function EatsArchive() {
  const firstRegion = eatsData.regions[0];
  const [worldPath, setWorldPath] = useState("");
  const [activeSlug, setActiveSlug] = useState(firstRegion.slug);
  const [activeCity, setActiveCity] = useState("all");
  const [activeCategory, setActiveCategory] = useState<"all" | TasteCategory>("all");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const markers = useMemo(() => layoutGeoMarkers(eatsData.regions, 32, 38), []);
  const activeRegion = eatsData.regions.find(({ slug }) => slug === activeSlug) ?? firstRegion;
  const activeRegionIndex = eatsData.regions.findIndex(({ slug }) => slug === activeRegion.slug);
  const largestRegion = Math.max(...eatsData.regions.map(({ placeCount }) => placeCount));

  const filteredPlaces = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return activeRegion.places.filter((place) => {
      const matchesCity = activeCity === "all" || place.city === activeCity;
      const matchesCategory = activeCategory === "all" || place.category === activeCategory;
      const matchesQuery = !normalizedQuery
        || place.name.toLocaleLowerCase().includes(normalizedQuery)
        || place.city.toLocaleLowerCase().includes(normalizedQuery);
      return matchesCity && matchesCategory && matchesQuery;
    });
  }, [activeCategory, activeCity, activeRegion, query]);

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

  useEffect(() => {
    setVisibleCount(pageSize);
  }, [activeCategory, activeCity, activeSlug, query]);

  const selectRegion = (slug: string) => {
    setActiveSlug(slug);
    setActiveCity("all");
    setActiveCategory("all");
    setQuery("");
  };

  const activeCityCount = activeCity === "all"
    ? activeRegion.placeCount
    : activeRegion.cities.find(({ name }) => name === activeCity)?.placeCount ?? 0;

  return (
    <section className="taste-archive" aria-labelledby="taste-archive-title">
      <div className="taste-archive-meta">
        <div>
          <span>beli export · updated {formatExportDate(eatsData.updatedAt)}</span>
          <h2 id="taste-archive-title">where i've eaten, so far.</h2>
        </div>
        <a href="https://beliapp.co/app/jkorr" target="_blank" rel="noreferrer">
          full rankings on beli <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="taste-archive-stats" aria-label="Beli export summary">
        <span><strong>{eatsData.totalPlaces}</strong> ranked</span>
        <span><strong>{eatsData.uniqueCities}</strong> cities</span>
        <span><strong>{eatsData.totalSaved}</strong> saved</span>
      </div>

      <div className="eats-atlas-map-shell">
        <div className="eats-atlas-map-meta">
          <span>world view</span>
          <span>select a region to open its local index <span aria-hidden="true">↓</span></span>
        </div>
        <div className="eats-atlas-map-stage">
          <svg
            className="eats-atlas-map"
            viewBox={`0 0 ${mapWidth} ${mapHeight}`}
            role="img"
            aria-labelledby="eats-map-title eats-map-description"
          >
            <title id="eats-map-title">Regional map of Jathin's ranked places</title>
            <desc id="eats-map-description">Ranked places from the Beli export are aggregated into regional markers.</desc>
            {worldPath ? <path className="eats-atlas-land" d={worldPath} /> : null}
            {markers.filter(({ isDisplaced }) => isDisplaced).map(({ item, anchor, point }) => (
              <g key={`${item.slug}-tether`} aria-hidden="true">
                <line className="eats-atlas-tether" x1={anchor.x} y1={anchor.y} x2={point.x} y2={point.y} />
                <circle className="eats-atlas-anchor" cx={anchor.x} cy={anchor.y} r="2.2" />
              </g>
            ))}
          </svg>
          {markers.map(({ item: region, point }) => {
            const markerSize = 1.25 + Math.sqrt(region.placeCount / largestRegion) * 1.55;
            return (
              <button
                className={`eats-city-marker${activeRegion.slug === region.slug ? " is-active" : ""}`}
                key={region.slug}
                type="button"
                style={{
                  "--marker-x": `${(point.x / mapWidth) * 100}%`,
                  "--marker-y": `${(point.y / mapHeight) * 100}%`,
                  "--marker-size": `${markerSize}rem`,
                } as React.CSSProperties}
                aria-pressed={activeRegion.slug === region.slug}
                aria-label={`${region.name}, ${region.placeCount} ranked places`}
                onClick={() => selectRegion(region.slug)}
                onFocus={() => selectRegion(region.slug)}
                onMouseEnter={() => selectRegion(region.slug)}
              >
                <span>{region.placeCount}</span>
                <small>{region.name}</small>
              </button>
            );
          })}
        </div>
        <div className="eats-atlas-map-readout" aria-live="polite">
          <span>{String(activeRegionIndex + 1).padStart(2, "0")} / {String(eatsData.regions.length).padStart(2, "0")}</span>
          <strong>{activeRegion.name}</strong>
          <small>{activeRegion.placeCount} ranked · {activeRegion.savedCount} saved</small>
        </div>
      </div>

      <div className="eats-city-lens">
        <header>
          <span>world / {activeRegion.name}</span>
          <div>
            <h3>{activeRegion.name}</h3>
            <p>{activeRegion.placeCount} ranked places across {activeRegion.cities.length} cities.</p>
          </div>
        </header>

        <div className="eats-neighborhoods" aria-label={`${activeRegion.name} city index`}>
          <button
            className={activeCity === "all" ? "is-active" : undefined}
            type="button"
            aria-pressed={activeCity === "all"}
            onClick={() => setActiveCity("all")}
          >
            <span>all cities</span>
            <small>{activeRegion.placeCount}</small>
          </button>
          {activeRegion.cities.map((city) => (
            <button
              className={activeCity === city.name ? "is-active" : undefined}
              key={city.name}
              type="button"
              aria-pressed={activeCity === city.name}
              onClick={() => setActiveCity(city.name)}
            >
              <span>{city.name.replace(/, [A-Z]{2}$/, "")}</span>
              <small>{city.placeCount}</small>
            </button>
          ))}
        </div>

        <div className="eats-index-tools">
          <label>
            <span>search</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={`search ${activeRegion.name}`}
            />
          </label>
          <div className="eats-category-filter" aria-label="Filter places by category">
            <button
              className={activeCategory === "all" ? "is-active" : undefined}
              type="button"
              aria-pressed={activeCategory === "all"}
              onClick={() => setActiveCategory("all")}
            >
              all
            </button>
            {activeRegion.categories.map((category) => (
              <button
                className={activeCategory === category.name ? "is-active" : undefined}
                key={category.name}
                type="button"
                aria-pressed={activeCategory === category.name}
                onClick={() => setActiveCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="eats-results-meta" aria-live="polite">
          <span>{filteredPlaces.length} {filteredPlaces.length === 1 ? "place" : "places"}</span>
          <span>{activeCity === "all" ? `${activeCityCount} in this region` : activeCity}</span>
        </div>

        {filteredPlaces.length ? (
          <ol className="eats-place-index">
            {filteredPlaces.slice(0, visibleCount).map((place) => (
              <li key={`${place.category}-${place.rank}-${place.name}`}>
                <span className="eats-place-rank">#{place.rank}</span>
                <span className="eats-place-name">
                  <strong>{place.name}</strong>
                  <small>{place.city}</small>
                </span>
                <span className="eats-place-category">{place.category}</span>
              </li>
            ))}
          </ol>
        ) : (
          <p className="eats-empty-state">nothing in this part of the index yet.</p>
        )}

        {visibleCount < filteredPlaces.length ? (
          <button className="eats-show-more" type="button" onClick={() => setVisibleCount((count) => count + pageSize)}>
            show {Math.min(pageSize, filteredPlaces.length - visibleCount)} more <span aria-hidden="true">↓</span>
          </button>
        ) : null}
      </div>

      <p className="taste-prototype-note">
        this is a local snapshot of my Beli data. rankings stay on Beli; this page turns the export into a browsable atlas.
      </p>
    </section>
  );
}
