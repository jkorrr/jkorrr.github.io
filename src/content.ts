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
  about: string;
  essays: EssayDestination;
  socialLinks: SocialLink[];
}

export const siteContent: SiteContent = {
  identity: "jkorr",
  eyebrow: "welcome to my corner of the internet",
  headline: "a place for unfinished things.",
  introduction:
    "Ideas, notes, and work in progress—kept here while they find their shape.",
  now:
    "I’m thinking about writing, interfaces, small experiments, and whatever feels worth understanding next.",
  about:
    "I’m jkorr. This is where I collect ideas, experiments, and work in progress—especially the things that are still finding their shape.",
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
