const BasePage = require("./BasePage")
const {By} = require("selenium-webdriver")
const logger = require("../utils/logger")

class VetlivaSanatoriumsPage extends BasePage {
    static pageUrl = "https://vetliva.ru/belarus/what-to-see/"
    static showOnMapButton = By.xpath("//a[@class='show-map']")
    static map = By.xpath("//*[@class='mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready']")
    static sanatoriumsTitleLocator = By.xpath("//h1[text()='Достопримечательности Беларуси']")
    static typeInput = By.xpath("//*[@class='select2-smart-filter select2-offscreen']")

    constructor(driver) {
        super(driver)
    }

    openSanatoriumsPage() {
        (async () => {
            await this.driver.get(VetlivaSanatoriumsPage.pageUrl)
        })()

        logger.info("Sanatories page opened");
        return this
    }

    isOpened() {
        logger.info("Sanatories page initialized")
        return super.findElementByLocator(VetlivaSanatoriumsPage.sanatoriumsTitleLocator)
    }

    async showOnMap() {
        await this.findElementByLocator(VetlivaSanatoriumsPage.showOnMapButton).click()

        logger.info("Map showing")
        return this.isInitialized(VetlivaSanatoriumsPage.map)
    }
}

module.exports = VetlivaSanatoriumsPage;