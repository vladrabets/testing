const DriverManager = require("../driver/DriverManager")
const logger = require("../utils/logger")
const VetlivaSanatoriumsPage = require("../pages/VetlivaSanatoriumsPage")

describe("Booking home page", () => {
    let driver
    let vetlivaSanatoriumsPage

    beforeAll(async () => {
        driver = await DriverManager.getDriver()
    })

    beforeEach(() => {
        vetlivaSanatoriumsPage = new VetlivaSanatoriumsPage(driver).openSanatoriumsPage();
    })

    afterAll(async () => {
        await DriverManager.closeDriver()
    })

    it("should be initialized", async () => {
        expect(
            await vetlivaSanatoriumsPage.isOpened()
        ).toBeTruthy()
    })


    it("map should be visible", async () => {
        expect(
            await vetlivaSanatoriumsPage.showOnMap()
        ).toBeTruthy()
    })
})