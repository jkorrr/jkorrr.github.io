import { execFileSync } from "node:child_process";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const inputPath = process.argv[2];

if (!inputPath) {
  throw new Error("Usage: npm run import:beli -- <path-to-beli-export.zip>");
}

function readZipEntry(entry) {
  return execFileSync("tar", ["-xOf", path.resolve(inputPath), entry], {
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  });
}

function parseCsv(source) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];

    if (quoted) {
      if (character === '"' && source[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        quoted = false;
      } else {
        field += character;
      }
      continue;
    }

    if (character === '"') {
      quoted = true;
    } else if (character === ",") {
      row.push(field);
      field = "";
    } else if (character === "\n") {
      row.push(field.replace(/\r$/, ""));
      if (row.some((value) => value.length > 0)) rows.push(row);
      row = [];
      field = "";
    } else {
      field += character;
    }
  }

  if (field.length || row.length) {
    row.push(field.replace(/\r$/, ""));
    rows.push(row);
  }

  const [headers, ...records] = rows;
  return records.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
}

const categoryLabels = {
  RES: "restaurant",
  COF: "coffee",
  DES: "dessert",
  BAK: "bakery",
  BAR: "bar",
};

const regionDefinitions = [
  {
    slug: "bay-area",
    name: "bay area",
    coordinates: { longitude: -122.27, latitude: 37.82 },
    cities: [
      "San Francisco, CA", "Berkeley, CA", "Oakland, CA", "Sunnyvale, CA", "Dublin, CA", "Gilroy, CA",
      "Albany, CA", "Sausalito, CA", "Santa Clara, CA", "Saratoga, CA", "Mountain View, CA", "Richmond, CA",
      "Cupertino, CA", "El Cerrito, CA", "Emeryville, CA", "Half Moon Bay, CA", "Pacifica, CA", "Palo Alto, CA",
      "San Jose, CA", "Fremont, CA", "Redwood City, CA", "Burlingame, CA", "Menlo Park, CA",
    ],
  },
  {
    slug: "los-angeles",
    name: "los angeles",
    coordinates: { longitude: -118.24, latitude: 34.05 },
    cities: [
      "Los Angeles, CA", "Santa Clarita, CA", "West Hollywood, CA", "Pasadena, CA", "Santa Monica, CA",
      "Burbank, CA", "Avalon, CA", "Long Beach, CA", "Culver City, CA", "Beverly Hills, CA", "Alhambra, CA",
      "Hermosa Beach, CA", "Inglewood, CA", "Gardena, CA", "Glendale, CA", "San Gabriel, CA", "Arcadia, CA",
      "San Marino, CA", "Rosemead, CA", "Riverside, CA", "Cerritos, CA", "Monrovia, CA",
    ],
  },
  {
    slug: "orange-county",
    name: "orange county",
    coordinates: { longitude: -117.85, latitude: 33.72 },
    cities: [
      "Irvine, CA", "Tustin, CA", "Santa Ana, CA", "Costa Mesa, CA", "Newport Beach, CA", "Garden Grove, CA",
      "Anaheim, CA", "Buena Park, CA", "Orange, CA", "Fountain Valley, CA", "Huntington Beach, CA",
      "Laguna Beach, CA", "Westminster, CA", "Lake Forest, CA", "Dana Point, CA", "Laguna Hills, CA",
    ],
  },
  {
    slug: "new-york",
    name: "new york",
    coordinates: { longitude: -74.01, latitude: 40.71 },
    cities: ["New York, NY", "Palisades Park, NJ", "New Haven, CT"],
  },
  {
    slug: "london",
    name: "london",
    coordinates: { longitude: -0.13, latitude: 51.51 },
    cities: ["London"],
  },
  {
    slug: "netherlands",
    name: "netherlands",
    coordinates: { longitude: 4.9, latitude: 52.37 },
    cities: ["Amsterdam", "Rotterdam", "Schiphol"],
  },
  {
    slug: "central-mexico",
    name: "central mexico",
    coordinates: { longitude: -99.13, latitude: 19.43 },
    cities: ["Mexico City", "Puebla", "Tepoztlán", "San Andrés Cholula", "Cuauhtémoc"],
  },
  {
    slug: "guatemala",
    name: "guatemala",
    coordinates: { longitude: -90.73, latitude: 14.56 },
    cities: [
      "Antigua Guatemala", "Panajachel", "San Juan La Laguna", "Guatemala", "San Marcos La Laguna",
      "Santa Catarina Palopó", "San Cristóbal El Alto",
    ],
  },
  {
    slug: "india",
    name: "india",
    coordinates: { longitude: 78.49, latitude: 20.59 },
    cities: ["Hyderabad", "Secunderabad", "Serilingampalle (M)", "Srinagar", "Tamil Nadu", "Tirupati", "Forest Block", "Mumbai"],
  },
  {
    slug: "texas",
    name: "texas",
    coordinates: { longitude: -96.8, latitude: 31.2 },
    cities: ["Houston, TX", "Magnolia, TX", "Shenandoah, TX", "Conroe, TX", "Dallas, TX", "Humble, TX"],
  },
  {
    slug: "belgium",
    name: "belgium",
    coordinates: { longitude: 4.35, latitude: 50.85 },
    cities: ["Bruges", "Brussels", "Ghent"],
  },
  {
    slug: "philadelphia",
    name: "philadelphia",
    coordinates: { longitude: -75.17, latitude: 39.95 },
    cities: ["Philadelphia, PA"],
  },
  {
    slug: "northern-california",
    name: "northern california",
    coordinates: { longitude: -121.49, latitude: 38.58 },
    cities: ["Grass Valley, CA", "Sacramento, CA", "West Sacramento, CA", "Merced, CA"],
  },
  {
    slug: "california-coast",
    name: "california coast",
    coordinates: { longitude: -120.44, latitude: 35.3 },
    cities: ["Monterey, CA", "Goleta, CA", "Santa Barbara, CA", "San Diego, CA"],
  },
];

const cityToRegion = new Map(regionDefinitions.flatMap((region) => region.cities.map((city) => [city, region.slug])));
const rankings = parseCsv(readZipEntry("rankings.csv"));
const bookmarks = parseCsv(readZipEntry("bookmarks.csv"));
const photos = parseCsv(readZipEntry("photos.csv"));
const exportDetails = parseCsv(readZipEntry("export_details.csv"))[0];

const placeKey = (name, city) => `${name.trim().toLocaleLowerCase()}|${city.trim().toLocaleLowerCase()}`;
const photosByPlace = new Map();

for (const photo of photos) {
  const url = photo["Image URL"]?.trim();
  if (!url) continue;

  const key = placeKey(photo["Business Name"], photo.City);
  const placePhotos = photosByPlace.get(key) ?? [];
  placePhotos.push({
    url,
    isFavoriteDish: photo["Is Favorite Dish"].trim().toLocaleLowerCase() === "true",
    uploadedAt: photo["Upload Date"].trim(),
  });
  photosByPlace.set(key, placePhotos);
}

for (const placePhotos of photosByPlace.values()) {
  placePhotos.sort((first, second) => (
    Number(second.isFavoriteDish) - Number(first.isFavoriteDish)
    || second.uploadedAt.localeCompare(first.uploadedAt)
  ));
}

const unmatchedRankingCities = [...new Set(rankings.map((row) => row.City).filter((city) => !cityToRegion.has(city)))];
if (unmatchedRankingCities.length) {
  throw new Error(`Add these ranking cities to a region before importing: ${unmatchedRankingCities.join(", ")}`);
}

const regions = regionDefinitions
  .map((definition) => {
    const places = rankings
      .filter((row) => cityToRegion.get(row.City) === definition.slug)
      .map((row) => ({
        name: row["Restaurant Name"].trim(),
        city: row.City.trim(),
        category: categoryLabels[row.Category] ?? "restaurant",
        rank: Number.parseInt(row.Rank, 10),
        photos: (photosByPlace.get(placeKey(row["Restaurant Name"], row.City)) ?? [])
          .map(({ url, isFavoriteDish }) => ({ url, isFavoriteDish })),
      }))
      .sort((first, second) => first.rank - second.rank || first.name.localeCompare(second.name));

    const cityCounts = new Map();
    const categoryCounts = new Map();
    for (const place of places) {
      cityCounts.set(place.city, (cityCounts.get(place.city) ?? 0) + 1);
      categoryCounts.set(place.category, (categoryCounts.get(place.category) ?? 0) + 1);
    }

    return {
      slug: definition.slug,
      name: definition.name,
      placeCount: places.length,
      savedCount: bookmarks.filter((row) => cityToRegion.get(row.City) === definition.slug).length,
      coordinates: definition.coordinates,
      cities: [...cityCounts.entries()]
        .map(([name, placeCount]) => ({ name, placeCount }))
        .sort((first, second) => second.placeCount - first.placeCount || first.name.localeCompare(second.name)),
      categories: [...categoryCounts.entries()]
        .map(([name, placeCount]) => ({ name, placeCount }))
        .sort((first, second) => second.placeCount - first.placeCount || first.name.localeCompare(second.name)),
      places,
    };
  })
  .filter((region) => region.placeCount > 0)
  .sort((first, second) => second.placeCount - first.placeCount);

const output = {
  source: "Beli data export",
  updatedAt: exportDetails?.export_date?.slice(0, 10) ?? "",
  isPlaceholder: false,
  totalPlaces: rankings.length,
  totalSaved: bookmarks.length,
  totalPhotos: photos.length,
  photographedPlaces: rankings.filter((row) => photosByPlace.has(placeKey(row["Restaurant Name"], row.City))).length,
  uniqueCities: new Set(rankings.map((row) => row.City)).size,
  regions,
};

const moduleSource = `export type TasteCategory = "restaurant" | "coffee" | "dessert" | "bakery" | "bar";

export interface TastePlace {
  name: string;
  city: string;
  category: TasteCategory;
  rank: number;
  photos: Array<{ url: string; isFavoriteDish: boolean }>;
}

export interface TasteRegion {
  slug: string;
  name: string;
  placeCount: number;
  savedCount: number;
  coordinates: { longitude: number; latitude: number };
  cities: Array<{ name: string; placeCount: number }>;
  categories: Array<{ name: TasteCategory; placeCount: number }>;
  places: TastePlace[];
}

export interface EatsData {
  source: "Beli data export";
  updatedAt: string;
  isPlaceholder: false;
  totalPlaces: number;
  totalSaved: number;
  totalPhotos: number;
  photographedPlaces: number;
  uniqueCities: number;
  regions: TasteRegion[];
}

// Generated from the private Beli export by scripts/import-beli.mjs.
// Only public-facing restaurant, city, category, category-rank, and photo URLs are included.
// Private descriptions, notes, account fields, and device data are excluded.
export const eatsData: EatsData = ${JSON.stringify(output, null, 2)};
`;

const outputPath = path.resolve("src/eatsData.ts");
await writeFile(outputPath, moduleSource, "utf8");

console.log(`Imported ${output.totalPlaces} ranked places across ${output.uniqueCities} cities.`);
console.log(`Matched ${output.photographedPlaces} ranked places to ${output.totalPhotos} exported photos.`);
console.log(`Generated ${outputPath}. No private descriptions, notes, account fields, or device data were included.`);
