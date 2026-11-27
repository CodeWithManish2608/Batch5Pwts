import{Page}from '@playwright/test'

export class table{
    constructor(private page: Page){}


    async MichaelSalary()
    {
        await this.page.getByTestId('nav-advanced-elements').click()


        const salary = await this.page.locator('#static-table tbody tr')
        .filter({hasText: 'Michael Brown'})
        .locator('td')
        .nth(3)
        .innerText()

        console.log(salary)

    }
}