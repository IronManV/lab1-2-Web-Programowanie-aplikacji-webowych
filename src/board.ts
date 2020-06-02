class Board {
    boardTitle: string;

    constructor(boardTitle: string) {
        this.boardTitle = boardTitle;
        this.createBoard();
    }

    createBoard() {
        if(this.boardTitle != ""){
            let kanban: HTMLDivElement = document.querySelector('.kanban');
            let newBoard: HTMLDivElement = document.createElement('div');
            newBoard.classList.add('board');
            kanban.appendChild(newBoard);
    
            let boardHeader: HTMLDivElement = document.createElement('div');
            boardHeader.innerHTML = this.boardTitle;
            boardHeader.classList.add('boardHeader');
    
            newBoard.appendChild(boardHeader);
        }
    }
}
export {Board};