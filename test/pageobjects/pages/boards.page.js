import BasePage from './base/base.page';
import { addBoard } from '../components/addBoard';
import { listOfBoards } from '../components/listOfBoards';

class BoardsPage extends BasePage {
    addBoard = addBoard
    listOfBoards = listOfBoards
    open () {
        return super.open('home');
    }

}

export default new BoardsPage();
