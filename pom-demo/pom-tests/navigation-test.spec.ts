import {test, expect} from '@playwright/test'
import {NavigationPage} from "../page-objects/NavigationPage"


const url = "http://localhost:4200/pages"

test.beforeEach(async({page}) => {
    await page.goto(url)
})

test('Navigation bar test', async ({page})=>{
   const navPage = new NavigationPage(page)
   navPage.openFormLayouts()
})