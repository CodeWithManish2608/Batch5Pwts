import{test}from '@playwright/test'
import{RadioCheckBox}from '../pages/RadioCheckBoxes'
import{login}from '../pages/Login'

test.describe('two tests', () => {
test('Login', async ({page})=>{

    const x = new login(page)
    await x.doLogin()


})

test('radio And CheckBoxes', async({page})=>{

    const a = new login(page)
    await a.doLogin()
    const x = new RadioCheckBox(page)
    await x.radio()
    await x.CheckBox()
})


});

