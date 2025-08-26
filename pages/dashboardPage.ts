import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage{
   readonly page: Page;
   readonly dashboardPageButton: Locator;
   readonly userDropDown: Locator;
   readonly logoutButton: Locator;
   readonly timeAtWorkTitle: Locator;
   readonly timeAtWorkCard: Locator;
   readonly myActionsTitle: Locator;
   readonly myActionsCard: Locator;
   readonly quickLaunchTitle: Locator;
   readonly quickLaunchCard: Locator;
   readonly buzzLatestPostTitle: Locator;
   readonly buzzLatestPostCard: Locator;
   readonly employeeOnLeaveTitle: Locator;
   readonly employeeOnLeaveCard: Locator;
   readonly employeeDistributionBySubUnitTitle: Locator;
   readonly employeeDistributionBySubUnitCard: Locator;
   readonly employeeDistributionByLocationTitle: Locator;
   readonly employeeDistributionByLocationCard: Locator;
  

    constructor(page: Page){
        this.page = page;
        this.dashboardPageButton = page.getByRole('link', { name: 'Dashboard' });
        this.userDropDown = page.getByRole('banner').getByRole('img', { name: 'profile picture' });
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });
        this.timeAtWorkTitle = page.getByText('Time at Work');
        this.timeAtWorkCard = page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(1) > div');
        this.myActionsTitle = page.getByText('My Actions');
        this.myActionsCard = page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(2) > div');
        this.quickLaunchTitle = page.getByText('Quick Launch');
        this.quickLaunchCard = page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(3) > div:nth-child(1)');
        this.buzzLatestPostTitle = page.getByText('Buzz Latest Posts');
        this.buzzLatestPostCard = page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(4) > div');
        this.employeeOnLeaveTitle = page.getByText('Employees on Leave Today');
        this.employeeOnLeaveCard = page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(5) > div');
        this.employeeDistributionBySubUnitTitle = page.getByText('Employee Distribution by Sub');
        this.employeeDistributionBySubUnitCard = page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(6) > div');
        this.employeeDistributionByLocationTitle = page.getByText('Employee Distribution by Location');
        this.employeeDistributionByLocationCard = page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(7) > div');
    }

    async logout(){
        await this.userDropDown.click();
        await this.logoutButton.click();
    }

    async clickOnDashboardPage(){
        await this.dashboardPageButton.click();

    }

    async timeAtWork(){
        await expect(this.timeAtWorkTitle).toBeVisible();
        await expect(this.timeAtWorkCard).toBeVisible();
    }

    async myActions(){
        await expect(this.myActionsTitle).toBeVisible();
        await expect(this.myActionsCard).toBeVisible();
    }

     async quickLaunch(){
        await expect(this.quickLaunchTitle).toBeVisible();
        await expect(this.quickLaunchCard).toBeVisible();
    }

    async buzzLatestPost(){
        await expect(this.buzzLatestPostTitle).toBeVisible();
        await expect(this.buzzLatestPostCard).toBeVisible();
    }
    async employeeOnLeaveToday(){
        await expect(this.employeeOnLeaveTitle).toBeVisible();
        await expect(this.employeeOnLeaveCard).toBeVisible();
    }
    async employeeDistributionBySubUnit(){
        await expect(this.employeeDistributionBySubUnitTitle).toBeVisible();
        await expect(this.employeeDistributionBySubUnitCard).toBeVisible();
    }
    async employeeDistributionByLocation(){
        await expect(this.employeeDistributionByLocationTitle).toBeVisible();
        await expect(this.employeeDistributionByLocationCard).toBeVisible();
    }
    

    async pageObjectModel(){
        await this.logout();
        await this.clickOnDashboardPage();
        await this.timeAtWork();
        await this.myActions();
        await this.quickLaunch();
        await this.buzzLatestPost();
        await this.employeeOnLeaveToday();
        await this.employeeDistributionBySubUnit();
        await this.employeeDistributionByLocation();
    }


}