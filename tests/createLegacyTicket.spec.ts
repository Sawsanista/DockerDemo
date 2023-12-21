import {test,expect} from '@playwright/test'
import {PageManager} from '../page-objects/pageManager'





test('Create Legacy Ticket', async ({page}) => {
    const pageManager = new PageManager(page)
    await page.goto('/')
    await pageManager.loginBMS().login('gadmin','gadmin54321@A','mohsen and co')
    await pageManager.createLegacyViewTicket().createLegacyTicket()
    await pageManager.assertTicketCreation().ticketCreatedassertion()
    
})
