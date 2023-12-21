import {Page,Locator} from '@playwright/test'
import {faker} from '@faker-js/faker'

export class Ticket {

    readonly page : Page
    readonly serviceDesk : Locator
    readonly ticketsItem : Locator
    readonly newTicketButton : Locator
    readonly source : Locator 
    readonly sourceChat : Locator
    readonly title : Locator
    readonly description : Locator
    readonly priority : Locator
    readonly priorityVeryLow : Locator
    readonly queue : Locator
    readonly queueLevelTwoSupport : Locator
    readonly ticketType : Locator
    readonly ticketTypeNewItem : Locator
    readonly account : Locator 
    readonly accountMohsenAndCo : Locator
    readonly createButton : Locator
    // readonly timeLogPopup : Locator
    readonly timeSpent : Locator
    readonly SaveTimeLogButton : Locator
    readonly checkIcon : Locator
    readonly stickyNote : Locator
    readonly noteText : Locator
    readonly firstTicket : Locator
    readonly expensesAndChargesTab : Locator
    readonly addExpenseIcon : Locator
   
    


    constructor (page :Page){

        this.page = page
        this.serviceDesk = page.getByText('Service Desk')
        this.ticketsItem = page.locator('.fa-ticket').first()
        this.newTicketButton = page.locator('.fa-pro-plus')
        this.source= page.locator('.dropdown__placeholder').filter({hasText: "Select source" })
        this.sourceChat = page.getByLabel('Chat')
        this.title = page.getByRole('textbox', {name: "title"})
        this.description =  page.frameLocator('.tox-edit-area__iframe').first().locator('#tinymce')
        this.priority = page.locator('.dropdown__placeholder').filter({hasText: "Select priority"})
        this.priorityVeryLow = page.getByLabel('Very Low')
        this.queue = page.locator('.dropdown__placeholder').filter({hasText: " Select queue"})
        this.queueLevelTwoSupport = page.getByLabel('Level Two Support')
        this.ticketType = page.locator('.dropdown__placeholder').filter({hasText: "Select type"})
        this.ticketTypeNewItem = page.getByLabel('new item1')
        this.account = page.getByPlaceholder('Select account')
        this.accountMohsenAndCo = page.locator('.kaseya-ui-autocomplete__item').filter({hasText: "Mohsen and Co"}).first()
        this.createButton = page.locator('.react-button').filter({hasText: 'Create'})
        this.timeSpent = page.getByPlaceholder('Add time spent')
        this.SaveTimeLogButton = page.locator('[class="kaseya-ui-button button--primary button--large button--auto-width button--with-icon-before dialog__confirm-button"]').filter({hasText: 'Save'})
        this.checkIcon = page.locator('[class="psa-timer-icons far fa-pro-check"]')
        this.stickyNote = page.locator('[class="psa-popover-tooltip-trigger-icon far fa-pro-sticky-note"]')
        this.noteText = page.frameLocator('.tox-edit-area__iframe').first().getByLabel('#Rich Text Area. Press ALT-0 for help.')
        this.firstTicket= page.locator('.column-ticket-number').first()
        this.expensesAndChargesTab = page.locator('[class="react-tab qa-tab"]').filter({hasText: 'Expenses & Charges'})
        this.addExpenseIcon = page.locator('[class="psa-popover-tooltip-trigger-icon-wrapper psa-searchable-item-header-action"]').first()
        


    }

    async createNewTicket (){

        const randomTitle = faker.lorem.words(3)
        const randomDescription = faker.lorem.words(20)

       
        await this.serviceDesk.click()
        await this.ticketsItem.click()
        await this.newTicketButton.click()
        await this.source.click()
        await this.sourceChat.click()
        await this.title.fill(randomTitle)
        await this.description.fill(randomDescription)
        await this.priority.click()
        await this.priorityVeryLow.click()
        await this.queue.click()
        await this.queueLevelTwoSupport.click()
        await this.ticketType.click()
        await this.ticketTypeNewItem.click()
        await this.account.fill('Mohsen and Co')
        await this.accountMohsenAndCo.click()
        await this.createButton.click({delay:2000})
        await this.page.waitForLoadState('networkidle')
        
       
    }

    async editTicket (){   

        await this.serviceDesk.click()
        await this.ticketsItem.click()
        await this.firstTicket.click()
        await this.checkIcon.click({delay:2000})
        await this.timeSpent.fill('1')
        await this.SaveTimeLogButton.click()
        // await this.stickyNote.click()
        // await this.noteText.fill('automated note')
        // await this.SaveTimeLogButton.click()
        await this.expensesAndChargesTab.click()
        await this.addExpenseIcon.click()

     

   

     }
  
}