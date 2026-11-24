import{test}from '@playwright/test'
import{RadioCheckBox}from '../pages/RadioCheckBoxes'
import{login}from '../pages/Login'
import {textInputs}from '../pages/TextInputs'



test.describe('Sanity Checks on two tests', () => {
    test('Form filling with Test Data', async ({page})=>{
        const a = new login(page)
        await a.doLogin()
        const form =new textInputs(page)
        await form.assertHeading()
        await form.formfilling()
        await form.FourButtons()
    })

    test('radio And CheckBoxes', async({page})=>{

        const a = new login(page)
        await a.doLogin()
        const x = new RadioCheckBox(page)
        await x.radio()
        await x.CheckBox()
    })


});

