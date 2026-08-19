import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { type ReactNode, useEffect, useState } from "react";
import { siteContent } from "./content";

type Theme = "dark" | "light";

const THEME_STORAGE_KEY = "jkorr-theme";

function IntroSplash({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 920);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="intro-splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.18, ease: "easeOut" } }}
      aria-label="Introduction"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      >
        hi, i’m <strong>jkorr</strong>
      </motion.p>
      <button type="button" onClick={onComplete}>
        skip intro
      </button>
    </motion.div>
  );
}

function RevealSection({
  id,
  labelledBy,
  children,
}: {
  id: string;
  labelledBy: string;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className="journal-section"
      aria-labelledby={labelledBy}
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );

  const setTheme = (nextTheme: Theme) => {
    const root = document.documentElement;
    root.dataset.theme = nextTheme;
    root.style.colorScheme = nextTheme;
    root.classList.add("is-theme-changing");
    window.setTimeout(() => root.classList.remove("is-theme-changing"), 200);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Theme persistence is optional when storage is unavailable.
    }

    const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    themeColor?.setAttribute("content", nextTheme === "dark" ? "#000000" : "#FFFCF0");
    setThemeState(nextTheme);
  };

  return { theme, setTheme };
}

function useCursorSpotlight() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;

    if (!finePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    let pointerX = window.innerWidth * 0.72;
    let pointerY = window.innerHeight * 0.3;

    const paint = () => {
      root.style.setProperty("--pointer-x", `${pointerX}px`);
      root.style.setProperty("--pointer-y", `${pointerY}px`);
      frame = 0;
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    root.classList.add("has-spotlight");
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      root.classList.remove("has-spotlight");
      window.removeEventListener("pointermove", onPointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
}

function Header({ theme, onThemeChange }: { theme: Theme; onThemeChange: (theme: Theme) => void }) {
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="jkorr, back to top">
        jkorr<span>.</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#now">now</a>
        <a href="#writing">writing</a>
        <a href="#about">about</a>
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${nextTheme} theme`}
          aria-pressed={theme === "light"}
          onClick={() => onThemeChange(nextTheme)}
        >
          {nextTheme} <span aria-hidden="true">↗</span>
        </button>
      </nav>
    </header>
  );
}

function WritingSection() {
  const essays = siteContent.essays.items.slice(0, 3);

  return (
    <RevealSection id="writing" labelledBy="writing-title">
      <p className="section-label">{siteContent.essays.label}</p>
      <h2 id="writing-title">words, when they’re ready.</h2>
      <p className="section-introduction">{siteContent.essays.description}</p>

      {essays.length ? (
        <ol className="essay-list">
          {essays.map((essay) => (
            <li key={essay.href}>
              <a href={essay.href} target="_blank" rel="noreferrer">
                <span className="essay-heading">
                  <strong>{essay.title}</strong>
                  <time>{essay.date}</time>
                </span>
                <span className="essay-summary">{essay.summary}</span>
                <span className="essay-arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ol>
      ) : (
        <div className="empty-writing">
          <span>essays will live on Substack</span>
          {siteContent.essays.href ? (
            <a href={siteContent.essays.href} target="_blank" rel="noreferrer">
              visit Substack <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      )}
    </RevealSection>
  );
}

export function App() {
  const reduceMotion = useReducedMotion();
  const { theme, setTheme } = useTheme();
  const [showIntro, setShowIntro] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useCursorSpotlight();

  return (
    <>
      <AnimatePresence>{showIntro ? <IntroSplash onComplete={() => setShowIntro(false)} /> : null}</AnimatePresence>
      <a className="skip-link" href="#main-content">Skip to the main content</a>

      <div className="site-shell">
        <Header theme={theme} onThemeChange={setTheme} />

        <main id="main-content">
          <section className="hero" id="top" aria-labelledby="hero-title">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.52, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="eyebrow">{siteContent.eyebrow}</p>
              <h1 id="hero-title">{siteContent.headline}</h1>
              <p className="hero-introduction" id="about">{siteContent.introduction}</p>
              <div className="hero-links">
                <a href="#now">keep reading <span aria-hidden="true">↓</span></a>
                <a
                  href={siteContent.socialLinks[0].href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Visit jkorr on GitHub, opens in a new tab"
                >
                  github <span aria-hidden="true">↗</span>
                </a>
              </div>
            </motion.div>
          </section>

          <RevealSection id="now" labelledBy="now-title">
            <p className="section-label">now</p>
            <h2 id="now-title">right now.</h2>
            <p className="section-prose">{siteContent.now}</p>
          </RevealSection>

          <WritingSection />
        </main>

        <footer className="footer">
          <div>
            <a className="footer-wordmark" href="#top">jkorr<span>.</span></a>
            <p>a work in progress</p>
          </div>
          <div className="footer-links">
            {siteContent.socialLinks.map((link) => (
              <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
            <a href="#top">back to top ↑</a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} jkorr</p>
        </footer>
      </div>
    </>
  );
}
