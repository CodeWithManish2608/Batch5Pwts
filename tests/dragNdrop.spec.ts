import{test}from '@playwright/test'
import{login}from '../pages/Login'
import{dragNdrop}from '../pages/dragNdrop'

test('validation of drag to drop', async ({page})=>{
    
    const x = new login(page)
    await x.doLogin()

    const d = new dragNdrop(page)
    await d.dragTodrop()

})
