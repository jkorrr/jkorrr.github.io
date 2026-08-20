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

export interface IndexItem {
  label: string;
  description: string;
  href: string;
}

export interface NowItem {
  label: string;
  text: string;
}

export interface ResearchPreview {
  title: string;
  detail?: string;
  href?: string;
}

export interface PlacePreview {
  place: string;
  year?: string;
  note: string;
  href?: string;
}

export interface SiteContent {
  hero: {
    title: string;
    bio: string;
    index: IndexItem[];
  };
  now: {
    intro: string;
    updated: string;
    items: NowItem[];
  };
  work: {
    intro: string;
    engineering: string;
    githubHref: string;
    research: string;
    scholarHref: string;
    items: ResearchPreview[];
  };
  thoughts: {
    description: string;
    href?: string;
    items: EssayPreview[];
  };
  places: {
    description: string;
    items: PlacePreview[];
  };
  socialLinks: SocialLink[];
}

export const siteContent: SiteContent = {
  hero: {
    title: "hi, i’m jathin.",
    bio: "i’m a recent berkeley eecs grad, raised in la. i write about my raw, unfiltered thoughts on the world across travel, tech, fitness, & food. right now, i’m exploring infra + performance problems @ openai.",
    index: [
      { label: "now", description: "what has my attention", href: "/now/" },
      { label: "work", description: "engineering + research", href: "/work/" },
      { label: "thoughts", description: "the better-articulated ones", href: "/thoughts/" },
      { label: "places", description: "notes from elsewhere", href: "/places/" },
    ],
  },
  now: {
    intro: "a dated snapshot of what has my attention.",
    updated: "august 2026",
    items: [
      { label: "work", text: "exploring infrastructure + performance problems @ openai." },
      { label: "thinking", text: "writing, systems, and the shape of unfinished ideas." },
      { label: "outside work", text: "fitness, food, and wherever i go next." },
    ],
  },
  work: {
    intro: "a small index of things i’ve worked on and am still exploring.",
    engineering: "systems, infrastructure, performance, and small experiments that make complicated things feel simpler.",
    githubHref: "https://github.com/jkorrr",
    research: "selected research and the questions behind it will live here.",
    scholarHref: "https://scholar.google.com/citations?view_op=new_articles&hl=en&imq=Jathin+Korrapati&authuser=2#",
    items: [{ title: "SELECTED RESEARCH — COMING SOON" }],
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
  places: {
    description: "a quiet record of where i’ve been and what stayed with me.",
    items: [
      { place: "PLACEHOLDER PLACE 01", note: "a field note will live here." },
      { place: "PLACEHOLDER PLACE 02", note: "a field note will live here." },
      { place: "PLACEHOLDER PLACE 03", note: "a field note will live here." },
    ],
  },
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
