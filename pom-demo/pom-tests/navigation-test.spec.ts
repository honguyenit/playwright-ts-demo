import {test, expect} from '@playwright/test'
import { PageManager } from '../page-objects/PageManager'

test.beforeEach(async({page}) => {
    const url = "http://localhost:4200/pages"
    await page.goto(url)
})

test('Navigation bar test', async ({page})=>{
    const pageManager = new PageManager(page)
    const navPage = pageManager.getNavigationPage()
    await navPage.openFormLayoutsMenu()
    await navPage.openDatePickerMenu()
    await navPage.openSmartTableMenu()
    await navPage.openToastrMenu()
    await navPage.openTooltipMenu()
})

test('FormLayout test', async ({page})=>{
    const pageManager = new PageManager(page)
    const navPage = pageManager.getNavigationPage()
    const formlayoutPage = pageManager.getFormLayoutPage()
    const datePickerPage = pageManager.getDatePickerPage()

    await navPage.openFormLayoutsMenu()
    await formlayoutPage.submitGridFormWithCredentialsAndSelectOption("myemail@gmail.com", "12345678", "Option 2")
    await formlayoutPage.submitInlineFormWithCredentialsAndCheckbox("Dr Strang", "strange@gmail.com", false)
    await navPage.openDatePickerMenu()
    await datePickerPage.selectDatePickerFromToday(10)
    await datePickerPage.selectDatePickerWithRangeFromToday(5, 15)
 })