class StoreProductComponent {

    itemHeaderLink(name) {
        return $(`//div[@class='fixed']/a[contains(text(), '${name}')]`)
    }

    async dataIDByName(name) {
        const headerLink = await this.itemHeaderLink(name)
        const headerLinkHref = await headerLink.getAttribute("href")
        return new URLSearchParams(headerLinkHref).get("product_id")
    }

    addToCartLinkByDataID(dataID) {
        return $(`//a[@data-id="${dataID}"]`)
    }

    async priceByDataID(dataID) {
        const itemPrices = await $$(
            `//a[@data-id="${dataID}"]/following-sibling::div/div`
          );
        
        // if there are more than 2 prices - the item is on sale
        let className = "";
        if (itemPrices.length > 2) {
        className = "pricenew";
        } else {
        className = "oneprice";
        }

        const priceText = await $(
            `//a[@data-id="${dataID}"]/following-sibling::div/div[@class="${className}"]`
            ).getText()
        const priceValue = priceText.replace("$", "");
        const price = Number(priceValue)

        return price
    }

    async addToCartLink(name) {
        const dataID = await this.dataIDByName(name)
        return await this.addToCartLinkByDataID(dataID)
    }

    async currentPrice(name) {
        const dataID = await this.dataIDByName(name)
        return await this.priceByDataID(dataID)
    }
}

export default new StoreProductComponent()