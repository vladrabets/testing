const BasePage = require("./BasePage");
const logger = require("../utils/logger");
const { By } = require("selenium-webdriver");

class VetlivaHomePage extends BasePage {
    static HOME_PAGE_URL = "https://vetliva.ru/";
    static homePageLogoLocator = By.xpath("//div[@class='logotype']")
    static homePageFeedbackButtonLocator = By.xpath("//div[@class='b24-widget-button-block']")
    static feedbackPanel = By.xpath("//div[@class='b24-form-wrapper b24-form-border-bottom']")

    constructor(driver) {
        super(driver);
    }

    openHomePage() {
        (async () => {
            await this.driver.get(VetlivaHomePage.HOME_PAGE_URL);
        })();

        logger.info("Home page opened");
        return this;
    }

    isOpened(){
        logger.info("Home page initialized")
        return super.isInitialized(VetlivaHomePage.homePageLogoLocator)
    }

    async openFeedbackPanel() {
        await this.findElementByLocator(VetlivaHomePage.homePageFeedbackButtonLocator).click()
        logger.info("Feedback panel displayed")

        return super.isInitialized(VetlivaHomePage.feedbackPanel)
    }
}

module.exports = VetlivaHomePage;