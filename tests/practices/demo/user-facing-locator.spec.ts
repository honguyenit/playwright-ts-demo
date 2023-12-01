import {test, expect} from '@playwright/test'

const url = "http://localhost:4200/pages/iot-dashboard"

test.beforeEach(async({page}) => {
    await page.goto(url)
    await page.getByText("Forms").click()
    await page.getByText("Form Layouts").click()
})

test('User-facing locator demo TC', async ({page}) => {

    await page.getByRole("textbox",{name: "Email"}).first().fill("myemail@gmail.com")
    await page.getByRole("button", {name: "Sign in"}).first().click()
    await page.getByLabel("Email").first().fill("new_email@gmail.com")
    await page.getByPlaceholder("Jane Doe").fill("My Name")
    await page.getByText("Using the Grid").click()
    await page.getByTestId('SignIn').click()
    await page.getByTitle("IoT Dashboard").click()
    
})

test('Child locator test', async ({page}) => {
    await page.locator('nb-card nb-radio span:has-text("Option 1")').click()
    await page.locator('nb-card').locator('nb-radio').locator('span:has-text("Option 1")').click()
    await page.locator('nb-card').getByRole("button", {name: "Sign in"}).first().click()
    await page.locator('nb-card').nth(3).getByRole("button").click()

})

test('Parent locator test', async ({page}) => {
    await page.locator('nb-card',{hasText: "Using the Grid"}) // get parent having text 'Using the Grid'
        .getByRole("textbox", {name: "Email"}).click()

    await page.locator('nb-card', {has: page.locator("#inputEmail1")}) // get parent having locator '#inputEmail1'
        .getByRole('button').click()

    await page.locator('nb-card').filter({hasText: "Using the Grid"}).filter({has: page.locator("div")}) // filter elements inside
        .getByRole("textbox", {name: "Password"}).click()

    await page.locator("//*[text()='Using the Grid']").locator("..") // get parent element (..)
        .getByRole("textbox", {name: "Email"}).click()

})

test('Reusing locator test', async ({page}) => {
    const emailAddressSample: string = "myemail@gmail.com"
    
    const basicForm = page.locator('nb-card').filter({hasText: "Basic form"})

    const emailField = basicForm.getByRole('textbox', {name: "Email"})
    const passwordField = basicForm.getByRole('textbox', {name: "Password"})
    const checkBoxField = basicForm.locator('.custom-checkbox')
    const buttonField = basicForm.getByRole('button')

    await emailField.fill(emailAddressSample)
    await passwordField.fill("mypassword")
    await checkBoxField.click()
    await buttonField.click()

    await expect(emailField).toHaveValue(emailAddressSample)
})


test('Extracting text', async ({page}) => {
    const emailAddressSample: string = "myemail@gmail.com"
    const basicForm = page.locator('nb-card').filter({hasText: "Basic form"})

    const buttonText = await basicForm.getByRole('button').textContent()
    await expect(buttonText).toEqual("Submit")

    const allRadioLabels = await page.locator("nb-radio").allTextContents()
    await expect(allRadioLabels).toContain("Option 1")

    const emailField = basicForm.getByRole("textbox", {name: "Email"})
    await emailField.fill(emailAddressSample)
    const actualEmail = await emailField.inputValue()
    await expect(actualEmail).toEqual(emailAddressSample)

    const passwordField = basicForm.getByRole('textbox', {name: "Password"})
    const passwordPlaceholderText = await passwordField.getAttribute("placeholder")
    await expect(passwordPlaceholderText).toEqual('Password')

})