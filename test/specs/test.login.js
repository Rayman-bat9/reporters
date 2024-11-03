import { browser } from '@wdio/globals'
import LoginPage from '../pageobjects/pages/login.page';
import HomePage from '../pageobjects/pages/home.page';
import BoardsPage from '../pageobjects/pages/boards.page';

describe('My Login application', () => {
    beforeEach(async () => {
        await browser.execute(() => {
            localStorage.clear();
            sessionStorage.clear();
        });
    });

    it('should login with valid credentials', async () => {
        await browser.url("/");

        HomePage.clickOnBtnLogin();

        LoginPage.loginForm.loginWithValidCredentials();

        BoardsPage.header.clickMyUserIconBtn();

        await browser.waitUntil(async () => {
            const divText = await BoardsPage.header.myUserName.getText();
            return divText.includes('a631718@gmail.com');
        }, {
            timeout: 5000,
            timeoutMsg: 'Expected text not found'
        });
    });
});


