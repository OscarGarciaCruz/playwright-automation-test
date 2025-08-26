import { test, expect } from '@playwright/test';
import { LoginPage } from "../pages/loginPage";
import { DashboardPage } from '../pages/dashboardPage';
import { userProfilePage } from '../pages/userProfilePage';

test.describe('User Profile Tests',()=>{
    
    test.beforeEach(async ({ page }) => {
     const login = new LoginPage(page);
     await page.goto('/');
     await login.login();
    });

    test.afterEach(async ({ page }) => {
     const dashboard = new DashboardPage(page);  
     await dashboard.logout();
    });

   test('Check User Profile Section functionality', async ({ page }) => {
     await test.step('Open user profile modal',async () => {
        const userProfile = new userProfilePage(page); 
        await userProfile.userProfileSection();
     });
     await test.step('Click out on the dashboard',async () => {
        const dashboard = new DashboardPage(page);  
        await dashboard.clickOnDashboardPage();
     });
    });

   test('Check About Section ', async ({ page }) => {
     await test.step('Check that the page has loaded correctly',async () => {
        const userProfile = new userProfilePage(page); 
        await userProfile.aboutSection();
     });
    });

    test('Check Support Section ', async ({ page }) => {
     await test.step('Check that the page has loaded correctly',async () => {
        const userProfile = new userProfilePage(page); 
        await userProfile.supportSection();
     });
    });
    test('Check Change Password Section ', async ({ page }) => {
     await test.step('Check that the page has loaded correctly',async () => {
        const userProfile = new userProfilePage(page); 
        await userProfile.changePasswordSection();
     });
    });
})