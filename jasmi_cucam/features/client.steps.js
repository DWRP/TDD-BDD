const assert = require('assert')
const {Given, When, Then} = require('cucumber')

const path = require('path')
const { ServiceBuilder } = require('selenium-webdriver/chrome')
const { Builder, By, Key, until } = require('selenium-webdriver')

const driverPath = path.resolve(__dirname,'..','driver','chromedriver.exe')
const serviceBuilder = new ServiceBuilder(driverPath)
const driver = new Builder().forBrowser('chrome').setChromeService(serviceBuilder).build()

Given('I\'m have {int} clients in my database', function (qtd) {
        console.log('Data insert in database')
    });

When('I access the home webpage', async function() {
    driver.get('http://localhost:3000')
    await driver.sleep(1000)
});

Then('see the list of {int} itens', async function(qtd) {
    const itens = await driver.findElements(By.tagName('tbody>tr'))
    assert.equal(itens.length,parseInt(qtd))
    await driver.quit()
});
