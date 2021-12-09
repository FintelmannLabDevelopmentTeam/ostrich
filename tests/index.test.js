
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
