

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for home page
 */
class HomePage extends Page {
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

export default new HomePage();
