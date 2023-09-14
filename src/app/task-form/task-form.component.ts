import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent implements OnInit {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    done: false,
  };
  isEditMode: boolean = false;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const taskID: number = JSON.parse(params['id']);
      if (taskID) {
        this.task = this.taskService.getTaskByID(taskID);
        this.isEditMode = true;
      } else {
        this.isEditMode = false;
      }
    });
  }

  onSubmit() {
    if (this.isEditMode) {
      // Update existing task
      this.taskService.onTaskUpdated(this.task);
    } else {
      // Add new task
      this.taskService.onTaskAdded(this.task);
    }

    // Clear the form and reset to default values
    this.task = {
      id: 0,
      title: '',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      done: false,
    };

    // Optional: Navigate to a different route after submission
    // You can use Angular Router for this.
  }
}
