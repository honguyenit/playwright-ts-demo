import { FormLayoutPage } from "./FormLayoutPage"
import { NavigationPage } from "./NavigationPage"
import { DatePickerPage } from "./DatePickerPage"
import { Page } from "@playwright/test"

export class PageManager{
    private readonly page: Page
    private readonly formLayoutPage: FormLayoutPage
    private readonly navigationPage: NavigationPage
    private readonly datePickerPage: DatePickerPage

    constructor(page: Page) {
        this.page = page
        this.formLayoutPage = new FormLayoutPage(this.page)
        this.navigationPage = new NavigationPage(this.page)
        this.datePickerPage = new DatePickerPage(this.page)
    }

    getFormLayoutPage(){
        return this.formLayoutPage
    }

    getNavigationPage(){
        return this.navigationPage
    }

    getDatePickerPage(){
        return this.datePickerPage
    }
}