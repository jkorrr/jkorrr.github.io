import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const distRoot = new URL("../dist/", import.meta.url);
const sourceRoot = new URL("../src/", import.meta.url);

test("builds the homepage and five direct-visit documentation pages", async () => {
  const pages = [
    ["index.html", /<title>jathin<\/title>/i],
    ["work/index.html", /<title>work — jathin<\/title>/i],
    ["thoughts/index.html", /<title>thoughts — jathin<\/title>/i],
    ["fitness/index.html", /<title>fitness — jathin<\/title>/i],
    ["eats/index.html", /<title>eats — jathin<\/title>/i],
    ["travel/index.html", /<title>travel — jathin<\/title>/i],
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

test("keeps the horizontal homepage and adds an accessible life dropdown", async () => {
  const app = await readFile(new URL("App.tsx", sourceRoot), "utf8");
  const homePage =
    app.match(/function HomePage\(\)[\s\S]*?function DocumentIntro/)?.[0] ?? "";
  assert.match(app, /href="\/#now"/i);
  assert.match(app, /href="\/work\/"/i);
  assert.match(app, /href="\/thoughts\/"/i);
  assert.match(app, /aria-expanded=\{lifeOpen\}/i);
  assert.match(app, /aria-controls="life-menu"/i);
  assert.match(app, /event\.key === "Escape"/i);
  assert.match(app, /fitness[\s\S]*eats[\s\S]*travel/i);
  assert.match(homePage, /<Section id="work" title="work">[\s\S]*open the index/i);
  assert.doesNotMatch(homePage, /siteContent\.work\.areas\.map/i);
  assert.match(app, /function WorkPage\(\)[\s\S]*siteContent\.work\.areas\.map/i);
  assert.match(app, /function ThoughtsPage\(\)[\s\S]*siteContent\.thoughts\.items\.map/i);
});

test("stores honest Work, Thoughts, and Life content", async () => {
  const content = await readFile(new URL("content.ts", sourceRoot), "utf8");
  assert.match(content, /hero:\s*"hi, i’m jathin\."/i);
  assert.match(content, /a small index of what i’m exploring/i);
  assert.match(content, /engineering[\s\S]*https:\/\/github\.com\/jkorrr/i);
  assert.match(content, /research[\s\S]*scholar\.google\.com\/citations\?view_op=new_articles/i);
  assert.match(content, /thoughts:[\s\S]*some of my more well articulated thoughts/i);
  assert.match(content, /title:\s*"do hard shit\."/i);
  assert.match(content, /summary:\s*"the joy in pain"/i);
  assert.match(content, /https:\/\/jkorr\.substack\.com\/p\/do-hard-shit/i);
  assert.match(content, /https:\/\/substack\.com\/@jkorr/i);
  assert.match(content, /title:\s*"fitness"[\s\S]*items:\s*\[\]/i);
  assert.match(content, /title:\s*"eats"[\s\S]*items:\s*\[\]/i);
  assert.match(content, /title:\s*"travel"[\s\S]*items:\s*\[\]/i);
  assert.match(content, /https:\/\/www\.linkedin\.com\/in\/jathin-k/i);
  assert.match(content, /https:\/\/www\.instagram\.com\/jathin_korrapati/i);
});

test("preserves typography, themes, spotlight, and responsive navigation", async () => {
  const app = await readFile(new URL("App.tsx", sourceRoot), "utf8");
  const styles = await readFile(new URL("styles.css", sourceRoot), "utf8");
  const main = await readFile(new URL("main.tsx", sourceRoot), "utf8");

  assert.match(main, /@fontsource-variable\/geist\/wght\.css/i);
  assert.match(app, /FaGithub/i);
  assert.match(app, /matchMedia\("\(pointer: fine\)"\)/i);
  assert.match(app, /matchMedia\("\(prefers-reduced-motion: reduce\)"\)/i);
  assert.match(app, /requestAnimationFrame\(paint\)/i);
  assert.match(app, /localStorage\.setItem\(themeStorageKey/i);
  assert.match(styles, /--background:\s*#050505/i);
  assert.match(styles, /--font-sans:\s*"Geist Variable"/i);
  assert.match(styles, /--font-serif:\s*Georgia/i);
  assert.match(styles, /\.life-menu/i);
  assert.match(styles, /\.document-page/i);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/i);
  assert.match(styles, /html\[data-spotlight="true"\] body::before/i);
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
