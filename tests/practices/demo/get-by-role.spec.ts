import {test} from '@playwright/test'

const url = "http://localhost:4200/pages/iot-dashboard"

test.beforeEach(async({page}) => {
    await page.goto(url)
})

test('Get by role demo TC', async ({page}) => {
    await page.getByText("Forms").click()
    await page.getByText("Form Layouts").click()
    await page.getByRole("textbox",{name: "Email"}).first().fill("myemail@gmail.com")
    await page.getByRole("button", {name: "Sign in"}).first().click()
})