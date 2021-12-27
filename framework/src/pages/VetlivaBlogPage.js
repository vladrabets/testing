const BasePage = require("./BasePage")
const {By} = require("selenium-webdriver")
const logger = require("../utils/logger");

class VetlivaBlogPage extends BasePage {
    static filter = By.xpath('//span[text()=Бронирование услуг"]')

    constructor(driver) {
        super(driver)
    }

    async isOpened() {
        logger.info("Blog page initialized")
        return await super.findElementByLocator(VetlivaBlogPage.filter)
    }
}

module.exports = VetlivaBlogPage