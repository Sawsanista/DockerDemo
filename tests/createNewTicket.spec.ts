import {PageManager} from '../page-objects/pageManager'
import { test, expect } from '@playwright/test'





test('Create new ticket', async ({ page }) => {
        
        const pm = new PageManager(page)
        await page.goto('/')
        await pm.loginBMS().login('gadmin','gadmin54321@A','mohsen and co')
        await pm.createNewBMSTicket().createNewTicket()
})

