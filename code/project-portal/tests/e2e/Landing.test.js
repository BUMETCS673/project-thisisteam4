import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import assert from 'assert';
import { describe, it, before, after } from 'mocha';

describe('Landing Page E2E Test', function () {
  let driver;

  before(async function () {
    const options = new chrome.Options();
    driver = new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

    await driver.get('http://localhost:5173'); 
  });

  after(async function () {
    await driver.quit();
  });

  it('should display the correct title', async function () {
    const title = await driver.findElement(By.className('landing-title')).getText();
    assert.strictEqual(title, 'Project-Portal');
  });

  it('should navigate to About page when About link is clicked', async function () {
    const aboutLink = await driver.findElement(By.linkText('About'));
    await aboutLink.click();

    await driver.wait(until.urlIs('http://localhost:5173/about'), 5000);

    const url = await driver.getCurrentUrl();
    assert.strictEqual(url, 'http://localhost:5173/about');
  });

  it('should navigate to Login page when Login link is clicked', async function () {
    await driver.get('http://localhost:5173'); // Go back to home page

    const loginLink = await driver.findElement(By.linkText('Login'));
    await loginLink.click();

    await driver.wait(until.urlIs('http://localhost:5173/login'), 5000);

    const url = await driver.getCurrentUrl();
    assert.strictEqual(url, 'http://localhost:5173/login');
  });

  it('should navigate to Signup page when Signup link is clicked', async function () {
    await driver.get('http://localhost:5173'); // Go back to home page

    const signupLink = await driver.findElement(By.linkText('Signup'));
    await signupLink.click();

    await driver.wait(until.urlIs('http://localhost:5173/signup'), 5000);

    const url = await driver.getCurrentUrl();
    assert.strictEqual(url, 'http://localhost:5173/signup');
  });
});
