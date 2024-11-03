import { browser } from '@wdio/globals'
class ListOfBoards {

    get searchBoardsInput() {
        return $('input[id="search"]');
    }

    async enterInSearchBoardsInput(boardName) {
        await this.searchBoardsInput.setValue(boardName);
        await browser.pause(1000);
    }

    async checkBoardExist(boardName) {
        await $(`div[title="${boardName}"]`).isEnabled();
    }
}

export const listOfBoards = new ListOfBoards()