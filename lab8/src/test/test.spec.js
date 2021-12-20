const {assert} = require('chai')
const driverInit = require("../utils/driverInitialisation");
const VetlivaHomePage = require("../pages/VetlivaHomePage");

describe('Vetliva home page', () => {
    let driver;
    let vetlivaHomePage

    beforeEach(() => {
        driver = driverInit()
        driver.manage().window().maximize();

        vetlivaHomePage = new VetlivaHomePage(driver).openHomePage()
    })

    it('Should show feedback panel', async () => {
        try {
            const isVisible = await vetlivaHomePage
                .clickElement()
                .isVisible()
            assert.isTrue(isVisible)
        } finally {
            await driver.quit();
        }
    });
});