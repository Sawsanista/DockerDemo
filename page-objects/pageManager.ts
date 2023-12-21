import {Page, expect} from '@playwright/test'
import { Ticket } from "./reactTicket";
import {LoginPage,} from '../page-objects/loginPage'
import {LegacyTicket} from '../page-objects/legacyTicket'
import { assert } from 'console';

export class PageManager {
    private readonly page : Page
    private readonly ticket : Ticket
    private readonly loginPage : LoginPage
    private readonly legacyTicket : LegacyTicket
    constructor (page : Page) {
        this.page = page
        this.ticket = new Ticket (this.page) 
        this.loginPage = new LoginPage (this.page)
        this.legacyTicket = new LegacyTicket (this.page)

    }

    loginBMS(){
        return this.loginPage
    }

 

    createNewBMSTicket(){
        return this.ticket
    }

    editBMSTicket(){
        return this.ticket
    }

    createLegacyViewTicket(){
        return this.legacyTicket
    }

    assertTicketCreation(){
        return this.legacyTicket

    }
}