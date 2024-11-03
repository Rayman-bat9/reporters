import { browser } from '@wdio/globals'
import HomePage from '../pageobjects/pages/home.page';
import LoginPage from '../pageobjects/pages/login.page';
import BoardsPage from '../pageobjects/pages/boards.page';
describe('Create board testing', () => {
    beforeEach(async () => {
        await browser.execute(() => {
            localStorage.clear();
            sessionStorage.clear();
        });
    });

    const testBoardName = `testBoard${Math.floor(Date.now() / 10000)}`
    
    it('should create new board', async () => {
        await browser.url("/");

        HomePage.clickOnBtnLogin();

        LoginPage.loginForm.loginWithValidCredentials();

        BoardsPage.addBoard.createBoard(testBoardName);

        await browser.waitUntil(async () => {
            const boardName = await BoardsPage.addBoard.boardName.getText();
            return boardName.includes(testBoardName);
        }, {
            timeout: 5000,
            timeoutMsg: 'Expected text not found'
        });
    });

    it('check board in the list of boards', async () => {

        await BoardsPage.addBoard.clickOnListOfBoardsBtn(); 

        await BoardsPage.listOfBoards.enterInSearchBoardsInput(testBoardName);

        await BoardsPage.listOfBoards.checkBoardExist(testBoardName);
    })
});
