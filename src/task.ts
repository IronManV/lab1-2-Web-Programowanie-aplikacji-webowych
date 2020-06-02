class Task {
    task: string
    newTask: HTMLDivElement = document.createElement('div');

    constructor(task: string) {
        this.task = task;
        this.createTask();
    }

    createTask() {
        if(this.task != ""){
            let board: HTMLDivElement = document.querySelector('.board');
            this.newTask.innerText = this.task;
            this.newTask.classList.add('task');
            this.newTask.draggable = true;
            board.appendChild(this.newTask);
        }
    }

}
export {Task};