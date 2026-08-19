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
  now: "i’m a recent berkeley eecs grad, raised in la. i write about my raw, unfiltered thoughts on the world across travel, tech, fitness, & food. right now, i’m exploring infra + performance problems @ openai.",
  work: {
    description: "a small index of things i’ve done and am exploring.",
    href: "https://github.com/jkorrr",
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
