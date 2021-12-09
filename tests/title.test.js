const timeout = 5000;

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

        it('Title should contain "Ostrich"', async () => {
            await expect(page.title()).resolves.toMatch('ostrich example');
        })
    },
    timeout
)
