const {test,expect} = require('@playwright/test');

// using with json data
 const data =require('../DATA/loginData.json')

require("dotenv").config();


test('TC-1 verifying login page using JSON', async ({ page }) => {
    await page.goto(data.loginCredentials.base_URL);
    await page.locator("//input[@placeholder='Username']").fill(data.loginCredentials.userName);
    await page.locator("//input[@placeholder='Password']").fill(data.loginCredentials.password);
    await page.locator("//button[@type='submit']").click();
});
test('TC-2 verifying login page using env', async ({ page }) => {
    await page.goto(process.env.BASE_URL);
    await page.locator("//input[@placeholder='Username']").fill(process.env.USERNAME);
    await page.locator("//input[@placeholder='Password']").fill(process.env.PASSWORD);
    await page.locator("//button[@type='submit']").click();
    
});

test('TC-3 Verifing login page using essertion', async ({ page }) => {
    await page.goto(process.env.BASE_URL);
    await expect(page.locator('(//img[@alt="orangehrm-logo"])[2]')).toBeVisible();
});
