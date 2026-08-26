export interface TasteCity {
  slug: string;
  name: string;
  restaurantCount: number;
  coordinates: {
    longitude: number;
    latitude: number;
  };
  neighborhoods: Array<{
    name: string;
    restaurantCount: number;
    note: string;
  }>;
}

export interface EatsPrototype {
  isPlaceholder: true;
  totalRestaurants: number;
  cities: TasteCity[];
}

// Deliberately labeled sample data: replace this object with the normalized Beli export.
export const eatsPrototype: EatsPrototype = {
  isPlaceholder: true,
  totalRestaurants: 500,
  cities: [
    {
      slug: "san-francisco",
      name: "san francisco",
      restaurantCount: 192,
      coordinates: { longitude: -122.42, latitude: 37.77 },
      neighborhoods: [
        { name: "the mission", restaurantCount: 61, note: "sample neighborhood index" },
        { name: "the richmond", restaurantCount: 47, note: "sample neighborhood index" },
        { name: "soma", restaurantCount: 39, note: "sample neighborhood index" },
        { name: "everywhere else", restaurantCount: 45, note: "sample neighborhood index" },
      ],
    },
    {
      slug: "los-angeles",
      name: "los angeles",
      restaurantCount: 148,
      coordinates: { longitude: -118.24, latitude: 34.05 },
      neighborhoods: [
        { name: "koreatown", restaurantCount: 43, note: "sample neighborhood index" },
        { name: "the westside", restaurantCount: 39, note: "sample neighborhood index" },
        { name: "downtown", restaurantCount: 31, note: "sample neighborhood index" },
        { name: "everywhere else", restaurantCount: 35, note: "sample neighborhood index" },
      ],
    },
    {
      slug: "london",
      name: "london",
      restaurantCount: 96,
      coordinates: { longitude: -0.13, latitude: 51.51 },
      neighborhoods: [
        { name: "soho", restaurantCount: 28, note: "sample neighborhood index" },
        { name: "shoreditch", restaurantCount: 24, note: "sample neighborhood index" },
        { name: "borough", restaurantCount: 19, note: "sample neighborhood index" },
        { name: "everywhere else", restaurantCount: 25, note: "sample neighborhood index" },
      ],
    },
    {
      slug: "mexico-city",
      name: "cdmx",
      restaurantCount: 64,
      coordinates: { longitude: -99.13, latitude: 19.43 },
      neighborhoods: [
        { name: "roma", restaurantCount: 19, note: "sample neighborhood index" },
        { name: "condesa", restaurantCount: 17, note: "sample neighborhood index" },
        { name: "centro", restaurantCount: 12, note: "sample neighborhood index" },
        { name: "everywhere else", restaurantCount: 16, note: "sample neighborhood index" },
      ],
    },
  ],
};
