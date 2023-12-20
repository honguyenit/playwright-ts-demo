import { Locator, Page, expect } from "@playwright/test"

export class DatePickerPage{
    private readonly page: Page
    private readonly formPicker: Locator
    private readonly rangePicker: Locator
    private readonly calendarMonthAnYear: Locator
    private readonly pickerRightNav: Locator
    private readonly dayCells: Locator


    constructor(page: Page){
        this.page = page
        this.formPicker = this.page.getByPlaceholder('Form Picker')
        this.rangePicker = this.page.getByPlaceholder('Range Picker')
        this.calendarMonthAnYear = this.page.locator('nb-calendar-view-mode')
        this.pickerRightNav = this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]')
        this.dayCells = this.page.locator('.day-cell.ng-star-inserted:not(.bounding-month)')
    }

    async selectDatePickerFromToday(numberOfDayFromToday: number){
        const canlendarInputField = this.formPicker
        await canlendarInputField.click()
        const expectedDate = await this.selectDateInTheCalendar(numberOfDayFromToday)
        await expect(canlendarInputField).toHaveValue(expectedDate)
    }

    async selectDatePickerWithRangeFromToday(startDayFromToday: number, endDayFromToday: number){
        const canlendarInputField = this.rangePicker 
        await canlendarInputField.click()
        const expectedDateStart = await this.selectDateInTheCalendar(startDayFromToday)
        const expectedDateEnd = await this.selectDateInTheCalendar(endDayFromToday)
        const expectedDateRange = `${expectedDateStart} - ${expectedDateEnd}`
        await expect(canlendarInputField).toHaveValue(expectedDateRange)
    }

    private async selectDateInTheCalendar(numberOfDateFromToday: number){
        let date = new Date()
        date.setDate(date.getDate() + numberOfDateFromToday)
        const expectedDate = date.getDate().toString()
        const expectedMonthShort = date.toLocaleDateString('En-Us', {month: 'short'})
        const expectedMonthLong = date.toLocaleDateString('En-Us', {month: 'long'})
        const expectedYear = date.getFullYear()
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`
   
        let calendarMonthAnYear = await this.calendarMonthAnYear.textContent()
        const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`
        while(!calendarMonthAnYear?.includes(expectedMonthAndYear)){
            await this.pickerRightNav.click()
            calendarMonthAnYear = await this.calendarMonthAnYear.textContent()
        }

        await this.dayCells.getByText(expectedDate,{exact:true}).click()
        return dateToAssert
    }
}