import{Page, expect}from '@playwright/test'

export class textInputs{
    constructor(private page : Page){}

    async assertHeading()
    {
        const heading = this.page.getByRole('heading', {name: 'Basic Elements'});
        //await heading.waitFor({state: 'visible'})
        console.log( await heading.textContent());
        await expect(heading).toBeVisible()
        await expect(heading).toHaveText('Basic Elements')
    }

    async formfilling()
    {
        await this.page.getByTestId('first-name').fill('Ross')
        await this.page.getByPlaceholder('Enter your last name').fill('XYZ')
        await this.page.getByTestId('email').fill('abc@test.com')
        await this.page.locator('#password').fill('Asdf@123')
        await this.page.getByRole('textbox', { name: 'Feedback' }).fill('Hello World') 
        await this.page.getByTestId('submit-btn').first().click()
    }

  

    async FourButtons()
    {
       
        const submitBtn = this.page.locator('#submit-btn')
        await submitBtn.last().click();

        const saveBtn = this.page.getByTestId('save-btn')
        await saveBtn.click();
    
        //await saveBtn.nth(1).click()


    }


}