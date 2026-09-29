import { useEffect, useMemo, useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { eatsData, type TasteCategory, type TastePlace } from "./eatsData";
import { createWorldPath, layoutGeoMarkers, mapHeight, mapWidth, type LandCollection } from "./mapGeometry";

const pageSize = 12;

type GalleryState = {
  place: TastePlace;
  index: number;
};

function mapsHref(place: Pick<TastePlace, "name" | "city">) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name}, ${place.city}`)}`;
}

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
  const [photoOnly, setPhotoOnly] = useState(false);
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [gallery, setGallery] = useState<GalleryState | null>(null);
  const galleryRef = useRef<HTMLDialogElement>(null);
  const markers = useMemo(() => layoutGeoMarkers(eatsData.regions, 32, 38), []);
  const activeRegion = eatsData.regions.find(({ slug }) => slug === activeSlug) ?? firstRegion;
  const activeRegionIndex = eatsData.regions.findIndex(({ slug }) => slug === activeRegion.slug);
  const largestRegion = Math.max(...eatsData.regions.map(({ placeCount }) => placeCount));

  const filteredPlaces = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return activeRegion.places.filter((place) => {
      const matchesCity = activeCity === "all" || place.city === activeCity;
      const matchesCategory = activeCategory === "all" || place.category === activeCategory;
      const matchesPhoto = !photoOnly || place.photos.length > 0;
      const matchesQuery = !normalizedQuery
        || place.name.toLocaleLowerCase().includes(normalizedQuery)
        || place.city.toLocaleLowerCase().includes(normalizedQuery);
      return matchesCity && matchesCategory && matchesPhoto && matchesQuery;
    });
  }, [activeCategory, activeCity, activeRegion, photoOnly, query]);

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
  }, [activeCategory, activeCity, activeSlug, photoOnly, query]);

  useEffect(() => {
    const dialog = galleryRef.current;
    if (!dialog) return;

    if (gallery && !dialog.open) dialog.showModal();
    if (!gallery && dialog.open) dialog.close();
  }, [gallery]);

  const selectRegion = (slug: string) => {
    setActiveSlug(slug);
    setActiveCity("all");
    setActiveCategory("all");
    setQuery("");
  };

  const activeCityCount = activeCity === "all"
    ? activeRegion.placeCount
    : activeRegion.cities.find(({ name }) => name === activeCity)?.placeCount ?? 0;

  const moveGallery = (direction: -1 | 1) => {
    setGallery((current) => current && ({
      ...current,
      index: (current.index + direction + current.place.photos.length) % current.place.photos.length,
    }));
  };

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
        <span><strong>{eatsData.photographedPlaces}</strong> photographed</span>
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
            <button
              className={photoOnly ? "is-active eats-photo-filter" : "eats-photo-filter"}
              type="button"
              aria-pressed={photoOnly}
              onClick={() => setPhotoOnly((current) => !current)}
            >
              with photos
            </button>
          </div>
        </div>

        <div className="eats-results-meta" aria-live="polite">
          <span>{filteredPlaces.length} {filteredPlaces.length === 1 ? "place" : "places"}</span>
          <span>{activeCity === "all" ? `${activeCityCount} in this region` : activeCity}</span>
        </div>

        {filteredPlaces.length ? (
          <ol className="eats-place-index">
            {filteredPlaces.slice(0, visibleCount).map((place) => (
              <li className={place.photos.length ? "has-photo" : undefined} key={`${place.category}-${place.rank}-${place.name}`}>
                {place.photos.length ? (
                  <button
                    className="eats-place-photo"
                    type="button"
                    aria-label={`View ${place.photos.length} ${place.photos.length === 1 ? "photo" : "photos"} from ${place.name}`}
                    onClick={() => setGallery({ place, index: 0 })}
                  >
                    <img src={place.photos[0].url} alt="" loading="lazy" decoding="async" />
                    {place.photos.length > 1 ? <span>{place.photos.length}</span> : null}
                  </button>
                ) : (
                  <span className="eats-place-photo is-empty" aria-hidden="true">—</span>
                )}
                <span className="eats-place-rank">
                  <strong>#{place.rank}</strong>
                  <small>{place.category}</small>
                </span>
                <span className="eats-place-name">
                  <strong>{place.name}</strong>
                  <small>
                    {place.city}
                    {place.photos.some(({ isFavoriteDish }) => isFavoriteDish) ? " · favorite dish captured" : ""}
                  </small>
                </span>
                <a
                  className="eats-place-location"
                  href={mapsHref(place)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Find ${place.name} in ${place.city} on Google Maps`}
                >
                  <FaLocationDot aria-hidden="true" />
                  <span>google maps</span>
                </a>
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
        a snapshot of my Beli data, recut as a browsable atlas. ranks are within each category; maps opens a live location search.
      </p>

      <dialog
        className="eats-photo-dialog"
        ref={galleryRef}
        aria-label={gallery ? `Photos from ${gallery.place.name}` : "Restaurant photos"}
        onClose={() => setGallery(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") moveGallery(-1);
          if (event.key === "ArrowRight") moveGallery(1);
        }}
      >
        {gallery ? (
          <div className="eats-photo-viewer">
            <div className="eats-photo-viewer-meta">
              <span>{String(gallery.index + 1).padStart(2, "0")} / {String(gallery.place.photos.length).padStart(2, "0")}</span>
              <form method="dialog">
                <button type="submit" aria-label="Close photo viewer">close</button>
              </form>
            </div>
            <figure>
              <div className="eats-photo-stage">
                <img
                  src={gallery.place.photos[gallery.index].url}
                  alt={`At ${gallery.place.name} in ${gallery.place.city}`}
                  decoding="async"
                />
                {gallery.place.photos.length > 1 ? (
                  <>
                    <button
                      className="eats-photo-arrow is-previous"
                      type="button"
                      aria-label="Previous photo"
                      aria-keyshortcuts="ArrowLeft"
                      onClick={() => moveGallery(-1)}
                    >
                      <span aria-hidden="true">‹</span>
                    </button>
                    <button
                      className="eats-photo-arrow is-next"
                      type="button"
                      aria-label="Next photo"
                      aria-keyshortcuts="ArrowRight"
                      onClick={() => moveGallery(1)}
                    >
                      <span aria-hidden="true">›</span>
                    </button>
                  </>
                ) : null}
              </div>
              <figcaption>
                <span>
                  <strong>{gallery.place.name}</strong>
                  <small>{gallery.place.city}</small>
                </span>
                {gallery.place.photos[gallery.index].isFavoriteDish ? <em>favorite dish</em> : null}
                <a href={mapsHref(gallery.place)} target="_blank" rel="noreferrer">
                  <FaLocationDot aria-hidden="true" />
                  <span>google maps</span>
                </a>
              </figcaption>
            </figure>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
