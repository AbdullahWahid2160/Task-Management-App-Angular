import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/task-management/models/task.model';
import { TaskService } from 'src/task-management/services/task.service';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
})
export class TaskItemComponent {
  @Input() task!: Task;

  constructor(private taskService: TaskService, private router: Router) {}

  onUpdateStatus(task: Task) {
    this.taskService.updateTaskStatus(task);
  }

}
