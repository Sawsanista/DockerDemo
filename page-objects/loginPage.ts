
import {Page,Locator} from '@playwright/test'
import * as OTPAUTH from 'otpauth'
export class LoginPage {

    readonly page : Page
    readonly userName : Locator
    readonly password : Locator
    readonly company : Locator
    readonly MFA : Locator
    readonly loginButton : Locator

    constructor(page : Page){
        this.page = page
        this.userName = page.locator('#ctl00_MainContent_txtUserID')
        this.password = page.locator('#ctl00_MainContent_txtPassword')
        this.company = page.locator('#ctl00_MainContent_txtCompany')
        this.MFA = page.locator('#ctl00_MainContent_txtMFACode')
        this.loginButton = page.locator('#ctl00_MainContent_btnLogin')


    }

    async login(userName : string, password : string, company : string, MFA :string){
        
        await this.userName.fill(userName)
        await this.password.fill(password)
        await this.company.fill(company)
        
        await this.loginButton.click()
        
        await this.MFA.fill(MFA)
        await this.loginButton.click()
        
    }

  

  


}