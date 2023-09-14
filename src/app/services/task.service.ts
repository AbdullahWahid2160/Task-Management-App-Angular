import { EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

export class TaskService {
  tasksChanged = new EventEmitter<Task[]>();
  private localStorageKey = 'Tasks';
  private tasks: Task[] = [];
  private lastId: number = -1;

  constructor() {
    this.loadTasksFromLocalStorage();
  }

  private loadTasksFromLocalStorage(): void {
    const tasksJson = localStorage.getItem(this.localStorageKey);
    if (tasksJson) {
      this.tasks = JSON.parse(tasksJson);
    }
  }
  private saveTasksToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.tasks));
  }
  getAllTasks() {
    return this.tasks.slice();
  }

  getTaskByID(taskId: number) {
    const taskIndex = this.tasks.slice().findIndex((t) => t.id === taskId);
    return this.tasks[taskIndex];
  }

  getCompletedTasks() {
    return this.tasks.slice().filter((task) => task.done === true);
  }

  getPendingTasks() {
    return this.tasks.slice().filter((task) => task.done === false);
  }

  updateTaskStatus(task: Task) {
    const taskToUpdate = this.getTaskByID(task.id);
    taskToUpdate.done = !task.done;
    this.tasksChanged.emit(this.tasks.slice());
    this.saveTasksToLocalStorage();
  }

  onTaskAdded(task: Task) {
    task.id = ++this.lastId;
    this.tasks.push(task);
    this.tasksChanged.emit(this.tasks.slice());
    this.saveTasksToLocalStorage();
  }

  onTaskUpdated(updatedTask: Task) {
    const taskIndex = this.tasks.findIndex(
      (task) => task.id === updatedTask.id
    );

    if (taskIndex !== -1) {
      this.tasks[taskIndex] = updatedTask;
    } else {
      console.error(`Task with ${updatedTask.id} not found.`);
    }
    this.tasksChanged.emit(this.tasks.slice());
    this.saveTasksToLocalStorage();
  }

  onDeletingTask(id: number) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
    this.tasksChanged.emit(this.tasks.slice());
    this.saveTasksToLocalStorage();
  }
}
