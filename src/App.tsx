import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { siteContent, type LifePageContent, type SocialPlatform } from "./content";

type Theme = "dark" | "light";
type PageId = "home" | "work" | "fitness" | "eats" | "travel";

const themeStorageKey = "jkorr-theme";
const lifePages = siteContent.life.map((page) => ({ label: page.title, href: `/${page.title}/` }));

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
} satisfies Record<SocialPlatform, typeof FaGithub>;

function getCurrentPage(): PageId {
  const segment = window.location.pathname.split("/").filter(Boolean).at(-1);
  return segment === "work" || segment === "fitness" || segment === "eats" || segment === "travel"
    ? segment
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
  const [lifeOpen, setLifeOpen] = useState(false);
  const lifeRef = useRef<HTMLDivElement>(null);
  const lifeActive = currentPage === "fitness" || currentPage === "eats" || currentPage === "travel";

  useEffect(() => {
    if (!lifeOpen) return;
    const closeLife = (event: KeyboardEvent | PointerEvent) => {
      if (event instanceof KeyboardEvent && event.key === "Escape") {
        setLifeOpen(false);
        return;
      }
      if (event instanceof PointerEvent && !lifeRef.current?.contains(event.target as Node)) setLifeOpen(false);
    };
    document.addEventListener("keydown", closeLife);
    document.addEventListener("pointerdown", closeLife);
    return () => {
      document.removeEventListener("keydown", closeLife);
      document.removeEventListener("pointerdown", closeLife);
    };
  }, [lifeOpen]);

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

      <nav className="site-nav" aria-label="primary navigation">
        <a href="/#now">now</a>
        <a href="/work/" aria-current={currentPage === "work" ? "page" : undefined}>work</a>
        <a href="/#thoughts">thoughts</a>
        <div className="life-nav" ref={lifeRef}>
          <button
            type="button"
            className={lifeActive ? "is-active" : undefined}
            aria-expanded={lifeOpen}
            aria-controls="life-menu"
            onClick={() => setLifeOpen((open) => !open)}
          >
            life <span aria-hidden="true">{lifeOpen ? "↑" : "↓"}</span>
          </button>
          {lifeOpen ? (
            <div className="life-menu" id="life-menu" aria-label="life pages">
              {lifePages.map((page) => (
                <a key={page.href} href={page.href} aria-current={window.location.pathname === page.href ? "page" : undefined}>
                  {page.label}<span aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          ) : null}
        </div>
        <button type="button" onClick={onToggleTheme} aria-label={`switch to ${theme === "dark" ? "light" : "dark"} mode`}>
          {theme === "dark" ? "light" : "dark"}
        </button>
      </nav>
    </header>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.section
      id={id}
      className="index-section"
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      aria-labelledby={`${id}-title`}
    >
      <h2 id={`${id}-title`}>{title}</h2>
      <div className="section-content">{children}</div>
    </motion.section>
  );
}

function Thoughts() {
  const essays = siteContent.thoughts.items.slice(0, 5);
  return (
    <Section id="thoughts" title="thoughts">
      <p>{siteContent.thoughts.description}</p>
      {essays.length > 0 ? (
        <ol className="essay-list">
          {essays.map((essay) => (
            <li key={essay.href ?? essay.title}>
              <div className="essay-row">
                {essay.href ? <a href={essay.href} target="_blank" rel="noreferrer">{essay.title} ↗</a> : <span className="essay-placeholder">{essay.title}</span>}
                {essay.date ? <time dateTime={essay.date}>{essay.date}</time> : null}
              </div>
              {essay.summary ? <p>{essay.summary}</p> : null}
            </li>
          ))}
        </ol>
      ) : null}
    </Section>
  );
}

function HomePage() {
  const reduceMotion = useReducedMotion();
  return (
    <main id="main-content">
      <motion.section className="hero" initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} aria-labelledby="hero-title">
        <h1 id="hero-title">{siteContent.hero}</h1>
      </motion.section>
      <Section id="now" title="now">
        <p>{siteContent.now}</p>
        <a className="text-link" href="#thoughts">learn more here <span aria-hidden="true">↓</span></a>
      </Section>
      <Section id="work" title="work">
        <p>{siteContent.work.description}</p>
        <a className="text-link" href="/work/">open the index <span aria-hidden="true">→</span></a>
      </Section>
      <Thoughts />
    </main>
  );
}

function DocumentIntro({ section, title, description }: { section: string; title: string; description: string }) {
  return (
    <header className="document-intro">
      <p>@jkorr / {section}</p>
      <h1>{title}</h1>
      <div>{description}</div>
    </header>
  );
}

function WorkPage() {
  return (
    <main id="main-content" className="document-page">
      <DocumentIntro section="work" title="work" description={siteContent.work.description} />
      <div className="document-index">
        {siteContent.work.areas.map((area) => (
          <section key={area.label} aria-labelledby={`${area.label}-title`}>
            <h2 id={`${area.label}-title`}>{area.label}</h2>
            <p>{area.description}</p>
            <a href={area.href} target="_blank" rel="noreferrer">{area.linkLabel} <span aria-hidden="true">↗</span></a>
          </section>
        ))}
      </div>
    </main>
  );
}

function LifePage({ page }: { page: LifePageContent }) {
  return (
    <main id="main-content" className="document-page">
      <DocumentIntro section="life" title={page.title} description={page.description} />
      {page.items.length ? (
        <ol className="document-list">
          {page.items.map((item) => (
            <li key={item.href ?? item.title}>
              {item.href ? <a href={item.href}>{item.title}</a> : <span>{item.title}</span>}
              {item.date ? <time dateTime={item.date}>{item.date}</time> : null}
              {item.summary ? <p>{item.summary}</p> : null}
            </li>
          ))}
        </ol>
      ) : <div className="empty-document"><span>documentation in progress</span><p>{page.emptyLabel}</p></div>}
    </main>
  );
}

function Page({ id }: { id: PageId }) {
  if (id === "work") return <WorkPage />;
  if (id === "fitness" || id === "eats" || id === "travel") {
    const page = siteContent.life.find((entry) => entry.title === id)!;
    return <LifePage page={page} />;
  }
  return <HomePage />;
}

export default function App() {
  const currentPage = getCurrentPage();
  const { theme, toggleTheme } = useTheme();
  useCursorSpotlight();

  return (
    <>
      <a className="skip-link" href="#main-content">skip to content</a>
      <div className="site-shell" id="top">
        <Header currentPage={currentPage} theme={theme} onToggleTheme={toggleTheme} />
        <Page id={currentPage} />
        <footer className="site-footer"><span>@jkorr</span><a href="#top">back to top ↑</a></footer>
      </div>
    </>
  );
}
