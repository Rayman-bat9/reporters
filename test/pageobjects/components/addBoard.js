import { header } from "./header";

class AddBoard {
    header = header
    get btnCreate () {
        return $('p[class="szBTSFrvPTLGHM"]');
    }

    get btnCreateBoard () {
        return $('button[class="gJDsPins_eYkBM"]');
    }

    get createBoardInput () {
        return $('input[data-testid="create-board-title-input"]');
    }

    get createBoardSubmitButton () {
        return $('button[data-testid="create-board-submit-button"]');
    }

    get boardName () {
        return $('h1[data-testid="board-name-display"]');
    }

    get listOfBoardsBtn () {
        return $('a[data-testid="open-boards-link"]');
    }

    async createBoard(testBoardName) {
        await header.btnCreate.click()
        await header.btnCreateBoard.click();
        await this.createBoardInput.setValue(testBoardName);
        await this.createBoardSubmitButton.click();
    }

    async clickOnListOfBoardsBtn(){
        await this.listOfBoardsBtn.waitForEnabled();
        await this.listOfBoardsBtn.click();
    } 
}

export const addBoard = new AddBoard()