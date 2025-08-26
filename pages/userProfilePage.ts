import { expect, type Locator, type Page } from '@playwright/test';

export class userProfilePage{
   readonly page: Page;   
   readonly userDropDown: Locator;
   readonly aboutButton: Locator;
   readonly aboutCard: Locator;
   readonly dismissAboutCard: Locator;
   readonly supportButton: Locator;
   readonly supportCard: Locator;
   readonly changePasswordButton: Locator;
   readonly changePasswordHeader: Locator;
  

    constructor(page: Page){
        this.page = page;
        this.userDropDown = page.getByRole('banner').getByRole('img', { name: 'profile picture' });
        this.aboutButton = page.getByRole('menuitem', { name: 'About' });
        this.aboutCard = page.getByRole('heading', { name: 'About' });
        this.dismissAboutCard = page.getByRole('button', { name: '×' });
        this.supportButton = page.getByRole('menuitem', { name: 'Support' });
        this.supportCard = page.getByText('Customer Support');
        this.changePasswordButton = page.getByRole('menuitem', { name: 'Change Password' });
        this.changePasswordHeader = page.getByRole('heading', { name: 'Update Password' });
    }

    async aboutSection(){
        await this.userDropDown.click();
        await this.aboutButton.click();
        await expect(this.aboutCard).toBeVisible();
        await expect(this.dismissAboutCard).toBeVisible();
        await this.dismissAboutCard.click();

    }

    async userProfileSection(){
        await this.userDropDown.click();

    }

    async supportSection(){
        await this.userDropDown.click();
        await this.supportButton.click();
        await expect(this.supportCard).toBeVisible();
    }

    async changePasswordSection(){
        await this.userDropDown.click();
        await this.changePasswordButton.click();
        await expect(this.changePasswordHeader).toBeVisible();
    }
    

    async pageObjectModel(){
        await this.aboutSection();
        await this.userProfileSection();
        await this.supportSection();
        await this.changePasswordSection();
    }


}