export type TasteCategory = "restaurant" | "coffee" | "dessert" | "bakery" | "bar";

export interface TastePlace {
  name: string;
  city: string;
  category: TasteCategory;
  rank: number;
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
  uniqueCities: number;
  regions: TasteRegion[];
}

// Generated from the private Beli export by scripts/import-beli.mjs.
// Only public-facing restaurant, city, category, and rank fields are included.
export const eatsData: EatsData = {
  "source": "Beli data export",
  "updatedAt": "2026-08-26",
  "isPlaceholder": false,
  "totalPlaces": 531,
  "totalSaved": 454,
  "uniqueCities": 77,
  "regions": [
    {
      "slug": "bay-area",
      "name": "bay area",
      "placeCount": 203,
      "savedCount": 120,
      "coordinates": {
        "longitude": -122.27,
        "latitude": 37.82
      },
      "cities": [
        {
          "name": "San Francisco, CA",
          "placeCount": 75
        },
        {
          "name": "Berkeley, CA",
          "placeCount": 74
        },
        {
          "name": "Oakland, CA",
          "placeCount": 34
        },
        {
          "name": "Dublin, CA",
          "placeCount": 3
        },
        {
          "name": "Sunnyvale, CA",
          "placeCount": 3
        },
        {
          "name": "Gilroy, CA",
          "placeCount": 2
        },
        {
          "name": "Albany, CA",
          "placeCount": 1
        },
        {
          "name": "Cupertino, CA",
          "placeCount": 1
        },
        {
          "name": "El Cerrito, CA",
          "placeCount": 1
        },
        {
          "name": "Emeryville, CA",
          "placeCount": 1
        },
        {
          "name": "Half Moon Bay, CA",
          "placeCount": 1
        },
        {
          "name": "Mountain View, CA",
          "placeCount": 1
        },
        {
          "name": "Pacifica, CA",
          "placeCount": 1
        },
        {
          "name": "Palo Alto, CA",
          "placeCount": 1
        },
        {
          "name": "Richmond, CA",
          "placeCount": 1
        },
        {
          "name": "Santa Clara, CA",
          "placeCount": 1
        },
        {
          "name": "Saratoga, CA",
          "placeCount": 1
        },
        {
          "name": "Sausalito, CA",
          "placeCount": 1
        }
      ],
      "categories": [
        {
          "name": "restaurant",
          "placeCount": 147
        },
        {
          "name": "coffee",
          "placeCount": 23
        },
        {
          "name": "dessert",
          "placeCount": 17
        },
        {
          "name": "bakery",
          "placeCount": 13
        },
        {
          "name": "bar",
          "placeCount": 3
        }
      ],
      "places": [
        {
          "name": "Garden Creamery",
          "city": "San Francisco, CA",
          "category": "dessert",
          "rank": 1
        },
        {
          "name": "Arsicault Bakery Civic Center",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 2
        },
        {
          "name": "Juniper",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 5
        },
        {
          "name": "Arsicault Bakery",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 6
        },
        {
          "name": "Grand Coffee",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 7
        },
        {
          "name": "Garden Bakery",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 8
        },
        {
          "name": "Kansai",
          "city": "Oakland, CA",
          "category": "bar",
          "rank": 8
        },
        {
          "name": "Philmore Creamery",
          "city": "San Francisco, CA",
          "category": "dessert",
          "rank": 8
        },
        {
          "name": "Breadbelly B12 - Dogpatch",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 9
        },
        {
          "name": "The Coffee Movement",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 9
        },
        {
          "name": "Holy Nata",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 10
        },
        {
          "name": "Na Ya Dessert Cafe",
          "city": "San Francisco, CA",
          "category": "dessert",
          "rank": 10
        },
        {
          "name": "Sightglass Coffee",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 11
        },
        {
          "name": "Binge Coffee House",
          "city": "Berkeley, CA",
          "category": "coffee",
          "rank": 12
        },
        {
          "name": "Bamboo Hut",
          "city": "San Francisco, CA",
          "category": "bar",
          "rank": 13
        },
        {
          "name": "Bi-Rite Creamery",
          "city": "San Francisco, CA",
          "category": "dessert",
          "rank": 13
        },
        {
          "name": "Neighbor Bakehouse",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 13
        },
        {
          "name": "The Caffè by Mr. Espresso",
          "city": "Oakland, CA",
          "category": "coffee",
          "rank": 13
        },
        {
          "name": "Curbside Creamery",
          "city": "Oakland, CA",
          "category": "dessert",
          "rank": 14
        },
        {
          "name": "Khao Tiew",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 14
        },
        {
          "name": "Wizards & Wands",
          "city": "San Francisco, CA",
          "category": "bar",
          "rank": 14
        },
        {
          "name": "Scoop N Chill",
          "city": "Berkeley, CA",
          "category": "dessert",
          "rank": 16
        },
        {
          "name": "Alimento",
          "city": "San Francisco, CA",
          "category": "dessert",
          "rank": 19
        },
        {
          "name": "Boba Bliss",
          "city": "Dublin, CA",
          "category": "coffee",
          "rank": 19
        },
        {
          "name": "World Famous HOTBOYS Chicken",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 19
        },
        {
          "name": "Golden Goat Coffee",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 21
        },
        {
          "name": "Maison Nico",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 21
        },
        {
          "name": "La Taqueria",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 24
        },
        {
          "name": "SOHN",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 24
        },
        {
          "name": "Tano",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 24
        },
        {
          "name": "Cracked & Battered",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 25
        },
        {
          "name": "Uji Time Dessert",
          "city": "San Francisco, CA",
          "category": "dessert",
          "rank": 25
        },
        {
          "name": "Colonial Donuts",
          "city": "Oakland, CA",
          "category": "bakery",
          "rank": 26
        },
        {
          "name": "Tadaima Mission",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 29
        },
        {
          "name": "Baklavastory.",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 30
        },
        {
          "name": "La Parilla Loca",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 31
        },
        {
          "name": "Angela's Ice Cream",
          "city": "San Francisco, CA",
          "category": "dessert",
          "rank": 32
        },
        {
          "name": "Binge Coffee House Telegraph",
          "city": "Berkeley, CA",
          "category": "coffee",
          "rank": 32
        },
        {
          "name": "Sheng Kee Bakery #19 - Berkeley",
          "city": "Berkeley, CA",
          "category": "bakery",
          "rank": 32
        },
        {
          "name": "UlavacharU Indian Restaurant",
          "city": "Sunnyvale, CA",
          "category": "restaurant",
          "rank": 32
        },
        {
          "name": "Cafe Okawari",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 34
        },
        {
          "name": "jina bakes",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 34
        },
        {
          "name": "Zareen's Palo Alto",
          "city": "Palo Alto, CA",
          "category": "restaurant",
          "rank": 34
        },
        {
          "name": "UC Dessert",
          "city": "Oakland, CA",
          "category": "dessert",
          "rank": 35
        },
        {
          "name": "Fentons Creamery",
          "city": "Oakland, CA",
          "category": "dessert",
          "rank": 37
        },
        {
          "name": "Great China",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 38
        },
        {
          "name": "heytea (Berkeley)",
          "city": "Berkeley, CA",
          "category": "coffee",
          "rank": 38
        },
        {
          "name": "Melt Me Creamery",
          "city": "Berkeley, CA",
          "category": "dessert",
          "rank": 38
        },
        {
          "name": "El Asadero Poblano",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 39
        },
        {
          "name": "Woodhouse Fish Co.",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 40
        },
        {
          "name": "8 Grams Matcha",
          "city": "Berkeley, CA",
          "category": "coffee",
          "rank": 41
        },
        {
          "name": "TP TEA Berkeley (Taiwan Professional Tea)",
          "city": "Berkeley, CA",
          "category": "coffee",
          "rank": 42
        },
        {
          "name": "Almare Gelato Italiano",
          "city": "Berkeley, CA",
          "category": "dessert",
          "rank": 44
        },
        {
          "name": "Beit Rima",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 44
        },
        {
          "name": "Little Gem Belgian Waffles",
          "city": "Berkeley, CA",
          "category": "dessert",
          "rank": 46
        },
        {
          "name": "TUR",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 46
        },
        {
          "name": "L & G Vietnamese Sandwich",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 47
        },
        {
          "name": "Yogurt Park",
          "city": "Berkeley, CA",
          "category": "dessert",
          "rank": 47
        },
        {
          "name": "Telescope Coffee",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 49
        },
        {
          "name": "Scullery",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 50
        },
        {
          "name": "Caffe Centro SP",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 51
        },
        {
          "name": "Sheba Restaurant -مطعم سبأ المطعم اليمني",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 51
        },
        {
          "name": "SIGNAL Coffee Roasters",
          "city": "Berkeley, CA",
          "category": "coffee",
          "rank": 52
        },
        {
          "name": "Fifth St. Coffee Roasting Co.",
          "city": "Gilroy, CA",
          "category": "coffee",
          "rank": 53
        },
        {
          "name": "ICICLES",
          "city": "San Francisco, CA",
          "category": "dessert",
          "rank": 53
        },
        {
          "name": "Cafenated Coffee Company",
          "city": "Berkeley, CA",
          "category": "coffee",
          "rank": 54
        },
        {
          "name": "Chinatown Taiwan Fruit Tea",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 55
        },
        {
          "name": "Dots Boba",
          "city": "San Francisco, CA",
          "category": "dessert",
          "rank": 56
        },
        {
          "name": "Sana’a Cafe",
          "city": "Oakland, CA",
          "category": "coffee",
          "rank": 56
        },
        {
          "name": "The Laundromat SF",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 56
        },
        {
          "name": "Flour + Water",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 58
        },
        {
          "name": "Deli Board",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 59
        },
        {
          "name": "Fiorella Sunset",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 60
        },
        {
          "name": "Boba Ninja",
          "city": "Berkeley, CA",
          "category": "coffee",
          "rank": 63
        },
        {
          "name": "MENSHO",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 63
        },
        {
          "name": "Zennup Mediterranean Restaurant",
          "city": "Sunnyvale, CA",
          "category": "restaurant",
          "rank": 65
        },
        {
          "name": "Taqueria El Paisa",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 66
        },
        {
          "name": "Shan Dong",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 67
        },
        {
          "name": "Enssaro Ethiopian Restaurant",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 74
        },
        {
          "name": "Cenaduria Elvira",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 75
        },
        {
          "name": "Rose Pizzeria",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 76
        },
        {
          "name": "El Gallo Giro",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 79
        },
        {
          "name": "Pizza Ponte",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 84
        },
        {
          "name": "Mezze and Mooore",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 88
        },
        {
          "name": "Taquería El Farolito",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 89
        },
        {
          "name": "Café Colucci",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 98
        },
        {
          "name": "Poggio Trattoria",
          "city": "Sausalito, CA",
          "category": "restaurant",
          "rank": 99
        },
        {
          "name": "Eggy’s Neighborhood Kitchen",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 102
        },
        {
          "name": "The Barn",
          "city": "Half Moon Bay, CA",
          "category": "restaurant",
          "rank": 104
        },
        {
          "name": "Nute's",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 106
        },
        {
          "name": "Mama's Boy",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 107
        },
        {
          "name": "李面请大碗刀削面 Li's Knife Cut Noodle",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 108
        },
        {
          "name": "Burma Superstar",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 112
        },
        {
          "name": "Marufuku Ramen",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 115
        },
        {
          "name": "Chefmus Kebab Turkish Food",
          "city": "Mountain View, CA",
          "category": "restaurant",
          "rank": 117
        },
        {
          "name": "Dolores Deluxe",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 118
        },
        {
          "name": "Verjus",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 119
        },
        {
          "name": "Viva Goa Indian Cuisine",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 121
        },
        {
          "name": "Namaste Indian Cuisine",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 123
        },
        {
          "name": "Angler",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 124
        },
        {
          "name": "Teni East Kitchen",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 125
        },
        {
          "name": "Praaw Thai",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 127
        },
        {
          "name": "Newkirk's",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 128
        },
        {
          "name": "Dumpling Story",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 129
        },
        {
          "name": "Dishdash Middle Eastern Cuisine",
          "city": "Sunnyvale, CA",
          "category": "restaurant",
          "rank": 131
        },
        {
          "name": "Outta Sight Pizza II",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 134
        },
        {
          "name": "Tacos El Autlense LLC",
          "city": "Albany, CA",
          "category": "restaurant",
          "rank": 137
        },
        {
          "name": "Tony's Pizza Napoletana",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 142
        },
        {
          "name": "Cheese Board Collective Pizzeria",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 144
        },
        {
          "name": "Ararat Kebab & Gyros",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 147
        },
        {
          "name": "Turquaz SF",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 149
        },
        {
          "name": "To The Moon",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 152
        },
        {
          "name": "Kin Khao",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 153
        },
        {
          "name": "Flour + Water Pizzeria",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 157
        },
        {
          "name": "Copra",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 162
        },
        {
          "name": "Wally's Cafe (Emeryville)",
          "city": "Emeryville, CA",
          "category": "restaurant",
          "rank": 168
        },
        {
          "name": "Taqueria Vallarta",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 169
        },
        {
          "name": "Tacos Ameca",
          "city": "Gilroy, CA",
          "category": "restaurant",
          "rank": 170
        },
        {
          "name": "Spices 3 辣妹子",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 171
        },
        {
          "name": "Shawarmaji",
          "city": "Santa Clara, CA",
          "category": "restaurant",
          "rank": 175
        },
        {
          "name": "Anjappar Chettinad Cuisine",
          "city": "Dublin, CA",
          "category": "restaurant",
          "rank": 179
        },
        {
          "name": "Comal",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 182
        },
        {
          "name": "Pizzeria da Laura",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 183
        },
        {
          "name": "Lao Garden Restaurant & Bar",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 188
        },
        {
          "name": "Pakwan Restaurant",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 195
        },
        {
          "name": "Southside Station",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 198
        },
        {
          "name": "Burma Superstar",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 200
        },
        {
          "name": "Taishoken San Francisco",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 201
        },
        {
          "name": "Zachary's Chicago Pizza",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 205
        },
        {
          "name": "Saratoga Bagels",
          "city": "Saratoga, CA",
          "category": "restaurant",
          "rank": 206
        },
        {
          "name": "Angeline's Louisiana Kitchen",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 207
        },
        {
          "name": "June's Pizza",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 209
        },
        {
          "name": "Hard Rock Cafe",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 211
        },
        {
          "name": "IPPUDO BERKELEY",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 214
        },
        {
          "name": "Lo Coco's",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 216
        },
        {
          "name": "Imm Thai Street Food",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 217
        },
        {
          "name": "My-O-My",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 219
        },
        {
          "name": "Bay of Burma",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 220
        },
        {
          "name": "Thai Table",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 221
        },
        {
          "name": "Sourdough and Co",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 223
        },
        {
          "name": "Viks Chaat",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 224
        },
        {
          "name": "Chengdu Style Restaurant",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 225
        },
        {
          "name": "Capo's",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 227
        },
        {
          "name": "The M Stop Deli",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 232
        },
        {
          "name": "Tsuruya",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 234
        },
        {
          "name": "Turtle Tower",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 235
        },
        {
          "name": "Moku Hawaiian BBQ (Berkeley)",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 236
        },
        {
          "name": "Kitchen Story Oakland",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 237
        },
        {
          "name": "Dough Zone Dumpling House Cupertino",
          "city": "Cupertino, CA",
          "category": "restaurant",
          "rank": 238
        },
        {
          "name": "Shawarmaji",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 241
        },
        {
          "name": "84 Viet",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 242
        },
        {
          "name": "Dave's Hot Chicken",
          "city": "El Cerrito, CA",
          "category": "restaurant",
          "rank": 248
        },
        {
          "name": "La Note",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 249
        },
        {
          "name": "Tacos El Gordo",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 253
        },
        {
          "name": "Noodle Dynasty",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 255
        },
        {
          "name": "Easterly-Berkeley",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 256
        },
        {
          "name": "Biryani Spot",
          "city": "Dublin, CA",
          "category": "restaurant",
          "rank": 263
        },
        {
          "name": "Gogi Time",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 267
        },
        {
          "name": "Berkeley Social Club",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 269
        },
        {
          "name": "5 Spiced Kitchen",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 270
        },
        {
          "name": "Freehouse",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 272
        },
        {
          "name": "MoMo House",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 274
        },
        {
          "name": "Taco Bell Cantina",
          "city": "Pacifica, CA",
          "category": "restaurant",
          "rank": 275
        },
        {
          "name": "La Mission",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 276
        },
        {
          "name": "Racha Café",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 277
        },
        {
          "name": "Ox 9 Lanzhou Handpulled Noodles",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 279
        },
        {
          "name": "Mezzo",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 280
        },
        {
          "name": "O2 Eatery",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 281
        },
        {
          "name": "Hinodeya Ramen Chestnut",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 282
        },
        {
          "name": "Foreign Cinema",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 286
        },
        {
          "name": "D'Yar",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 288
        },
        {
          "name": "Oori Rice Triangles",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 290
        },
        {
          "name": "Jupiter",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 291
        },
        {
          "name": "MoMo Masalas",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 293
        },
        {
          "name": "Mendocino Farms",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 294
        },
        {
          "name": "sweetgreen",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 295
        },
        {
          "name": "9 Julio Empanada Kitchen",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 297
        },
        {
          "name": "Falafel Boy",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 298
        },
        {
          "name": "L &L Hawaiian Barbecue",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 302
        },
        {
          "name": "Artichoke Basille's Pizza",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 303
        },
        {
          "name": "Dumpling Home",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 307
        },
        {
          "name": "El Talpense Mexican Restaurant",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 308
        },
        {
          "name": "Sweetheart Café",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 310
        },
        {
          "name": "Hawking Bird",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 312
        },
        {
          "name": "Gypsy's Trattoria Italiana",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 313
        },
        {
          "name": "Wikiwiki Hawaiian BBQ",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 315
        },
        {
          "name": "La Val's Pizza",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 320
        },
        {
          "name": "Nick The Greek Berkeley",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 321
        },
        {
          "name": "Crave Subs (Berkeley)",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 323
        },
        {
          "name": "Atlas Bites",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 324
        },
        {
          "name": "Sliver Pizzeria",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 331
        },
        {
          "name": "Impression of LanZhou",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 332
        },
        {
          "name": "Grégoire Restaurant",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 333
        },
        {
          "name": "KoJa Kitchen",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 334
        },
        {
          "name": "Marugame Udon",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 335
        },
        {
          "name": "Soba Ichi",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 339
        },
        {
          "name": "四姐 Special Noodle",
          "city": "Richmond, CA",
          "category": "restaurant",
          "rank": 343
        },
        {
          "name": "Jot Mahal Palace of Indian Cuisine",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 347
        },
        {
          "name": "La Burrita",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 350
        },
        {
          "name": "Clark Kerr Dining",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 353
        },
        {
          "name": "Café 3",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 354
        },
        {
          "name": "Foothill Dining",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 355
        },
        {
          "name": "Crossroads",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 356
        }
      ]
    },
    {
      "slug": "new-york",
      "name": "new york",
      "placeCount": 78,
      "savedCount": 115,
      "coordinates": {
        "longitude": -74.01,
        "latitude": 40.71
      },
      "cities": [
        {
          "name": "New York, NY",
          "placeCount": 78
        }
      ],
      "categories": [
        {
          "name": "restaurant",
          "placeCount": 53
        },
        {
          "name": "coffee",
          "placeCount": 12
        },
        {
          "name": "bakery",
          "placeCount": 8
        },
        {
          "name": "dessert",
          "placeCount": 4
        },
        {
          "name": "bar",
          "placeCount": 1
        }
      ],
      "places": [
        {
          "name": "Semma",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 2
        },
        {
          "name": "Ten Thousand Coffee",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 2
        },
        {
          "name": "Mary O's Irish Soda Bread Shop",
          "city": "New York, NY",
          "category": "bakery",
          "rank": 3
        },
        {
          "name": "Caffe Paradiso",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 4
        },
        {
          "name": "La Cabra Bakery",
          "city": "New York, NY",
          "category": "bakery",
          "rank": 4
        },
        {
          "name": "ENLY",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 5
        },
        {
          "name": "Dialogue Coffee & Flowers",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 6
        },
        {
          "name": "HYDERABADI ZAIQA",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 6
        },
        {
          "name": "Rivareno Gelato",
          "city": "New York, NY",
          "category": "dessert",
          "rank": 6
        },
        {
          "name": "Sunday Morning",
          "city": "New York, NY",
          "category": "bakery",
          "rank": 7
        },
        {
          "name": "Caffè Panna",
          "city": "New York, NY",
          "category": "dessert",
          "rank": 9
        },
        {
          "name": "Top Thai Greenwich",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 9
        },
        {
          "name": "Soothr",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 11
        },
        {
          "name": "Noona's Ice Cream",
          "city": "New York, NY",
          "category": "dessert",
          "rank": 12
        },
        {
          "name": "San Antonios",
          "city": "New York, NY",
          "category": "bar",
          "rank": 12
        },
        {
          "name": "Son del North",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 13
        },
        {
          "name": "Remi Flower & Coffee",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 16
        },
        {
          "name": "Adel's Famous Halal Food",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 18
        },
        {
          "name": "Supermoon Bakehouse",
          "city": "New York, NY",
          "category": "bakery",
          "rank": 19
        },
        {
          "name": "Molly Tea",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 20
        },
        {
          "name": "Popup Bagels",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 21
        },
        {
          "name": "Little Pie Company",
          "city": "New York, NY",
          "category": "bakery",
          "rank": 22
        },
        {
          "name": "L'industrie Pizzeria - Williamsburg",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 23
        },
        {
          "name": "Miss Madeleine",
          "city": "New York, NY",
          "category": "bakery",
          "rank": 27
        },
        {
          "name": "Raku",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 27
        },
        {
          "name": "Apollo Bagels",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 28
        },
        {
          "name": "hani’s bakery + café",
          "city": "New York, NY",
          "category": "bakery",
          "rank": 29
        },
        {
          "name": "Kidilum",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 29
        },
        {
          "name": "Mama's TOO! Pizzeria West Village",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 30
        },
        {
          "name": "Mei Lai Wah",
          "city": "New York, NY",
          "category": "bakery",
          "rank": 31
        },
        {
          "name": "Tompkins Square Bagels",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 33
        },
        {
          "name": "Pranakhon",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 35
        },
        {
          "name": "Oren’s Coffee",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 36
        },
        {
          "name": "Pecking House Chinatown",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 37
        },
        {
          "name": "Lê Phin",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 43
        },
        {
          "name": "mika's direction",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 44
        },
        {
          "name": "Derby Cup Coffee",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 45
        },
        {
          "name": "Bánh Mì Cô Út 2",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 48
        },
        {
          "name": "Maiko Matcha Cafe",
          "city": "New York, NY",
          "category": "dessert",
          "rank": 57
        },
        {
          "name": "7 Spring",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 59
        },
        {
          "name": "JOE & THE JUICE",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 62
        },
        {
          "name": "Cello's Pizzeria",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 64
        },
        {
          "name": "PopUp Bagels",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 71
        },
        {
          "name": "Joe & Pat’s NYC",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 82
        },
        {
          "name": "Añejo Tribeca",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 83
        },
        {
          "name": "LOS TACOS No.1",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 90
        },
        {
          "name": "Lucia Pizza Of SoHo",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 103
        },
        {
          "name": "Prince Street Pizza",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 130
        },
        {
          "name": "Potluck Club",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 139
        },
        {
          "name": "Slicehaus Pizzeria",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 140
        },
        {
          "name": "Upside Pizza",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 141
        },
        {
          "name": "Leon's Bagels",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 150
        },
        {
          "name": "albadawi",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 163
        },
        {
          "name": "New World Mall Food Court",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 189
        },
        {
          "name": "THE ELK",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 190
        },
        {
          "name": "Campbell and Co - Williamsburg",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 191
        },
        {
          "name": "Ichiran",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 194
        },
        {
          "name": "L’industrie Pizzeria - West Village",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 204
        },
        {
          "name": "Electric Burrito",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 210
        },
        {
          "name": "Oyshi Halal Food Truck",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 213
        },
        {
          "name": "Joe's Pizza Broadway",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 222
        },
        {
          "name": "Namkeen",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 228
        },
        {
          "name": "Bluestone Lane Upper West Side Café",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 240
        },
        {
          "name": "Wayla",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 246
        },
        {
          "name": "Fonty’s Deli + Dukaan",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 247
        },
        {
          "name": "Rowdy Rooster - Penn",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 284
        },
        {
          "name": "Kyma",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 285
        },
        {
          "name": "Lanzhou Handmade Noodle",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 287
        },
        {
          "name": "KOBA Korean BBQ",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 289
        },
        {
          "name": "Joe’s Pizza",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 304
        },
        {
          "name": "Ci Siamo",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 306
        },
        {
          "name": "Longo Bros",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 319
        },
        {
          "name": "Liberty Bagels Midtown",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 340
        },
        {
          "name": "The Smith",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 344
        },
        {
          "name": "2 Bros Pizza",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 345
        },
        {
          "name": "Tacombi",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 346
        },
        {
          "name": "Steak Frites Bistro",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 349
        },
        {
          "name": "Vito's Slices and Ices",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 352
        }
      ]
    },
    {
      "slug": "orange-county",
      "name": "orange county",
      "placeCount": 61,
      "savedCount": 18,
      "coordinates": {
        "longitude": -117.85,
        "latitude": 33.72
      },
      "cities": [
        {
          "name": "Irvine, CA",
          "placeCount": 10
        },
        {
          "name": "Santa Ana, CA",
          "placeCount": 10
        },
        {
          "name": "Tustin, CA",
          "placeCount": 10
        },
        {
          "name": "Costa Mesa, CA",
          "placeCount": 9
        },
        {
          "name": "Anaheim, CA",
          "placeCount": 7
        },
        {
          "name": "Garden Grove, CA",
          "placeCount": 3
        },
        {
          "name": "Newport Beach, CA",
          "placeCount": 3
        },
        {
          "name": "Buena Park, CA",
          "placeCount": 2
        },
        {
          "name": "Fountain Valley, CA",
          "placeCount": 2
        },
        {
          "name": "Orange, CA",
          "placeCount": 2
        },
        {
          "name": "Huntington Beach, CA",
          "placeCount": 1
        },
        {
          "name": "Laguna Beach, CA",
          "placeCount": 1
        },
        {
          "name": "Westminster, CA",
          "placeCount": 1
        }
      ],
      "categories": [
        {
          "name": "restaurant",
          "placeCount": 41
        },
        {
          "name": "dessert",
          "placeCount": 10
        },
        {
          "name": "coffee",
          "placeCount": 5
        },
        {
          "name": "bar",
          "placeCount": 3
        },
        {
          "name": "bakery",
          "placeCount": 2
        }
      ],
      "places": [
        {
          "name": "Hidden House Coffee",
          "city": "Santa Ana, CA",
          "category": "coffee",
          "rank": 1
        },
        {
          "name": "MADE Coffee",
          "city": "Costa Mesa, CA",
          "category": "coffee",
          "rank": 3
        },
        {
          "name": "Sul & Beans",
          "city": "Buena Park, CA",
          "category": "dessert",
          "rank": 3
        },
        {
          "name": "The Bungalow Huntington Beach",
          "city": "Huntington Beach, CA",
          "category": "bar",
          "rank": 4
        },
        {
          "name": "Woody's Wharf",
          "city": "Newport Beach, CA",
          "category": "bar",
          "rank": 7
        },
        {
          "name": "Ayer Coffee",
          "city": "Tustin, CA",
          "category": "coffee",
          "rank": 10
        },
        {
          "name": "INI Ristorante",
          "city": "Fountain Valley, CA",
          "category": "restaurant",
          "rank": 12
        },
        {
          "name": "Mutt Lynch's",
          "city": "Newport Beach, CA",
          "category": "bar",
          "rank": 15
        },
        {
          "name": "Hanuman Thai Eatery",
          "city": "Costa Mesa, CA",
          "category": "restaurant",
          "rank": 16
        },
        {
          "name": "Junbi - Irvine",
          "city": "Irvine, CA",
          "category": "coffee",
          "rank": 18
        },
        {
          "name": "Don Churros Gomez",
          "city": "Anaheim, CA",
          "category": "dessert",
          "rank": 20
        },
        {
          "name": "Manaao - Thai Comfort Food",
          "city": "Tustin, CA",
          "category": "restaurant",
          "rank": 22
        },
        {
          "name": "Cream Pan",
          "city": "Tustin, CA",
          "category": "bakery",
          "rank": 23
        },
        {
          "name": "torotea",
          "city": "Santa Ana, CA",
          "category": "coffee",
          "rank": 26
        },
        {
          "name": "Seaside Donuts Bakery",
          "city": "Newport Beach, CA",
          "category": "bakery",
          "rank": 33
        },
        {
          "name": "Willie’s Churros",
          "city": "Anaheim, CA",
          "category": "dessert",
          "rank": 33
        },
        {
          "name": "Chiang Rai - Tustin",
          "city": "Tustin, CA",
          "category": "restaurant",
          "rank": 36
        },
        {
          "name": "Afters Ice Cream",
          "city": "Orange, CA",
          "category": "dessert",
          "rank": 40
        },
        {
          "name": "Stella Jean's Ice Cream The LAB",
          "city": "Costa Mesa, CA",
          "category": "dessert",
          "rank": 41
        },
        {
          "name": "Claws and Cream",
          "city": "Garden Grove, CA",
          "category": "dessert",
          "rank": 42
        },
        {
          "name": "Taibat Noodle House 泰巴特清真面馆",
          "city": "Santa Ana, CA",
          "category": "restaurant",
          "rank": 42
        },
        {
          "name": "Hans' Homemade Ice Cream & Deli",
          "city": "Santa Ana, CA",
          "category": "dessert",
          "rank": 45
        },
        {
          "name": "Wanderlust Creamery",
          "city": "Irvine, CA",
          "category": "dessert",
          "rank": 49
        },
        {
          "name": "Santa Ana Brunch Club",
          "city": "Santa Ana, CA",
          "category": "restaurant",
          "rank": 50
        },
        {
          "name": "Mint Julep Bar",
          "city": "Anaheim, CA",
          "category": "dessert",
          "rank": 52
        },
        {
          "name": "SOMISOMI",
          "city": "Irvine, CA",
          "category": "dessert",
          "rank": 54
        },
        {
          "name": "Sababa Falafel Shop",
          "city": "Garden Grove, CA",
          "category": "restaurant",
          "rank": 92
        },
        {
          "name": "The Taco Stand",
          "city": "Orange, CA",
          "category": "restaurant",
          "rank": 93
        },
        {
          "name": "Sichuan Impression",
          "city": "Tustin, CA",
          "category": "restaurant",
          "rank": 95
        },
        {
          "name": "The Vox Kitchen",
          "city": "Fountain Valley, CA",
          "category": "restaurant",
          "rank": 100
        },
        {
          "name": "Rotana Alsham Shawarma",
          "city": "Santa Ana, CA",
          "category": "restaurant",
          "rank": 113
        },
        {
          "name": "Tacos Luci",
          "city": "Santa Ana, CA",
          "category": "restaurant",
          "rank": 114
        },
        {
          "name": "'Ai Pono Cafe",
          "city": "Costa Mesa, CA",
          "category": "restaurant",
          "rank": 120
        },
        {
          "name": "Pad Thai Restaurant",
          "city": "Santa Ana, CA",
          "category": "restaurant",
          "rank": 133
        },
        {
          "name": "The Crack Shack",
          "city": "Costa Mesa, CA",
          "category": "restaurant",
          "rank": 158
        },
        {
          "name": "MASALA BAE",
          "city": "Tustin, CA",
          "category": "restaurant",
          "rank": 161
        },
        {
          "name": "Sup Noodle Bar - Irvine",
          "city": "Irvine, CA",
          "category": "restaurant",
          "rank": 172
        },
        {
          "name": "Naan & Kabob",
          "city": "Tustin, CA",
          "category": "restaurant",
          "rank": 176
        },
        {
          "name": "Din Tai Fung",
          "city": "Anaheim, CA",
          "category": "restaurant",
          "rank": 180
        },
        {
          "name": "THH Sandwiches",
          "city": "Tustin, CA",
          "category": "restaurant",
          "rank": 184
        },
        {
          "name": "Bánh Mì & Chè Cali Bakery",
          "city": "Westminster, CA",
          "category": "restaurant",
          "rank": 186
        },
        {
          "name": "NEP Cafe",
          "city": "Irvine, CA",
          "category": "restaurant",
          "rank": 187
        },
        {
          "name": "All That Shabu",
          "city": "Irvine, CA",
          "category": "restaurant",
          "rank": 192
        },
        {
          "name": "X-Fish Izakaya",
          "city": "Buena Park, CA",
          "category": "restaurant",
          "rank": 193
        },
        {
          "name": "Southern Spice",
          "city": "Irvine, CA",
          "category": "restaurant",
          "rank": 197
        },
        {
          "name": "Barolo Italian Cafe",
          "city": "Tustin, CA",
          "category": "restaurant",
          "rank": 215
        },
        {
          "name": "Tacos Los Cholos",
          "city": "Anaheim, CA",
          "category": "restaurant",
          "rank": 229
        },
        {
          "name": "Shirley's Bagels",
          "city": "Laguna Beach, CA",
          "category": "restaurant",
          "rank": 250
        },
        {
          "name": "CAVA",
          "city": "Irvine, CA",
          "category": "restaurant",
          "rank": 252
        },
        {
          "name": "KoKo Chicken & BBQ",
          "city": "Garden Grove, CA",
          "category": "restaurant",
          "rank": 254
        },
        {
          "name": "Seven Grams",
          "city": "Tustin, CA",
          "category": "restaurant",
          "rank": 257
        },
        {
          "name": "Slurpin' Ramen Bar - Costa Mesa",
          "city": "Costa Mesa, CA",
          "category": "restaurant",
          "rank": 260
        },
        {
          "name": "Kaju Soft Tofu Restaurant (Culver)",
          "city": "Irvine, CA",
          "category": "restaurant",
          "rank": 292
        },
        {
          "name": "Bred Hot Chicken - Costa Mesa",
          "city": "Costa Mesa, CA",
          "category": "restaurant",
          "rank": 299
        },
        {
          "name": "AhbA",
          "city": "Costa Mesa, CA",
          "category": "restaurant",
          "rank": 300
        },
        {
          "name": "BCD Tofu House",
          "city": "Irvine, CA",
          "category": "restaurant",
          "rank": 311
        },
        {
          "name": "Pym Test Kitchen",
          "city": "Anaheim, CA",
          "category": "restaurant",
          "rank": 314
        },
        {
          "name": "Gus's World Famous Fried Chicken",
          "city": "Santa Ana, CA",
          "category": "restaurant",
          "rank": 318
        },
        {
          "name": "Turkey Leg Cart",
          "city": "Anaheim, CA",
          "category": "restaurant",
          "rank": 330
        },
        {
          "name": "Kashiwa Ramen",
          "city": "Costa Mesa, CA",
          "category": "restaurant",
          "rank": 337
        },
        {
          "name": "Niki's Halal Grill & Karahi - Authentic Pakistani and Indian Food",
          "city": "Santa Ana, CA",
          "category": "restaurant",
          "rank": 351
        }
      ]
    },
    {
      "slug": "los-angeles",
      "name": "los angeles",
      "placeCount": 54,
      "savedCount": 136,
      "coordinates": {
        "longitude": -118.24,
        "latitude": 34.05
      },
      "cities": [
        {
          "name": "Los Angeles, CA",
          "placeCount": 39
        },
        {
          "name": "Santa Clarita, CA",
          "placeCount": 7
        },
        {
          "name": "Pasadena, CA",
          "placeCount": 2
        },
        {
          "name": "Santa Monica, CA",
          "placeCount": 2
        },
        {
          "name": "West Hollywood, CA",
          "placeCount": 2
        },
        {
          "name": "Avalon, CA",
          "placeCount": 1
        },
        {
          "name": "Burbank, CA",
          "placeCount": 1
        }
      ],
      "categories": [
        {
          "name": "restaurant",
          "placeCount": 35
        },
        {
          "name": "dessert",
          "placeCount": 9
        },
        {
          "name": "coffee",
          "placeCount": 7
        },
        {
          "name": "bar",
          "placeCount": 2
        },
        {
          "name": "bakery",
          "placeCount": 1
        }
      ],
      "places": [
        {
          "name": "Porto's Bakery and Cafe",
          "city": "Burbank, CA",
          "category": "bakery",
          "rank": 1
        },
        {
          "name": "Indigo Cow",
          "city": "Los Angeles, CA",
          "category": "dessert",
          "rank": 2
        },
        {
          "name": "Howlin' Ray's Hot Chicken - Pasadena",
          "city": "Pasadena, CA",
          "category": "restaurant",
          "rank": 3
        },
        {
          "name": "BADMAASH Fairfax",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 5
        },
        {
          "name": "Saffron & Rose Ice Cream",
          "city": "Los Angeles, CA",
          "category": "dessert",
          "rank": 7
        },
        {
          "name": "Villa's Tacos Los Angeles",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 7
        },
        {
          "name": "Bonsai Coffee & Bar",
          "city": "Los Angeles, CA",
          "category": "coffee",
          "rank": 8
        },
        {
          "name": "Howlin' Ray's Hot Chicken - Chinatown",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 8
        },
        {
          "name": "Apollonia's Pizzeria",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 10
        },
        {
          "name": "Kanomwaan Thai Gelato and Dessert Cafe",
          "city": "Los Angeles, CA",
          "category": "dessert",
          "rank": 11
        },
        {
          "name": "Bacio di Latte | Larchmont Village, LA",
          "city": "Los Angeles, CA",
          "category": "dessert",
          "rank": 15
        },
        {
          "name": "Barney's Beanery Westwood",
          "city": "Los Angeles, CA",
          "category": "bar",
          "rank": 17
        },
        {
          "name": "Brothers Cousins Tacos",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 17
        },
        {
          "name": "La La Land Kind Cafe",
          "city": "Los Angeles, CA",
          "category": "coffee",
          "rank": 17
        },
        {
          "name": "Los Globos",
          "city": "Los Angeles, CA",
          "category": "bar",
          "rank": 19
        },
        {
          "name": "Salt & Straw",
          "city": "Los Angeles, CA",
          "category": "dessert",
          "rank": 21
        },
        {
          "name": "Mamie Italian Kitchen",
          "city": "West Hollywood, CA",
          "category": "restaurant",
          "rank": 26
        },
        {
          "name": "Sul & Beans",
          "city": "Los Angeles, CA",
          "category": "dessert",
          "rank": 26
        },
        {
          "name": "Tang and Java",
          "city": "Los Angeles, CA",
          "category": "coffee",
          "rank": 37
        },
        {
          "name": "Dama Grill (Sahelnom)",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 45
        },
        {
          "name": "Happy Days Cafe",
          "city": "Los Angeles, CA",
          "category": "dessert",
          "rank": 48
        },
        {
          "name": "Salt & Straw",
          "city": "Los Angeles, CA",
          "category": "dessert",
          "rank": 50
        },
        {
          "name": "Estillo Tijuana Angels Tacos",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 52
        },
        {
          "name": "McConnell's Fine Ice Creams - Third Street Promenade",
          "city": "Santa Monica, CA",
          "category": "dessert",
          "rank": 55
        },
        {
          "name": "Sweets Talk",
          "city": "West Hollywood, CA",
          "category": "coffee",
          "rank": 57
        },
        {
          "name": "% ARABICA LOS ANGELES THE GROVE",
          "city": "Los Angeles, CA",
          "category": "coffee",
          "rank": 58
        },
        {
          "name": "Alfred Coffee",
          "city": "Los Angeles, CA",
          "category": "coffee",
          "rank": 60
        },
        {
          "name": "786 Degrees Pizza - Los Angeles",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 61
        },
        {
          "name": "Trophy Coffee",
          "city": "Santa Clarita, CA",
          "category": "coffee",
          "rank": 61
        },
        {
          "name": "Holbox",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 69
        },
        {
          "name": "Ruen Pair",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 72
        },
        {
          "name": "Erewhon",
          "city": "Pasadena, CA",
          "category": "restaurant",
          "rank": 78
        },
        {
          "name": "Tacos Chidos",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 94
        },
        {
          "name": "Descanso Beach Club",
          "city": "Avalon, CA",
          "category": "restaurant",
          "rank": 96
        },
        {
          "name": "Leo's Tacos Truck",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 97
        },
        {
          "name": "Le Coupe",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 101
        },
        {
          "name": "Calic Bagel",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 116
        },
        {
          "name": "Sobuneh",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 122
        },
        {
          "name": "Liu's Cafe - Westwood",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 135
        },
        {
          "name": "Carla Cafe",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 136
        },
        {
          "name": "Tsukiyo sushi",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 138
        },
        {
          "name": "Great Indian Kitchen",
          "city": "Santa Clarita, CA",
          "category": "restaurant",
          "rank": 145
        },
        {
          "name": "Ggiata Delicatessen",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 146
        },
        {
          "name": "MADRE RESTAURANT & MEZCALERIA",
          "city": "Santa Clarita, CA",
          "category": "restaurant",
          "rank": 164
        },
        {
          "name": "WAKE AND LATE",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 166
        },
        {
          "name": "Barnrau Thai Halal Cuisine",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 196
        },
        {
          "name": "Daves Hot Chicken",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 233
        },
        {
          "name": "Omaya’s Lebanese Cuisine",
          "city": "Santa Clarita, CA",
          "category": "restaurant",
          "rank": 239
        },
        {
          "name": "Lima Limon Peruvian Restaurant",
          "city": "Santa Clarita, CA",
          "category": "restaurant",
          "rank": 243
        },
        {
          "name": "Thai Yaki",
          "city": "Santa Clarita, CA",
          "category": "restaurant",
          "rank": 244
        },
        {
          "name": "Gogobop Korean Rice Bar",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 305
        },
        {
          "name": "Simpang Asia",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 309
        },
        {
          "name": "Eggs 'n' Things Valencia",
          "city": "Santa Clarita, CA",
          "category": "restaurant",
          "rank": 322
        },
        {
          "name": "1212 Santa Monica",
          "city": "Santa Monica, CA",
          "category": "restaurant",
          "rank": 341
        }
      ]
    },
    {
      "slug": "london",
      "name": "london",
      "placeCount": 30,
      "savedCount": 16,
      "coordinates": {
        "longitude": -0.13,
        "latitude": 51.51
      },
      "cities": [
        {
          "name": "London",
          "placeCount": 30
        }
      ],
      "categories": [
        {
          "name": "restaurant",
          "placeCount": 12
        },
        {
          "name": "bakery",
          "placeCount": 6
        },
        {
          "name": "bar",
          "placeCount": 5
        },
        {
          "name": "coffee",
          "placeCount": 5
        },
        {
          "name": "dessert",
          "placeCount": 2
        }
      ],
      "places": [
        {
          "name": "The Lyric",
          "city": "London",
          "category": "bar",
          "rank": 2
        },
        {
          "name": "Below",
          "city": "London",
          "category": "bar",
          "rank": 3
        },
        {
          "name": "Manetta's Bar",
          "city": "London",
          "category": "bar",
          "rank": 5
        },
        {
          "name": "Slim Jim's Liquor Store",
          "city": "London",
          "category": "bar",
          "rank": 10
        },
        {
          "name": "Pophams",
          "city": "London",
          "category": "bakery",
          "rank": 11
        },
        {
          "name": "Bread Ahead Bakery School | Borough Market",
          "city": "London",
          "category": "bakery",
          "rank": 12
        },
        {
          "name": "Jolene Colebrooke Row",
          "city": "London",
          "category": "bakery",
          "rank": 15
        },
        {
          "name": "Nostos Coffee",
          "city": "London",
          "category": "coffee",
          "rank": 15
        },
        {
          "name": "The Clarence",
          "city": "London",
          "category": "bar",
          "rank": 16
        },
        {
          "name": "The Dusty Knuckle Bakery",
          "city": "London",
          "category": "bakery",
          "rank": 17
        },
        {
          "name": "The Ginger Pig",
          "city": "London",
          "category": "bakery",
          "rank": 18
        },
        {
          "name": "Udderlicious Ice Cream",
          "city": "London",
          "category": "dessert",
          "rank": 24
        },
        {
          "name": "Rosslyn Coffee Fenchurch Street Station",
          "city": "London",
          "category": "coffee",
          "rank": 25
        },
        {
          "name": "GAIL's Bakery Islington",
          "city": "London",
          "category": "bakery",
          "rank": 28
        },
        {
          "name": "Bilmonte",
          "city": "London",
          "category": "dessert",
          "rank": 31
        },
        {
          "name": "The English Rose Café and Tea Shop",
          "city": "London",
          "category": "coffee",
          "rank": 33
        },
        {
          "name": "Matchado",
          "city": "London",
          "category": "coffee",
          "rank": 39
        },
        {
          "name": "Carpo",
          "city": "London",
          "category": "coffee",
          "rank": 47
        },
        {
          "name": "The Pig and Butcher",
          "city": "London",
          "category": "restaurant",
          "rank": 62
        },
        {
          "name": "Breadstall Pizza",
          "city": "London",
          "category": "restaurant",
          "rank": 85
        },
        {
          "name": "The Tamil Prince",
          "city": "London",
          "category": "restaurant",
          "rank": 109
        },
        {
          "name": "Kolkati Camden market",
          "city": "London",
          "category": "restaurant",
          "rank": 110
        },
        {
          "name": "Dishoom Covent Garden",
          "city": "London",
          "category": "restaurant",
          "rank": 111
        },
        {
          "name": "The Black Pig",
          "city": "London",
          "category": "restaurant",
          "rank": 155
        },
        {
          "name": "50 Kalò di Ciro Salvo Pizzeria London",
          "city": "London",
          "category": "restaurant",
          "rank": 159
        },
        {
          "name": "KHAAO - CAMDEN LOCK",
          "city": "London",
          "category": "restaurant",
          "rank": 202
        },
        {
          "name": "Nando's Islington",
          "city": "London",
          "category": "restaurant",
          "rank": 208
        },
        {
          "name": "Hanbaagaasuuteeki",
          "city": "London",
          "category": "restaurant",
          "rank": 230
        },
        {
          "name": "The Ottoman Doner® - Angel",
          "city": "London",
          "category": "restaurant",
          "rank": 245
        },
        {
          "name": "Poppies Fish & Chips",
          "city": "London",
          "category": "restaurant",
          "rank": 265
        }
      ]
    },
    {
      "slug": "central-mexico",
      "name": "central mexico",
      "placeCount": 22,
      "savedCount": 5,
      "coordinates": {
        "longitude": -99.13,
        "latitude": 19.43
      },
      "cities": [
        {
          "name": "Mexico City",
          "placeCount": 14
        },
        {
          "name": "Puebla",
          "placeCount": 4
        },
        {
          "name": "Tepoztlán",
          "placeCount": 2
        },
        {
          "name": "Cuauhtémoc",
          "placeCount": 1
        },
        {
          "name": "San Andrés Cholula",
          "placeCount": 1
        }
      ],
      "categories": [
        {
          "name": "restaurant",
          "placeCount": 13
        },
        {
          "name": "coffee",
          "placeCount": 4
        },
        {
          "name": "bakery",
          "placeCount": 2
        },
        {
          "name": "bar",
          "placeCount": 2
        },
        {
          "name": "dessert",
          "placeCount": 1
        }
      ],
      "places": [
        {
          "name": "Limantour",
          "city": "Mexico City",
          "category": "bar",
          "rank": 6
        },
        {
          "name": "cincodoce",
          "city": "Mexico City",
          "category": "bar",
          "rank": 9
        },
        {
          "name": "BUNA Condesa",
          "city": "Mexico City",
          "category": "coffee",
          "rank": 14
        },
        {
          "name": "Panadería Rosetta",
          "city": "Mexico City",
          "category": "bakery",
          "rank": 14
        },
        {
          "name": "Tacos del Valle (Roma Norte)",
          "city": "Mexico City",
          "category": "restaurant",
          "rank": 15
        },
        {
          "name": "Churreria El Moro Centro",
          "city": "Mexico City",
          "category": "dessert",
          "rank": 18
        },
        {
          "name": "La Gran Fama",
          "city": "Puebla",
          "category": "bakery",
          "rank": 20
        },
        {
          "name": "La Cuatro Barra de Café",
          "city": "Puebla",
          "category": "coffee",
          "rank": 28
        },
        {
          "name": "CUMBÉ Coffee Roasters",
          "city": "Mexico City",
          "category": "coffee",
          "rank": 31
        },
        {
          "name": "Mural de los Poblanos",
          "city": "Puebla",
          "category": "restaurant",
          "rank": 41
        },
        {
          "name": "Maizajo, Molino y Tortillería",
          "city": "Mexico City",
          "category": "restaurant",
          "rank": 54
        },
        {
          "name": "El Hidalguense",
          "city": "Mexico City",
          "category": "restaurant",
          "rank": 55
        },
        {
          "name": "Masala y Maíz",
          "city": "Cuauhtémoc",
          "category": "restaurant",
          "rank": 57
        },
        {
          "name": "Chocolatería La Rifa",
          "city": "Mexico City",
          "category": "coffee",
          "rank": 65
        },
        {
          "name": "Antojitos mexicanos Doña Queta",
          "city": "Tepoztlán",
          "category": "restaurant",
          "rank": 70
        },
        {
          "name": "Los Tacos",
          "city": "Mexico City",
          "category": "restaurant",
          "rank": 77
        },
        {
          "name": "Café Tacobar",
          "city": "Mexico City",
          "category": "restaurant",
          "rank": 86
        },
        {
          "name": "Los Cocuyos",
          "city": "Mexico City",
          "category": "restaurant",
          "rank": 91
        },
        {
          "name": "El lugar de siempre",
          "city": "Tepoztlán",
          "category": "restaurant",
          "rank": 126
        },
        {
          "name": "Santoua Cholula",
          "city": "San Andrés Cholula",
          "category": "restaurant",
          "rank": 203
        },
        {
          "name": "Taqueria La Oriental",
          "city": "Puebla",
          "category": "restaurant",
          "rank": 268
        },
        {
          "name": "Restaurante Garabatos Centro",
          "city": "Mexico City",
          "category": "restaurant",
          "rank": 316
        }
      ]
    },
    {
      "slug": "india",
      "name": "india",
      "placeCount": 20,
      "savedCount": 0,
      "coordinates": {
        "longitude": 78.49,
        "latitude": 20.59
      },
      "cities": [
        {
          "name": "Hyderabad",
          "placeCount": 13
        },
        {
          "name": "Forest Block",
          "placeCount": 1
        },
        {
          "name": "Mumbai",
          "placeCount": 1
        },
        {
          "name": "Secunderabad",
          "placeCount": 1
        },
        {
          "name": "Serilingampalle (M)",
          "placeCount": 1
        },
        {
          "name": "Srinagar",
          "placeCount": 1
        },
        {
          "name": "Tamil Nadu",
          "placeCount": 1
        },
        {
          "name": "Tirupati",
          "placeCount": 1
        }
      ],
      "categories": [
        {
          "name": "restaurant",
          "placeCount": 16
        },
        {
          "name": "coffee",
          "placeCount": 3
        },
        {
          "name": "dessert",
          "placeCount": 1
        }
      ],
      "places": [
        {
          "name": "basavaKalyan Empire Restaurant Hyderabad",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 4
        },
        {
          "name": "Cafe Niloufer Hitech City",
          "city": "Serilingampalle (M)",
          "category": "coffee",
          "rank": 22
        },
        {
          "name": "Cafe Niloufer",
          "city": "Hyderabad",
          "category": "coffee",
          "rank": 23
        },
        {
          "name": "Organic Creamery By Iceberg",
          "city": "Hyderabad",
          "category": "dessert",
          "rank": 27
        },
        {
          "name": "ARABIAN CORNER",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 49
        },
        {
          "name": "Pancha Kattu Dosa",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 53
        },
        {
          "name": "SQUEEZ Juice Bars",
          "city": "Hyderabad",
          "category": "coffee",
          "rank": 64
        },
        {
          "name": "Dine Hill",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 68
        },
        {
          "name": "Itihaas Restaurant and Banquets",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 80
        },
        {
          "name": "Palamuru Grill",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 105
        },
        {
          "name": "Sherlock's - Lounge & Kitchen Hyderabad",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 143
        },
        {
          "name": "Mughal Darbar",
          "city": "Srinagar",
          "category": "restaurant",
          "rank": 151
        },
        {
          "name": "Pista House Kukatpally",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 156
        },
        {
          "name": "Native Bar & Kitchen",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 167
        },
        {
          "name": "Hotel Shri Ramanaas Gandhi Road",
          "city": "Tamil Nadu",
          "category": "restaurant",
          "rank": 173
        },
        {
          "name": "Broadway The Brewery",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 174
        },
        {
          "name": "Telangana Spice Kitchen",
          "city": "Secunderabad",
          "category": "restaurant",
          "rank": 178
        },
        {
          "name": "Cloves Restaurant",
          "city": "Forest Block",
          "category": "restaurant",
          "rank": 199
        },
        {
          "name": "Adani Lounge - East",
          "city": "Mumbai",
          "category": "restaurant",
          "rank": 325
        },
        {
          "name": "Space lassi shawarma",
          "city": "Tirupati",
          "category": "restaurant",
          "rank": 326
        }
      ]
    },
    {
      "slug": "netherlands",
      "name": "netherlands",
      "placeCount": 19,
      "savedCount": 6,
      "coordinates": {
        "longitude": 4.9,
        "latitude": 52.37
      },
      "cities": [
        {
          "name": "Amsterdam",
          "placeCount": 16
        },
        {
          "name": "Rotterdam",
          "placeCount": 2
        },
        {
          "name": "Schiphol",
          "placeCount": 1
        }
      ],
      "categories": [
        {
          "name": "restaurant",
          "placeCount": 13
        },
        {
          "name": "dessert",
          "placeCount": 3
        },
        {
          "name": "bakery",
          "placeCount": 2
        },
        {
          "name": "bar",
          "placeCount": 1
        }
      ],
      "places": [
        {
          "name": "Escape",
          "city": "Amsterdam",
          "category": "bar",
          "rank": 11
        },
        {
          "name": "Lourens",
          "city": "Amsterdam",
          "category": "bakery",
          "rank": 16
        },
        {
          "name": "Poffertjes Albert Cuyp",
          "city": "Amsterdam",
          "category": "dessert",
          "rank": 17
        },
        {
          "name": "Chimney Cake Bakery & Café",
          "city": "Amsterdam",
          "category": "bakery",
          "rank": 25
        },
        {
          "name": "Rudi’s Original Stroopwafels Albert Cuyp Markt Amsterdam",
          "city": "Amsterdam",
          "category": "dessert",
          "rank": 28
        },
        {
          "name": "Scoops and Bubbles",
          "city": "Amsterdam",
          "category": "dessert",
          "rank": 39
        },
        {
          "name": "Gifu Ramen Bar",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 87
        },
        {
          "name": "The Pancake Club",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 132
        },
        {
          "name": "Effendy - Rozengracht Lahmacun Cafe",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 148
        },
        {
          "name": "New Draver Restaurant",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 154
        },
        {
          "name": "Chun Café",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 160
        },
        {
          "name": "Marhaba - Marokkaans Restaurant (Amsterdam Oost)",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 165
        },
        {
          "name": "Fabel Friet Runstraat",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 181
        },
        {
          "name": "SOJU Bar Rotterdam Markthal 소주 | Korean Fried Chicken & Beer",
          "city": "Rotterdam",
          "category": "restaurant",
          "rank": 258
        },
        {
          "name": "Benji's Oost",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 271
        },
        {
          "name": "Saté Lounge",
          "city": "Rotterdam",
          "category": "restaurant",
          "rank": 278
        },
        {
          "name": "Vlaams Friteshuis Vleminckx",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 328
        },
        {
          "name": "Aspire Lounge 41 (Non-Schengen)",
          "city": "Schiphol",
          "category": "restaurant",
          "rank": 342
        },
        {
          "name": "Tasty Indian Bites / Amantra",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 348
        }
      ]
    },
    {
      "slug": "guatemala",
      "name": "guatemala",
      "placeCount": 16,
      "savedCount": 4,
      "coordinates": {
        "longitude": -90.73,
        "latitude": 14.56
      },
      "cities": [
        {
          "name": "Antigua Guatemala",
          "placeCount": 7
        },
        {
          "name": "Panajachel",
          "placeCount": 3
        },
        {
          "name": "Guatemala",
          "placeCount": 2
        },
        {
          "name": "San Juan La Laguna",
          "placeCount": 2
        },
        {
          "name": "San Marcos La Laguna",
          "placeCount": 1
        },
        {
          "name": "Santa Catarina Palopó",
          "placeCount": 1
        }
      ],
      "categories": [
        {
          "name": "restaurant",
          "placeCount": 7
        },
        {
          "name": "coffee",
          "placeCount": 5
        },
        {
          "name": "dessert",
          "placeCount": 3
        },
        {
          "name": "bar",
          "placeCount": 1
        }
      ],
      "places": [
        {
          "name": "PLAYER ONE SPORT BAR",
          "city": "Panajachel",
          "category": "bar",
          "rank": 1
        },
        {
          "name": "Alegría Café / Specialty Coffee Shop",
          "city": "Guatemala",
          "category": "coffee",
          "rank": 27
        },
        {
          "name": "La Tienda de Doña Gavi",
          "city": "Antigua Guatemala",
          "category": "dessert",
          "rank": 29
        },
        {
          "name": "Artista de Café - Specialty Coffeeshop",
          "city": "Antigua Guatemala",
          "category": "coffee",
          "rank": 30
        },
        {
          "name": "Glacy Cream",
          "city": "Antigua Guatemala",
          "category": "dessert",
          "rank": 34
        },
        {
          "name": "Café K'uxal",
          "city": "San Juan La Laguna",
          "category": "coffee",
          "rank": 35
        },
        {
          "name": "Cafe Cafe Guatemala",
          "city": "Antigua Guatemala",
          "category": "coffee",
          "rank": 46
        },
        {
          "name": "Café TUK",
          "city": "Santa Catarina Palopó",
          "category": "coffee",
          "rank": 48
        },
        {
          "name": "Dolce Gelato",
          "city": "Panajachel",
          "category": "dessert",
          "rank": 51
        },
        {
          "name": "La Cuevita de Los Urquizú",
          "city": "Antigua Guatemala",
          "category": "restaurant",
          "rank": 185
        },
        {
          "name": "Papa Johns Pizza",
          "city": "Antigua Guatemala",
          "category": "restaurant",
          "rank": 264
        },
        {
          "name": "7 Caldos",
          "city": "Panajachel",
          "category": "restaurant",
          "rank": 296
        },
        {
          "name": "ARUMA",
          "city": "San Juan La Laguna",
          "category": "restaurant",
          "rank": 301
        },
        {
          "name": "Alas Del Angel Atitlán | Hotel Atitlán",
          "city": "San Marcos La Laguna",
          "category": "restaurant",
          "rank": 317
        },
        {
          "name": "El Adobe Antigua Guatemala",
          "city": "Antigua Guatemala",
          "category": "restaurant",
          "rank": 327
        },
        {
          "name": "Hector's Bistro",
          "city": "Guatemala",
          "category": "restaurant",
          "rank": 329
        }
      ]
    },
    {
      "slug": "texas",
      "name": "texas",
      "placeCount": 11,
      "savedCount": 3,
      "coordinates": {
        "longitude": -96.8,
        "latitude": 31.2
      },
      "cities": [
        {
          "name": "Houston, TX",
          "placeCount": 5
        },
        {
          "name": "Magnolia, TX",
          "placeCount": 2
        },
        {
          "name": "Conroe, TX",
          "placeCount": 1
        },
        {
          "name": "Dallas, TX",
          "placeCount": 1
        },
        {
          "name": "Humble, TX",
          "placeCount": 1
        },
        {
          "name": "Shenandoah, TX",
          "placeCount": 1
        }
      ],
      "categories": [
        {
          "name": "restaurant",
          "placeCount": 9
        },
        {
          "name": "dessert",
          "placeCount": 2
        }
      ],
      "places": [
        {
          "name": "Aga's Restaurant & Catering",
          "city": "Houston, TX",
          "category": "restaurant",
          "rank": 1
        },
        {
          "name": "Nguyen Ngoc",
          "city": "Houston, TX",
          "category": "restaurant",
          "rank": 20
        },
        {
          "name": "Baciati Gelato",
          "city": "Magnolia, TX",
          "category": "dessert",
          "rank": 23
        },
        {
          "name": "Press Waffle Co.",
          "city": "Houston, TX",
          "category": "dessert",
          "rank": 43
        },
        {
          "name": "Tiny Champions",
          "city": "Houston, TX",
          "category": "restaurant",
          "rank": 73
        },
        {
          "name": "Street to Kitchen",
          "city": "Houston, TX",
          "category": "restaurant",
          "rank": 81
        },
        {
          "name": "Capital One Lounge at Dallas",
          "city": "Dallas, TX",
          "category": "restaurant",
          "rank": 177
        },
        {
          "name": "Lupe Tortilla Mexican Restaurant",
          "city": "Shenandoah, TX",
          "category": "restaurant",
          "rank": 218
        },
        {
          "name": "Dave's Hot Chicken",
          "city": "Magnolia, TX",
          "category": "restaurant",
          "rank": 251
        },
        {
          "name": "Charm Taphouse & BBQ",
          "city": "Conroe, TX",
          "category": "restaurant",
          "rank": 283
        },
        {
          "name": "Bamboo House",
          "city": "Humble, TX",
          "category": "restaurant",
          "rank": 336
        }
      ]
    },
    {
      "slug": "philadelphia",
      "name": "philadelphia",
      "placeCount": 6,
      "savedCount": 1,
      "coordinates": {
        "longitude": -75.17,
        "latitude": 39.95
      },
      "cities": [
        {
          "name": "Philadelphia, PA",
          "placeCount": 6
        }
      ],
      "categories": [
        {
          "name": "dessert",
          "placeCount": 2
        },
        {
          "name": "restaurant",
          "placeCount": 2
        },
        {
          "name": "bar",
          "placeCount": 1
        },
        {
          "name": "coffee",
          "placeCount": 1
        }
      ],
      "places": [
        {
          "name": "Malai",
          "city": "Philadelphia, PA",
          "category": "dessert",
          "rank": 5
        },
        {
          "name": "SPIN Philadelphia",
          "city": "Philadelphia, PA",
          "category": "bar",
          "rank": 18
        },
        {
          "name": "Mango Mango Dessert",
          "city": "Philadelphia, PA",
          "category": "dessert",
          "rank": 36
        },
        {
          "name": "Vibrant Coffee Roasters & Bakery",
          "city": "Philadelphia, PA",
          "category": "coffee",
          "rank": 40
        },
        {
          "name": "Angelo's Pizzeria",
          "city": "Philadelphia, PA",
          "category": "restaurant",
          "rank": 43
        },
        {
          "name": "South Philly Barbacoa",
          "city": "Philadelphia, PA",
          "category": "restaurant",
          "rank": 212
        }
      ]
    },
    {
      "slug": "belgium",
      "name": "belgium",
      "placeCount": 5,
      "savedCount": 2,
      "coordinates": {
        "longitude": 4.35,
        "latitude": 50.85
      },
      "cities": [
        {
          "name": "Bruges",
          "placeCount": 2
        },
        {
          "name": "Brussels",
          "placeCount": 2
        },
        {
          "name": "Ghent",
          "placeCount": 1
        }
      ],
      "categories": [
        {
          "name": "dessert",
          "placeCount": 3
        },
        {
          "name": "restaurant",
          "placeCount": 2
        }
      ],
      "places": [
        {
          "name": "ICE ICE AMY Specialty Ice Creams Ghent",
          "city": "Ghent",
          "category": "dessert",
          "rank": 4
        },
        {
          "name": "Waffle Wagon",
          "city": "Bruges",
          "category": "dessert",
          "rank": 22
        },
        {
          "name": "Le Funambule",
          "city": "Brussels",
          "category": "dessert",
          "rank": 30
        },
        {
          "name": "Bellicious",
          "city": "Bruges",
          "category": "restaurant",
          "rank": 231
        },
        {
          "name": "Café Georgette",
          "city": "Brussels",
          "category": "restaurant",
          "rank": 273
        }
      ]
    },
    {
      "slug": "northern-california",
      "name": "northern california",
      "placeCount": 4,
      "savedCount": 1,
      "coordinates": {
        "longitude": -121.49,
        "latitude": 38.58
      },
      "cities": [
        {
          "name": "Grass Valley, CA",
          "placeCount": 2
        },
        {
          "name": "Sacramento, CA",
          "placeCount": 1
        },
        {
          "name": "West Sacramento, CA",
          "placeCount": 1
        }
      ],
      "categories": [
        {
          "name": "restaurant",
          "placeCount": 4
        }
      ],
      "places": [
        {
          "name": "Humpty Dumpty Kitchen",
          "city": "Grass Valley, CA",
          "category": "restaurant",
          "rank": 226
        },
        {
          "name": "Dave's Hot Chicken",
          "city": "Sacramento, CA",
          "category": "restaurant",
          "rank": 261
        },
        {
          "name": "West Coast Sourdough - West Sacramento",
          "city": "West Sacramento, CA",
          "category": "restaurant",
          "rank": 262
        },
        {
          "name": "Taqueria Arandas",
          "city": "Grass Valley, CA",
          "category": "restaurant",
          "rank": 338
        }
      ]
    },
    {
      "slug": "california-coast",
      "name": "california coast",
      "placeCount": 2,
      "savedCount": 9,
      "coordinates": {
        "longitude": -120.44,
        "latitude": 35.3
      },
      "cities": [
        {
          "name": "Goleta, CA",
          "placeCount": 1
        },
        {
          "name": "Monterey, CA",
          "placeCount": 1
        }
      ],
      "categories": [
        {
          "name": "restaurant",
          "placeCount": 2
        }
      ],
      "places": [
        {
          "name": "Cristino’s Bakery",
          "city": "Goleta, CA",
          "category": "restaurant",
          "rank": 259
        },
        {
          "name": "Chef Lee's Mandarin House",
          "city": "Monterey, CA",
          "category": "restaurant",
          "rank": 266
        }
      ]
    }
  ]
};
