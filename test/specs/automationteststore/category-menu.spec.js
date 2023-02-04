import HomePage from "../../pageobjects/automationteststore/home.page.js";
import AllureReporter from "@wdio/allure-reporter";

describe("Category menu component", () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await HomePage.open();
    });
    it.only('Can filter "Apparel" by clicking category menu icon', async () => {
    AllureReporter.addFeature("Allow users to filter items by category")
    AllureReporter.addDescription("Filter Apparel by clicking category menu icon")
    AllureReporter.addSeverity("Critical")

    await HomePage.clickCategoryMenuLink("Apparel")
    expect(await browser.getTitle()).toEqual("Apparel & accessories");

    const price = await HomePage.addItemToCart("Ruby Shoo Womens Jada T-Bar")
    await browser.debug()
  });
  
  it('Can filter "Makeup" by clicking category menu icon', async () => {
    AllureReporter.addFeature("Allow users to filter items by category")
    AllureReporter.addDescription("Filter Makeup by clicking category menu icon")
    AllureReporter.addSeverity("Critical")

    await HomePage.categoryMenuComponent.categoryMenuLink("Makeup")[1].click();
    expect(await browser.getTitle()).toEqual("Makeup");
  
    const storeItemHeaderLinks = await HomePage.storeItemComponent.headerLinks;
  });
  it('Can filter "Skincare" by clicking category menu icon', async () => {
    AllureReporter.addFeature("Allow users to filter items by category")
    AllureReporter.addDescription("Filter Skincare by clicking category menu icon")
    AllureReporter.addSeverity("Critical")

    await HomePage.categoryMenuComponent
      .categoryMenuLink("Skincare")[1]
      .click();
    expect(await browser.getTitle()).toEqual("Skincare");

    const storeItemHeaderLinks = await HomePage.storeItemComponent.headerLinks;
  });
  it('Can filter "Fragrance" by clicking category menu icon', async () => {
    AllureReporter.addFeature("Allow users to filter items by category")
    AllureReporter.addDescription("Filter Fragrance by clicking category menu icon")
    AllureReporter.addSeverity("Critical")

    await HomePage.categoryMenuComponent
      .categoryMenuLink("Fragrance")[1]
      .click();
    expect(await browser.getTitle()).toEqual("Fragrance");

    const storeItemHeaderLinks = await HomePage.storeItemComponent.headerLinks;
  });
  it('Can filter "Men" by clicking category menu icon', async () => {
    AllureReporter.addFeature("Allow users to filter items by category")
    AllureReporter.addDescription("Filter Men by clicking category menu icon")
    AllureReporter.addSeverity("Critical")

    await HomePage.categoryMenuComponent.categoryMenuLink("Men")[1].click();
    expect(await browser.getTitle()).toEqual("Men");
    
    const storeItemHeaderLinks = await HomePage.storeItemComponent.headerLinks;
  });
  it('Can filter "Hair Care" by clicking category menu icon', async () => {
    AllureReporter.addFeature("Allow users to filter items by category")
    AllureReporter.addDescription("Filter Hair Care by clicking category menu icon")
    AllureReporter.addSeverity("Critical")

    await HomePage.categoryMenuComponent.categoryMenuLink("Hair")[1].click();
    expect(await browser.getTitle()).toEqual("Hair Care");
    
    const storeItemHeaderLinks = await HomePage.storeItemComponent.headerLinks;
  });
  it('Can filter "Books" by clicking category menu icon', async () => {
    AllureReporter.addFeature("Allow users to filter items by category")
    AllureReporter.addDescription("Filter Books by clicking category menu icon")
    AllureReporter.addSeverity("Critical")

    await HomePage.categoryMenuComponent.categoryMenuLink("Books")[1].click();
    expect(await browser.getTitle()).toEqual("Books");
    
    const storeItemHeaderLinks = await HomePage.storeItemComponent.headerLinks;
  });
});
