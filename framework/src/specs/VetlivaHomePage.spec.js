const DriverManager = require("../driver/DriverManager")
const VetlivaHomePage = require("../pages/VetlivaHomePage")

describe("Vetliva home page", () => {
    let driver
    let vetlivaHomePage

    beforeAll(async () => {
        driver = await DriverManager.getDriver()
    })

    beforeEach(() => {
        vetlivaHomePage = new VetlivaHomePage(driver).openHomePage()
    })

    afterAll(async () => {
        await DriverManager.closeDriver()
    })

    it("should be initialized", async () => {
        expect(
            await vetlivaHomePage.isOpened()
        ).toBeTruthy()
    })

    it("should open feedback panel", async () => {
        expect(
            await vetlivaHomePage
                .openFeedbackPanel()
        ).toBeTruthy()
    })

})