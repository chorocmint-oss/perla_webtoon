const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 2600, height: 2200 },
    deviceScaleFactor: 1
  });

  const htmlPath = "file://" + path.resolve("index.html").replace(/\\/g, "/");
  await page.goto(htmlPath, { waitUntil: "networkidle" });

  await page.evaluate(() => {
    document.body.classList.add("export-mode");
  });

  await page.evaluate(() => document.fonts && document.fonts.ready);
  await page.waitForTimeout(900);

  fs.mkdirSync("exports_panels_2x", { recursive: true });

  const panels = page.locator(".export-panel");
  const count = await panels.count();

  for (let i = 0; i < count; i++) {
    const panel = panels.nth(i);
    await panel.scrollIntoViewIfNeeded();

    const filename = `exports_panels_2x/panel_${String(i + 1).padStart(2, "0")}.png`;
    await panel.screenshot({ path: filename });
    console.log(`saved: ${filename}`);
  }

  await browser.close();
})();
