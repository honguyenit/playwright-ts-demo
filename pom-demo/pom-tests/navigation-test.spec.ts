import {test, expect} from '@playwright/test'
import {NavigationPage} from "../page-objects/NavigationPage"
import {FormLayoutPage} from "../page-objects/FormLayoutPage"

test.beforeEach(async({page}) => {
    const url = "http://localhost:4200/pages"
    await page.goto(url)
})

test('Navigation bar test', async ({page})=>{
   const navPage = new NavigationPage(page)
   await navPage.openFormLayoutsMenu()
   await navPage.openDatePickerMenu()
   await navPage.openSmartTableMenu()
   await navPage.openToastrMenu()
   await navPage.openTooltipMenu()
})

test('FormLayout test', async ({page})=>{
    const navPage = new NavigationPage(page)
    const formlayoutPage = new FormLayoutPage(page)

    await navPage.openFormLayoutsMenu()
    await formlayoutPage.submitGridFormWithCredentialsAndSelectOption("myemail@gmail.com", "12345678", "Option 2")
    await formlayoutPage.submitInlineFormWithCredentialsAndCheckbox("Dr Strang", "strange@gmail.com", false)
 })