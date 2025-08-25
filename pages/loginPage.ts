import { expect, type Locator, type Page } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export class LoginPage{
   readonly page: Page;
   readonly loginHeader: Locator;
   readonly usernameDetails: Locator;
   readonly usernameInput: Locator;
   readonly passwordInput: Locator;
   readonly loginButton: Locator;
   readonly singleRequiredWarning: Locator;
   readonly doubleRequiredWarning: Locator;
   readonly forgotPasswordButton: Locator;
   readonly credentialsAlert: Locator;
  

    constructor(page: Page){
        this.page = page;
        this.loginHeader = page.getByRole('heading', { name: 'Login' });
        this.usernameDetails = page.getByText('Username : AdminPassword :');
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.singleRequiredWarning = page.getByText('Required').first();
        this.doubleRequiredWarning = page.getByText('Required').nth(1);
        this.forgotPasswordButton = page.getByText('Forgot your password?');
        this.credentialsAlert = page.getByRole('alert').locator('div').filter({ hasText: 'Invalid credentials' });
    }

    async checkLoginPage(){
        await expect(this.loginHeader).toBeVisible();
        await expect(this.usernameDetails).toBeVisible();
        await expect(this.usernameInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.forgotPasswordButton).toBeVisible();
    }

    async emptyFieldsAlert(){
        await this.loginButton.click();
        await expect(this.singleRequiredWarning).toBeVisible();
        await expect(this.doubleRequiredWarning).toBeVisible();
    }

    async invalidLogin(){
        await this.usernameInput.fill('fake user');
        await this.passwordInput.fill('fake password');
        await this.loginButton.click();
        await expect(this.credentialsAlert).toBeVisible();
    }

    async invalidLoginMissingPassword(){
        await this.usernameInput.fill('fake user');
        await this.loginButton.click();
        await expect(this.singleRequiredWarning).toBeVisible();
    }

     async invalidLoginMissingUsername(){
        await this.passwordInput.fill('fake password');
        await this.loginButton.click();
        await expect(this.singleRequiredWarning).toBeVisible();
    }

    async login(){
        const Username = process.env.USER_NAME;
        const Password = process.env.USER_PASSWORD;

        await this.usernameInput.fill(Username);
        await this.passwordInput.fill(Password);
        await this.loginButton.click();
    }
    async pageObjectModel(){
        await this.checkLoginPage();
        await this.emptyFieldsAlert();
        await this.invalidLogin();
        await this.invalidLoginMissingPassword();
        await this.invalidLoginMissingUsername();
        await this.login();
    }


}