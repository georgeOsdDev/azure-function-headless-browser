const { chromium } = require("playwright-chromium");

module.exports = async function (context, req) {
    const url = req.query.url || "https://playwright.dev/";
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.emulateMedia('screen');
    await page.goto(url);
    const screenshotBuffer = await page.screenshot();
    await browser.close();
    context.res = {
        body: screenshotBuffer,
        headers: {
            "content-type": "image/png",
        }
    };
}
