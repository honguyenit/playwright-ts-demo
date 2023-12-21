import { Locator, Page } from "@playwright/test"
import { Helpers } from "./Helpers"

export class FormLayoutPage extends Helpers{
    private readonly usingGridForm: Locator
    private readonly gridFormEmail: Locator
    private readonly gridFormPassword: Locator
    private readonly gridFormSubmitButton: Locator

    private readonly inilineForm: Locator
    private readonly inlineFormName: Locator
    private readonly inlineFormEmail: Locator
    private readonly inlineFormCheckbox: Locator
    private readonly inlineFormSubmitButton: Locator

    constructor(page: Page){
        super(page)

        this.usingGridForm = this.page.locator('nb-card', {hasText: 'Using the Grid'})
        this.gridFormEmail = this.usingGridForm.getByRole('textbox', {name: 'Email'})
        this.gridFormPassword = this.usingGridForm.getByRole('textbox', {name: 'Password'})
        this.gridFormSubmitButton = this.usingGridForm.getByRole('button')

        this.inilineForm = this.page.locator('nb-card', {hasText: 'Inline form'})
        this.inlineFormName = this.inilineForm.getByRole('textbox', {name: 'Jane Doe'})
        this.inlineFormEmail = this.inilineForm.getByRole('textbox', {name: 'Email'})
        this.inlineFormCheckbox = this.inilineForm.getByRole('checkbox')
        this.inlineFormSubmitButton = this.inilineForm.getByRole('button')

    }

    async submitGridFormWithCredentialsAndSelectOption(email: string, password: string, optionText: string){
        await this.gridFormEmail.fill(email)
        await this.gridFormPassword.fill(password)
        await this.usingGridForm.getByRole('radio', {name: optionText}).check({force:true})
        await this.gridFormSubmitButton.click()
        await this.waitForNumberOfSeconds(1)
    }

    async submitInlineFormWithCredentialsAndCheckbox(name: string, email: string, rememberMe: boolean){
        await this.inlineFormName.fill(name)
        await this.inlineFormEmail.fill(email)
        if(rememberMe){
            await this.inlineFormCheckbox.check({force:true})
        }
        await this.inlineFormSubmitButton.click()
        await this.waitForNumberOfSeconds(1)
    }

}