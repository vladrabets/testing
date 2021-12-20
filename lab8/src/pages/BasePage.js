const {until, By} =  require("selenium-webdriver");

class BasePage {
    static xPathVisible = "//div[@class='b24-form-wrapper b24-form-border-bottom']"

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