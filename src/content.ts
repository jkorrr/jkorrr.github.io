export interface SocialLink {
  label: string;
  href: string;
}

export interface EssayPreview {
  title: string;
  date: string;
  summary: string;
  href: string;
}

export interface EssayDestination {
  label: string;
  description: string;
  href?: string;
  items: EssayPreview[];
}

export interface SiteContent {
  identity: string;
  eyebrow: string;
  headline: string;
  introduction: string;
  now: string;
  essays: EssayDestination;
  socialLinks: SocialLink[];
}

export const siteContent: SiteContent = {
  identity: "jkorr",
  eyebrow: "welcome to my corner of the internet",
  headline: "thinking out loud, quietly.",
  introduction:
    "hi, i’m jathin. i’m a recent berkeley eecs grad working in sf. welcome to my domain: random, unfinished thoughts, ideas, or opinions i have about the world.",
  now:
    "I’m thinking about writing, interfaces, small experiments, and whatever feels worth understanding next.",
  essays: {
    label: "some of my thoughts on the world",
    description: "Longer thoughts will live on Substack.",
    items: [],
  },
  socialLinks: [
    {
      label: "github",
      href: "https://github.com/jkorrr",
    },
  ],
};
