import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const distRoot = new URL("../dist/", import.meta.url);

test("builds a minimal dark-first personal homepage", async () => {
  const html = await readFile(new URL("index.html", distRoot), "utf8");
  assert.match(html, /<title>jathin<\/title>/i);
  assert.match(html, /The personal site of Jathin/i);
  assert.match(html, /name="theme-color" content="#050505"/i);
  assert.match(html, /name="color-scheme" content="dark light"/i);
  assert.match(html, /localStorage\.getItem\("jkorr-theme"\)/i);
  assert.match(html, /documentElement\.dataset\.theme/i);
  assert.match(html, /id="root"/i);
});

test("renders real now, work, and thoughts destinations", async () => {
  const content = await readFile(new URL("../src/content.ts", import.meta.url), "utf8");
  const app = await readFile(new URL("../src/App.tsx", import.meta.url), "utf8");

  assert.match(content, /hero:\s*"hi, i’m jathin\."/i);
  assert.match(content, /interface EssayPreview[\s\S]*title:[\s\S]*date\?:[\s\S]*summary\?:[\s\S]*href\?:/i);
  assert.match(content, /now:\s*"i’m a recent berkeley eecs grad, raised in la/i);
  assert.match(content, /raw, unfiltered thoughts on the world across travel, tech, fitness, & food/i);
  assert.match(content, /right now, i’m exploring infra \+ performance problems @ openai/i);
  assert.match(content, /a small index of things i’ve done and am exploring/i);
  assert.match(content, /description:\s*"some of my more well articulated thoughts\."/i);
  assert.match(content, /work:[\s\S]*https:\/\/github\.com\/jkorrr/i);
  assert.match(content, /PLACEHOLDER ESSAY 01/i);
  assert.match(content, /PLACEHOLDER ESSAY 05/i);
  assert.doesNotMatch(content, /welcome to my corner|a place for unfinished things|creations|curiosities/i);

  assert.match(app, /href="#now"/i);
  assert.match(app, /href="#work"/i);
  assert.match(app, /href="#thoughts"/i);
  assert.match(app, /learn more here/i);
  assert.match(app, /id="now"/i);
  assert.match(app, /id="work"/i);
  assert.match(app, /id="thoughts"/i);
  assert.match(app, /items\.slice\(0, 5\)/i);
  assert.match(app, /essay\.href \?/i);
  assert.match(app, /essay-placeholder/i);
  assert.match(app, /<span>@jkorr<\/span>/i);
  assert.doesNotMatch(app, /thoughts — coming soon/i);
  assert.doesNotMatch(app, /IntroSplash|useCursorSpotlight|welcome to my corner/i);
});

test("uses clean self-hosted typography, social icons, and restrained motion", async () => {
  const app = await readFile(new URL("../src/App.tsx", import.meta.url), "utf8");
  const styles = await readFile(new URL("../src/styles.css", import.meta.url), "utf8");
  const main = await readFile(new URL("../src/main.tsx", import.meta.url), "utf8");

  assert.match(main, /@fontsource-variable\/geist\/wght\.css/i);
  assert.match(app, /FaGithub/i);
  assert.match(app, /socialIcons\[link\.platform\]/i);
  assert.match(app, /social-placeholder/i);
  assert.match(app, /link coming soon/i);
  assert.doesNotMatch(app, /matchMedia|requestAnimationFrame|spotlight/i);
  assert.match(app, /localStorage\.setItem\(themeStorageKey/i);
  assert.match(styles, /--background:\s*#050505/i);
  assert.match(styles, /--font-sans:\s*"Geist Variable"/i);
  assert.match(styles, /--font-serif:\s*Georgia/i);
  assert.match(styles, /:root\[data-theme="light"\]/i);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/i);
  assert.doesNotMatch(styles, /spotlight|static-grid|hero-orb|floating-nav|pastel/i);
});

test("emits compiled script, styles, and favicon assets", async () => {
  const html = await readFile(new URL("index.html", distRoot), "utf8");
  const script = html.match(/<script[^>]+src="([^"]+\.js)"/i)?.[1];
  const stylesheet = html.match(/<link[^>]+href="([^"]+\.css)"/i)?.[1];
  assert.ok(script, "compiled JavaScript is linked");
  assert.ok(stylesheet, "compiled CSS is linked");
  await access(new URL(script.replace(/^\//, ""), distRoot));
  await access(new URL(stylesheet.replace(/^\//, ""), distRoot));
  await access(new URL("favicon.svg", distRoot));
});
