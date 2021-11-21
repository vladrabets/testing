const {until, By} =  require("selenium-webdriver");

class BasePage {
    static xPathVisible = "//*[@id=\"b24-b24-site-button-form-195\"]/div/div[2]/div/div/div[2]"

    constructor(driver) {
        this.driver = driver
    }

    async findElementByXpath(locator) {
        return await this.driver.wait(until.elementLocated(By.xpath(locator)), 5000)
    }

    async isVisible() {
        const element = await this.findElementByXpath(BasePage.xPathVisible)
        return await element.isEnabled()
    }
}

module.exports = BasePage