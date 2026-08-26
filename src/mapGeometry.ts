export const mapWidth = 1000;
export const mapHeight = 500;

type Position = [number, number];
type LinearRing = Position[];
type PolygonCoordinates = LinearRing[];
type MultiPolygonCoordinates = PolygonCoordinates[];

interface LandGeometry {
  type: "Polygon" | "MultiPolygon";
  coordinates: PolygonCoordinates | MultiPolygonCoordinates;
}

export interface LandCollection {
  features: Array<{ geometry: LandGeometry }>;
}

export interface GeoItem {
  coordinates: {
    longitude: number;
    latitude: number;
  };
}

export interface MapPoint {
  x: number;
  y: number;
}

export interface GeoMarker<T> {
  item: T;
  anchor: MapPoint;
  point: MapPoint;
  isDisplaced: boolean;
}

const pointsPerRing = 8;

export function project(longitude: number, latitude: number) {
  return {
    x: ((longitude + 180) / 360) * mapWidth,
    y: ((90 - latitude) / 180) * mapHeight,
  };
}

function ringPath(ring: LinearRing) {
  if (!ring.some(([, latitude]) => latitude > -60)) return "";
  return `${ring
    .map(([longitude, latitude], index) => {
      const point = project(longitude, latitude);
      return `${index === 0 ? "M" : "L"}${point.x.toFixed(2)},${point.y.toFixed(2)}`;
    })
    .join(" ")} Z`;
}

function polygonPath(polygon: PolygonCoordinates) {
  return polygon.map(ringPath).filter(Boolean).join(" ");
}

export function createWorldPath(collection: LandCollection) {
  return collection.features
    .map(({ geometry }) => {
      if (geometry.type === "Polygon") return polygonPath(geometry.coordinates as PolygonCoordinates);
      return (geometry.coordinates as MultiPolygonCoordinates).map(polygonPath).join(" ");
    })
    .join(" ");
}

function distance(first: MapPoint, second: MapPoint) {
  return Math.hypot(first.x - second.x, first.y - second.y);
}

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

export function layoutGeoMarkers<T extends GeoItem>(items: T[], clusterDistance = 28, spreadRadius = 25): GeoMarker<T>[] {
  const anchors = items.map((item) => project(item.coordinates.longitude, item.coordinates.latitude));
  const ungrouped = new Set(items.map((_, index) => index));
  const markers: GeoMarker<T>[] = [];

  while (ungrouped.size) {
    const start = ungrouped.values().next().value as number;
    const group: number[] = [];
    const queue = [start];
    ungrouped.delete(start);

    while (queue.length) {
      const current = queue.shift()!;
      group.push(current);

      for (const candidate of [...ungrouped]) {
        if (distance(anchors[current], anchors[candidate]) <= clusterDistance) {
          ungrouped.delete(candidate);
          queue.push(candidate);
        }
      }
    }

    if (group.length === 1) {
      const index = group[0];
      markers.push({ item: items[index], anchor: anchors[index], point: anchors[index], isDisplaced: false });
      continue;
    }

    const center = group.reduce(
      (total, index) => ({ x: total.x + anchors[index].x / group.length, y: total.y + anchors[index].y / group.length }),
      { x: 0, y: 0 },
    );

    group.forEach((index, order) => {
      const ring = Math.floor(order / pointsPerRing);
      const ringStart = ring * pointsPerRing;
      const ringCount = Math.min(pointsPerRing, group.length - ringStart);
      const position = order - ringStart;
      const radius = spreadRadius + ring * Math.max(22, spreadRadius * 0.7);
      const angle = -Math.PI / 2 + (position / ringCount) * Math.PI * 2;
      const point = {
        x: clamp(center.x + Math.cos(angle) * radius, 24, mapWidth - 24),
        y: clamp(center.y + Math.sin(angle) * radius, 24, mapHeight - 24),
      };

      markers.push({ item: items[index], anchor: anchors[index], point, isDisplaced: true });
    });
  }

  return markers;
}
