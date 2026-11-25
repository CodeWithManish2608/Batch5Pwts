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
        await js.click()
        await expect(js).toBeVisible()

        const ts = this.page.getByTestId('skill-option-typescript')
        await ts.click()
        await expect(ts).toHaveAttribute('aria-selected', 'true')

        const pw = this.page.getByTestId('skill-option-playwright')
        await pw.click()
        await expect(pw).toHaveAttribute('aria-selected', 'true')

        const removePlaywright = this.page.getByRole('button', {name: 'Remove Playwright'})
        await removePlaywright.click()

        await expect(removePlaywright).not.toBeVisible()

    }

    async SearchDropDown(){

        const searchInput = this.page.getByTestId('searchable-dropdown')

        await searchInput.fill('Re')
        
        const react = this.page.getByTestId('search-option-react')
        await react.click();

        await expect(searchInput).toHaveValue('React')

    }




}