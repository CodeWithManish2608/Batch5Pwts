import { test } from '@playwright/test';
import {login}from '../pages/Login'
import{dropdowns}from '../pages/DropDowns'

test('Validation of URL', async ({ page }) => {

    const a = new login(page)
    await a.doLogin()
  
    const x =new dropdowns(page)
    await x.selectDropDown()
    await x.multiChoice()
});
