import {test, expect} from '@playwright/test'

const url = "http://uitestingplayground.com/ajax"

test.beforeEach(async({page}) => {
    await page.goto(url)
    await page.getByText('Button Triggering AJAX Request').click()
})

test('Auto-waiting test', async ({page})=>{
    const successLabel = page.locator('.bg-success')

    // const successText = await successLabel.textContent() // textContent() has auto-wait for 30s by default if time-out is not configured
    // await expect(successText).toEqual('Data loaded with AJAX get request.')

    // await successLabel.waitFor({state: 'visible'}) // the element is wait for its state 'visible'
    // await expect(successLabel).toHaveText('Data loaded with AJAX get request.')


    await expect(successLabel).toHaveText('Data loaded with AJAX get request.',{timeout: 20*1000}) // use timeout to wait in expect toHaveText
})

test('Alternative wait', async ({page}) => {
    const successLabel = page.locator('.bg-success')

    // await page.waitForSelector('.bg-success') // wait for the selector available
    // await page.waitForLoadState('networkidle')  // wait for network idle (NOT RECOMMENDED)
    await successLabel.waitFor() // wait for an element is loaded

    await expect(successLabel).toHaveText('Data loaded with AJAX get request.')
})

test('Timeout test', async ({page}) => {
    test.setTimeout(60 * 1000) // override test timeout for this test case only
    // test.slow() // will increase the default timeout to 3 times
    const successLabel = page.locator('.bg-success')
    await expect(successLabel).toHaveText('Data loaded with AJAX get request.',{timeout: 20*1000})
    await successLabel.click({timeout: 40 * 1000}) // override action timeout
})