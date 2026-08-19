export type SocialPlatform = "github" | "linkedin" | "instagram";

export interface SocialLink {
  label: string;
  platform: SocialPlatform;
  href?: string;
}

export interface EssayPreview {
  title: string;
  date: string;
  summary: string;
  href: string;
}

export interface SiteContent {
  hero: string;
  now: string;
  work: {
    description: string;
    href?: string;
  };
  thoughts: {
    description: string;
    href?: string;
    items: EssayPreview[];
  };
  socialLinks: SocialLink[];
}

export const siteContent: SiteContent = {
  hero: "hi, i’m jathin.",
  now: "i’m a recent berkeley eecs grad working in sf. right now, i’m thinking about writing, interfaces, small experiments, and whatever feels worth understanding next.",
  work: {
    description: "a small index of things i’ve worked on will live here.",
    href: "https://github.com/jkorrr",
  },
  thoughts: {
    description: "notes and longer thoughts will live here when they’re ready.",
    items: [],
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
    },
    {
      label: "instagram",
      platform: "instagram",
    },
  ],
};
