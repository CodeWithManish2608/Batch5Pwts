import{test}from '@playwright/test'
import{login}from '../pages/Login'
import{table}from '../pages/tableValidation'

test('validation of table', async({page})=>{

    const x = new login(page)
    await x.doLogin()

    const t = new table(page)
    await t.MichaelSalary()

})