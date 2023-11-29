import {test} from '@playwright/test'

const url = "http://localhost:4200/pages/iot-dashboard"

test.beforeEach(async({page}) => {
    await page.goto(url)
})

test('User-facing locator demo TC', async ({page}) => {
    await page.getByText("Forms").click()
    await page.getByText("Form Layouts").click()
    
    await page.getByRole("textbox",{name: "Email"}).first().fill("myemail@gmail.com")
    await page.getByRole("button", {name: "Sign in"}).first().click()
    await page.getByLabel("Email").first().fill("new_email@gmail.com")
    await page.getByPlaceholder("Jane Doe").fill("My Name")
    await page.getByText("Using the Grid").click()
    await page.getByTestId('SignIn').click()
    await page.getByTitle("IoT Dashboard").click()
    
})