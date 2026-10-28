export type SocialPlatform = "github" | "linkedin" | "instagram";

export interface SocialLink {
  label: string;
  platform: SocialPlatform;
  href?: string;
}

export interface EssayPreview {
  title: string;
  date?: string;
  summary?: string;
  readTime?: string;
  href?: string;
}

export interface WorkArea {
  label: string;
  description: string;
  linkLabel: string;
  href: string;
}

export interface DocumentationEntry {
  title: string;
  date?: string;
  summary?: string;
  href?: string;
}

export type TravelStatus = "visited" | "wishlist";

export interface TravelPlace {
  slug: string;
  name: string;
  location: string;
  dates: string;
  status: TravelStatus;
  coordinates: {
    longitude: number;
    latitude: number;
  };
  route?: string[];
}

export interface LifePageContent {
  title: "fitness" | "eats" | "travel";
  description: string;
  emptyLabel: string;
  training?: {
    philosophy: string;
    goals: Array<{
      label: string;
      target: string;
      note: string;
    }>;
    logs: Array<{
      platform: "hevy" | "strava";
      label: string;
      title: string;
      summary: string;
      href: string;
    }>;
  };
  destination?: {
    iconSrc?: string;
    label: string;
    title: string;
    summary: string;
    href: string;
  };
  items: DocumentationEntry[];
}

export interface SiteContent {
  hero: string;
  now: string;
  work: {
    description: string;
    areas: WorkArea[];
  };
  thoughts: {
    description: string;
    href?: string;
    items: EssayPreview[];
  };
  travel: {
    description: string;
    places: TravelPlace[];
  };
  life: LifePageContent[];
  socialLinks: SocialLink[];
}

export const siteContent: SiteContent = {
  hero: "hi, i’m jathin.",
  now: "i’m a recent berkeley eecs grad, raised in la. i write about my raw, unfiltered thoughts on the world across travel, tech, fitness, & food. right now, i’m exploring infra + performance problems @ openai.",
  work: {
    description: "a small index of what i’m exploring.",
    areas: [
      {
        label: "engineering",
        description: "infrastructure, performance, and small experiments.",
        linkLabel: "github",
        href: "https://github.com/jkorrr",
      },
      {
        label: "research",
        description: "selected research and the questions behind it.",
        linkLabel: "google scholar",
        href: "https://scholar.google.com/citations?view_op=new_articles&hl=en&imq=Jathin+Korrapati&authuser=2#",
      },
    ],
  },
  thoughts: {
    description: "some of my more well articulated thoughts:",
    href: "https://substack.com/@jkorr",
    items: [
      {
        title: "do hard shit.",
        date: "2026-08-20",
        summary: "the joy in pain",
        readTime: "3 min read",
        href: "https://jkorr.substack.com/p/do-hard-shit",
      },
    ],
  },
  travel: {
    description: "places i’ve been, and places i’m still thinking about.",
    places: [
      {
        slug: "belgium",
        name: "belgium",
        location: "belgium",
        dates: "7/20–7/23",
        status: "visited",
        coordinates: { longitude: 4.67, latitude: 50.64 },
      },
      {
        slug: "london",
        name: "london",
        location: "united kingdom",
        dates: "7/15–7/20",
        status: "visited",
        coordinates: { longitude: -0.13, latitude: 51.51 },
      },
      {
        slug: "amsterdam",
        name: "amsterdam",
        location: "the netherlands",
        dates: "7/23–7/27",
        status: "visited",
        coordinates: { longitude: 4.9, latitude: 52.37 },
      },
      {
        slug: "guatemala",
        name: "guatemala",
        location: "guatemala",
        dates: "6/9–6/14",
        status: "visited",
        coordinates: { longitude: -90.95, latitude: 14.65 },
        route: ["antigua", "acatenango", "lake atitlán"],
      },
      {
        slug: "mexico-city",
        name: "cdmx",
        location: "mexico",
        dates: "5/31–6/6",
        status: "visited",
        coordinates: { longitude: -99.13, latitude: 19.43 },
      },
      {
        slug: "hyderabad",
        name: "hyderabad",
        location: "india",
        dates: "6/23–7/15",
        status: "visited",
        coordinates: { longitude: 78.49, latitude: 17.39 },
      },
      {
        slug: "kashmir",
        name: "kashmir",
        location: "india",
        dates: "7/10–7/13",
        status: "visited",
        coordinates: { longitude: 74.8, latitude: 34.08 },
      },
    ],
  },
  life: [
    {
      title: "fitness",
      description: "training both ends of the spectrum: stronger under the bar, steadier on the road.",
      emptyLabel: "fitness notes will live here.",
      training: {
        philosophy: "build a body that can do more than one thing well. lift heavy, run long, recover honestly, and keep showing up.",
        goals: [
          {
            label: "marathon",
            target: "26.2 mi",
            note: "building the engine, one long run at a time.",
          },
          {
            label: "bench press",
            target: "225 lb",
            note: "two plates, clean and controlled.",
          },
        ],
        logs: [
          {
            platform: "hevy",
            label: "strength log",
            title: "hevy",
            summary: "sets, reps, and the climb to 225.",
            href: "https://hevy.com/user/jkorr45",
          },
          {
            platform: "strava",
            label: "running log",
            title: "strava",
            summary: "miles, routes, and the road to 26.2.",
            href: "https://strava.app.link/nEp0AbPaB7b",
          },
        ],
      },
      items: [],
    },
    {
      title: "eats",
      description: "a life worth living to eat in",
      emptyLabel: "food notes will live here.",
      destination: {
        iconSrc: "/beli-icon.webp",
        label: "@jkorr on beli",
        title: "my restaurant map",
        summary: "restaurants i’ve tried, ranked and saved.",
        href: "https://beliapp.co/app/jkorr",
      },
      items: [],
    },
    {
      title: "travel",
      description: "places i’ve been, and places i’m still thinking about.",
      emptyLabel: "travel notes will live here.",
      items: [],
    },
  ],
  socialLinks: [
    {
      label: "github",
      platform: "github",
      href: "https://github.com/jkorrr",
    },
    {
      label: "linkedin",
      platform: "linkedin",
      href: "https://www.linkedin.com/in/jathin-k",
    },
    {
      label: "instagram",
      platform: "instagram",
      href: "https://www.instagram.com/jathin_korrapati",
    },
  ],
};
