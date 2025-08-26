import { test } from '@playwright/test';
import { LoginPage } from "../pages/loginPage";

test.describe('Login Tests',()=>{

    test.beforeEach(async ({ page }) => {
     await page.goto('/');
    });

    test('Login with empty fields', async ({ page }) => {
     await test.step('Check that the page has loaded correctly',async () => {
        const loginPage = new LoginPage(page); 
        await loginPage.checkLoginPage();
     });
       await test.step('Verify the errors for each field appear',async () => {
        const loginPage = new LoginPage(page); 
        await loginPage.emptyFieldsAlert();
     });
        
    });

    test('Login with invalid username and password', async ({ page }) => {
     await test.step('Check that the page has loaded correctly',async () => {
        const loginPage = new LoginPage(page); 
        await loginPage.checkLoginPage();
     });
       await test.step('Verify the invalid credential alert appears',async () => {
        const loginPage = new LoginPage(page); 
        await loginPage.invalidLogin();
     });
        
    });

    test('Login with empty password', async ({ page }) => {
     await test.step('Check that the page has loaded correctly',async () => {
        const loginPage = new LoginPage(page); 
        await loginPage.checkLoginPage();
     });
       await test.step('Verify empty password alert appears',async () => {
        const loginPage = new LoginPage(page); 
        await loginPage.invalidLoginMissingPassword();
     });
        
    });

    test('Login with empty username', async ({ page }) => {
     await test.step('Check that the page has loaded correctly',async () => {
        const loginPage = new LoginPage(page); 
        await loginPage.checkLoginPage();
     });
       await test.step('Verify empty username alert appears',async () => {
         const loginPage = new LoginPage(page);
         await loginPage.invalidLoginMissingUsername();
     });
        
    });

})