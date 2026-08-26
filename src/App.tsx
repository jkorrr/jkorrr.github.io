import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { siteContent, type LifePageContent, type SocialPlatform, type TravelPlace } from "./content";
import { EatsArchive } from "./EatsArchive";
import { TravelMap } from "./TravelMap";

type Theme = "dark" | "light";
type PageId = "home" | "work" | "thoughts" | "fitness" | "eats" | "travel" | "travel-detail";

const themeStorageKey = "jkorr-theme";
const lifePages = siteContent.life.map((page) => ({ label: page.title, href: `/${page.title}/` }));

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
} satisfies Record<SocialPlatform, typeof FaGithub>;

function getTravelSlug() {
  const segments = window.location.pathname.split("/").filter(Boolean);
  if (segments.at(-2) !== "travel") return undefined;
  const slug = segments.at(-1);
  return siteContent.travel.places.some((place) => place.slug === slug) ? slug : undefined;
}

function getCurrentPage(): PageId {
  if (getTravelSlug()) return "travel-detail";
  const segment = window.location.pathname.split("/").filter(Boolean).at(-1);
  return segment === "work" || segment === "thoughts" || segment === "fitness" || segment === "eats" || segment === "travel"
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
  const lifeActive = currentPage === "fitness" || currentPage === "eats" || currentPage === "travel" || currentPage === "travel-detail";

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
        <a href="/thoughts/" aria-current={currentPage === "thoughts" ? "page" : undefined}>thoughts</a>
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
                <a
                  key={page.href}
                  href={page.href}
                  aria-current={window.location.pathname === page.href || (currentPage === "travel-detail" && page.label === "travel") ? "page" : undefined}
                >
                  {page.label}
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
                <span className="essay-meta">
                  {essay.date ? <time dateTime={essay.date}>{formatEssayDate(essay.date)}</time> : null}
                  {essay.readTime ? <span>{essay.readTime}</span> : null}
                </span>
              </div>
              {essay.summary ? <p>{essay.summary}</p> : null}
            </li>
          ))}
        </ol>
      ) : null}
      <a className="text-link" href="/thoughts/">all thoughts <span aria-hidden="true">→</span></a>
    </Section>
  );
}

function formatEssayDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`)).toLowerCase();
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
        <a className="text-link" href="/thoughts/">learn more here <span aria-hidden="true">→</span></a>
      </Section>
      <Section id="work" title="work">
        <p>{siteContent.work.description}</p>
        <a className="text-link" href="/work/">open the index <span aria-hidden="true">→</span></a>
      </Section>
      <Thoughts />
    </main>
  );
}

function DocumentIntro({ section, title, description }: { section: string; title: string; description?: string }) {
  return (
    <header className="document-intro">
      <p>@jkorr / {section}</p>
      <h1>{title}</h1>
      {description ? <div>{description}</div> : null}
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

function ThoughtsPage() {
  return (
    <main id="main-content" className="document-page thoughts-page">
      <DocumentIntro section="thoughts" title="thoughts" />
      <div className="thoughts-source">
        <span>published essays</span>
        {siteContent.thoughts.href ? (
          <a href={siteContent.thoughts.href} target="_blank" rel="noreferrer">substack archive ↗</a>
        ) : null}
      </div>
      <ol className="thoughts-index">
        {siteContent.thoughts.items.map((essay) => (
          <li key={essay.href ?? essay.title}>
            {essay.href ? (
              <a href={essay.href} target="_blank" rel="noreferrer">
                <div className="thought-date">
                  {essay.date ? <time dateTime={essay.date}>{formatEssayDate(essay.date)}</time> : null}
                </div>
                <div className="thought-copy">
                  <h2>{essay.title}</h2>
                  {essay.summary ? <p>{essay.summary}</p> : null}
                </div>
                <div className="thought-read">
                  {essay.readTime ? <span>{essay.readTime}</span> : null}
                  <span aria-hidden="true">↗</span>
                </div>
              </a>
            ) : (
              <div className="thought-placeholder"><span>{essay.title}</span></div>
            )}
          </li>
        ))}
      </ol>
    </main>
  );
}

function LifePage({ page }: { page: LifePageContent }) {
  return (
    <main id="main-content" className="document-page">
      <DocumentIntro section="life" title={page.title} description={page.description} />
      {page.destination ? (
        <a className="life-destination" href={page.destination.href} target="_blank" rel="noreferrer">
          {page.destination.iconSrc ? (
            <img className="life-destination-icon" src={page.destination.iconSrc} alt="" width="400" height="400" />
          ) : null}
          <div className="life-destination-copy">
            <span className="life-destination-label">{page.destination.label}</span>
            <h2>{page.destination.title}</h2>
            <p>{page.destination.summary}</p>
          </div>
          <span className="life-destination-arrow" aria-hidden="true">↗</span>
        </a>
      ) : null}
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
      ) : page.destination ? null : <div className="empty-document"><span>documentation in progress</span><p>{page.emptyLabel}</p></div>}
    </main>
  );
}

function TravelPage() {
  return (
    <main id="main-content" className="document-page travel-page">
      <DocumentIntro section="life" title="travel" description={siteContent.travel.description} />
      <TravelMap places={siteContent.travel.places} />
    </main>
  );
}

function EatsPage() {
  return (
    <main id="main-content" className="document-page eats-page">
      <DocumentIntro section="life" title="eats" description="a life worth living to eat in" />
      <EatsArchive />
    </main>
  );
}

function TravelDetailPage({ place }: { place: TravelPlace }) {
  const currentIndex = siteContent.travel.places.findIndex((entry) => entry.slug === place.slug);
  const previous = currentIndex > 0 ? siteContent.travel.places[currentIndex - 1] : null;
  const next = currentIndex < siteContent.travel.places.length - 1 ? siteContent.travel.places[currentIndex + 1] : null;

  return (
    <main id="main-content" className="document-page travel-detail-page">
      <DocumentIntro
        section="travel"
        title={place.name}
        description={`${place.location}. notes, photographs, and the story of this trip will live here.`}
      />
      <div className="travel-detail-meta">
        <span>{place.status === "visited" ? "visited" : "want to go"}</span>
        <a href="/travel/">back to the atlas →</a>
      </div>
      <div className="travel-journal-outline">
        <section aria-labelledby="route-title">
          <span>01</span>
          <div>
            <h2 id="route-title">the route</h2>
            {place.route ? (
              <ol className="travel-route">
                {place.route.map((stop) => <li key={stop}>{stop}</li>)}
              </ol>
            ) : <p>stops and dates will live here.</p>}
          </div>
        </section>
        <section aria-labelledby="did-title">
          <span>02</span>
          <div><h2 id="did-title">what i did</h2><p>field notes coming soon.</p></div>
        </section>
        <section aria-labelledby="stayed-title">
          <span>03</span>
          <div><h2 id="stayed-title">what stayed with me</h2><p>the longer version is still being written.</p></div>
        </section>
        <section aria-labelledby="photos-title">
          <span>04</span>
          <div><h2 id="photos-title">photographs</h2><p>photos from this trip will collect here.</p></div>
        </section>
      </div>
      <nav className="travel-detail-nav" aria-label="travel adventure navigation">
        {previous ? <a href={`/travel/${previous.slug}/`}>← {previous.name}</a> : <span />}
        {next ? <a href={`/travel/${next.slug}/`}>{next.name} →</a> : <span />}
      </nav>
    </main>
  );
}

function Page({ id }: { id: PageId }) {
  if (id === "work") return <WorkPage />;
  if (id === "thoughts") return <ThoughtsPage />;
  if (id === "eats") return <EatsPage />;
  if (id === "travel") return <TravelPage />;
  if (id === "travel-detail") {
    const place = siteContent.travel.places.find((entry) => entry.slug === getTravelSlug())!;
    return <TravelDetailPage place={place} />;
  }
  if (id === "fitness") {
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
