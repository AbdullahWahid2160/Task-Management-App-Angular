import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  tasks!: Task[];
  filterButtons = ['All', 'Completed', 'Pending'];
  isActiveButton: string = 'All';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getAllTasks();
    this.taskService.tasksChanged.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  getTasks(action: string) {
    this.isActiveButton = action;
    switch (action) {
      case 'All':
        this.tasks = this.taskService.getAllTasks();
        break;
      case 'Completed':
        this.tasks = this.taskService.getCompletedTasks();
        break;
      case 'Pending':
        this.tasks = this.taskService.getPendingTasks();
        break;
      default:
        this.tasks = this.taskService.getAllTasks();
        break;
    }
  }

  getCompletedTasks() {}

  getPendingTasks() {}
}
