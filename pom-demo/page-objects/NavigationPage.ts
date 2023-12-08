import { Page } from "@playwright/test"

export class NavigationPage {

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async openFormLayoutsMenu(){
        await this.selectGroupMenuItem('Forms')
        await this.page.getByText('Form Layouts').click()
    }

    async openDatePickerMenu(){
        await this.selectGroupMenuItem('Forms')
        await this.page.getByText('Datepicker').click()
    }

    async openSmartTableMenu(){
        await this.selectGroupMenuItem('Tables & Data')
        await this.page.getByText("Smart Table").click()
    }

    async openToastrMenu(){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.getByText("Toastr").click()
    }

    async openTooltipMenu(){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.getByText("Tooltip").click()
    }

    private async selectGroupMenuItem(groupItemTitle: string){
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if(expandedState == 'false') {
            await groupMenuItem.click()
        }
    }





}