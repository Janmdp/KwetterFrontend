// @ts-check
const { test, expect } = require('@playwright/test');

test('register account', async ({ page }) => {

  // Go to http://localhost:3000/login
  await page.goto('http://localhost:3000/login');

  // Click text=Register
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/register' }*/),
    page.locator('text=Register').click()
  ]);

  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('play@wright.com');

  // Click [placeholder="Username"]
  await page.locator('[placeholder="Username"]').click();

  // Fill [placeholder="Username"]
  await page.locator('[placeholder="Username"]').fill('playwright');

  // Click [placeholder="Password"] >> nth=0
  await page.locator('[placeholder="Password"]').first().click();

  // Fill [placeholder="Password"] >> nth=0
  await page.locator('[placeholder="Password"]').first().fill('test');

  // Click [placeholder="Password"] >> nth=1
  await page.locator('[placeholder="Password"]').nth(1).click();

  // Fill [placeholder="Password"] >> nth=1
  await page.locator('[placeholder="Password"]').nth(1).fill('test');

  // Click button:has-text("Register")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/login' }*/),
    page.locator('button:has-text("Register")').click()
  ]);

});


test('log into account', async ({ page }) => {

  // Go to http://localhost:3000/login
  await page.goto('http://localhost:3000/login');

  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('play@wright.com');

  // Press Tab
  await page.locator('[placeholder="Email"]').press('Tab');

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('test');

  // Click button:has-text("Login")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/' }*/),
    page.locator('button:has-text("Login")').click()
  ]);

});


test('create post', async ({ page }) => {

  // Go to http://localhost:3000/login
  await page.goto('http://localhost:3000/login');

  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('play@wright.com');

  // Press Tab
  await page.locator('[placeholder="Email"]').press('Tab');

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('test');

  // Click button:has-text("Login")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/' }*/),
    page.locator('button:has-text("Login")').click()
  ]);

  // Click textarea
  await page.locator('textarea').click();

  // Fill textarea
  await page.locator('textarea').fill('playwright test');

  // Click text=playwright testTweet >> button
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/' }*/),
    page.locator('text=playwright testTweet >> button').click()
  ]);

  // Click text=playwrightplaywright test >> span
  await page.locator('text=playwrightplaywright test >> span').click();

});


test('view account data', async ({ page }) => {

  // Go to http://localhost:3000/login
  await page.goto('http://localhost:3000/login');

  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('play@wright.com');

  // Press Tab
  await page.locator('[placeholder="Email"]').press('Tab');

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('test');

  // Click button:has-text("Login")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/' }*/),
    page.locator('button:has-text("Login")').click()
  ]);

  // Click text=Profile
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/profile' }*/),
    page.locator('text=Profile').click()
  ]);

  // Click text=Your profileUsername: playwrightEmail: play@wright.comDelete account
  await page.locator('text=Your profileUsername: playwrightEmail: play@wright.comDelete account').click();

});


test('delete account', async ({ page }) => {

  // Go to http://localhost:3000/login
  await page.goto('http://localhost:3000/login');

  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('play@wright.com');

  // Press Tab
  await page.locator('[placeholder="Email"]').press('Tab');

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('test');

  // Click button:has-text("Login")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/' }*/),
    page.locator('button:has-text("Login")').click()
  ]);

  // Click text=Profile
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/profile' }*/),
    page.locator('text=Profile').click()
  ]);

  // Click text=Delete account
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:3000/login' }*/),
    page.locator('text=Delete account').click()
  ]);

  // Click text=Login to Kwetter!EmailPasswordLoginRegister
  await page.locator('text=Login to Kwetter!EmailPasswordLoginRegister').click();

  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill('play@wright.com');

  // Press Tab
  await page.locator('[placeholder="Email"]').press('Tab');

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('test');

  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();

  // Click text=Login to Kwetter!EmailPasswordLoginRegister
  await page.locator('text=Login to Kwetter!EmailPasswordLoginRegister').click();

});

