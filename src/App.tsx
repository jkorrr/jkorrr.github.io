import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { siteContent, type ContentCategory, type SocialPlatform } from "./content";

type Theme = "dark" | "light";

const themeStorageKey = "jkorr-theme";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
} satisfies Record<SocialPlatform, typeof FaGithub>;

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
    localStorage.setItem(themeStorageKey, nextTheme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", nextTheme === "dark" ? "#050505" : "#F7F7F4");
    setTheme(nextTheme);
  };

  return { theme, toggleTheme };
}

function Header({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  return (
    <header className="site-header" aria-label="site header">
      <div className="social-links" aria-label="social links">
        {siteContent.socialLinks.map((link) => {
          const Icon = socialIcons[link.platform];

          if (!link.href) {
            return (
              <span
                key={link.platform}
                className="social-placeholder"
                aria-label={`${link.label} link coming soon`}
                title={`${link.label} — coming soon`}
              >
                <Icon aria-hidden="true" />
              </span>
            );
          }

          return (
            <a key={link.platform} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} title={link.label}>
              <Icon aria-hidden="true" />
            </a>
          );
        })}
      </div>

      <nav className="site-nav" aria-label="primary navigation">
        <a href="#now">now</a>
        <a href="#work">work</a>
        <a href="#thoughts">thoughts</a>
        <button type="button" onClick={onToggleTheme} aria-label={`switch to ${theme === "dark" ? "light" : "dark"} mode`}>
          {theme === "dark" ? "light" : "dark"}
        </button>
      </nav>
    </header>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
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

function CategoryList({ items }: { items: ContentCategory[] }) {
  return (
    <ul className="category-list">
      {items.map((item) => (
        <li key={item.label}>
          {item.href ? (
            <a href={item.href}>{item.label}</a>
          ) : (
            <span className="category-name">{item.label}</span>
          )}
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

function Thoughts() {
  const essays = siteContent.thoughts.items.slice(0, 5);

  return (
    <Section id="thoughts" title="thoughts">
      <p>{siteContent.thoughts.description}</p>

      {essays.length > 0 ? (
        <div className="thought-group">
          <h3>essays</h3>
          <ol className="essay-list">
            {essays.map((essay) => (
              <li key={essay.href ?? essay.title}>
                <div className="essay-row">
                  {essay.href ? (
                    <a href={essay.href} target="_blank" rel="noreferrer">
                      {essay.title} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="essay-placeholder">{essay.title}</span>
                  )}
                  {essay.date ? <time dateTime={essay.date}>{essay.date}</time> : null}
                </div>
                {essay.summary ? <p>{essay.summary}</p> : null}
              </li>
            ))}
          </ol>
        </div>
      ) : siteContent.thoughts.href ? (
        <a className="text-link" href={siteContent.thoughts.href} target="_blank" rel="noreferrer">
          read my thoughts <span aria-hidden="true">↗</span>
        </a>
      ) : null}

      <CategoryList items={siteContent.thoughts.categories} />
    </Section>
  );
}

export default function App() {
  const reduceMotion = useReducedMotion();
  const { theme, toggleTheme } = useTheme();
  useCursorSpotlight();

  return (
    <>
      <a className="skip-link" href="#main-content">
        skip to content
      </a>

      <div className="site-shell" id="top">
        <Header theme={theme} onToggleTheme={toggleTheme} />

        <main id="main-content">
          <motion.section
            className="hero"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            aria-labelledby="hero-title"
          >
            <h1 id="hero-title">{siteContent.hero}</h1>
          </motion.section>

          <Section id="now" title="now">
            <p>{siteContent.now}</p>
            <a className="text-link" href="#thoughts">
              learn more here <span aria-hidden="true">↓</span>
            </a>
          </Section>

          <Section id="work" title="work">
            <p>{siteContent.work.description}</p>
            <CategoryList items={siteContent.work.categories} />
            {siteContent.work.href ? (
              <a className="text-link" href={siteContent.work.href} target="_blank" rel="noreferrer">
                see my work <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </Section>

          <Thoughts />
        </main>

        <footer className="site-footer">
          <span>@jkorr</span>
          <a href="#top">back to top ↑</a>
        </footer>
      </div>
    </>
  );
}
