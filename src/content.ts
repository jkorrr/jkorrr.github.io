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

export interface LifePageContent {
  title: "fitness" | "eats" | "travel";
  description: string;
  emptyLabel: string;
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
    description: "some of my more well articulated thoughts.",
    items: [
      { title: "PLACEHOLDER ESSAY 01" },
      { title: "PLACEHOLDER ESSAY 02" },
      { title: "PLACEHOLDER ESSAY 03" },
      { title: "PLACEHOLDER ESSAY 04" },
      { title: "PLACEHOLDER ESSAY 05" },
    ],
  },
  life: [
    {
      title: "fitness",
      description: "training notes, routines, and things i’m testing on myself.",
      emptyLabel: "fitness notes will live here.",
      items: [],
    },
    {
      title: "eats",
      description: "meals, restaurants, and food worth remembering.",
      emptyLabel: "food notes will live here.",
      items: [],
    },
    {
      title: "travel",
      description: "field notes, observations, and useful details from elsewhere.",
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
