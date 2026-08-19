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
  now: "i’m jathin, a recent berkeley grad from la. i write about my experiences, opinions on the world, travel, and my raw, unfiltered thoughts. right now, i’m exploring infra + performance problems @ openai.",
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
