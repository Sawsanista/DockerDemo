import {PageManager} from '../page-objects/pageManager'
import { test, expect } from '@playwright/test';
import * as OTPAUTH from 'otpauth'


test('Login to BMS', async ({ page }) => {
  
  const pm = new PageManager(page)
  await page.goto('/')
  let totpToken = new OTPAUTH.TOTP({

    issuer:'Kaseya-mohsen%20and%20co',
    label:'MyTOTP',
    algorithm:'SHA1',
    digits:6,
    period:30,
    secret:'MUYDGNTFGEZDGMRU'
})
let Token = totpToken.generate()
  await pm.loginBMS().login('playwright','gadmin54321@A','mohsen and co',Token)
  // await expect(page).toHaveURL('/Home.aspx') 
 
})