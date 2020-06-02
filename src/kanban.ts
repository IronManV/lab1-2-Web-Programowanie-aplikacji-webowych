import "./style/style.scss";
import {KanbanBtn} from "./kabanBtn";
import {Task} from "./task";
import {Board} from "./board";

class Kanban {
    closeAddForm: HTMLDivElement = document.querySelector('.close');
    addNewBoard: HTMLInputElement = document.querySelector('#addBoardBtn');
    addNewTask: HTMLInputElement = document.querySelector('#addTaskBtn');
    constructor() {
        new KanbanBtn();

        this.addNewBoard.addEventListener('click', () => {
            let nameBoard: HTMLInputElement = document.querySelector('#boardName');
            let name: string = nameBoard.value;
            new Board(name);
        });

        this.addNewTask.addEventListener('click', () => {
            let nameTask: HTMLInputElement = document.querySelector('#taskName');
            let name: string = nameTask.value;
            new Task(name);
        });

        this.closeAddForm.addEventListener('click', this.drag);
    }


    drag() {
        let tasklist = document.querySelectorAll<HTMLElement>('.task');
        let boardlist = document.querySelectorAll<HTMLElement>('.board');
        let draggedTask: HTMLElement = null;

        for (let i = 0; i < tasklist.length; i++) {
            let item: HTMLElement = tasklist[i];


            item.addEventListener('dragstart', () => {
                draggedTask = item;
                setTimeout(() => {
                    item.style.display = 'none';
                }, 0);
            });

            item.addEventListener('dragend', () => {
                setTimeout(() => {
                    draggedTask.style.display = 'block';
                    draggedTask = null;
                }, 0);
            })

            for (let j = 0; j < boardlist.length; j++) {
                const board: HTMLElement = boardlist[j]

                board.addEventListener('dragover', function (e: any) {
                    e.preventDefault();
                });
                board.addEventListener('dragenter', function (e: any) {
                    e.preventDefault();
                })
                board.addEventListener('drop', function (e: any) {
                    this.append(draggedTask);
                });
            }
        }
    }
}
new Kanban();


