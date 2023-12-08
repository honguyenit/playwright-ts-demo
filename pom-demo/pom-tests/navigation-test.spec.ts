import {test, expect} from '@playwright/test'
import {NavigationPage} from "../page-objects/NavigationPage"

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