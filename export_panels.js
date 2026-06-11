const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = "exports_2x";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 2432, height: 1664 },
    deviceScaleFactor: 1
  });

  const htmlPath = "file://" + path.resolve("index.html").replace(/\\/g, "/") + "?render=1";
  await page.goto(htmlPath, { waitUntil: "networkidle" });

  await page.waitForFunction(() => Array.from(document.images).every((img) => img.complete));
  await page.evaluate(() => document.fonts && document.fonts.ready);
  await page.waitForTimeout(800);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const panels = page.locator(".export-panel");
  const count = await panels.count();

  for (let i = 0; i < count; i++) {
    const panel = panels.nth(i);
    await panel.scrollIntoViewIfNeeded();

    const name = await panel.getAttribute("data-name");
    const filename = `${OUTPUT_DIR}/${String(i + 1).padStart(2, "0")}_${name || "panel"}.png`;

    await panel.screenshot({ path: filename });
    console.log(`saved: ${filename}`);
  }

  await browser.close();
})();
