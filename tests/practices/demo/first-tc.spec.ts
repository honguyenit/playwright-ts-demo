import {test} from '@playwright/test'

const url = "http://localhost:4200/pages/iot-dashboard"

test.beforeEach(async({page}) => {
    await page.goto(url)
})

test.describe('Test suite demo 1', () => {
    test.beforeEach(async ({page}) => {
        await page.getByText("Forms").click()
    })

    test('my 1st test case', async ({page}) => {
        await page.getByText("Form Layouts").click()
    })

    test('my 2nd test case', async ({page}) => {
        await page.getByText("Datepicker").click()
    })

})

test.describe('Test suite demo 2', () => {
    test('my 3nd test case without any suite', async ({page}) => {
        await page.getByText("Modal & Overlays").click()
        await page.getByText("Dialog").click()
    })
})

