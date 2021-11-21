const Page = require('./BasePage')

class VetlivaHomePage extends Page {

    static HOME_PAGE = 'https://vetliva.ru/'
    static xPathLocator = "/html/body/div[1]/div/div[3]/div[3]/div[2]/div[2]/div[1]/div[1]"

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