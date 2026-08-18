import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const distRoot = new URL("../dist/", import.meta.url);

test("builds a dark-first, metadata-rich static homepage", async () => {
  const html = await readFile(new URL("index.html", distRoot), "utf8");
  assert.match(html, /<title>jkorr — a place for unfinished things<\/title>/i);
  assert.match(html, /name="description"/i);
  assert.match(html, /name="theme-color" content="#000000"/i);
  assert.match(html, /name="color-scheme" content="dark light"/i);
  assert.match(html, /localStorage\.getItem\("jkorr-theme"\)/i);
  assert.match(html, /documentElement\.dataset\.theme/i);
  assert.match(html, /id="root"/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("keeps writing honest until real Substack essays are configured", async () => {
  const content = await readFile(new URL("../src/content.ts", import.meta.url), "utf8");
  const app = await readFile(new URL("../src/App.tsx", import.meta.url), "utf8");

  assert.match(content, /interface EssayPreview[\s\S]*title:[\s\S]*date:[\s\S]*summary:[\s\S]*href:/i);
  assert.match(content, /identity:\s*"jkorr"/i);
  assert.match(content, /longer thoughts will live on Substack/i);
  assert.match(content, /some of my thoughts on the world/i);
  assert.match(content, /items:\s*\[\]/i);
  assert.doesNotMatch(content, /creations|curiosities|small tools|visual experiments/i);
  assert.match(app, /siteContent\.essays\.items\.slice\(0, 3\)/i);
  assert.match(app, /siteContent\.essays\.href\s*\?/i);
  assert.match(app, /essays will live on Substack/i);
  assert.match(app, /a work in progress/i);
  assert.doesNotMatch(app, /PastelRibbon|CreationCardView|Marquee|OrbitField|interest-list|still becoming/i);
});

test("implements persistent themes, reduced motion, and a restrained spotlight", async () => {
  const app = await readFile(new URL("../src/App.tsx", import.meta.url), "utf8");
  const styles = await readFile(new URL("../src/styles.css", import.meta.url), "utf8");
  const main = await readFile(new URL("../src/main.tsx", import.meta.url), "utf8");

  assert.match(main, /@fontsource-variable\/inter"/i);
  assert.match(main, /@fontsource-variable\/inter-tight"/i);
  assert.match(app, /matchMedia\("\(pointer: fine\)"\)/i);
  assert.match(app, /matchMedia\("\(prefers-reduced-motion: reduce\)"\)/i);
  assert.match(app, /requestAnimationFrame\(paint\)/i);
  assert.match(app, /localStorage\.setItem\(THEME_STORAGE_KEY/i);
  assert.match(styles, /--background:\s*#000000/i);
  assert.match(styles, /:root\[data-theme="light"\]/i);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/i);
  assert.match(styles, /@media \(pointer: coarse\)/i);
  assert.doesNotMatch(styles, /static-grid|hero-orb|floating-nav|interest-list/i);
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
