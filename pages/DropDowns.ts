import{Page, expect}from '@playwright/test'

export class dropdowns{
    constructor(private page:Page){}

    async selectDropDown()
    {
        const country = this.page.getByTestId('country-dropdown')
        await country.scrollIntoViewIfNeeded()
        await country.selectOption('India')
        await expect(country).toHaveValue('india')
        
    }

    async multiChoice()
    {
        const skills = this.page.locator('#skills-dropdown')
        await skills.click()
        
        const js = this.page.getByTestId('skill-option-javascript')
        await js.check()
        await expect(js).toBeChecked()

        const ts = this.page.getByTestId('skill-option-typescript')
        await ts.check()
        await expect(ts).toBeChecked()
        

    }
}