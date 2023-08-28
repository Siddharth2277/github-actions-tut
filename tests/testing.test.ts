

import {test,expect} from "@playwright/test"


test("Find Heading", async({page}) => {
    await page.goto("/")
    const txt = await page.locator('h1').first().innerText()
    expect(txt).toBe("I am special")
})