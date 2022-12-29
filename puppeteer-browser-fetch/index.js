const puppeteer = require("puppeteer");
const BrowserFetcher = require("puppeteer").BrowserFetcher
const browserFetcher = new BrowserFetcher({path: '/home/site/'});

module.exports = async function (context, req) {
    const url = req.query.url || "https://google.com/";
    const revisionInfo = await browserFetcher.download('1069273');
    const browser = await puppeteer.launch({
        executablePath: revisionInfo.executablePath,
    });
    const page = await browser.newPage();
    await page.goto(url);
    const screenshotBuffer = await page.screenshot({ fullPage: true });
    await browser.close();

    context.res = {
        body: screenshotBuffer,
        headers: {
            "content-type": "image/png"
        }
    };
};
