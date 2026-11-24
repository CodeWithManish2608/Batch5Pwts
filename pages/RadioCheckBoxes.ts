import {Page, expect}from '@playwright/test'

export class RadioCheckBox{

    constructor(private page: Page){}


    async radio()
    {
        const male = this.page.getByTestId('gender-male')

        const female = this.page.locator('#gender-female')
        const others = this.page.getByLabel('Other')
  

        await male.check()
        await expect(male).toBeChecked()

        await female.check()
        await expect(female).toBeChecked()

        await others.check()
        await expect(others).toBeChecked()

    }


    async CheckBox()
    {
        const termsCondition = this.page.getByTestId('terms-checkbox')
        const newLetter = this.page.locator('#newsletter-checkbox')
        const productUpdate = this.page.getByLabel('Product Updates')
        
        await termsCondition.check()
        await expect(termsCondition).toBeChecked()

        await termsCondition.uncheck()
        await expect(termsCondition).not.toBeChecked()



        await newLetter.check()
        await expect(newLetter).toBeChecked()

        await productUpdate.check()
        await expect(productUpdate).toBeChecked()

    }



}