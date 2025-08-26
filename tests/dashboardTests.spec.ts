import { test, expect } from '@playwright/test';
import { LoginPage } from "../pages/loginPage";
import { DashboardPage } from '../pages/dashboardPage';

test.describe('Dashboard Tests',()=>{
    
    test.beforeEach(async ({ page }) => {
     const login = new LoginPage(page);
     await page.goto('/');
     await login.login();
    });

    test.afterEach(async ({ page }) => {
     const dashboard = new DashboardPage(page);  
     await dashboard.logout();
    });

   test('Check Time at Work Section ', async ({ page }) => {
     await test.step('Check that the page has loaded correctly',async () => {
        const dashboard = new DashboardPage(page); 
        await dashboard.timeAtWork();
        await expect(dashboard.timeAtWorkTitle).toHaveText(['Time at Work'])
     });
    });

    test('Check My Actions Section ', async ({ page }) => {
     await test.step('Check that the page has loaded correctly',async () => {
        const dashboard = new DashboardPage(page); 
        await dashboard.myActions();
        await expect(dashboard.myActionsTitle).toHaveText(['My Actions'])
     });
    });

    test('Check Quick Launch Section ', async ({ page }) => {
     await test.step('Check that the page has loaded correctly',async () => {
        const dashboard = new DashboardPage(page); 
        await dashboard.quickLaunch();
        await expect(dashboard.quickLaunchTitle).toHaveText(['Quick Launch'])
     });
    });

    test('Check Buzz Latest Posts Section ', async ({ page }) => {
     await test.step('Check that the page has loaded correctly',async () => {
        const dashboard = new DashboardPage(page); 
        await dashboard.buzzLatestPost();
        await expect(dashboard.buzzLatestPostTitle).toHaveText(['Buzz Latest Posts'])
     });
    });

    test('Check Employees on Leave Today Section ', async ({ page }) => {
     await test.step('Check that the page has loaded correctly',async () => {
        const dashboard = new DashboardPage(page); 
        await dashboard.employeeOnLeaveToday();
        await expect(dashboard.employeeOnLeaveTitle).toHaveText(['Employees on Leave Today'])
     });
    });
     test('Check Employee Distribution by Sub Unit Section ', async ({ page }) => {
     await test.step('Check that the page has loaded correctly',async () => {
        const dashboard = new DashboardPage(page); 
        await dashboard.employeeDistributionBySubUnit();
        await expect(dashboard.employeeDistributionBySubUnitTitle).toHaveText(['Employee Distribution by Sub Unit'])
     });
    });
     test('Check Employee Distribution by Location Section ', async ({ page }) => {
     await test.step('Check that the page has loaded correctly',async () => {
        const dashboard = new DashboardPage(page); 
        await dashboard.employeeDistributionByLocation();
        await expect(dashboard.employeeDistributionByLocationTitle).toHaveText(['Employee Distribution by Location'])
     });
    });

})