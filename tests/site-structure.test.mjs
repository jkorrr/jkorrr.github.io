import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const distRoot = new URL("../dist/", import.meta.url);
const sourceRoot = new URL("../src/", import.meta.url);

test("builds the homepage, documentation pages, and seven travel journals", async () => {
  const pages = [
    ["index.html", /<title>jathin<\/title>/i],
    ["about/index.html", /<title>about — jathin<\/title>/i],
    ["work/index.html", /<title>work — jathin<\/title>/i],
    ["thoughts/index.html", /<title>thoughts — jathin<\/title>/i],
    ["fitness/index.html", /<title>fitness — jathin<\/title>/i],
    ["eats/index.html", /<title>eats — jathin<\/title>/i],
    ["travel/index.html", /<title>travel — jathin<\/title>/i],
    ["travel/belgium/index.html", /<title>belgium — travel — jathin<\/title>/i],
    ["travel/london/index.html", /<title>london — travel — jathin<\/title>/i],
    ["travel/amsterdam/index.html", /<title>amsterdam — travel — jathin<\/title>/i],
    ["travel/guatemala/index.html", /<title>guatemala — travel — jathin<\/title>/i],
    ["travel/mexico-city/index.html", /<title>cdmx — travel — jathin<\/title>/i],
    ["travel/hyderabad/index.html", /<title>hyderabad — travel — jathin<\/title>/i],
    ["travel/kashmir/index.html", /<title>kashmir — travel — jathin<\/title>/i],
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
  assert.match(app, /href="\/about\/"/i);
  assert.match(app, /aria-expanded=\{lifeOpen\}/i);
  assert.match(app, /aria-controls="life-menu"/i);
  assert.match(app, /event\.key === "Escape"/i);
  assert.match(app, /fitness[\s\S]*eats[\s\S]*travel/i);
  assert.match(homePage, /<Section id="work" title="work">[\s\S]*open the index/i);
  assert.doesNotMatch(homePage, /jathin-portrait\.jpg/i);
  assert.doesNotMatch(homePage, /siteContent\.work\.areas\.map/i);
  assert.match(app, /function WorkPage\(\)[\s\S]*siteContent\.work\.areas\.map/i);
  assert.match(app, /function ThoughtsPage\(\)[\s\S]*siteContent\.thoughts\.items\.map/i);
  assert.match(app, /function AboutPage\(\)[\s\S]*className="about-profile"[\s\S]*jathin-portrait\.jpg/i);
  assert.match(app, /function EatsPage\(\)[\s\S]*<EatsArchive/i);
  assert.match(app, /function TravelPage\(\)[\s\S]*<TravelMap places=\{siteContent\.travel\.places\}/i);
  assert.doesNotMatch(app, /className="travel-journeys"/i);
  assert.match(app, /function TravelDetailPage\([^)]*\)[\s\S]*what stayed with me/i);
  assert.match(app, /currentPage === "travel-detail"/i);
});

test("stores honest Work, Thoughts, and Life content", async () => {
  const content = await readFile(new URL("content.ts", sourceRoot), "utf8");
  assert.match(content, /hero:\s*"hi, i’m jathin\."/i);
  assert.match(content, /portraitCaption:\s*"me @ cal hacks freshman year"/i);
  assert.match(content, /paragraphs:\s*\["PLACEHOLDER"\]/i);
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
  assert.match(content, /title:\s*"eats"[\s\S]*https:\/\/beliapp\.co\/app\/jkorr/i);
  assert.match(content, /a life worth living to eat in/i);
  assert.match(content, /beli-icon\.webp[\s\S]*@jkorr on beli[\s\S]*my restaurant map/i);
  assert.match(content, /restaurants i’ve tried, ranked and saved/i);
  assert.match(content, /title:\s*"travel"[\s\S]*items:\s*\[\]/i);
  assert.match(content, /travel:[\s\S]*places i’ve been, and places i’m still thinking about/i);
  assert.match(content, /slug:\s*"belgium"[\s\S]*slug:\s*"london"[\s\S]*slug:\s*"amsterdam"/i);
  assert.match(content, /slug:\s*"guatemala"[\s\S]*antigua[\s\S]*acatenango[\s\S]*lake atitlán/i);
  assert.match(content, /slug:\s*"mexico-city"[\s\S]*slug:\s*"hyderabad"[\s\S]*slug:\s*"kashmir"/i);
  assert.match(content, /belgium[\s\S]*7\/20–7\/23[\s\S]*london[\s\S]*7\/15–7\/20[\s\S]*amsterdam[\s\S]*7\/23–7\/27/i);
  assert.match(content, /guatemala[\s\S]*6\/9–6\/14[\s\S]*mexico-city[\s\S]*5\/31–6\/6[\s\S]*hyderabad[\s\S]*6\/23–7\/15[\s\S]*kashmir[\s\S]*7\/10–7\/13/i);
  assert.match(content, /https:\/\/www\.linkedin\.com\/in\/jathin-k/i);
  assert.match(content, /https:\/\/www\.instagram\.com\/jathin_korrapati/i);
});

test("preserves typography, themes, spotlight, and responsive navigation", async () => {
  const app = await readFile(new URL("App.tsx", sourceRoot), "utf8");
  const styles = await readFile(new URL("styles.css", sourceRoot), "utf8");
  const main = await readFile(new URL("main.tsx", sourceRoot), "utf8");
  const travelMap = await readFile(new URL("TravelMap.tsx", sourceRoot), "utf8");
  const eatsArchive = await readFile(new URL("EatsArchive.tsx", sourceRoot), "utf8");
  const eatsData = await readFile(new URL("eatsData.ts", sourceRoot), "utf8");
  const mapGeometry = await readFile(new URL("mapGeometry.ts", sourceRoot), "utf8");

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
  assert.match(styles, /\.life-destination/i);
  assert.match(styles, /\.taste-archive/i);
  assert.match(styles, /\.travel-map-marker/i);
  assert.match(styles, /\.travel-journal-outline/i);
  assert.doesNotMatch(app, /className="hero-portrait"/i);
  assert.match(styles, /\.about-profile/i);
  assert.match(travelMap, /fetch\("\/world-land\.geojson"\)/i);
  assert.match(travelMap, /aria-labelledby="travel-map-title travel-map-description"/i);
  assert.doesNotMatch(travelMap, /field atlas/i);
  assert.match(mapGeometry, /function layoutGeoMarkers/i);
  assert.match(travelMap, /className="travel-map-readout/i);
  assert.match(travelMap, /what i've seen, so far\./i);
  assert.match(travelMap, /hover to preview; select to explore the adventure/i);
  assert.match(eatsArchive, /where i've eaten, so far\./i);
  assert.match(eatsArchive, />\s*my beli\s*</i);
  assert.match(eatsArchive, /<span>updated \{formatUpdatedDate\(eatsData\.updatedAt\)\}<\/span>/i);
  assert.doesNotMatch(eatsArchive, /full rankings on beli|beli export/i);
  assert.match(eatsArchive, /select a region to open its local index/i);
  assert.match(eatsArchive, /type="search"/i);
  assert.match(eatsArchive, /eats-place-index/i);
  assert.match(eatsArchive, /google\.com\/maps\/search\/\?api=1/i);
  assert.match(eatsArchive, /className="eats-place-name"[\s\S]*href=\{mapsHref\(place\)\}/i);
  assert.doesNotMatch(eatsArchive, /className="eats-place-location"/i);
  assert.match(eatsArchive, /with photos/i);
  assert.match(eatsArchive, /className="eats-photo-dialog"/i);
  assert.match(eatsArchive, /className="eats-photo-arrow is-previous"/i);
  assert.match(eatsArchive, /className="eats-photo-arrow is-next"/i);
  assert.doesNotMatch(eatsArchive, /eats-photo-viewer-controls/i);
  assert.match(eatsArchive, /fetch\("\/world-land\.geojson"\)/i);
  assert.match(eatsData, /"isPlaceholder":\s*false/i);
  assert.match(eatsData, /"totalPlaces":\s*531/i);
  assert.match(eatsData, /"totalSaved":\s*454/i);
  assert.match(eatsData, /"totalPhotos":\s*1019/i);
  assert.match(eatsData, /"photographedPlaces":\s*422/i);
  assert.match(eatsData, /"uniqueCities":\s*77/i);
  assert.match(eatsData, /"name":\s*"Porto's Bakery and Cafe"/i);
  assert.doesNotMatch(eatsData, /Email|Phone Number|Device ID|Stripe|Note Text|Comment Text|Image URL|User ID/i);
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
  await access(new URL("beli-icon.webp", distRoot));
  await access(new URL("jathin-portrait.jpg", distRoot));
  await access(new URL("world-land.geojson", distRoot));
});
