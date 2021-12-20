const Page = require('./BasePage')

class VetlivaHomePage extends Page {

    static HOME_PAGE = 'https://vetliva.ru/'
    static xPathLocator = "//div[@class='.b24-widget-button-inner-item']"

    constructor(driver) {
        super(driver);
    }

    openHomePage() {
        (async () => {
            await this.driver.get(VetlivaHomePage.HOME_PAGE)
        })()
        return this
    }

    clickElement() {
        (async () => {
            const element = await super.findElementByXpath(VetlivaHomePage.xPathLocator)
            element.click()
        })()
        return this
    }
}

module.exports = VetlivaHomePage