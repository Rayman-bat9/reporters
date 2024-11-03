import { browser } from '@wdio/globals'
import LoginPage from '../pageobjects/pages/login.page';
import HomePage from '../pageobjects/pages/home.page';

describe('Login with invalid credentials', () => {
    beforeEach(async () => {
        await browser.execute(() => {
            localStorage.clear();
            sessionStorage.clear();
        });
    });

    it('should not login with invalid credentials', async () => {
        await browser.url("/");

        HomePage.clickOnBtnLogin();

        LoginPage.loginForm.loginWithValidCredentials();

        await LoginPage.loginForm.invalidCredentialsMessage.isDisplayed();
    })
});