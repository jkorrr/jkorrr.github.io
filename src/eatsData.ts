export type TasteCategory = "restaurant" | "coffee" | "dessert" | "bakery" | "bar";

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
export const eatsData: EatsData = {
  "source": "Beli data export",
  "updatedAt": "2026-08-26",
  "isPlaceholder": false,
  "totalPlaces": 531,
  "totalSaved": 454,
  "totalPhotos": 1019,
  "photographedPlaces": 422,
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
          "rank": 1,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/510994/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/n8xsznzjtflfsdqeuyx.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/510994/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/fsm39tdvtgjji3cpii.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/510994/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/08bmj044hw2ngyb3nnit.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Arsicault Bakery Civic Center",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 2,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/349868/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vxoo9r9w9d940fi9dzw.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/349868/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/q1060na1vimnfh0pe4w.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Juniper",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 5,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/350320/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/igxuh4vdqsh5pjfvfq2.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/350320/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1u4hr5wm1jg2gnqw1b3.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/350320/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/3uytc2omdx93mw2hylo.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Arsicault Bakery",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 6,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1623642/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/q08kk4eo3ggzx9a4q3.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1623642/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/al5s8o8s10ky0ml40v2.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Grand Coffee",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 7,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/350511/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mwb56bcd6ilzbyiw78.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/350511/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mxmhhurvpk7bcdw3c8.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/350511/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/9qayxr02ob7l8l5sud4.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Garden Bakery",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 8,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/364894/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/5qbtv04um6vm2xwdf0x.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/364894/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/s0l7sdvt663yy4wihh.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/364894/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tk2cho16bggedccn8t.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Kansai",
          "city": "Oakland, CA",
          "category": "bar",
          "rank": 8,
          "photos": []
        },
        {
          "name": "Philmore Creamery",
          "city": "San Francisco, CA",
          "category": "dessert",
          "rank": 8,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/512582/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wg3iog4w755ugubeuz.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/512582/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/gahv7t4kvsekp1pszzz.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Breadbelly B12 - Dogpatch",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 9,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1820305/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8mdmc9otdix057xhgcu.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1820305/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/htnztqqgzr67xefmzo2.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "The Coffee Movement",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 9,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/348467/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lhoqymxbkhihtbxvbc8.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Holy Nata",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 10,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/688623/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/yzhojbot3j1wijgtip.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/688623/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/k70eebyfpt1lqm6z4o.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Na Ya Dessert Cafe",
          "city": "San Francisco, CA",
          "category": "dessert",
          "rank": 10,
          "photos": []
        },
        {
          "name": "Sightglass Coffee",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 11,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/348503/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/m1wdvz5xkwljwlxuf6.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/348503/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4h2hxjgmczfw8gq6why.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Binge Coffee House",
          "city": "Berkeley, CA",
          "category": "coffee",
          "rank": 12,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1421232/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/kplb6v2oa3lr63f3sql.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Bamboo Hut",
          "city": "San Francisco, CA",
          "category": "bar",
          "rank": 13,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/272506/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4pnothcfphvme7t0fnm.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Bi-Rite Creamery",
          "city": "San Francisco, CA",
          "category": "dessert",
          "rank": 13,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/510993/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/w27k3f3xy7sngngk7e.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Neighbor Bakehouse",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 13,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/8833/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bbgrxh5ze3oyj2fsi9u.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "The Caffè by Mr. Espresso",
          "city": "Oakland, CA",
          "category": "coffee",
          "rank": 13,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/459991/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4b3q4fy7w7kjqqlhqkz.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/459991/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/iitrragoq4by5dbvob3.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Curbside Creamery",
          "city": "Oakland, CA",
          "category": "dessert",
          "rank": 14,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/512484/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jlwp42r54hol7av6hk5.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/512484/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/i4oehwmf5vqsd5h05s.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/512484/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jlwp42r54hol7av6hk5.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Khao Tiew",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 14,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/977882/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7q4uhksl3031b43goo5.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/977882/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/q2ainnqd9w8h3tlj85b.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/977882/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/gmv5q6cqwjpcqnuex05.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/977882/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/piz4fsu4gxjw37ruyfy.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/977882/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/5co7o0vie4ux6ozov5n.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/977882/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dg2jl4ujsmt4048owc2.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/977882/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xk7e8vkx68aszoleej.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Wizards & Wands",
          "city": "San Francisco, CA",
          "category": "bar",
          "rank": 14,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/951467/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/pkzwaon8pdceppdjaho.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/951467/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/hz4bkwuydg97kv7zfn3.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/951467/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/iuizxv63axrbkz4pymi.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Scoop N Chill",
          "city": "Berkeley, CA",
          "category": "dessert",
          "rank": 16,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1940413/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/szeebguol9aylfn6br0.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Alimento",
          "city": "San Francisco, CA",
          "category": "dessert",
          "rank": 19,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/20824/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lio0z16yk2voqt05s1.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Boba Bliss",
          "city": "Dublin, CA",
          "category": "coffee",
          "rank": 19,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/45600/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mfqrwj3weft5r882doy.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/45600/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ygwtoknytzlxz50yo61.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/45600/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4j51pjcnaywcxbcvbrz.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "World Famous HOTBOYS Chicken",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 19,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/12338/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7ggd5vdlapbd8irwukk.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/12338/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/cu1mzsdm37whhqu0psi.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Golden Goat Coffee",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 21,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/349305/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/myykn4pnj57j9qleng.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/349305/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/x10at4dgyjfjcc1841.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Maison Nico",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 21,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/154446/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/qvbj489xg8nu5zquda1.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/154446/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dlgkdfhrlx7poltncz.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/154446/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jdl762jdmz69dvedty.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/154446/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/phbzqn3m4wk1ak6srjs.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/154446/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rr5n15k5448sqhwffkb.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "La Taqueria",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 24,
          "photos": []
        },
        {
          "name": "SOHN",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 24,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2031659/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/brz2hxzqozmmd2tquio.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2031659/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wxzwihy1kukpcpwy5z1.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Tano",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 24,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1609572/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/6g4gq28grxtasg7vm3.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Cracked & Battered",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 25,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/60717/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1mj5rhg5ozjicu6kr4o.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/60717/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/cx8lq54cjncwftb7pby.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/60717/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lpqwu8gzw1nqgwzz1j0.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Uji Time Dessert",
          "city": "San Francisco, CA",
          "category": "dessert",
          "rank": 25,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/511925/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7cxr9w4sisocc181pob.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Colonial Donuts",
          "city": "Oakland, CA",
          "category": "bakery",
          "rank": 26,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/451715/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ox3kfp0ekvkj2uwci5w.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Tadaima Mission",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 29,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1217578/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/oc93ysn28yk668uhyaz.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Baklavastory.",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 30,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/356419/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/u8wp1jzmuejy7e7i1dv.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/356419/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/y9covmtfdhox74zoeq.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "La Parilla Loca",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 31,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/166111/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ns3nn658gup7z1fn6nx.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/166111/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ai367tkpoqzv18qbhz.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/166111/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/qs0mxoi3tp68ucbty.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Angela's Ice Cream",
          "city": "San Francisco, CA",
          "category": "dessert",
          "rank": 32,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2332882/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0qorrufbnlppe1cv0t6h.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Binge Coffee House Telegraph",
          "city": "Berkeley, CA",
          "category": "coffee",
          "rank": 32,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1890280/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/g4c84kwuvvkgvkestia.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Sheng Kee Bakery #19 - Berkeley",
          "city": "Berkeley, CA",
          "category": "bakery",
          "rank": 32,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/348973/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xzf5rwujiwknw9fvzqw.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/348973/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/zxfsqkci15l4hgluuyi.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "UlavacharU Indian Restaurant",
          "city": "Sunnyvale, CA",
          "category": "restaurant",
          "rank": 32,
          "photos": []
        },
        {
          "name": "Cafe Okawari",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 34,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/53785/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/69i8jyy0gvydhkzlj4c.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/53785/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/b1mild3uowdckyjemkn.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "jina bakes",
          "city": "San Francisco, CA",
          "category": "bakery",
          "rank": 34,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/165355/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/om9v5efbee8d1k4sud3.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Zareen's Palo Alto",
          "city": "Palo Alto, CA",
          "category": "restaurant",
          "rank": 34,
          "photos": []
        },
        {
          "name": "UC Dessert",
          "city": "Oakland, CA",
          "category": "dessert",
          "rank": 35,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/368338/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/izmg0tf67lhhj975zp.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/368338/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/a3y79vnpb2cb7pzdall.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/368338/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mx7dwe2cfqf7u40mb95.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Fentons Creamery",
          "city": "Oakland, CA",
          "category": "dessert",
          "rank": 37,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/43184/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/n1fb4egkclxrsun6j6.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Great China",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 38,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/6904/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/9qzre47akxikame9y18.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/6904/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/b3o2aeny3bhu3ylgg7i.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "heytea (Berkeley)",
          "city": "Berkeley, CA",
          "category": "coffee",
          "rank": 38,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1143926/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rh24iqczytqcxi5qgt3.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Melt Me Creamery",
          "city": "Berkeley, CA",
          "category": "dessert",
          "rank": 38,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1736304/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/aod8jgw0wfd3pf1djkq.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1736304/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/b1xyd3xxjc4jo024z6b.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "El Asadero Poblano",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 39,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/305094/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8hr3q4tgjd3vzqt0fv7.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Woodhouse Fish Co.",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 40,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/15878/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/o9dv504hxqgw7q7f43r.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "8 Grams Matcha",
          "city": "Berkeley, CA",
          "category": "coffee",
          "rank": 41,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2472292/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ky9lq4f6w4cnf6q2jdd.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "TP TEA Berkeley (Taiwan Professional Tea)",
          "city": "Berkeley, CA",
          "category": "coffee",
          "rank": 42,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/348743/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/hch9oni51dumf1hnra3.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Almare Gelato Italiano",
          "city": "Berkeley, CA",
          "category": "dessert",
          "rank": 44,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/512521/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xa9h60uuczc7cuwd2y6.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Beit Rima",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 44,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/21095/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mcgmf8t0mmedbfckoh.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/21095/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dce70ucc88ltya6nvk2.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/21095/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lxa3qxslbe73452alu8.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/21095/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vm5cr9fmyf9q1ktf0zw.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Little Gem Belgian Waffles",
          "city": "Berkeley, CA",
          "category": "dessert",
          "rank": 46,
          "photos": []
        },
        {
          "name": "TUR",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 46,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2571891/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/gjpyzxzyrsw40r9ud0.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2571891/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tydnomhmymayi84os6s.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2571891/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/cul11osoutctkh1cxv8.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2571891/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bzqvebiwx3qfw6remkr.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2571891/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wcf4rajjsstcthyqmw.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2571891/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/3deinlgoner1j01dwye.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "L & G Vietnamese Sandwich",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 47,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/120817/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xwc19xrvb9lqe0i3o47.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/120817/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/w6zjm9lxpm95yihlhq.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/120817/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/w3ym8wniavjptpuio95.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Yogurt Park",
          "city": "Berkeley, CA",
          "category": "dessert",
          "rank": 47,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/513520/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/yclqh8rgvwpxveaknb.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Telescope Coffee",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 49,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/348515/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/siyofzyn0kj8japdq3.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Scullery",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 50,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/368521/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/s9k1ppzd2mogv6wdjc4.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Caffe Centro SP",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 51,
          "photos": []
        },
        {
          "name": "Sheba Restaurant -مطعم سبأ المطعم اليمني",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 51,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/675858/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/u5b1qeqrzs8lxowun8.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/675858/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xx5pjljq1mj44sgu1mk.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/675858/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/kyi4a4y10q8hy63pfyz.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/675858/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ia0t7n3yftou0vth45.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/675858/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vcb6trvn9bgf6ss8f92.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "SIGNAL Coffee Roasters",
          "city": "Berkeley, CA",
          "category": "coffee",
          "rank": 52,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1048554/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/2zogs1d0e5hqqbqc0pd.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Fifth St. Coffee Roasting Co.",
          "city": "Gilroy, CA",
          "category": "coffee",
          "rank": 53,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/357209/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xzch25v152ihjaxenvc.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/357209/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xogbb973hwoiiwqr1q.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "ICICLES",
          "city": "San Francisco, CA",
          "category": "dessert",
          "rank": 53,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/45319/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/9lsdsx995lgrn1bzubt.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Cafenated Coffee Company",
          "city": "Berkeley, CA",
          "category": "coffee",
          "rank": 54,
          "photos": []
        },
        {
          "name": "Chinatown Taiwan Fruit Tea",
          "city": "San Francisco, CA",
          "category": "coffee",
          "rank": 55,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/363341/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/k7kabwpl7xmbrmgieos.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/363341/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/x96r1h3lmqhhzq9sho.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Dots Boba",
          "city": "San Francisco, CA",
          "category": "dessert",
          "rank": 56,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/505570/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0agqrjd39z6komywf4jv.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Sana’a Cafe",
          "city": "Oakland, CA",
          "category": "coffee",
          "rank": 56,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1931544/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1itqion8qkotx30ggum.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "The Laundromat SF",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 56,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/182517/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/hiehd8l1iytzs0dhsvu.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/182517/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/whkoymkag0kflhn7xr5.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/182517/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ox7829zjp4ld0nbhii.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/182517/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ub5xnmswhaaa9fgh57.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Flour + Water",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 58,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1241/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/kgs5acgwdxr5ajnw3xu.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1241/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/nuqt8fjajnb7q3k4t9r.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1241/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/q9ug90e4d4dy541qxxl.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1241/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/5f6uo7xgpmua0zmon8.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1241/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jwcc0sa69rbvdoaa3n.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Deli Board",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 59,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/19051/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/gornoqdrlu859acr411.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/19051/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/kklyygmkflqe8ayc5m.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/19051/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/3vj5nlzl0pl922ckdx8.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Fiorella Sunset",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 60,
          "photos": []
        },
        {
          "name": "Boba Ninja",
          "city": "Berkeley, CA",
          "category": "coffee",
          "rank": 63,
          "photos": []
        },
        {
          "name": "MENSHO",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 63,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/297796/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ielloazx7lat5p2xwp.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/297796/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/5opwkzl8usw0y0yn4h0.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/297796/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/m0ruc6tyi4j6bwmqnpf.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/297796/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lk979s9nhb1rcrrpx5.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Zennup Mediterranean Restaurant",
          "city": "Sunnyvale, CA",
          "category": "restaurant",
          "rank": 65,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1665626/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/b1fh1xiluyb2alaf41.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1665626/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tbrmdrb9vry32ef7my.jpg",
              "isFavoriteDish": true
            }
          ]
        },
        {
          "name": "Taqueria El Paisa",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 66,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/15600/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/qv6emukc1l9bpmncyjt.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/15600/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/f8ese03g1jkchyx131l.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/15600/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/zqd4fg5qgai5xs017vk.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/15600/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bzxj67u6pipkfl05lae.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/15600/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/04dk1ev1wh6jeudm8rzp.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Shan Dong",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 67,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/37654/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/h7gum5sxs3ulwodly11.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/37654/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/sxolvvfach1zvmhi2z.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/37654/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/cjrsorvc9sagd9i18hx.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/37654/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/z0in4l8epu8kzbqzu02.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Enssaro Ethiopian Restaurant",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 74,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/82940/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/kofbvb9u5qg7nfyb7gb.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/82940/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/t76jzu30069l8v7z5ep.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/82940/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mxiddajyg8ynf4jiuf.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Cenaduria Elvira",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 75,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/224840/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/scmn1ex35yspcy9o1ge.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/224840/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/2fp295dujh4wvbnmx22.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/224840/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4jvru7diabmregnglmq.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/224840/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/49t4dib6h5xi2urxn1j.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Rose Pizzeria",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 76,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/99133/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/04rit5gw4kg1azx340v8.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/99133/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/nd36hddz21raee7wvuy.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/99133/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tgsl7qtc0hdlkn652yh.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/99133/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bglmwcyzv75h6f6pxxs.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/99133/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/fnzi0d2dfgwesdqkm6.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "El Gallo Giro",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 79,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/50661/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/e2nzjmyu89ji1oks5jr.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/50661/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/f3d07cogysgnjqdyzs.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/50661/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/qmbn3y0a5q9msoguwi9.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Pizza Ponte",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 84,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/251512/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/d27wq5e41tm9wxr95u3.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Mezze and Mooore",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 88,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/174807/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/atypnvgrwqnwjkbrl3t.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/174807/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0f4e8zithfgcieenq4hr.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/174807/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/i51xrdpkg9ongppq1k2.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/174807/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/u9jbhmdnd8amgcep7yr.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Taquería El Farolito",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 89,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/992/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/nxhrw5hdv49y0cnsofv.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Café Colucci",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 98,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/180952/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ewdzn39os69kfwtoxo4.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Poggio Trattoria",
          "city": "Sausalito, CA",
          "category": "restaurant",
          "rank": 99,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/6476/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ztps0wzirvd4tefpsag.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/6476/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jwv3xax9w47uuveh53i.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/6476/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/nhard8pp0b1wqgtq2t.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/6476/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/2xfy4v22p4npgss53zm.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Eggy’s Neighborhood Kitchen",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 102,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/590985/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/3ng91t0mq4t9oxvnx3r.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "The Barn",
          "city": "Half Moon Bay, CA",
          "category": "restaurant",
          "rank": 104,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/787356/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/gieb6sq10tmeke0wk8s.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/787356/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4fcvbz1mn5m6d0l45i.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Nute's",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 106,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/5247/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tw0qrrclqkmvokf737.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/5247/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ehrb5k6j665u6omr8r6.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Mama's Boy",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 107,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/366662/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/hjm7r8nozxualfhmbxh.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/366662/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/o15p1uqlb7fs59ku5yd.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "李面请大碗刀削面 Li's Knife Cut Noodle",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 108,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2331383/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/i8v6dl81he8brfpeqk8.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2331383/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bq5zwilwt5h4c6fp8pz.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Burma Superstar",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 112,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/56221/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/5b1aq7v5rcko6tvi6a.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/56221/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dffk1f1zz22hsukdn7.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/56221/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/k1vww930mxegtrspw3w.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Marufuku Ramen",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 115,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/53880/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/nj894fhgcajk9q2brtx.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/53880/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mdzjvzbar8ggoqrbnkh.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Chefmus Kebab Turkish Food",
          "city": "Mountain View, CA",
          "category": "restaurant",
          "rank": 117,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2337203/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/51i8lmt3y02b32ooh3u.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2337203/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ywl1md0glz8p5yqyqyb.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Dolores Deluxe",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 118,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/557605/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vcdwmjbyv6xbyymvj2.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Verjus",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 119,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/3006/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/9r33grcpp0fkp3rqee7.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/3006/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/pp171io8ehywrq84ul.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/3006/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/p6ailsjduqpl0ra5sq.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/3006/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/oq6leb75h8o0trwa5tb.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/3006/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ak7ijkrzjd52wxfw7tf.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Viva Goa Indian Cuisine",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 121,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/46810/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lki72xbzayfjxu0idtd.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/46810/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/riqdfv2r3amlqtplsrf.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/46810/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0kvq8fx6lht1tgdvly3.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Namaste Indian Cuisine",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 123,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2551556/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/85lcskabmvc5xr5vrsm.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2551556/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/oh0jlkgue7ko99jdtiu.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2551556/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ezdi0j63gpmnw0jdjkb.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Angler",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 124,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2987/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mhime34dvx437ajdmu.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2987/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/9rtwx5zcn1mpf2dzj1a.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2987/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0k3lxcndqicztjmsay5.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2987/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7jsur1kpznyktmxr8xy.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Teni East Kitchen",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 125,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/56222/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xapz0wsbfktjb0plna.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/56222/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wpfuzdvrex5nqlmcso.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/56222/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/uvsoz4mqqfisof3js90.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/56222/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mdkllg9hc9nivhn35oy.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Praaw Thai",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 127,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2253957/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/kb17ki5s5tc2fvpihxo.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2253957/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bzzkyrrkzbno6c54ffz.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2253957/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/go91856mkbu4uhl02ws.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2253957/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/v84d4ew67h0knp7eo2.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Newkirk's",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 128,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/13314/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0msiaevi3uq9defrw97y.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/13314/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ytzunpg8z7arcn4ur0k.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Dumpling Story",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 129,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/384836/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/31adw7nirj7yzc8ywjt.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Dishdash Middle Eastern Cuisine",
          "city": "Sunnyvale, CA",
          "category": "restaurant",
          "rank": 131,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/33457/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/crcfk20tw5ficmfzb8d.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/33457/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/2z3cd8slzygg2zp5ft6.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Outta Sight Pizza II",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 134,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1079865/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ewhr98y4cqp7qqpinqb.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Tacos El Autlense LLC",
          "city": "Albany, CA",
          "category": "restaurant",
          "rank": 137,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/85578/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/d96s2urf2txq4j0l7u.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/85578/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rho5w36cjcgak6bhen8.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Tony's Pizza Napoletana",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 142,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/3007/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ngmdno08vbsxc432hf.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/3007/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4ol4meqrejhoht7gcu7.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/3007/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8s7i077fd9c7oz5tiz5.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/3007/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/zqh0wcr6okzspbp0ux.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Cheese Board Collective Pizzeria",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 144,
          "photos": []
        },
        {
          "name": "Ararat Kebab & Gyros",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 147,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/770033/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/x1quindrj6pqaq9cl7c.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/770033/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/yf9luzwcetoi0zo7jz.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Turquaz SF",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 149,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1604153/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/67m1px1ebuwefl2xwr1.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1604153/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/35zvnvhldjf2i9c8du.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1604153/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/zptllu614ncq090m7y.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "To The Moon",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 152,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1621378/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bi7xa6az0x90ipfv7p.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1621378/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1c1dyknru5snaglq839.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1621378/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7lnrgpjsfchvdi6720.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Kin Khao",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 153,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2994/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/33bjz9bndu4n1pq84tq.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2994/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jjrx1o6o89pfacub7j.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2994/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/s7n6yxxrijr781ku28j.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2994/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bodwogdwvlf5wfxsey.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2994/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/025036hn8axh71kx6lue.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2994/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vu72uzenwb90kzus04b.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2994/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/yy8ke5frids2ho4f12e.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2994/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/so08hlkelxq2s2hpojh.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Flour + Water Pizzeria",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 157,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/497834/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/y2gfazfvnxj9wf6g31k.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/497834/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/fy7hi55h05pq05vlngu.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/497834/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/l6hs98524xljbqsd89w.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Copra",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 162,
          "photos": []
        },
        {
          "name": "Wally's Cafe (Emeryville)",
          "city": "Emeryville, CA",
          "category": "restaurant",
          "rank": 168,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/45995/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vjlq9vo8apmjiw8cn5.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/45995/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/3c1dh7x0sbr7b3bd27d.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/45995/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/y4mzn8us8gjijjz24mz.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/45995/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/hrea6mvmoo57m8hmzp.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Taqueria Vallarta",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 169,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/60539/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1xngziyymhq2x0tzbtj.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Tacos Ameca",
          "city": "Gilroy, CA",
          "category": "restaurant",
          "rank": 170,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/229498/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/gr143p5akkhq66vqf6j.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/229498/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/kiuenrkzdmbeii0t38.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Spices 3 辣妹子",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 171,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/82938/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/o5h491jpqr0ch1fsib.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/82938/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/l5ore8bdy2ns3zl4olt.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/82938/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/w9hsd1hbvnr371v2rt.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/82938/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/cgtiods12wita3ssts5.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/82938/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4p9u5irxqued491ie6z.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Shawarmaji",
          "city": "Santa Clara, CA",
          "category": "restaurant",
          "rank": 175,
          "photos": []
        },
        {
          "name": "Anjappar Chettinad Cuisine",
          "city": "Dublin, CA",
          "category": "restaurant",
          "rank": 179,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/794963/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/v1rf26ol1a9upsnafbl.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/794963/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/web4s4sv0c096aii93.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/794963/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/52uxho320fex578tp1.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Comal",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 182,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/12332/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/c0i1wucy6le1tysyd42.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Pizzeria da Laura",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 183,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/310203/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xl4n8j5nm78kindq8cv.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Lao Garden Restaurant & Bar",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 188,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1588303/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/j7zzoa5i4aniuctoqk.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1588303/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vzrw1u88vfivw4y3o3g.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1588303/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/q2919wr67hcxdgtw267.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1588303/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/9wthjafe2fwhfk5fwia.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1588303/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/is76alw1zwfp0otrw5.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1588303/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vbr6nt1dbnoijs8oqml.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Pakwan Restaurant",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 195,
          "photos": []
        },
        {
          "name": "Southside Station",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 198,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/25735/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/a8rgzw6av3j7nvizmwn.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Burma Superstar",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 200,
          "photos": []
        },
        {
          "name": "Taishoken San Francisco",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 201,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/107814/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/pjbxy8yi4wsg9fi53as.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Zachary's Chicago Pizza",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 205,
          "photos": []
        },
        {
          "name": "Saratoga Bagels",
          "city": "Saratoga, CA",
          "category": "restaurant",
          "rank": 206,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/172443/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/11tqbvwpzw5gfep0m91x.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/172443/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/31f4tr4llypmwj7d3ea.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Angeline's Louisiana Kitchen",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 207,
          "photos": []
        },
        {
          "name": "June's Pizza",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 209,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/8463/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/s2frcgotxfmrur40ue0.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/8463/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/src2iuf47z8qdgbqnju.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Hard Rock Cafe",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 211,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/110655/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/u5pf13qs1f8rktuw4x.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "IPPUDO BERKELEY",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 214,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/21308/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0zjzmjho9hwfrczbm2ok.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Lo Coco's",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 216,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/152984/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/owwzabchb6hkow52g1f.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/152984/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/soghhr2rp1cxb3xg4ub.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/152984/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/zoxqr6pka6kwargco93.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/152984/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dr2o3f96j4l1od4xam5.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Imm Thai Street Food",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 217,
          "photos": []
        },
        {
          "name": "My-O-My",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 219,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2167084/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/3ij6w7mchwpduwx5upj.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Bay of Burma",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 220,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/520548/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8lidlx7fmebu7fu2rs.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/520548/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/u3z9mmllguukxlodsq.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/520548/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/u7u9s1nzd5jxfccy152.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/520548/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wbfl0vez44bi34xhc7c.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Thai Table",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 221,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/32154/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/otaeh8zch67m91n2wl.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Sourdough and Co",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 223,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/160058/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/6kviu08rbe7ldbnmx15.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Viks Chaat",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 224,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/6914/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vdkietmes1s956wwbaf.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/6914/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/sni8chdhxfgwmmk21o4.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/6914/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xjbw3zzwwh5ism8h8q.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/6914/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vntbuzlste9277jaohc.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/6914/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8rmngt6duielh0kcaa3.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Chengdu Style Restaurant",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 225,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/130939/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/6x2n85zs1zedf0jkir.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Capo's",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 227,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/24021/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/n3j4izmin18fi8pf5a.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/24021/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8ioso8htd82zlzjlwxy.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "The M Stop Deli",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 232,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/553012/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/u50ksgpmo1e2i5wqzhf.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/553012/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/flfms351dou36z4dl74.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Tsuruya",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 234,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/926285/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/nwcxadsz6zxtkva0sv.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/926285/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/qup0xl2yvga3vzixqy.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Turtle Tower",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 235,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1571892/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/6av4falkrpw611fi6hb.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Moku Hawaiian BBQ (Berkeley)",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 236,
          "photos": []
        },
        {
          "name": "Kitchen Story Oakland",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 237,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/56198/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/gb9acezoko5emm11m9.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/56198/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/34feohh02udknvrp7y6.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Dough Zone Dumpling House Cupertino",
          "city": "Cupertino, CA",
          "category": "restaurant",
          "rank": 238,
          "photos": []
        },
        {
          "name": "Shawarmaji",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 241,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/54551/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/31rzqw1vms5alwqwme9.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/54551/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/zu9wk3vxtxn99fuow8h.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "84 Viet",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 242,
          "photos": []
        },
        {
          "name": "Dave's Hot Chicken",
          "city": "El Cerrito, CA",
          "category": "restaurant",
          "rank": 248,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/683372/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tu6t292fwmpr0bslqaq.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "La Note",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 249,
          "photos": []
        },
        {
          "name": "Tacos El Gordo",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 253,
          "photos": []
        },
        {
          "name": "Noodle Dynasty",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 255,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/168455/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wqqmxr71zpfu30jiaa4.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/168455/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/02devsvo4sg8c2dq3gr3.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/168455/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/re72pzxgvbe8bavj2iw.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Easterly-Berkeley",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 256,
          "photos": []
        },
        {
          "name": "Biryani Spot",
          "city": "Dublin, CA",
          "category": "restaurant",
          "rank": 263,
          "photos": []
        },
        {
          "name": "Gogi Time",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 267,
          "photos": []
        },
        {
          "name": "Berkeley Social Club",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 269,
          "photos": []
        },
        {
          "name": "5 Spiced Kitchen",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 270,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/755478/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0cb3oxd73i3w1s9o3e1o.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/755478/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0punskz4h8yf1zlmoeq4.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Freehouse",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 272,
          "photos": []
        },
        {
          "name": "MoMo House",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 274,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/220427/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/3tg923wf2nh1908eq37.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Taco Bell Cantina",
          "city": "Pacifica, CA",
          "category": "restaurant",
          "rank": 275,
          "photos": []
        },
        {
          "name": "La Mission",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 276,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/7872/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7aixk43hvdvrvy8pqef.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Racha Café",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 277,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/130603/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ng67zapaxgrv8fmarwh.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Ox 9 Lanzhou Handpulled Noodles",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 279,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2521699/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/12ooonos6yjldkct384q.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Mezzo",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 280,
          "photos": []
        },
        {
          "name": "O2 Eatery",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 281,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1222722/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/t0tg7h5f9mlgp5bmj6.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Hinodeya Ramen Chestnut",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 282,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1219493/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/o2yld43s0jbkjwrd6u.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Foreign Cinema",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 286,
          "photos": []
        },
        {
          "name": "D'Yar",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 288,
          "photos": []
        },
        {
          "name": "Oori Rice Triangles",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 290,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/157468/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/l9ipdfma1rih66yc32s.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Jupiter",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 291,
          "photos": []
        },
        {
          "name": "MoMo Masalas",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 293,
          "photos": []
        },
        {
          "name": "Mendocino Farms",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 294,
          "photos": []
        },
        {
          "name": "sweetgreen",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 295,
          "photos": []
        },
        {
          "name": "9 Julio Empanada Kitchen",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 297,
          "photos": []
        },
        {
          "name": "Falafel Boy",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 298,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/49196/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/n4pydsiitofnqphnpbr.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "L &L Hawaiian Barbecue",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 302,
          "photos": []
        },
        {
          "name": "Artichoke Basille's Pizza",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 303,
          "photos": []
        },
        {
          "name": "Dumpling Home",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 307,
          "photos": []
        },
        {
          "name": "El Talpense Mexican Restaurant",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 308,
          "photos": []
        },
        {
          "name": "Sweetheart Café",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 310,
          "photos": []
        },
        {
          "name": "Hawking Bird",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 312,
          "photos": []
        },
        {
          "name": "Gypsy's Trattoria Italiana",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 313,
          "photos": []
        },
        {
          "name": "Wikiwiki Hawaiian BBQ",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 315,
          "photos": []
        },
        {
          "name": "La Val's Pizza",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 320,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/132740/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/6wngej6oo8slhrdq5nj.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Nick The Greek Berkeley",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 321,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/881753/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/45kdy31r6y3qyvhrp4k.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Crave Subs (Berkeley)",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 323,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/124799/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dguert63ual0a53h0ck.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Atlas Bites",
          "city": "San Francisco, CA",
          "category": "restaurant",
          "rank": 324,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1273190/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4ggefm16nxn5n0sf6ow.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Sliver Pizzeria",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 331,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/6653/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/x44kvk5pa593rsz91wi.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Impression of LanZhou",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 332,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2187131/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/c7cr11cjufh41co4vf.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Grégoire Restaurant",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 333,
          "photos": []
        },
        {
          "name": "KoJa Kitchen",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 334,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/78339/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/m16o721c0z8fcf59dnn.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/78339/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/uoozy9km0hf0ohu30cq.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Marugame Udon",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 335,
          "photos": []
        },
        {
          "name": "Soba Ichi",
          "city": "Oakland, CA",
          "category": "restaurant",
          "rank": 339,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/56217/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jv51wdp8nyulehffa6.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "四姐 Special Noodle",
          "city": "Richmond, CA",
          "category": "restaurant",
          "rank": 343,
          "photos": []
        },
        {
          "name": "Jot Mahal Palace of Indian Cuisine",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 347,
          "photos": []
        },
        {
          "name": "La Burrita",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 350,
          "photos": []
        },
        {
          "name": "Clark Kerr Dining",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 353,
          "photos": []
        },
        {
          "name": "Café 3",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 354,
          "photos": []
        },
        {
          "name": "Foothill Dining",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 355,
          "photos": []
        },
        {
          "name": "Crossroads",
          "city": "Berkeley, CA",
          "category": "restaurant",
          "rank": 356,
          "photos": []
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
          "rank": 2,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/62482/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/zwmrkcfgp4j0mfuijin.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/62482/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ydcjl6cmnwmf9byg1u.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/62482/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/n0bi21fjlbu7kto6ia.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/62482/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/izfpsvics2m1pecbrvy.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/62482/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/it793bb52h9i6l2hls9.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/62482/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0sg53ykfsxsj7lrii49o.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/62482/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/j1znk3a47a6qo34i99.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/62482/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bxd0n9igy2wkfhome8.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Ten Thousand Coffee",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 2,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/348502/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/za63371isf1nyjlckh.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/348502/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jxtrr3nar4zlgzsmxp.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Mary O's Irish Soda Bread Shop",
          "city": "New York, NY",
          "category": "bakery",
          "rank": 3,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1390148/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ynjbul6bkb1l8capgz.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1390148/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/kais535jcsptxpydyd5.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1390148/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/h59htl0rx9imvhviuq3.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Caffe Paradiso",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 4,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1601509/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/stpy2ia2s689xvc03qu.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1601509/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/a0c832i96cojdd0vggr.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "La Cabra Bakery",
          "city": "New York, NY",
          "category": "bakery",
          "rank": 4,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/63751/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/r47jjwvt5pnmsye7d.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/63751/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/kw13gu5wr1k0mz8hs2.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "ENLY",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 5,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/348662/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/y22cx7zi0vnxwukipk.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/348662/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ci6eezpbvtpstndorc5.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Dialogue Coffee & Flowers",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 6,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1199817/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/912a360jw7e8r98irm.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "HYDERABADI ZAIQA",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 6,
          "photos": []
        },
        {
          "name": "Rivareno Gelato",
          "city": "New York, NY",
          "category": "dessert",
          "rank": 6,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1750467/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/senrd7eea9bu6rrym2m.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Sunday Morning",
          "city": "New York, NY",
          "category": "bakery",
          "rank": 7,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1553166/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dkw52c0jbww7m82s0w.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1553166/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bwwznhsm5gkmr4k0zke.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1553166/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/2zbeiwa1iehfgayjck3.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Caffè Panna",
          "city": "New York, NY",
          "category": "dessert",
          "rank": 9,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/8601/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/qnv59hvgjkd8f57ftox.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/8601/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1zvks6xlm6xt5zkmoal.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Top Thai Greenwich",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 9,
          "photos": []
        },
        {
          "name": "Soothr",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 11,
          "photos": []
        },
        {
          "name": "Noona's Ice Cream",
          "city": "New York, NY",
          "category": "dessert",
          "rank": 12,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1165683/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jtvnhagwlqpclul13oi.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1165683/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ghke6qsx4jj1o2kkz0b.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1165683/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1oehnteqjmglu12iv00.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "San Antonios",
          "city": "New York, NY",
          "category": "bar",
          "rank": 12,
          "photos": []
        },
        {
          "name": "Son del North",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 13,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1100305/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tfv3ipwgteg63hpdlmv.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1100305/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/539mvpfjfz8v56j48xc.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1100305/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/97sf7aa9fqih150hxw3.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Remi Flower & Coffee",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 16,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/209260/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jb7qzfnrzas00hehcci.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/209260/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lvsb5n2nbvqhd96zu1z.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/209260/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/s1o9jcvb7sj80h1wnd7.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Adel's Famous Halal Food",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 18,
          "photos": []
        },
        {
          "name": "Supermoon Bakehouse",
          "city": "New York, NY",
          "category": "bakery",
          "rank": 19,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/8989/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mwlgn4uzsognyxdu7qi.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/8989/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/a1p4fkyoabmr7amu13b.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/8989/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/26f5yb40uftaf4gwpta.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Molly Tea",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 20,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/994270/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7axvj0urllgqiwr990.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/994270/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/i5psfhaqqzney8g8i9u.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Popup Bagels",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 21,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/871387/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/5xou3aio5esvdxkm3m.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/871387/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bjewayak37sa87ceon.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Little Pie Company",
          "city": "New York, NY",
          "category": "bakery",
          "rank": 22,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/11496/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8eb1m7xlvzsczggw7bq.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "L'industrie Pizzeria - Williamsburg",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 23,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/7749/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jcubrsrj9zbd7clrys.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/7749/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/x32740xwphbsz8uzp3x.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/7749/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/alvbux1ssrc8p9xvh4h.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Miss Madeleine",
          "city": "New York, NY",
          "category": "bakery",
          "rank": 27,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/29816/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bry3tag18u3w0mh2qm.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Raku",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 27,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/5273/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7jsuo3ahkc83uzgle1u.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/5273/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8io6355yfmjhuggof4m.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/5273/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/fu9x2nn24rf79krtjkc.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/5273/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/t6iy5auhtvh8mii6h0.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/5273/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/d27g60cl9x0fgp9sny.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/5273/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/6khcsr361hh90imcvtu.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Apollo Bagels",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 28,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/938525/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/p9i5mv0pux22awi1fg.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/938525/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/s2rxrwc025742v6ffp.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1225699/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xfmppi162pbdlnoyt4v.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1225699/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ek4etsakcustg9evhd1.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "hani’s bakery + café",
          "city": "New York, NY",
          "category": "bakery",
          "rank": 29,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1276216/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/kkwq5l0dn6m88ap6hz4.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Kidilum",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 29,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2208175/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ldj595owknq2q7h9qzw.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2208175/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ycq5oyb5s9esvflwic.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2208175/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/5u68ic73i3mmzwwjwxi.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2208175/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/w31uq76n0mrdbcvngg.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2208175/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wlclu4jevh83zu2arj.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Mama's TOO! Pizzeria West Village",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 30,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/955882/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/3p6ngixwxw9vvxjzny9.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/955882/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/nfe3j4cyjenf59v830.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Mei Lai Wah",
          "city": "New York, NY",
          "category": "bakery",
          "rank": 31,
          "photos": []
        },
        {
          "name": "Tompkins Square Bagels",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 33,
          "photos": []
        },
        {
          "name": "Pranakhon",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 35,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/166640/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vwgn7u0yayispej1sg4.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/166640/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1f9o6aq10gc7nw60vpj.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/166640/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jo61y9qj6jgk5wp6sdn.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Oren’s Coffee",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 36,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/9176/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/r65e8g5h84bimd33lnc.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/9176/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/eig4lxow75f8guumhk2.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Pecking House Chinatown",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 37,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1308211/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/r31q29doaql1cksinw8.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1308211/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/65dash0lkjx7ffhr3m9.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Lê Phin",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 43,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/135264/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/46hedarmrurdggkdzn0.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/135264/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/48y3nwtm6l2px5m88fk.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "mika's direction",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 44,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1295230/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/cqevg07zj3jc5hsx766.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Derby Cup Coffee",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 45,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1861034/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8h8li1csny973qeurgj.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1861034/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/zbhys7a9uy8qdmb82uf.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Bánh Mì Cô Út 2",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 48,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1411542/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/nie0ppzcy2niljozij0.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Maiko Matcha Cafe",
          "city": "New York, NY",
          "category": "dessert",
          "rank": 57,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/350362/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/v3n2u47h2c4p7ykrra.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/350362/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/na5czfzp7det949ij3c.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "7 Spring",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 59,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1783306/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1r6i3qqclrnih70v9rz.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1783306/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lyjvidge3h7wcpmd2j5.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "JOE & THE JUICE",
          "city": "New York, NY",
          "category": "coffee",
          "rank": 62,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/18765/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/cj64g4smg2oysz0z0cd.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Cello's Pizzeria",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 64,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1076804/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ljba0xj9c9ywba53wb.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1076804/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/k76kqrxjozdcyldb1gy.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "PopUp Bagels",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 71,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/871387/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/5xou3aio5esvdxkm3m.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/871387/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bjewayak37sa87ceon.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Joe & Pat’s NYC",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 82,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/5342/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bd8w4tbnsh475ok4l09.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/5342/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/zy3u3am3eq4rgv9uo2.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/5342/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/sks1v91igifdh7gosd4.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/5342/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4hib4fywxm6txj4c6gd.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/5342/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rjl9nr74laexv6x8k3j.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Añejo Tribeca",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 83,
          "photos": []
        },
        {
          "name": "LOS TACOS No.1",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 90,
          "photos": []
        },
        {
          "name": "Lucia Pizza Of SoHo",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 103,
          "photos": []
        },
        {
          "name": "Prince Street Pizza",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 130,
          "photos": []
        },
        {
          "name": "Potluck Club",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 139,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/117131/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/9soo9drqk1ug6c3vb48.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/117131/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ai0bail6ib8482t4zor.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/117131/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/qbens08qoeemvraddw2.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/117131/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dolfqxve3pspfpej6x.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/117131/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/2oioea414ab6xdwjfoq.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/117131/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ukvcn8tx20gmg2h1awh.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Slicehaus Pizzeria",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 140,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2041509/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/io38yc5bu4rp2yr2ob.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Upside Pizza",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 141,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1603846/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/muchm9z8p5264zu2p5.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1603846/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/k5ovh416t1kipow110e.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Leon's Bagels",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 150,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/74982/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tk67msja68szf3p6zmt.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/74982/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xf6a748ykq2mbaidyv.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "albadawi",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 163,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/663645/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8qfv7ruzbagcb6istqo.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/663645/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ihh6nzx4h4m36no38k8.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/663645/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/z1fyhbg0xnd6np4lro.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/663645/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ocfxzyeheocg79re414.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "New World Mall Food Court",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 189,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1752730/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lm7ut19jfm8kwmlbbi1.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1752730/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/uoseogrqi1fsqs2m0av.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "THE ELK",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 190,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/6498/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/pcdccbhvxdh2068pcob.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/6498/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vjs3wdpyq99ww0svapv.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/6498/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jqe9wepr4jkuxnnirn.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Campbell and Co - Williamsburg",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 191,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/55994/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mah0drnxhgcohvnki9.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Ichiran",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 194,
          "photos": []
        },
        {
          "name": "L’industrie Pizzeria - West Village",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 204,
          "photos": []
        },
        {
          "name": "Electric Burrito",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 210,
          "photos": []
        },
        {
          "name": "Oyshi Halal Food Truck",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 213,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/394605/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jhht7rrfwurtg8k0nd.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/394605/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/l7opvf7wnncwo1s7ynm.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Joe's Pizza Broadway",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 222,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/4312/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/c0wq0rshplymn7o40h.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/4312/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/d01iehk2u17t8qxdcue.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/4312/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tw4c4jbc2x7cpqf6ft.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Namkeen",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 228,
          "photos": []
        },
        {
          "name": "Bluestone Lane Upper West Side Café",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 240,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/7325/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ks4u6fq196dk6wovhiu.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Wayla",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 246,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/487/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1wdimfe7zi98fd5e2zn.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/487/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/c40zw2gg3s9o82awxjn.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/487/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/m5r09qhq89l64zzxz11.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Fonty’s Deli + Dukaan",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 247,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1993907/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tjtkygpm39cg52bmcqm.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1993907/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/s4j857kbmvct5wstca2.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1993907/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/hsy0jxguu8nqglxwynq.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Rowdy Rooster - Penn",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 284,
          "photos": []
        },
        {
          "name": "Kyma",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 285,
          "photos": []
        },
        {
          "name": "Lanzhou Handmade Noodle",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 287,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/11768/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0920pkcbd2ris3f6eidn.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/11768/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8d9rmwoqfje2i759c94.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "KOBA Korean BBQ",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 289,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/654198/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/2yu6jbe6mh2es3wql7s.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Joe’s Pizza",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 304,
          "photos": []
        },
        {
          "name": "Ci Siamo",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 306,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/47682/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/j4s3d062v7m0lpeicgp.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/47682/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1zmdebl6nn3e4ljkkix.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/47682/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/2kfd000qy1dk55pl7ce.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Longo Bros",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 319,
          "photos": []
        },
        {
          "name": "Liberty Bagels Midtown",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 340,
          "photos": []
        },
        {
          "name": "The Smith",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 344,
          "photos": []
        },
        {
          "name": "2 Bros Pizza",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 345,
          "photos": []
        },
        {
          "name": "Tacombi",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 346,
          "photos": []
        },
        {
          "name": "Steak Frites Bistro",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 349,
          "photos": []
        },
        {
          "name": "Vito's Slices and Ices",
          "city": "New York, NY",
          "category": "restaurant",
          "rank": 352,
          "photos": []
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
          "rank": 1,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/311556/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ct6ipk8by578e7hykc.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/311556/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/i9yvd8rgy0jtronw93w.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/311556/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/2e0wmslv0br6auwvdlh.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/311556/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wftd47f1xmo083krjag.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "MADE Coffee",
          "city": "Costa Mesa, CA",
          "category": "coffee",
          "rank": 3,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1568052/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rpbf3sr9mw7imjpylll.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Sul & Beans",
          "city": "Buena Park, CA",
          "category": "dessert",
          "rank": 3,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/528164/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0n8gwnsbb9ldzr0szdc2.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/528164/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/w39ihuzmbv342xmalx.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "The Bungalow Huntington Beach",
          "city": "Huntington Beach, CA",
          "category": "bar",
          "rank": 4,
          "photos": []
        },
        {
          "name": "Woody's Wharf",
          "city": "Newport Beach, CA",
          "category": "bar",
          "rank": 7,
          "photos": []
        },
        {
          "name": "Ayer Coffee",
          "city": "Tustin, CA",
          "category": "coffee",
          "rank": 10,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1958432/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/v3lbusokq7ck6oacn8n.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "INI Ristorante",
          "city": "Fountain Valley, CA",
          "category": "restaurant",
          "rank": 12,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/129876/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1zhbjpyxpjhj0tgatw5.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/129876/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/t8gm7mqly68pwsziyhh.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/129876/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/hkcng8nal070uael310.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/129876/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vu798xod4ybh5jkoh7.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/129876/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/744jqgdi7y391wd3ije.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/129876/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/w9uxpvq68sjauemsdxi.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Mutt Lynch's",
          "city": "Newport Beach, CA",
          "category": "bar",
          "rank": 15,
          "photos": []
        },
        {
          "name": "Hanuman Thai Eatery",
          "city": "Costa Mesa, CA",
          "category": "restaurant",
          "rank": 16,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/111106/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/qv70f8ng3zinp1ypcmp.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/111106/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/u9nwj7nhasfx0b01ap3.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/111106/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/v098xlyy5mdmow8kkxn.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/111106/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lfxidjorill1u9s75.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/111106/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/junv3bv56kih8w2yc4q.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/111106/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vtg1nfxvnzcifwv9l9.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/111106/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/fjyv6wozzzuyg3o0jzq.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/111106/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/y475crd81sovjh2xn6.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/111106/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/olauk93wea1ir15kdr.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Junbi - Irvine",
          "city": "Irvine, CA",
          "category": "coffee",
          "rank": 18,
          "photos": []
        },
        {
          "name": "Don Churros Gomez",
          "city": "Anaheim, CA",
          "category": "dessert",
          "rank": 20,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/536531/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/2r9rs23w2ufciz5fg4u.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/536531/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1j24q0jzlvetrjxprku.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Manaao - Thai Comfort Food",
          "city": "Tustin, CA",
          "category": "restaurant",
          "rank": 22,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/480739/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/zm0obsqimq7n9r1iyh.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/480739/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/k4sqn85dolp78re269.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/480739/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/zapuiqvjych3rqywswb.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/480739/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/q7t0f2s8wumsvimzcwe.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/480739/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/sooch7aqk9imk0ltlok.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/480739/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7bqirtpdw89qegrvtam.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/480739/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/eni4gb6qgv40mlw6dgh.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Cream Pan",
          "city": "Tustin, CA",
          "category": "bakery",
          "rank": 23,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/353154/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/zfpp77roqj79dmhl4wt.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "torotea",
          "city": "Santa Ana, CA",
          "category": "coffee",
          "rank": 26,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2962119/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/2nndz7rx4jfsqilq3sj.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2962119/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/j8240jrzse6ywqc4il.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Seaside Donuts Bakery",
          "city": "Newport Beach, CA",
          "category": "bakery",
          "rank": 33,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/31255/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bcckjzj5yrdu8hxqym.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/31255/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/m9vytefsso81h8hvh4c.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Willie’s Churros",
          "city": "Anaheim, CA",
          "category": "dessert",
          "rank": 33,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/422098/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/51enkwwmcllnwmvj0jg.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Chiang Rai - Tustin",
          "city": "Tustin, CA",
          "category": "restaurant",
          "rank": 36,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1601523/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wi4ssxjif2myhgpe3c6.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1601523/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/59ljwvalvn2kac001z5.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1601523/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/netg3hgcv49ck857n31.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Afters Ice Cream",
          "city": "Orange, CA",
          "category": "dessert",
          "rank": 40,
          "photos": []
        },
        {
          "name": "Stella Jean's Ice Cream The LAB",
          "city": "Costa Mesa, CA",
          "category": "dessert",
          "rank": 41,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1201719/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ysweov9gmqpcqxjauoq.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Claws and Cream",
          "city": "Garden Grove, CA",
          "category": "dessert",
          "rank": 42,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1951550/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/l5kt3zv98083tk74rl1.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1951550/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/443aidg98whxu5ply5o.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Taibat Noodle House 泰巴特清真面馆",
          "city": "Santa Ana, CA",
          "category": "restaurant",
          "rank": 42,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1806666/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jtxwbrujzbat6vi52x.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1806666/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lyoqf7j1044rab3l61.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Hans' Homemade Ice Cream & Deli",
          "city": "Santa Ana, CA",
          "category": "dessert",
          "rank": 45,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/531856/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1d31pcfyjf6xrx1846p.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Wanderlust Creamery",
          "city": "Irvine, CA",
          "category": "dessert",
          "rank": 49,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/526073/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lea2ifvnj5s3br01i2.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Santa Ana Brunch Club",
          "city": "Santa Ana, CA",
          "category": "restaurant",
          "rank": 50,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/498199/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/g6bzhoouhxpxvhtzrg.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/498199/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/axp0dqlx9bu8i3nozgm.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/498199/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/eg9szlurycbljd6fpl.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Mint Julep Bar",
          "city": "Anaheim, CA",
          "category": "dessert",
          "rank": 52,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/142558/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0phh04frq9skohs3omtc.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "SOMISOMI",
          "city": "Irvine, CA",
          "category": "dessert",
          "rank": 54,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/513603/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/yv2r63u7h17f2r9r72e.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Sababa Falafel Shop",
          "city": "Garden Grove, CA",
          "category": "restaurant",
          "rank": 92,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/10884/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/oxxs5k67jmr5inqn57d.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/10884/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4lxz8p8wbyrj015hykg.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "The Taco Stand",
          "city": "Orange, CA",
          "category": "restaurant",
          "rank": 93,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/57254/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0f5s7nraid09p9l07t4h.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/57254/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0c3ubxoh40fntfbei1e4.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Sichuan Impression",
          "city": "Tustin, CA",
          "category": "restaurant",
          "rank": 95,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/147951/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/enly7gwc47zcvqrsxo.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/147951/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8yq7oujeqk5ctn6ai48.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/147951/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/j1yl8le80oeus0r3zul.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/147951/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lnnuuuqecncopvf3ur2.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "The Vox Kitchen",
          "city": "Fountain Valley, CA",
          "category": "restaurant",
          "rank": 100,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/22434/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8m8w3lgoj9csc1c46pg.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/22434/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/epycczxhowhuzvsfw4m.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/22434/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ixxkycuog97fwu0ytq.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/22434/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/5nst1u8j7v37md93ca1.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Rotana Alsham Shawarma",
          "city": "Santa Ana, CA",
          "category": "restaurant",
          "rank": 113,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/886112/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lwerd9jkofhfy6ifrlb.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/886112/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/07v2tbowyutx9v73gf8d.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Tacos Luci",
          "city": "Santa Ana, CA",
          "category": "restaurant",
          "rank": 114,
          "photos": []
        },
        {
          "name": "'Ai Pono Cafe",
          "city": "Costa Mesa, CA",
          "category": "restaurant",
          "rank": 120,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/68342/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4qbfn5odrwoeov44l2o.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Pad Thai Restaurant",
          "city": "Santa Ana, CA",
          "category": "restaurant",
          "rank": 133,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/758384/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/t49qop89ceuuifau61.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "The Crack Shack",
          "city": "Costa Mesa, CA",
          "category": "restaurant",
          "rank": 158,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/22634/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/m5fze5wjmnnvykc6ve9.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/22634/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/60cedr6x8inj7rmqgpk.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/22634/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/h1fsvvdbo6mh12bs19l.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "MASALA BAE",
          "city": "Tustin, CA",
          "category": "restaurant",
          "rank": 161,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/247616/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bj3xrig67i9v8lef961.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/247616/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/onwejthkln9aqwxb5s.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/247616/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0jfpg4lddm9kiz9uq4or.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/247616/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rwxclp8titvpt14rsu.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/247616/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lxnbevg2hmgh1ikx65.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/247616/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/npm9qqe3lc9fjfwxypq.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Sup Noodle Bar - Irvine",
          "city": "Irvine, CA",
          "category": "restaurant",
          "rank": 172,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/28147/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/yzyvyv933iulytvrkb.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/28147/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4vbe1ch6xch599eeqyd.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Naan & Kabob",
          "city": "Tustin, CA",
          "category": "restaurant",
          "rank": 176,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/224116/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/e03ajfe2phklq1zlfzb.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/224116/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/i6piw4ka8kc71f34mdo.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/224116/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/9ddemoul3wnw7ninl3o.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Din Tai Fung",
          "city": "Anaheim, CA",
          "category": "restaurant",
          "rank": 180,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1141912/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/fo28dk8562krbo0e8zi.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1141912/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/9xwr61l4mibrsi4vmie.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1141912/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/hjjgw0c24wwnlt7ebt4.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1141912/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/9jo3mravide31yusli.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1141912/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ou5rdkj5sub8tzzsv55.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1141912/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ev7za2in8wcqtohv82.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1141912/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/iqp0j40tzdhir0vg6c.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "THH Sandwiches",
          "city": "Tustin, CA",
          "category": "restaurant",
          "rank": 184,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/128534/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/imixkxcfbj8at6yyo1s.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/128534/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/gcbljz581d4ib7uu79n.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Bánh Mì & Chè Cali Bakery",
          "city": "Westminster, CA",
          "category": "restaurant",
          "rank": 186,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/539206/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xbb1b0v0tkp3u02r9ge.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/539206/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/5ajibsfruq9iji00wlv.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "NEP Cafe",
          "city": "Irvine, CA",
          "category": "restaurant",
          "rank": 187,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/610282/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/00f46spsncvjspr6k88ka.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/610282/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/6npgiffnl9rwdfvph05.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/610282/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/3hbgbvocghoy9im4u2v.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/610282/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jnw5oxqwvseqtoq3d7f.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/610282/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/q5zapq6r2brvh1t1sjf.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/610282/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/6lckcwecam9h2ap7qf2.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "All That Shabu",
          "city": "Irvine, CA",
          "category": "restaurant",
          "rank": 192,
          "photos": []
        },
        {
          "name": "X-Fish Izakaya",
          "city": "Buena Park, CA",
          "category": "restaurant",
          "rank": 193,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/969249/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/554ghvpogs9bipa17e.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/969249/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xtcgcitp0m9arlqiay.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/969249/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/saq29z0t1hlsm1lrz5.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/969249/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wk4wejtq2e88yzsunbg.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/969249/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mi4gybriqcb520w9s99.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Southern Spice",
          "city": "Irvine, CA",
          "category": "restaurant",
          "rank": 197,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/119085/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ug3ac4o3wtv0mitlkg.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/119085/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/c6w1hobjgg7itcsgf48.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/119085/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1ikphvd6c4if4fqnb4l.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/119085/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/9l9juipitpmhvp839pz.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Barolo Italian Cafe",
          "city": "Tustin, CA",
          "category": "restaurant",
          "rank": 215,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/222053/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/yb3zcqc2yimbqedh7v.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/222053/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/5ibicrn2f34auw2ulyv.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Tacos Los Cholos",
          "city": "Anaheim, CA",
          "category": "restaurant",
          "rank": 229,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/189959/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/iy2cno492le60lflvop.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/189959/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dekita7zprlravtrnq.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Shirley's Bagels",
          "city": "Laguna Beach, CA",
          "category": "restaurant",
          "rank": 250,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/217597/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7xv8qxqf8ororohqwn9.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/217597/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/134xw4xgh3cc5xvn8wyr.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "CAVA",
          "city": "Irvine, CA",
          "category": "restaurant",
          "rank": 252,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/29931/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1qhhx7k63v79vsjfhqd.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "KoKo Chicken & BBQ",
          "city": "Garden Grove, CA",
          "category": "restaurant",
          "rank": 254,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/170108/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dvf97r8xzdk25ttgtb6.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/170108/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/x5d6gryx0pdw543osl.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/170108/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1uiobhmbslcrstix6to.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/170108/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/d1rxad7uec5e6wvjbp6.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/170108/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wpd2sct0aj6fwjxv2n.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/170108/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vgqhon1bt6tijg9rn8f.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Seven Grams",
          "city": "Tustin, CA",
          "category": "restaurant",
          "rank": 257,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/329107/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rkppe6ww5vb5ehf5zi4.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Slurpin' Ramen Bar - Costa Mesa",
          "city": "Costa Mesa, CA",
          "category": "restaurant",
          "rank": 260,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/160288/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/m3j6a5o8d8poc3ur8r.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Kaju Soft Tofu Restaurant (Culver)",
          "city": "Irvine, CA",
          "category": "restaurant",
          "rank": 292,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/407672/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xf3ntpc5g833ythq3l.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/407672/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1o0al93cq872b0fmr1h.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Bred Hot Chicken - Costa Mesa",
          "city": "Costa Mesa, CA",
          "category": "restaurant",
          "rank": 299,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/170881/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/nh0ju259tpp27jt8vze.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "AhbA",
          "city": "Costa Mesa, CA",
          "category": "restaurant",
          "rank": 300,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1185506/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4639zo3k9b5189gz5b2.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1185506/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/s0j260n1rtunpnxdk7.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "BCD Tofu House",
          "city": "Irvine, CA",
          "category": "restaurant",
          "rank": 311,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/19613/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/oo3g8pg811bcxwwgpb8.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Pym Test Kitchen",
          "city": "Anaheim, CA",
          "category": "restaurant",
          "rank": 314,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/97740/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wuhuka75go9ilmjtqo.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Gus's World Famous Fried Chicken",
          "city": "Santa Ana, CA",
          "category": "restaurant",
          "rank": 318,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/205977/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mg4cuxbl3f8jvkmlmyk.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Turkey Leg Cart",
          "city": "Anaheim, CA",
          "category": "restaurant",
          "rank": 330,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/227750/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lsat2hw61crnuewawe.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Kashiwa Ramen",
          "city": "Costa Mesa, CA",
          "category": "restaurant",
          "rank": 337,
          "photos": []
        },
        {
          "name": "Niki's Halal Grill & Karahi - Authentic Pakistani and Indian Food",
          "city": "Santa Ana, CA",
          "category": "restaurant",
          "rank": 351,
          "photos": []
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
          "rank": 1,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/7629/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mb4vknpa2vpskx4gh1n.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/7629/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/6ddppoc8j74xl8vnl2.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Indigo Cow",
          "city": "Los Angeles, CA",
          "category": "dessert",
          "rank": 2,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1134065/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/p6k5nz67arfv666y3v.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1134065/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vt22axce6osap2tc2g.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Howlin' Ray's Hot Chicken - Pasadena",
          "city": "Pasadena, CA",
          "category": "restaurant",
          "rank": 3,
          "photos": []
        },
        {
          "name": "BADMAASH Fairfax",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 5,
          "photos": []
        },
        {
          "name": "Saffron & Rose Ice Cream",
          "city": "Los Angeles, CA",
          "category": "dessert",
          "rank": 7,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/192261/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tjb8am5hsad5t8rsu6n.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/192261/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/llf90xby8hooau05whk.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Villa's Tacos Los Angeles",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 7,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/93025/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/9xtnuz5uabn7voowg25.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/93025/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/hj89fszlmfrrmjscsu3.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/93025/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/udeqzllzvshg8tkrwqb.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Bonsai Coffee & Bar",
          "city": "Los Angeles, CA",
          "category": "coffee",
          "rank": 8,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/885922/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lq45sorhmwai1lo5el6.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Howlin' Ray's Hot Chicken - Chinatown",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 8,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/591/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/pcw8x0oxyrdw08ywq03.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/591/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/oq1r4jvflell05zouj1.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Apollonia's Pizzeria",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 10,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/5510/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/icpaau7zrskxdn8086t.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/5510/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/i5fy8dt04ldpbfkszt.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Kanomwaan Thai Gelato and Dessert Cafe",
          "city": "Los Angeles, CA",
          "category": "dessert",
          "rank": 11,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/796524/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/3ckr7tc0k311orcbbqi.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/796524/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/63lqi17lno4mvrb54ls.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Bacio di Latte | Larchmont Village, LA",
          "city": "Los Angeles, CA",
          "category": "dessert",
          "rank": 15,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/513902/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vmxcoslpt1rorbegfa.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/513902/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tvfc8fi8po0wl8do13.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Barney's Beanery Westwood",
          "city": "Los Angeles, CA",
          "category": "bar",
          "rank": 17,
          "photos": []
        },
        {
          "name": "Brothers Cousins Tacos",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 17,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/371506/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ka9bbh0sb6gdta0b00n.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/371506/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/boylqtj6ss1157jas6.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "La La Land Kind Cafe",
          "city": "Los Angeles, CA",
          "category": "coffee",
          "rank": 17,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/348314/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/474r8072dzic53ulwa.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Los Globos",
          "city": "Los Angeles, CA",
          "category": "bar",
          "rank": 19,
          "photos": []
        },
        {
          "name": "Salt & Straw",
          "city": "Los Angeles, CA",
          "category": "dessert",
          "rank": 21,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/840610/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7t6o4o6gj3561abmmd3.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Mamie Italian Kitchen",
          "city": "West Hollywood, CA",
          "category": "restaurant",
          "rank": 26,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/912265/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wku76cgtffprmjryuq.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/912265/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wm0xbcycl72tu54q78.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Sul & Beans",
          "city": "Los Angeles, CA",
          "category": "dessert",
          "rank": 26,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/513228/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ggm7c3jrwhiyj2z7xoi.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Tang and Java",
          "city": "Los Angeles, CA",
          "category": "coffee",
          "rank": 37,
          "photos": []
        },
        {
          "name": "Dama Grill (Sahelnom)",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 45,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1542599/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/nvyvq85m8fdrts0rql1.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1542599/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7zfpd6aeptl6ry25lsy.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1542599/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/6v01qu6igmuzuymqkj.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1542599/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/j4jj72bk9idn5hellf9.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Happy Days Cafe",
          "city": "Los Angeles, CA",
          "category": "dessert",
          "rank": 48,
          "photos": []
        },
        {
          "name": "Salt & Straw",
          "city": "Los Angeles, CA",
          "category": "dessert",
          "rank": 50,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/840610/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7t6o4o6gj3561abmmd3.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Estillo Tijuana Angels Tacos",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 52,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/165645/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rhntmhl4p0ecqkwz5f3.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/165645/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/sdk593mzm9ibccbu1f3.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/165645/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/12vd1m7t4s7ak6epooqq.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/165645/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/eumcrx8wxpdolqpk8y6.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "McConnell's Fine Ice Creams - Third Street Promenade",
          "city": "Santa Monica, CA",
          "category": "dessert",
          "rank": 55,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/233809/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/o7sm7i4htoe4pgbgg5f.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Sweets Talk",
          "city": "West Hollywood, CA",
          "category": "coffee",
          "rank": 57,
          "photos": []
        },
        {
          "name": "% ARABICA LOS ANGELES THE GROVE",
          "city": "Los Angeles, CA",
          "category": "coffee",
          "rank": 58,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/361324/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/k26aegyg2isqtscxmqi.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/361324/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ay4gkestetnmnusxm0i.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Alfred Coffee",
          "city": "Los Angeles, CA",
          "category": "coffee",
          "rank": 60,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/42420/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/guoawq2rdlbywnbltk0.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "786 Degrees Pizza - Los Angeles",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 61,
          "photos": []
        },
        {
          "name": "Trophy Coffee",
          "city": "Santa Clarita, CA",
          "category": "coffee",
          "rank": 61,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/911768/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/27xsdqz9g8zhf9yf9edr.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Holbox",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 69,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/22141/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/y0oo3qx3qlkgvgsh2i0.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/22141/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8gdor2dizarop21jbvu.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/22141/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1fbgpud2abohwoq6bu1.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Ruen Pair",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 72,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/76162/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/t85fxzopln1yxbz3ae.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/76162/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/zeowquoe1ilhr3z1xq.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/76162/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rs29e4qvvnfsejhoid.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/76162/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/79uzlsa2v6ln14i3tzh.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/76162/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/79s0y0djrvwekdkqyar.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Erewhon",
          "city": "Pasadena, CA",
          "category": "restaurant",
          "rank": 78,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/669395/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wf2s8dxcm0idmgyclty.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Tacos Chidos",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 94,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/117948/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/nrcdv7cc6cw2mb0yuy.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/117948/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ot1qx8dlngsbtu258z.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/117948/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/pwys9a1v3rdt1anjk5n.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/117948/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ikdlewdptrkms6mfywv.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Descanso Beach Club",
          "city": "Avalon, CA",
          "category": "restaurant",
          "rank": 96,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/157260/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7myj8x969v49ej2h1t9.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/157260/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/nbq1r9wuwfqvc8howhn.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/157260/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/12wtq7qcbm842xs0h2s.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/157260/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/v33588e34gmfssv45g.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/157260/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/353eyw0veofi1wd0y47.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Leo's Tacos Truck",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 97,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/3139/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dxzhx9etxl7i3e3r0ch.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/3139/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dumtu87r06fnqu8xcgs.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Le Coupe",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 101,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/158464/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ukovi34rket338crzd.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/158464/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ghw60m5qq7iotow7thl.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/158464/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/yg1e5faz4crquqj79h.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/158464/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/uh590v55n4ciijil5nw.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Calic Bagel",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 116,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/603109/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8152fs15bra9kt5tv4j.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/603109/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/r6troy5snbh0kxqooi1.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/603109/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lufagqht9y8q62xttl.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/603109/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/h277f8u3s44886ezveo.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Sobuneh",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 122,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/963084/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/t66dw439k2wt5nralp.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/963084/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/iuwtolfxldnpzpdc9uv.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/963084/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/oy9l4ja61eo0a9eklgf.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Liu's Cafe - Westwood",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 135,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2521196/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7rbu60h6lfq9zenttdp.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2521196/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/fjej9y4xpkkx78lz3q1.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2521196/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rh5g5pa6hamjg8g5ij.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2521196/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/pjyeq6qqawwset25b3.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2521196/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8wlbe1a1vhlc5fcnq1w.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Carla Cafe",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 136,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/751033/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/fydu6zeprq7gq1xga00.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Tsukiyo sushi",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 138,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1596244/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/l3f2zxo0g3mkpblc2na.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1596244/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ur540oeurufkwuwe8yo.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1596244/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/nrjtwhjbf8j46x8lape.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Great Indian Kitchen",
          "city": "Santa Clarita, CA",
          "category": "restaurant",
          "rank": 145,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/918703/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/y1ztfga1e12fdrnckk.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/918703/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/cs9txhtfpvg84tdsjfe.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/918703/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/olywyva4jzkz7v5y6h.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Ggiata Delicatessen",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 146,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2350450/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/e6tjnora63veszsilmk.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2350450/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/id4ishc2bmrdvj2d38.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2350450/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/98nik32n8362v9c2tik.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "MADRE RESTAURANT & MEZCALERIA",
          "city": "Santa Clarita, CA",
          "category": "restaurant",
          "rank": 164,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/688578/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/j7gdy16wcwgbq9afq0i.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/688578/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xzgmfw3aekg3ejlz0a.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "WAKE AND LATE",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 166,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1316624/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/w2rsnvw937a8lmr9ixv.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Barnrau Thai Halal Cuisine",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 196,
          "photos": []
        },
        {
          "name": "Daves Hot Chicken",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 233,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/47320/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/h4qkep802lgogc31dhs.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Omaya’s Lebanese Cuisine",
          "city": "Santa Clarita, CA",
          "category": "restaurant",
          "rank": 239,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/352113/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/f3ql6ce2b8t89n4qva4.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/352113/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/w77079myjpjsvtzx935.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/352113/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rwhhwtwqiatatauprc.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Lima Limon Peruvian Restaurant",
          "city": "Santa Clarita, CA",
          "category": "restaurant",
          "rank": 243,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/253382/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/5v2q2pj0ymczen7by4v.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Thai Yaki",
          "city": "Santa Clarita, CA",
          "category": "restaurant",
          "rank": 244,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/623801/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/iksngsbp6pjxa3vw3w.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/623801/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/nm96c9b3hrsgff7hcyy.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/623801/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dp2k60j4s7ao3lh7jv8.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/623801/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bqn1kqb4fiof0ftbg0k.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Gogobop Korean Rice Bar",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 305,
          "photos": []
        },
        {
          "name": "Simpang Asia",
          "city": "Los Angeles, CA",
          "category": "restaurant",
          "rank": 309,
          "photos": []
        },
        {
          "name": "Eggs 'n' Things Valencia",
          "city": "Santa Clarita, CA",
          "category": "restaurant",
          "rank": 322,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/67810/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/be86ncurquwu97fh9u5.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "1212 Santa Monica",
          "city": "Santa Monica, CA",
          "category": "restaurant",
          "rank": 341,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1779/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jso7jbn3yabjs96m1l.jpg",
              "isFavoriteDish": false
            }
          ]
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
          "rank": 2,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/278836/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/msuuaf220ypxknv2m44.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/278836/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/zh935b3vgrcvf8binxy.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Below",
          "city": "London",
          "category": "bar",
          "rank": 3,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/276805/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/j8h0eyvf9v091jw2ul.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/276805/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/5op8e1f1rrh54uv6y7c.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/276805/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jmjpyku70pbjh803cku.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/276805/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ufifckh8x8llkiioic.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Manetta's Bar",
          "city": "London",
          "category": "bar",
          "rank": 5,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/280445/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/f0rfyolep943wxkrtlt.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/280445/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rl0hzzx7b8ts67q679.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/280445/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/q6o2hj2qj8griee8i44.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/280445/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tgovikrqzno28qnkb4r.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/280445/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4yuagmt1uhhq69di9cl.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Slim Jim's Liquor Store",
          "city": "London",
          "category": "bar",
          "rank": 10,
          "photos": []
        },
        {
          "name": "Pophams",
          "city": "London",
          "category": "bakery",
          "rank": 11,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/352044/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/asorn2p74yvaqwbsz16.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/352044/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/o7cw23o8isgtpwdtvqb.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/352044/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/awmtew7dyfigy4docbf.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Bread Ahead Bakery School | Borough Market",
          "city": "London",
          "category": "bakery",
          "rank": 12,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2497659/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tkk4s67nmwi592quzy.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Jolene Colebrooke Row",
          "city": "London",
          "category": "bakery",
          "rank": 15,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/354643/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/robz7eufkpoustyfg87.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Nostos Coffee",
          "city": "London",
          "category": "coffee",
          "rank": 15,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/881832/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ceaqh0qzv8eb0jnyopg.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/881832/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jwk4nymdvifwb8b824y.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/881832/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ky978i3jfr7dkqckq0.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "The Clarence",
          "city": "London",
          "category": "bar",
          "rank": 16,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/42332/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/3cjqyhvv2y5gj4yw4nq.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "The Dusty Knuckle Bakery",
          "city": "London",
          "category": "bakery",
          "rank": 17,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/5532/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tqmko5da6ektyya1e4.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/5532/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/3u540p6royxgd5zqst2.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "The Ginger Pig",
          "city": "London",
          "category": "bakery",
          "rank": 18,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/149743/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ira9ae056nk33mbv3pn.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/149743/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/js8pawz7v9ld059esr.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/149743/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lbpkkodhhs12339hh0.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Udderlicious Ice Cream",
          "city": "London",
          "category": "dessert",
          "rank": 24,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/400291/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/kn36tpncu1bkfad51br.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/400291/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7pw2yi2tbpfedkun6m8.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Rosslyn Coffee Fenchurch Street Station",
          "city": "London",
          "category": "coffee",
          "rank": 25,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2621560/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/hexh56pfmrtin5cbpky.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2621560/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/cknzfabopboroiyuzci.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2621560/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/66yc9vsu3fa02dp30ej.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "GAIL's Bakery Islington",
          "city": "London",
          "category": "bakery",
          "rank": 28,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/95194/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/40ymbwnnmtiai6p6gd1.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Bilmonte",
          "city": "London",
          "category": "dessert",
          "rank": 31,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/512230/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/x7oal4v0sv1q81ack8.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/512230/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/22runrgkucofg6moi9t.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/512230/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4b9bvapf6kkxmnluwgg.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "The English Rose Café and Tea Shop",
          "city": "London",
          "category": "coffee",
          "rank": 33,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/354697/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/incrf99f6qi7dtwth3.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/354697/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/05yl5l6q3fxkajll0lll.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/354697/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/k38d6xzv1xg5z4asdb.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/354697/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/zmwzjbmpjtmhm3aql1e.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Matchado",
          "city": "London",
          "category": "coffee",
          "rank": 39,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/456196/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/enwkd8pbntgaag2zuso.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Carpo",
          "city": "London",
          "category": "coffee",
          "rank": 47,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/612208/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/u3lgxzqt2moc2ummmtd.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/612208/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ksq1s00umzh4yatsxn.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "The Pig and Butcher",
          "city": "London",
          "category": "restaurant",
          "rank": 62,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/185469/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/q0u90uble0ov8u4g7p0.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/185469/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/kd3dbx3cte1oa4ko1q.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/185469/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jc374sjg70pru1uoead.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/185469/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8h5mitslecez2u7hz1z.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Breadstall Pizza",
          "city": "London",
          "category": "restaurant",
          "rank": 85,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1507554/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lilwvf9re5ce7c0mqr6.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1507554/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/romiwgrq8mmd5algivk.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "The Tamil Prince",
          "city": "London",
          "category": "restaurant",
          "rank": 109,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/132169/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bk7rj4h29jw955batdw.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/132169/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/z52i7l26iwoa19gu4z.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/132169/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wlp3jzx5sn7y032c0.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/132169/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/u2pfmkalr0c8rt8l819.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/132169/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/r7xa4904bidmd7yz6qm.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Kolkati Camden market",
          "city": "London",
          "category": "restaurant",
          "rank": 110,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/66251/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/po79tbqgwfdqcxv07nz.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/66251/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/kfg4s2u8wxa94p8k0h.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Dishoom Covent Garden",
          "city": "London",
          "category": "restaurant",
          "rank": 111,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/10883/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0t6hsqnhlevsjxkfsfqz.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/10883/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/sien7dudqsqptk76j6.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/10883/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/yajquk7vspev0j3aij9.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/10883/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/a6xhfipnup7e8xkdp59.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/10883/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/a1oitlfyq8mu19f4kzf.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/10883/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/k8ijcf64s6fa79p8l0.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/10883/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4i02n4s8nmhfmowcuvz.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/10883/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8o2a83m5o61narzneo.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/10883/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ei3x8ahpnxj1zwxioda.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/10883/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/exahwyylbqgcdwaqkjp.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "The Black Pig",
          "city": "London",
          "category": "restaurant",
          "rank": 155,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/145091/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1w23xshc6d8d0lrxr8l.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/145091/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/j1inr3k9spbyplussw.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/145091/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dh216m0ie7vf90usdc9.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "50 Kalò di Ciro Salvo Pizzeria London",
          "city": "London",
          "category": "restaurant",
          "rank": 159,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/58573/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/pqbpjni2usiwkwp1rt6.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/58573/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/2l6cezx4f2mvrp1jwip.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/58573/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/b8e2ez5koem6g06r32f.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/58573/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ncwphyari2vjuul32z.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/58573/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/pgo7nbnkurq67uee7y7.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "KHAAO - CAMDEN LOCK",
          "city": "London",
          "category": "restaurant",
          "rank": 202,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/177635/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/o94vs57c6hkghpldrk2.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/177635/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/je9q4u698tpg0s4y0b7.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Nando's Islington",
          "city": "London",
          "category": "restaurant",
          "rank": 208,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/270326/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/gur5b9batutb1osop0h.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Hanbaagaasuuteeki",
          "city": "London",
          "category": "restaurant",
          "rank": 230,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2002968/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/6tzt88a0arc6gvdwhd.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2002968/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mdqo2q6t5rfb8va2o4.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2002968/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4rh5kb2o4fa6u3wjp1a.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "The Ottoman Doner® - Angel",
          "city": "London",
          "category": "restaurant",
          "rank": 245,
          "photos": []
        },
        {
          "name": "Poppies Fish & Chips",
          "city": "London",
          "category": "restaurant",
          "rank": 265,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/17248/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1y4m0k92xyrcap95vsp.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/17248/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/t7aenokgxibtvhh4xd6.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/17248/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/t6xjww6vp5ed92whmtt.jpg",
              "isFavoriteDish": false
            }
          ]
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
          "rank": 6,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/269411/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wfj6bp4u4e84vb10t73.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/269411/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rx7kycx7z57xgssna6.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "cincodoce",
          "city": "Mexico City",
          "category": "bar",
          "rank": 9,
          "photos": []
        },
        {
          "name": "BUNA Condesa",
          "city": "Mexico City",
          "category": "coffee",
          "rank": 14,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1285748/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/nu7v6e4wajhhzluu7nz.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Panadería Rosetta",
          "city": "Mexico City",
          "category": "bakery",
          "rank": 14,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/80024/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/oug7bcz06ishzq2zlp.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/80024/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/edt6ymdm9fd7af0mzj.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/80024/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ucc8t4lmatcos2lgxg9.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/80024/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/a62pxjqky0l8ox55bze.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/80024/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/49jb8rdwehgwlcn09zj.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/80024/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ebu0s3621bebjw0sj7.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/80024/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/pb8sx0eb9idoh8ctyz4.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/80024/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bofs8cnkpf8yze1h2ga.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/80024/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/b2yv1dp35c5pwbv71ua.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Tacos del Valle (Roma Norte)",
          "city": "Mexico City",
          "category": "restaurant",
          "rank": 15,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1118375/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/s5b90dtf8wrzxom9o8.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1118375/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ixqbrfoqf6isusa8xj.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1118375/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/25d0j0a28xly1cpisyh.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1118375/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/j4xak3w0jxfef6zzmh6.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1118375/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4y40c9akqm34gpme9m1.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1118375/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/j9p9wrr4j1gixo33j5z.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1118375/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/kfp2jflvwgucnc9rnl.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1118375/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0ueqsxw0fv3sqr9dz7x.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Churreria El Moro Centro",
          "city": "Mexico City",
          "category": "dessert",
          "rank": 18,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/54264/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/kpp74q41njdo4vfyom.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/54264/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/omvleopv25ik4cndmov.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/54264/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/f1nbd5i9zy5egwf2fj0.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "La Gran Fama",
          "city": "Puebla",
          "category": "bakery",
          "rank": 20,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1690786/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1srf38ccaaby0xquf66.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1690786/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/116atr414m6fcbw8wz9.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "La Cuatro Barra de Café",
          "city": "Puebla",
          "category": "coffee",
          "rank": 28,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1370131/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/w2qc1cvkm8rjmr66zh0.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1370131/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/p1j2xd7dkmrww1jdf0.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "CUMBÉ Coffee Roasters",
          "city": "Mexico City",
          "category": "coffee",
          "rank": 31,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/356525/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/enqsxd69ndngnbhxbqd.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/356525/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8k1dl7q86h8k0zzsrf.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Mural de los Poblanos",
          "city": "Puebla",
          "category": "restaurant",
          "rank": 41,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/183408/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/kibjwepqkxasw6kyocb.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/183408/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/57nu1wazh1izspav9li.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/183408/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/qo225exe29mnbj4n2j2.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/183408/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/m2ojp0e5i6dbetp0thu.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/183408/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/sxxdkywkqtjjsutz17l.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/183408/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4pwn2vibh6rtbf47kqr.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Maizajo, Molino y Tortillería",
          "city": "Mexico City",
          "category": "restaurant",
          "rank": 54,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/716902/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8ydiy4mx6jh6m2m5c1z.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/716902/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xcfli7pn7xaqrm9op60.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/716902/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/t4nasyio9tlqzbykm00.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/716902/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/g1w1c87a23iihn7gqo.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/716902/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/t6zaykiwhxqmncstb6i.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "El Hidalguense",
          "city": "Mexico City",
          "category": "restaurant",
          "rank": 55,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/71059/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/5dfoe189fmcjkovzk5h.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/71059/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7nvrkpuphp7rjnerwet.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/71059/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vlsmv091roym4tqta5.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Masala y Maíz",
          "city": "Cuauhtémoc",
          "category": "restaurant",
          "rank": 57,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/70179/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/nyjvieh5j7a2jmpppv.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/70179/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/6sk2u19k6ssrrp8reuv.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/70179/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/asr2i1kq1bkv3pzhgh.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/70179/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vc1bwkbebvd7ud8jw9h.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/70179/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tbs1coi5ngd6y6i8xl.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/70179/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/2edz4sap46206l41v26.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/70179/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/71s8uq1m4rptf2k0wvu.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/70179/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1q0m013qi0r3y8bjork.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/70179/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/d2272eq8hrgxic6i11h.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/70179/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/9ks5e6i6rri10fzzse1.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/70179/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xta04dbvrcgmfidknh.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/70179/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/v8bs0xe9dosz6eofyhg.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Chocolatería La Rifa",
          "city": "Mexico City",
          "category": "coffee",
          "rank": 65,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/522449/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/pauzfppv53ghz4p5wyb.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Antojitos mexicanos Doña Queta",
          "city": "Tepoztlán",
          "category": "restaurant",
          "rank": 70,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2312353/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/20obn0ai2e70nskwsdk.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2312353/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xfs6ww5s1cf96vdpv01.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2312353/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1qbmrzdpcyigxpjio0t.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Los Tacos",
          "city": "Mexico City",
          "category": "restaurant",
          "rank": 77,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/534507/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/i3fk4chwlpn5vm5m9rs.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/534507/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/2vhijbrthbmg01gs635.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Café Tacobar",
          "city": "Mexico City",
          "category": "restaurant",
          "rank": 86,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/78456/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ppmot7du9sm2k10z8jz.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/78456/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ecufanhzggtra601t0m.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/78456/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/k6vskybl0dbvryt0ea.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/78456/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tamlwaybruqzc3eo777.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Los Cocuyos",
          "city": "Mexico City",
          "category": "restaurant",
          "rank": 91,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/9844/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/qzo1wqof99n0gxvpvuh.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/9844/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jn1pouadt38264vgbp4.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/9844/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/avewxq9zb041qlwooer.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "El lugar de siempre",
          "city": "Tepoztlán",
          "category": "restaurant",
          "rank": 126,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2870343/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mntr5bqndiqn8yjc94.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2870343/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/a6dg4o7asi8zybd5jd6.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Santoua Cholula",
          "city": "San Andrés Cholula",
          "category": "restaurant",
          "rank": 203,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1650127/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1aq42gn393w6nw45i43.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1650127/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ycixy17ldxqw7oo20v.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1650127/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rdeawbeew1c9n9t14p7.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1650127/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ec7nesg4newndnwt6nf.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1650127/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/2wvss85pfqlt2fwp40h.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1650127/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/br0g265v1e62mih3t6l.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Taqueria La Oriental",
          "city": "Puebla",
          "category": "restaurant",
          "rank": 268,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1979339/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/h1bmuxiogigne37zx78.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Restaurante Garabatos Centro",
          "city": "Mexico City",
          "category": "restaurant",
          "rank": 316,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/767568/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/h9ligdn2pe5eodiynau.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/767568/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/otxuz3f48x2adl89ls.jpg",
              "isFavoriteDish": false
            }
          ]
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
          "rank": 4,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2724781/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xhlircztuulytqm4nu7.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2724781/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/qg2100agxcew3lix8a.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2724781/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/3dckmrouncc3kjxnwco.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2724781/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/gjxqhcrdvi4x8bk3n3x.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Cafe Niloufer Hitech City",
          "city": "Serilingampalle (M)",
          "category": "coffee",
          "rank": 22,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1677278/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ad7yuxtl5ucn1posdyl.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1677278/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/i52i6lx4ch7v4ze5bo.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Cafe Niloufer",
          "city": "Hyderabad",
          "category": "coffee",
          "rank": 23,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1068417/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/aac3h61cnrmt3xx6ezv.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Organic Creamery By Iceberg",
          "city": "Hyderabad",
          "category": "dessert",
          "rank": 27,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1621876/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xewuip3o2nq2jh5vp81.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1621876/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bierzkwdemj2j00zjge.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "ARABIAN CORNER",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 49,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1152260/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/fzm9mkm8m4g1sm2p7r.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1152260/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/v19t6vn14oy46bjl77.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Pancha Kattu Dosa",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 53,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1120788/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/iw7obo7axl93d46qf9t.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1120788/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mipgtrqhacm6gxh4y8e.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1120788/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/91df9lkpyopbmlqs4c.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "SQUEEZ Juice Bars",
          "city": "Hyderabad",
          "category": "coffee",
          "rank": 64,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/369864/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ypkr7ibdeum8t3dmf6x.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Dine Hill",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 68,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/797553/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dgtse10hlw6qjef0q2o.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/797553/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/sgb4bsu7j7pdazalgb4.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/797553/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wemj5rj9z8o0smu80zr.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Itihaas Restaurant and Banquets",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 80,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1593849/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ksxn5quikfeiv1iqi0u.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1593849/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/uecjsscwd40w3xuaph.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1593849/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/gtc15w0q7gzdsfhx4t.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1593849/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/5u7laoqs822m8egiash.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1593849/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/43nxrwu0me4u6yh1rd3.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Palamuru Grill",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 105,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/754505/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rcnzuhi2hw844pq3pk.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/754505/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0g34tb91ugtuksa2mlck.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/754505/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/yv8uigrs3re48qymi6u.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/754505/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mdo0kaio4z3r6gqq2a.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/754505/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/29awbrzx4is5ehvz9ee.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Sherlock's - Lounge & Kitchen Hyderabad",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 143,
          "photos": []
        },
        {
          "name": "Mughal Darbar",
          "city": "Srinagar",
          "category": "restaurant",
          "rank": 151,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2997614/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wl1yjyp3br5cg69wba.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2997614/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/o05mq1ofupde85oo5ij.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2997614/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/hl3e6wmk3ygl1gyvbxb.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2997614/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/00pqhgl8hbngq43qhpfqt.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Pista House Kukatpally",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 156,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/807322/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/d6tz64nu3cuknmd8qjo.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/807322/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/o8g96lwj1qcgorjx2j1.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/807322/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/swm206vig5m8kc6d9bo.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Native Bar & Kitchen",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 167,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2306099/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/63ubq0c2f1gygrmsgz8.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Hotel Shri Ramanaas Gandhi Road",
          "city": "Tamil Nadu",
          "category": "restaurant",
          "rank": 173,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1071920/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/46cbdh99e1i7wpy9rxq.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1071920/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/t7h0qrxn0pak7qdf07x.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Broadway The Brewery",
          "city": "Hyderabad",
          "category": "restaurant",
          "rank": 174,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/632995/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/3zppo8divyp8re04c3p.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Telangana Spice Kitchen",
          "city": "Secunderabad",
          "category": "restaurant",
          "rank": 178,
          "photos": []
        },
        {
          "name": "Cloves Restaurant",
          "city": "Forest Block",
          "category": "restaurant",
          "rank": 199,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1481458/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/z97g4j32qnrpuvcliiy.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1481458/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wo7xvy9o75fnm5xybgv.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Adani Lounge - East",
          "city": "Mumbai",
          "category": "restaurant",
          "rank": 325,
          "photos": []
        },
        {
          "name": "Space lassi shawarma",
          "city": "Tirupati",
          "category": "restaurant",
          "rank": 326,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2967816/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/m2m858hohjko6unz4cf.jpg",
              "isFavoriteDish": false
            }
          ]
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
          "rank": 11,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/272365/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/awmaivk83cso25tazkk.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Lourens",
          "city": "Amsterdam",
          "category": "bakery",
          "rank": 16,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/463987/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rfvtrlz4etgap6i32a5.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/463987/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/a5dbequrhor9pbkh6rd.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Poffertjes Albert Cuyp",
          "city": "Amsterdam",
          "category": "dessert",
          "rank": 17,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/59762/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wza05nzibcuo2br8u1.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/59762/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rylr5fxgojckxd0igt.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Chimney Cake Bakery & Café",
          "city": "Amsterdam",
          "category": "bakery",
          "rank": 25,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/401251/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/i045kx2x3avh9m0o33.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/401251/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bpsltyk0spmw761e0cv.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Rudi’s Original Stroopwafels Albert Cuyp Markt Amsterdam",
          "city": "Amsterdam",
          "category": "dessert",
          "rank": 28,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/355765/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4krqztl9hojquo08i8v.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/355765/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ykdm8g5rxoiea907d3.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Scoops and Bubbles",
          "city": "Amsterdam",
          "category": "dessert",
          "rank": 39,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1867107/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/uxyj17qzvzbhl8xgn9.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Gifu Ramen Bar",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 87,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1757789/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/q3im7oz3aqc3obdfzyw.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1757789/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ia4stdqemgd0qcedd1.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1757789/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/v57y19gmvgssvwpse7e.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1757789/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7ci72324qzuxcf1q0oh.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1757789/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/i0putxnqrel3kpsra71.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "The Pancake Club",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 132,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/102409/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xy4qez3su6ni2rbzhyy.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/102409/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lodxror9tuicm7oc9w7.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Effendy - Rozengracht Lahmacun Cafe",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 148,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/155219/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/a1mnua20qt9mwtalzza.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/155219/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/6ikmvhjpcjwuajrihmj.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "New Draver Restaurant",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 154,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/449133/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/k69t7j364pck187e6ee.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/449133/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/meiqxlvv1zoubdd5dbk.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Chun Café",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 160,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/106554/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ygcgirdw3c2vlcwr81.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Marhaba - Marokkaans Restaurant (Amsterdam Oost)",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 165,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/876735/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/cz00goem35xjxdu4f7.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/876735/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0054jk6so6dbfyqe6tzxh.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Fabel Friet Runstraat",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 181,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/104456/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/03tj8q6zze4p5bl44s03.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/104456/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/fstqr9er6r8qlnnfwqq.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "SOJU Bar Rotterdam Markthal 소주 | Korean Fried Chicken & Beer",
          "city": "Rotterdam",
          "category": "restaurant",
          "rank": 258,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/847897/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/c1rydugn6h5cqht97b8.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Benji's Oost",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 271,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/154167/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mjz2lx98mwe58d68t6f.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Saté Lounge",
          "city": "Rotterdam",
          "category": "restaurant",
          "rank": 278,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1017649/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ch9m4cssmvj03c3zf6.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Vlaams Friteshuis Vleminckx",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 328,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/507163/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ct2h1advdnkt7tq0ov6.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Aspire Lounge 41 (Non-Schengen)",
          "city": "Schiphol",
          "category": "restaurant",
          "rank": 342,
          "photos": []
        },
        {
          "name": "Tasty Indian Bites / Amantra",
          "city": "Amsterdam",
          "category": "restaurant",
          "rank": 348,
          "photos": []
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
          "rank": 1,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2900527/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8o1ctpkaw6v7yd6cmeu.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2900527/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/u7787aipek84gsnyhy.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2900527/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/1mkyadqjrtq0aq4piey.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2900527/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/01urtu7n5jqsn0fc08ez.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2900527/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/oszz57rqo8feffj0opk.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Alegría Café / Specialty Coffee Shop",
          "city": "Guatemala",
          "category": "coffee",
          "rank": 27,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/689657/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mugc7hwoutjlpbwkyir.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/689657/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/mivzc5mlhjk1nxf1mww.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/689657/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/85hl01fx78nuojxi4f0.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "La Tienda de Doña Gavi",
          "city": "Antigua Guatemala",
          "category": "dessert",
          "rank": 29,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1047751/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rl9hkfnt6pmpzlgrzln.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1047751/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/jt9xa22xmuww2509h7.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1047751/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/x22rmkx9wpinkdbep41.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Artista de Café - Specialty Coffeeshop",
          "city": "Antigua Guatemala",
          "category": "coffee",
          "rank": 30,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/393056/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/0eb5wwlztnrgbkna83z7.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/393056/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bzqf8qtbplr1h9ymya5.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/393056/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/q3t9whs007ah6roptqk.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/393056/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ld6glixxa8dnfvs15j9.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/393056/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dps8yfgmwn7z3cuhp1.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Glacy Cream",
          "city": "Antigua Guatemala",
          "category": "dessert",
          "rank": 34,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/922091/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/l5bi742m5amoo1nhhf3.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/922091/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/gia2kpujiglulc4dii2.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Café K'uxal",
          "city": "San Juan La Laguna",
          "category": "coffee",
          "rank": 35,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2327413/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/9f2sek9xfhhcco4nilt.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2327413/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/uh7mqxipa2cz1vpf0h1.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2327413/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/igj53kpjare2h0v727z.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Cafe Cafe Guatemala",
          "city": "Antigua Guatemala",
          "category": "coffee",
          "rank": 46,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/365485/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/3c0ry3c71be13ml7g6h.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/365485/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/gb5s069s6ic2i6p08p.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Café TUK",
          "city": "Santa Catarina Palopó",
          "category": "coffee",
          "rank": 48,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1044396/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/wyq05jzsw2ic9pjo2e.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1044396/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/iisn4djj9c87z53cxl4.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1044396/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/5kie5vl5dxpkzt2zbat.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Dolce Gelato",
          "city": "Panajachel",
          "category": "dessert",
          "rank": 51,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/870746/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xkegwk6was60w1tdgq.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "La Cuevita de Los Urquizú",
          "city": "Antigua Guatemala",
          "category": "restaurant",
          "rank": 185,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/311155/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/qunwqixb4wnz1t2hisy.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/311155/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dhivqjvzoig7e9vqfew.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Papa Johns Pizza",
          "city": "Antigua Guatemala",
          "category": "restaurant",
          "rank": 264,
          "photos": []
        },
        {
          "name": "7 Caldos",
          "city": "Panajachel",
          "category": "restaurant",
          "rank": 296,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/895787/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/oqexa8jwyupzo4ndbaj.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/895787/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lzkk8i72rmpnasdfrj.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/895787/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/hbozaugzgqba0sb6x77.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/895787/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/fgxgymsm9gim0uj3ya.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/895787/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lo289s0v9j9x4urg2z.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "ARUMA",
          "city": "San Juan La Laguna",
          "category": "restaurant",
          "rank": 301,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1751093/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dorvvy3haanayhio7y.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1751093/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/315tthpwcw1d2lcm6cy.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Alas Del Angel Atitlán | Hotel Atitlán",
          "city": "San Marcos La Laguna",
          "category": "restaurant",
          "rank": 317,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2628430/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/on6bueojauqw2q4w44a.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "El Adobe Antigua Guatemala",
          "city": "Antigua Guatemala",
          "category": "restaurant",
          "rank": 327,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/365480/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/kg6hfvenp5qk2lmgilz.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/365480/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/s6zuycxi8ah8yiz4c7.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/365480/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/qvhxc67p7947a1aegc.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Hector's Bistro",
          "city": "Guatemala",
          "category": "restaurant",
          "rank": 329,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/151202/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/fccdpyoj07bik7rc0ln.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/151202/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/d6g1vqnk366gopf8lh.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/151202/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/2b8pfibuayq7vycknqz.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/151202/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vxuucer4ly7ui8wq3i.jpg",
              "isFavoriteDish": false
            }
          ]
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
          "rank": 1,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/31061/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/qp3t20p60qpj5l2wcm.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/31061/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xolco3hfqpfdbqneudx.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/31061/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/yllsyxhhpxpzutjd9j.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/31061/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/zn9soh2ebbscmthoxsp.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/31061/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/x9r5c24dld73j9pnund.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Nguyen Ngoc",
          "city": "Houston, TX",
          "category": "restaurant",
          "rank": 20,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/164239/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ec2zwhikzbdgqyhdc3r.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/164239/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/u2qiudo866f5omaz5u.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/164239/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/xfygamyzu1r90ap2spt.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Baciati Gelato",
          "city": "Magnolia, TX",
          "category": "dessert",
          "rank": 23,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2084036/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/08r5n0cdrxy7tz22b96j.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Press Waffle Co.",
          "city": "Houston, TX",
          "category": "dessert",
          "rank": 43,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/309838/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/hv3moqqsy0q4fa0qd8k.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Tiny Champions",
          "city": "Houston, TX",
          "category": "restaurant",
          "rank": 73,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/19187/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/fau7mod25pu64nbvxr4.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/19187/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4i7k07p5u692hxx098.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/19187/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/4zyid4n5rxy0dz6idj7.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Street to Kitchen",
          "city": "Houston, TX",
          "category": "restaurant",
          "rank": 81,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/59416/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/vn4v1yd04no8s40t3ab.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/59416/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/favkltmlflmajgyajmm.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/59416/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/l509tziw7298n8uunw9.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Capital One Lounge at Dallas",
          "city": "Dallas, TX",
          "category": "restaurant",
          "rank": 177,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/295962/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/2w60ghg0ai2xg01vqjd.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Lupe Tortilla Mexican Restaurant",
          "city": "Shenandoah, TX",
          "category": "restaurant",
          "rank": 218,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/217435/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/aylk69dml5983jynxz.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/217435/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/c92czyk109gdiq1wh4.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Dave's Hot Chicken",
          "city": "Magnolia, TX",
          "category": "restaurant",
          "rank": 251,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1723389/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/9je6bmxl6l4difwvc18.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1723389/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/3e62cvixmxxklwk4jmy.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Charm Taphouse & BBQ",
          "city": "Conroe, TX",
          "category": "restaurant",
          "rank": 283,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1871269/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tt7catbuvo4yfjbhlh.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1871269/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/f8fefpg09nadypd02xp.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Bamboo House",
          "city": "Humble, TX",
          "category": "restaurant",
          "rank": 336,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/50650/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/hfq97m5th2badju165.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/50650/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dhs4lmu9x97x7h8uhwq.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/50650/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/9tmw8s4wuq5oxr7e8yx.jpg",
              "isFavoriteDish": false
            }
          ]
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
          "rank": 5,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1785017/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rbxdr7c6u6o6upkzml.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1785017/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/hze0g2p5gilo3yll0h3.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "SPIN Philadelphia",
          "city": "Philadelphia, PA",
          "category": "bar",
          "rank": 18,
          "photos": []
        },
        {
          "name": "Mango Mango Dessert",
          "city": "Philadelphia, PA",
          "category": "dessert",
          "rank": 36,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/378901/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/89pevwhqmw3mgpr2xvv.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Vibrant Coffee Roasters & Bakery",
          "city": "Philadelphia, PA",
          "category": "coffee",
          "rank": 40,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/349082/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/j95ug0nulkg5ee56quf.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/349082/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/7bxeaocwavmbrhpx1y8.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Angelo's Pizzeria",
          "city": "Philadelphia, PA",
          "category": "restaurant",
          "rank": 43,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/11565/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/h4rj4lgi6agfzv9onc2.jpg",
              "isFavoriteDish": true
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/11565/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/y4n8h2rqlsx11kbe9k.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/11565/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/f35xm5hl3z8k3f0aphk.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "South Philly Barbacoa",
          "city": "Philadelphia, PA",
          "category": "restaurant",
          "rank": 212,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/7074/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/y8c0azc6odretp96im.jpg",
              "isFavoriteDish": false
            }
          ]
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
          "rank": 4,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1729882/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/hjl6p15vn4odqxlya5b.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1729882/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/lag3khw2h68kjfda8e.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1729882/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/bsyvti5nqgf1nh89i2.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Waffle Wagon",
          "city": "Bruges",
          "category": "dessert",
          "rank": 22,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/959747/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/9ui4fjloe8i1dpj7y5.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/959747/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/tktr3t0uttf27r2u5il.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Le Funambule",
          "city": "Brussels",
          "category": "dessert",
          "rank": 30,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/524864/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/o69kw6gxrvhx1pzw8d.jpg",
              "isFavoriteDish": true
            }
          ]
        },
        {
          "name": "Bellicious",
          "city": "Bruges",
          "category": "restaurant",
          "rank": 231,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1490396/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/dp6fl59cskqb0ozyc6t.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Café Georgette",
          "city": "Brussels",
          "category": "restaurant",
          "rank": 273,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/75141/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/m3q2rfjuxpd3jrgfbf.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/75141/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/ycigpiyyz852mhbh0c.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/75141/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/cb1qulbtf5bvccbvxrr.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/75141/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/9kvvexrsfuni7xpohb.jpg",
              "isFavoriteDish": false
            }
          ]
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
          "rank": 226,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1451769/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/s4bps6thpb95eifhz0c.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Dave's Hot Chicken",
          "city": "Sacramento, CA",
          "category": "restaurant",
          "rank": 261,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/179408/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/m998lvl47sgna7eccls.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "West Coast Sourdough - West Sacramento",
          "city": "West Sacramento, CA",
          "category": "restaurant",
          "rank": 262,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/1745401/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/l6xrw4zlrxg03tiqdts.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Taqueria Arandas",
          "city": "Grass Valley, CA",
          "category": "restaurant",
          "rank": 338,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/2463304/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/6lkb5khr4ahzsjnonsu.jpg",
              "isFavoriteDish": false
            }
          ]
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
          "rank": 259,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/438490/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/rhk4qqle2pqts7o3gsa.jpg",
              "isFavoriteDish": false
            }
          ]
        },
        {
          "name": "Chef Lee's Mandarin House",
          "city": "Monterey, CA",
          "category": "restaurant",
          "rank": 266,
          "photos": [
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/488531/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/n9i3bnwn1il09x0ctl1.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/488531/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/r1hvzv60kqty70vhlim.jpg",
              "isFavoriteDish": false
            },
            {
              "url": "https://photos2.beliapp.cloud/file/beli-b2/userbusiness/488531/24b5c631-a656-455b-8ff9-6e6d9e1658d8/images/8l6loyoapngxaezwpj2.jpg",
              "isFavoriteDish": false
            }
          ]
        }
      ]
    }
  ]
};
