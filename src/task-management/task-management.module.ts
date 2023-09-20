import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './components/home/home.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';
import { TaskItemComponent } from './components/task-list/task-list-item/task-list-item.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TaskSearchComponent } from './components/task-search/task-search.component';
import { CommonModule } from '@angular/common';
import { TaskManagementRoutingModule } from './task-management-routing.module';
import { TaskManagementComponent } from './task-management.component';


@NgModule({
  declarations: [
    TaskManagementComponent,
    HomeComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskFormComponent,
    TaskDetailsComponent,
    TaskSearchComponent,
    NotFoundComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    TaskManagementRoutingModule
  ],
  providers: [TaskService],
})
export class TaskManagementModule {}
