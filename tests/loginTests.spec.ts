import { test, expect } from '@playwright/test';
import { LoginPage } from "../pages/loginPage";

test.describe('Login Tests',()=>{
    let loginPage;

    test.beforeEach(async ({ page }) => {
     loginPage = new LoginPage(page);
     await page.goto('/');
    });

    test('Login with empty fields', async ({page}) => {
     await test.step('Check that the page has loaded correctly',async () => {
         await loginPage.checkLoginPage();
     });
       await test.step('Verify the errors for each field appear',async () => {
         await loginPage.emptyFieldsAlert();
     });
        
    });

    test('Login with invalid username and password', async ({page}) => {
     await test.step('Check that the page has loaded correctly',async () => {
         await loginPage.checkLoginPage();
     });
       await test.step('Verify the invalid credential alert appears',async () => {
         await loginPage.invalidLogin();
     });
        
    });

    test('Login with empty password', async ({page}) => {
     await test.step('Check that the page has loaded correctly',async () => {
         await loginPage.checkLoginPage();
     });
       await test.step('Verify empty password alert appears',async () => {
         await loginPage.invalidLoginMissingPassword();
     });
        
    });

    test('Login with empty username', async ({page}) => {
     await test.step('Check that the page has loaded correctly',async () => {
         await loginPage.checkLoginPage();
     });
       await test.step('Verify empty username alert appears',async () => {
         await loginPage.invalidLoginMissingUsername();
     });
        
    });

})