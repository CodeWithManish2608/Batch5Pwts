import { test } from '@playwright/test';
import {textInputs}from '../pages/TextInputs'
import {login}from '../pages/Login'

test('Validation of URL', async ({ page }) => {

  const a = new login(page)
  await a.doLogin()

  const x = new textInputs(page)
  await x.assertHeading()
  await x.formfilling()
  await x.FourButtons()

});
