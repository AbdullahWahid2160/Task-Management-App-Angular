import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
})
export class TaskSearchComponent implements OnInit {
  searchTerm: string = '';
  searchResults: Task[] = [];
  tasks: Task[] = [];
  searched: boolean = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Retrieve tasks from the TaskService initially
    this.tasks = this.taskService.getAllTasks();
  }

  search(): void {
    this.searched = true;
    // Clear previous search results
    this.searchResults = [];

    // Perform the search based on the searchTerm
    if (this.searchTerm) {
      this.searchResults = this.tasks.filter((task) =>
        task.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
