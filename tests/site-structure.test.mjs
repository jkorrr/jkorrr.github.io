import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const distRoot = new URL("../dist/", import.meta.url);
const sourceRoot = new URL("../src/", import.meta.url);

test("builds five direct-visit static pages with independent metadata", async () => {
  const pages = [
    ["index.html", /<title>jathin<\/title>/i],
    ["now/index.html", /<title>now — jathin<\/title>/i],
    ["work/index.html", /<title>work \+ research — jathin<\/title>/i],
    ["thoughts/index.html", /<title>thoughts — jathin<\/title>/i],
    ["places/index.html", /<title>places — jathin<\/title>/i],
  ];

  for (const [path, title] of pages) {
    const html = await readFile(new URL(path, distRoot), "utf8");
    assert.match(html, title);
    assert.match(html, /name="description"/i);
    assert.match(html, /name="theme-color" content="#050505"/i);
    assert.match(html, /localStorage\.getItem\("jkorr-theme"\)/i);
    assert.match(html, /id="root"/i);
  }
});

test("exposes a real dropdown destination for every page", async () => {
  const app = await readFile(new URL("App.tsx", sourceRoot), "utf8");
  for (const href of ["/", "/now/", "/work/", "/thoughts/", "/places/"]) {
    assert.match(app, new RegExp(`href: "${href.replaceAll("/", "\\/")}"`));
  }
  assert.match(app, /aria-expanded=\{menuOpen\}/i);
  assert.match(app, /aria-controls="site-menu"/i);
  assert.match(app, /aria-current=\{currentPage === item\.id \? "page"/i);
  assert.match(app, /event\.key === "Escape"/i);
});

test("keeps now, research, essays, and places editable and honest", async () => {
  const content = await readFile(new URL("content.ts", sourceRoot), "utf8");
  assert.match(content, /a dated snapshot of what has my attention/i);
  assert.match(content, /august 2026/i);
  assert.match(content, /infrastructure \+ performance problems @ openai/i);
  assert.match(content, /scholar\.google\.com\/citations\?view_op=new_articles/i);
  assert.match(content, /SELECTED RESEARCH — COMING SOON/i);
  assert.match(content, /PLACEHOLDER ESSAY 01/i);
  assert.match(content, /PLACEHOLDER ESSAY 05/i);
  assert.match(content, /PLACEHOLDER PLACE 01/i);
  assert.match(content, /a field note will live here/i);
  assert.match(content, /https:\/\/www\.linkedin\.com\/in\/jathin-k/i);
  assert.match(content, /https:\/\/www\.instagram\.com\/jathin_korrapati/i);
});

test("preserves the theme, self-hosted type, spotlight, and reduced motion", async () => {
  const app = await readFile(new URL("App.tsx", sourceRoot), "utf8");
  const styles = await readFile(new URL("styles.css", sourceRoot), "utf8");
  const main = await readFile(new URL("main.tsx", sourceRoot), "utf8");

  assert.match(main, /@fontsource-variable\/geist\/wght\.css/i);
  assert.match(app, /matchMedia\("\(pointer: fine\)"\)/i);
  assert.match(app, /matchMedia\("\(prefers-reduced-motion: reduce\)"\)/i);
  assert.match(app, /requestAnimationFrame\(paint\)/i);
  assert.match(app, /localStorage\.setItem\(themeStorageKey/i);
  assert.match(styles, /--background:\s*#050505/i);
  assert.match(styles, /--font-sans:\s*"Geist Variable"/i);
  assert.match(styles, /:root\[data-theme="light"\]/i);
  assert.match(styles, /html\[data-spotlight="true"\] body::before/i);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/i);
  assert.doesNotMatch(styles, /static-grid|hero-orb|floating-nav|pastel/i);
});

test("emits shared compiled assets and favicon", async () => {
  const html = await readFile(new URL("index.html", distRoot), "utf8");
  const script = html.match(/<script[^>]+src="([^"]+\.js)"/i)?.[1];
  const stylesheet = html.match(/<link[^>]+href="([^"]+\.css)"/i)?.[1];
  assert.ok(script, "compiled JavaScript is linked");
  assert.ok(stylesheet, "compiled CSS is linked");
  await access(new URL(script.replace(/^\//, ""), distRoot));
  await access(new URL(stylesheet.replace(/^\//, ""), distRoot));
  await access(new URL("favicon.svg", distRoot));
});
