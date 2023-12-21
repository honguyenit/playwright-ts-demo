import { Page } from "@playwright/test"

export class Helpers{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async waitForNumberOfSeconds(numberOfSecond: number){
        await this.page.waitForTimeout(numberOfSecond * 1000)
    }
}