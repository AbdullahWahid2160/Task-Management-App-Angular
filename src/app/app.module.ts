import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TaskService } from './services/task.service';
import { TaskItemComponent } from './task-list/task-list-item/task-list-item.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { TaskSearchComponent } from './task-search/task-search.component';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'tasks', component: TaskListComponent },
  { path: 'search', component: TaskSearchComponent },
  { path: 'add-task', component: TaskFormComponent },
  { path: 'edit-task/:id', component: TaskFormComponent },
  { path: 'task-detail/:id', component: TaskDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskFormComponent,
    TaskDetailsComponent,
    TaskSearchComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), CommonModule],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
