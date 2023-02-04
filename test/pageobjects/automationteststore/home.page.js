

import BasePage from './base.page.js';
import CategoryMenuComponent from '../../components/automationteststore/category-menu.comp.js';
import StoreProductComponent from '../../components/automationteststore/store-product.comp.js';

/**
 * sub page containing specific selectors and methods for home page
 */
class HomePage extends BasePage {
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/');
    }

    get categoryMenuComponent() {
        return CategoryMenuComponent;
    }

    get productGridComponent() {
        return StoreProductComponent;
    }
    
    async clickCategoryMenuLink(name) {
        await this.categoryMenuComponent.categoryMenuLink(name)[1].click();
    }
    
    async storeProductPrice(name) {
        return await StoreProductComponent.currentPrice(name)
    }

    async storeProductAddLink(name) {
        return await StoreProductComponent.addToCartLink(name)
    }

    async addItemToCart(name) {
        const price = await this.storeProductPrice(name)
        const addLink = await this.storeProductAddLink(name)

        await addLink.click()

        return price
    }
}

export default new HomePage();
