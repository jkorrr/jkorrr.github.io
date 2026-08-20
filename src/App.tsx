import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { siteContent, type SocialPlatform } from "./content";

type Theme = "dark" | "light";
type PageId = "home" | "now" | "work" | "thoughts" | "photography";

const themeStorageKey = "jkorr-theme";
const navigation: Array<{ id: PageId; label: string; href: string }> = [
  { id: "home", label: "home", href: "/" },
  { id: "now", label: "now", href: "/now/" },
  { id: "work", label: "work + research", href: "/work/" },
  { id: "thoughts", label: "thoughts", href: "/thoughts/" },
  { id: "photography", label: "photography", href: "/photography/" },
];

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
} satisfies Record<SocialPlatform, typeof FaGithub>;

function getCurrentPage(): PageId {
  const section = window.location.pathname.split("/").filter(Boolean).at(-1);
  return section === "now" || section === "work" || section === "thoughts" || section === "photography"
    ? section
    : "home";
}

function useCursorSpotlight() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const root = document.documentElement;
    let frame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;

    const paint = () => {
      root.style.setProperty("--pointer-x", `${pointerX}px`);
      root.style.setProperty("--pointer-y", `${pointerY}px`);
      frame = 0;
    };
    const moveSpotlight = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    root.dataset.spotlight = "true";
    window.addEventListener("pointermove", moveSpotlight, { passive: true });
    return () => {
      window.removeEventListener("pointermove", moveSpotlight);
      if (frame) window.cancelAnimationFrame(frame);
      delete root.dataset.spotlight;
    };
  }, []);
}

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem(themeStorageKey, nextTheme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      nextTheme === "dark" ? "#050505" : "#F7F7F4",
    );
    setTheme(nextTheme);
  };

  return { theme, toggleTheme };
}

function Header({ currentPage, theme, onToggleTheme }: { currentPage: PageId; theme: Theme; onToggleTheme: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeMenu = (event: KeyboardEvent | PointerEvent) => {
      if (event instanceof KeyboardEvent && event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event instanceof PointerEvent && !menuRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("keydown", closeMenu);
    document.addEventListener("pointerdown", closeMenu);
    return () => {
      document.removeEventListener("keydown", closeMenu);
      document.removeEventListener("pointerdown", closeMenu);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" aria-label="site header">
      <div className="social-links" aria-label="social links">
        {siteContent.socialLinks.map((link) => {
          const Icon = socialIcons[link.platform];
          return link.href ? (
            <a key={link.platform} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} title={link.label}>
              <Icon aria-hidden="true" />
            </a>
          ) : null;
        })}
      </div>

      <div className="menu-wrap" ref={menuRef}>
        <button
          className="menu-trigger"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          menu <span aria-hidden="true">{menuOpen ? "−" : "+"}</span>
        </button>
        <AnimatePresence>
          {menuOpen ? (
            <motion.nav
              id="site-menu"
              className="menu-panel"
              aria-label="primary navigation"
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.98 }}
              transition={{ duration: 0.14 }}
            >
              {navigation.map((item) => (
                <a key={item.id} href={item.href} aria-current={currentPage === item.id ? "page" : undefined}>
                  <span>{item.label}</span><span aria-hidden="true">{currentPage === item.id ? "•" : "↗"}</span>
                </a>
              ))}
              <button type="button" onClick={onToggleTheme}>
                <span>{theme === "dark" ? "light mode" : "dark mode"}</span><span aria-hidden="true">◐</span>
              </button>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}

function PageIntro({ title, intro, meta }: { title: string; intro: string; meta?: string }) {
  return (
    <header className="page-intro">
      <p className="eyebrow">@jkorr / {title}</p>
      <h1>{title}</h1>
      <p>{intro}</p>
      {meta ? <time>{meta}</time> : null}
    </header>
  );
}

function HomePage() {
  const reduceMotion = useReducedMotion();

  return (
    <main id="main-content" className="home-main">
      <motion.div className="home-copy" initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <h1>{siteContent.hero.title}</h1>
        <p>{siteContent.hero.bio}</p>
      </motion.div>
      <nav className="home-index" aria-label="explore the site">
        {siteContent.hero.index.map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.16 + index * 0.05 }}
          >
            <span>{item.label}</span><small>{item.description}</small><span aria-hidden="true">→</span>
          </motion.a>
        ))}
      </nav>
    </main>
  );
}

function NowPage() {
  return (
    <main id="main-content" className="page-main">
      <PageIntro title="now" intro={siteContent.now.intro} meta={`last updated ${siteContent.now.updated}`} />
      <dl className="detail-list">
        {siteContent.now.items.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.text}</dd></div>)}
      </dl>
    </main>
  );
}

function WorkPage() {
  return (
    <main id="main-content" className="page-main">
      <PageIntro title="work" intro={siteContent.work.intro} />
      <section className="editorial-section" aria-labelledby="engineering-title">
        <h2 id="engineering-title">engineering</h2>
        <p>{siteContent.work.engineering}</p>
        <a className="arrow-link" href={siteContent.work.githubHref} target="_blank" rel="noreferrer">github <span aria-hidden="true">↗</span></a>
      </section>
      <section className="editorial-section" aria-labelledby="research-title">
        <h2 id="research-title">research</h2>
        <p>{siteContent.work.research}</p>
        <a className="arrow-link" href={siteContent.work.scholarHref} target="_blank" rel="noreferrer">google scholar <span aria-hidden="true">↗</span></a>
        <ul className="plain-list research-list">
          {siteContent.work.items.map((item) => <li key={item.title}><span>{item.title}</span>{item.detail ? <small>{item.detail}</small> : null}</li>)}
        </ul>
      </section>
    </main>
  );
}

function ThoughtsPage() {
  return (
    <main id="main-content" className="page-main">
      <PageIntro title="thoughts" intro={siteContent.thoughts.description} />
      <ol className="plain-list essay-list">
        {siteContent.thoughts.items.slice(0, 5).map((essay, index) => (
          <li key={essay.href ?? essay.title}>
            <span className="list-number">{String(index + 1).padStart(2, "0")}</span>
            <div>{essay.href ? <a href={essay.href} target="_blank" rel="noreferrer">{essay.title} ↗</a> : <span>{essay.title}</span>}{essay.summary ? <small>{essay.summary}</small> : null}</div>
            {essay.date ? <time dateTime={essay.date}>{essay.date}</time> : null}
          </li>
        ))}
      </ol>
    </main>
  );
}

function PhotographyPage() {
  return (
    <main id="main-content" className="page-main">
      <PageIntro title="photography" intro={siteContent.photography.description} />
      {siteContent.photography.items.length ? (
        <ul className="photo-grid">
          {siteContent.photography.items.map((item) => (
            <li key={item.src}>
              <figure>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>
                  <span>{item.title}</span>
                  <small>{[item.location, item.year].filter(Boolean).join(" · ")}</small>
                  {item.caption ? <p>{item.caption}</p> : null}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-archive"><span>archive in progress</span><p>photographs will live here.</p></div>
      )}
    </main>
  );
}

function Page({ id }: { id: PageId }) {
  if (id === "now") return <NowPage />;
  if (id === "work") return <WorkPage />;
  if (id === "thoughts") return <ThoughtsPage />;
  if (id === "photography") return <PhotographyPage />;
  return <HomePage />;
}

export default function App() {
  const currentPage = getCurrentPage();
  const reduceMotion = useReducedMotion();
  const { theme, toggleTheme } = useTheme();
  useCursorSpotlight();

  return (
    <>
      <a className="skip-link" href="#main-content">skip to content</a>
      <div className="site-shell">
        <Header currentPage={currentPage} theme={theme} onToggleTheme={toggleTheme} />
        <motion.div initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
          <Page id={currentPage} />
        </motion.div>
        <footer className="site-footer"><a href="/">@jkorr</a><span>somewhere between finished and not.</span></footer>
      </div>
    </>
  );
}
