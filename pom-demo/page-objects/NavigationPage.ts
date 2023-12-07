import { Page } from "@playwright/test"

export class NavigationPage {

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async openFormLayouts(){
        await this.page.getByText("Forms").click()
        await this.page.getByText("Form Layouts").click()
    }

}