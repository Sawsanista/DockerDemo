import {Page,Locator,expect} from '@playwright/test'
import {faker} from '@faker-js/faker'
import { selectors, chromium } from '@playwright/test'


export class LegacyTicket {

    readonly page : Page
    
    readonly serviceDesk : Locator
    readonly ticketsItem : Locator
    readonly newTicketButton : Locator
    readonly accountList : Locator
    readonly account : Locator
    readonly ltSource : Locator
    readonly ltSourcePhone : Locator
    readonly ltType : Locator
    readonly ltTypeIncident : Locator
    readonly ltPriority : Locator
    readonly ltPriorityHigh : Locator
    readonly ltDescription : Locator
    readonly ltTitle : Locator
    readonly ltAssignee : Locator
    readonly ltAssigneeAnna : Locator
    readonly ltTemplate : Locator
    readonly ltTemplateEmptty:Locator
    readonly ltSave : Locator
    readonly editButton : Locator





    constructor (page :Page){
        this.page = page
        this.serviceDesk = page.getByText('Service Desk')
        this.ticketsItem = page.locator(('[class="fa fa-regular fa-ticket"]')).first()
        this.newTicketButton = page.locator('#ctl00_phMenu_ctrlToolBar_btn_new')
        this.accountList = page.locator('#ctl00_phContent_ddlClients_Arrow')
        this.account = page.locator('.AccountItemCombobox').first()
        this.ltSource = page.locator('#ctl00_phContent_ddlSourceOfContact_Arrow')
        this.ltSourcePhone = page.locator('.rcbItem').getByText('Chat')
        this.ltType= page.locator('#ctl00_phContent_ddlTicketType_Arrow')
        this.ltTypeIncident = page.locator('.rcbItem').getByText('Incident')
        this.ltPriority = page.locator('#ctl00_phContent_ddlPriority_Arrow')
        this.ltPriorityHigh = page.locator('.text-info').getByText('High').first()
        this.ltDescription = page.frameLocator('#fctl00_phContent_txtDetails_contentIframe').locator('[style="height: 239px;"]')
        this.ltTitle = page.locator('#ctl00_phContent_txtTicketTitle')
        this.ltAssignee = page.locator('#ctl00_phContent_ddlTechnician_Arrow')
        this.ltAssigneeAnna = page.locator('[class="rcbItem  rcbTemplate"]').getByText('Anna')
        this.ltTemplate = page.locator('#ctl00_phContent_ddlTemplate_Arrow')
        this.ltTemplateEmptty = page.locator('.rcbItem').getByText('Empty template')
        this.ltSave = page.locator('#ctl00_phMenu_btnSave')
        this.editButton = page.locator('#ctl00_phMenu_btnEdit')




    }
 
   


    async createLegacyTicket(){
        
    
        const title = faker.lorem.sentence(3)
        const description = faker.lorem.sentence(10)
        
        await this.serviceDesk.click()
        await this.ticketsItem.click()
        await this.newTicketButton.click()
        await this.ltTemplate.click()
        await this.ltTemplateEmptty.click()
        await this.page.waitForTimeout(2000)
        await this.accountList.click()
        await this.account.click()
        await this.ltSource.click()
        await this.ltSourcePhone.click()
        await this.ltTitle.fill(title)
        await this.ltPriority.click()
        await this.ltPriorityHigh.click()
        await this.ltType.click()
        await this.ltTypeIncident.click()
        await this.ltAssignee.click()
        await this.ltAssigneeAnna.click()
        await this.ltSave.click()





    }



    async ticketCreatedassertion(){
        await expect(this.editButton).toHaveText('Edit')

    }


}