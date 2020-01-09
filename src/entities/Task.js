export default class Task {
    constructor(text) {
        this.text = text;
        this.isDone = false;
    }
    toggleIsDone() {
        this.isDone = !this.isDone;
    }
    clone() {
        let newTask = new Task(this.text);
        newTask.isDone = this.isDone;
        return newTask;
    }
}