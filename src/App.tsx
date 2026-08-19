import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { siteContent } from "./content";

type Theme = "dark" | "light";

const themeStorageKey = "jkorr-theme";

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
        {siteContent.socialLinks.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
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

function Thoughts() {
  const essays = siteContent.thoughts.items.slice(0, 3);

  return (
    <Section id="thoughts" title="thoughts">
      <p>{siteContent.thoughts.description}</p>

      {essays.length > 0 ? (
        <ol className="essay-list">
          {essays.map((essay) => (
            <li key={essay.href}>
              <a href={essay.href} target="_blank" rel="noreferrer">
                <span>{essay.title}</span>
                <time dateTime={essay.date}>{essay.date}</time>
              </a>
              <p>{essay.summary}</p>
            </li>
          ))}
        </ol>
      ) : siteContent.thoughts.href ? (
        <a className="text-link" href={siteContent.thoughts.href} target="_blank" rel="noreferrer">
          read my thoughts <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <span className="quiet-label">thoughts — coming soon</span>
      )}
    </Section>
  );
}

export default function App() {
  const reduceMotion = useReducedMotion();
  const { theme, toggleTheme } = useTheme();

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
          </Section>

          <Section id="work" title="work">
            <p>{siteContent.work.description}</p>
            {siteContent.work.href ? (
              <a className="text-link" href={siteContent.work.href} target="_blank" rel="noreferrer">
                see my work <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </Section>

          <Thoughts />
        </main>

        <footer className="site-footer">
          <span>jathin</span>
          <a href="#top">back to top ↑</a>
        </footer>
      </div>
    </>
  );
}
