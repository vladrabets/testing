const {until} = require("selenium-webdriver")

class BaseBookingPage {

  constructor(driver) {
    this.driver = driver
  }

  async isInitialized(locator) {
    return this.findElementByLocator(locator).isEnabled()
  }

  findElementByLocator(locator) {
    return this.driver.wait(until.elementLocated(locator))
  }

  async enterText(locator, value) {
    await this.findElementByLocator(locator).sendKeys('')
    await this.findElementByLocator(locator).sendKeys(value)
    return this
  }
}

module.exports = BaseBookingPage
