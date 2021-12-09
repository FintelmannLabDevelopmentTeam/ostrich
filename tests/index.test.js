// const { spawnSync } = require('child_process');
// const path = require('path');
// const puppeteer = require('puppeteer');

// const BROWSER_PATH = undefined;
// const HEADLESS = true;

// (async () => {
//     const child = spawnSync('npm', ['run', 'build']);

//     const browser = await puppeteer.launch({ headless: HEADLESS, executablePath: BROWSER_PATH});
//     const page = await browser.newPage();
//     await page.setViewport({
//         width: 1280,
//         height: 720,
//         deviceScaleFactor: 1,
//     });
//     await page.goto('file://' + __dirname + '/assets/index.html');
//     await page.screenshot({ path: path.join(__dirname, 'output', 'example.png') });

//     await browser.close();
// })();

const timeout = 5000

describe(
  '/ (ostrich)',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('file://' + __dirname + '/assets/index.html')
    }, timeout)

    afterAll(async () => {
      await page.close()
    })

    it('should load without error', async () => {
      let text = await page.evaluate(() => document.body.textContent)
      expect(text).toContain('ostrich')
    })
  },
  timeout
)
