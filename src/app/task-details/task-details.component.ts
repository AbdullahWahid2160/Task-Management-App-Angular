import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
})
export class TaskDetailsComponent implements OnInit {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    done: false,
  };

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log('Params: ', params);
      const taskId = params['id'];
      this.task = this.taskService.getTaskByID(taskId);
    });
  }

  onTaskDeleted(Id: number) {
    this.taskService.onDeletingTask(Id);
  }
}
