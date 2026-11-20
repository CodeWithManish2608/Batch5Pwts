import{Page}from '@playwright/test'

export class login{
    constructor(private page: Page){}

    async doLogin()
    {
        await this.page.goto('https://automationpracticehubapp.netlify.app/');
        await this.page.getByTestId('login-username').fill('Admin')
        await this.page.locator("//input[@id='login-password']").fill('Hello@123')
        await this.page.getByText('Sign In', {exact: true}).click()

    }
}