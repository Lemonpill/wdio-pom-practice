import HomePage from '../../pageobjects/automationteststore/home.page.js'

describe('Automation test store web page', () => { 
    it('can navigate by using navigation bar', async () => {
        await HomePage.open()

        await browser.debug()
    });
 })