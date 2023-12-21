import { Locator, Page } from "@playwright/test"
import { Helpers } from "./Helpers"

export class NavigationPage extends Helpers{
    private readonly formLayoutMenuItem: Locator
    private readonly datePickerMenuItem: Locator
    private readonly smartTableMenuItem: Locator
    private readonly toastrMenuItem: Locator
    private readonly tooltipMenuItem: Locator

    constructor(page: Page){
        super(page)
        this.formLayoutMenuItem = page.getByText('Form Layouts')
        this.datePickerMenuItem = this.page.getByText('Datepicker')
        this.smartTableMenuItem = this.page.getByText('Smart Table')
        this.toastrMenuItem = this.page.getByText('Toastr')
        this.tooltipMenuItem = this.page.getByText('Tooltip')
    }

    async openFormLayoutsMenu(){
        await this.selectGroupMenuItem('Forms')
        await this.formLayoutMenuItem.click()
        await this.waitForNumberOfSeconds(1)
    }

    async openDatePickerMenu(){
        await this.selectGroupMenuItem('Forms')
        await this.datePickerMenuItem.click()
    }

    async openSmartTableMenu(){
        await this.selectGroupMenuItem('Tables & Data')
        await this.smartTableMenuItem.click()
    }

    async openToastrMenu(){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.toastrMenuItem.click()
    }

    async openTooltipMenu(){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.tooltipMenuItem.click()
    }

    private async selectGroupMenuItem(groupItemTitle: string){
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if(expandedState == 'false') {
            await groupMenuItem.click()
        }
    }





}