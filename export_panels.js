const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 2600, height: 2000 },
    deviceScaleFactor: 1
  });

  const htmlPath = "file://" + path.resolve("index.html").replace(/\\/g, "/");
  await page.goto(htmlPath, { waitUntil: "networkidle" });

  await page.evaluate(() => {
    document.body.classList.add("export-mode");
  });

  await page.evaluate(() => document.fonts && document.fonts.ready);
  await page.waitForTimeout(800);

  fs.mkdirSync("exports_2x", { recursive: true });

  const bundles = page.locator(".export-bundle");
  const count = await bundles.count();

  for (let i = 0; i < count; i++) {
    const bundle = bundles.nth(i);
    await bundle.scrollIntoViewIfNeeded();

    const exportName = await bundle.getAttribute("data-export-name");
    const filename = `exports_2x/${exportName || `bundle_${i + 1}`}.png`;

    await bundle.screenshot({
      path: filename
    });

    console.log(`saved: ${filename}`);
  }

  await browser.close();
})();
