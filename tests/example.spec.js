// @ts-check
const { test, expect } = require('@playwright/test');

// test("TC-01", async ({ page }) => {
//   await page.goto("https://www.w3schools.com/");
//   let searchBar = page.getByPlaceholder('Search our tutorials, e.g. HTML');
//   await searchBar.click();
//   await page.waitForTimeout(3000);
//   await searchBar.fill("vijay")

//   await page.waitForTimeout(3000);
// })
test("Tc-02",async({page})=>{
await page.goto("https://www.facebook.com/login/");

await page.getByPlaceholder('Email address or phone number').fill("vijaybattula");
await page.waitForTimeout(3000)
await page.getByRole('textbox',{name :'email'}).fill('dq7');
await page.waitForTimeout(3000)
//await page.getByRole('textbox',{id :'email'}).fill('dq7');
await page.locator('#email').fill("hello");
await page.waitForTimeout(3000)



})