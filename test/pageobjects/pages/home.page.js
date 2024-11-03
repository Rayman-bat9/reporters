import { $ } from '@wdio/globals'
import BasePage from './base/base.page';

class HomePage extends BasePage{

    get btnLogin () {
        return $('a=Log in');
    }

    async clickOnBtnLogin () {
        await this.btnLogin.waitForClickable();
        await this.btnLogin.click();
    }
    
}

export default new HomePage();
