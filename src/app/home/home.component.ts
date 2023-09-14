import { Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  taskTitle: string = '';
  taskDescription: string = '';

  onViewAllTasks(){
    
  }

  addTask() {
    // Add your code to handle task submission here, e.g., send data to a service or API.
    console.log('Task Title:', this.taskTitle);
    console.log('Task Description:', this.taskDescription);

    // You can reset the form fields after submitting the task.
    this.taskTitle = '';
    this.taskDescription = '';
  }
}
