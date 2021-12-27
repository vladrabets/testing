const { Browser, Builder, Capabilities } = require("selenium-webdriver");
const { Options: ChromeOptions } = require("selenium-webdriver/chrome");
const { Options: FirefoxOptions } = require("selenium-webdriver/firefox");
const optionsFlags = require("../utils/options-flags");
const {globals} = require("../specs/setup/dev.chrome")

class DriverManager {
  static driver;

  static async getDriver() {
    if (!this.driver) {
      switch (globals.BROWSER) {
        case "chrome":
          this.driver = await this.buildBrowserDriver(Browser.CHROME);
          break;
        case "firefox":
          this.driver = await this.buildBrowserDriver(Browser.FIREFOX);
          break;
        default:
          this.driver = await this.buildBrowserDriver(Browser.CHROME);
      }
    }

    return this.driver;
  }

  static async closeDriver() {
    await this.driver.quit();
    this.driver = null;
  }

  static async buildBrowserDriver(browser) {
    const builder = new Builder()
      .withCapabilities(new Capabilities().setPageLoadStrategy("normal"))
      .forBrowser(browser);
    switch (browser) {
      case Browser.CHROME:
        builder.setChromeOptions(
          new ChromeOptions()
            .addArguments(...optionsFlags)
        );
        break;
      case Browser.FIREFOX:
        builder.setFirefoxOptions(
          new FirefoxOptions().addArguments(...optionsFlags)
        );
        break;
    }

    const driver = builder.build();
    await driver.manage()
      ;
    await driver.manage().window()
      .maximize();
    return driver;
  }
}

module.exports = DriverManager
