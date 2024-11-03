import { browser } from '@wdio/globals'
import LoginPage from '../pageobjects/pages/login.page';
import HomePage from '../pageobjects/pages/home.page';
import BoardsPage from '../pageobjects/pages/boards.page';
import ProfilePage from '../pageobjects/pages/profile.page';

describe('Edit profile bio', () => {
    beforeEach(async () => {
        await browser.execute(() => {
            localStorage.clear();
            sessionStorage.clear();
        });
    });

    it('should login and edit profile bio', async () => {
        await browser.url("/");

        await HomePage.clickOnBtnLogin();

        await LoginPage.loginForm.loginWithValidCredentials();

        await BoardsPage.header.clickMyUserIconBtn();

        await BoardsPage.header.clickMyUserProfileBtn();

        await ProfilePage.editProfileInputText();

    });
});