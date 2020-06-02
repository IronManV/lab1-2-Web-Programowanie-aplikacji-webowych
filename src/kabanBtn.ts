class KanbanBtn {
    closeAddForm: HTMLDivElement = document.querySelector('.close');


    constructor() {
        this.createAddBoardBtn();
        this.closeAddForm.addEventListener('click', this.closeBoard);
    }
    createAddBoardBtn() {
        let kanban: HTMLBodyElement = document.querySelector('body');

        let btn: HTMLButtonElement = document.createElement('button');
        btn.innerHTML = "+";
        btn.id = "addBtn";
        btn.onclick = this.showBoard;

        kanban.appendChild(btn);
    }

    showBoard() {
        let form: HTMLDivElement = document.querySelector('.addForm');
        form.classList.remove("hidden");

        let kanbanBlur: HTMLDivElement = document.querySelector('.kanban');
        kanbanBlur.classList.add("blur")
    }

    closeBoard() {

        let form: HTMLDivElement = document.querySelector('.addForm');
        form.classList.add("hidden");
        let kanbanBlur: HTMLDivElement = document.querySelector('.kanban');
        kanbanBlur.classList.remove("blur");
    }
}
export {KanbanBtn};