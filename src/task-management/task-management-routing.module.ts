import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TaskSearchComponent } from './components/task-search/task-search.component';
import { TaskManagementComponent } from './task-management.component';

const taskManagementRoutes: Routes = [
  {
    path: '',
    component: TaskManagementComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'tasks', component: TaskListComponent },
      { path: 'search', component: TaskSearchComponent },
      { path: 'add-task', component: TaskFormComponent },
      { path: 'edit-task/:id', component: TaskFormComponent },
      { path: 'task-detail/:id', component: TaskDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(taskManagementRoutes)],
  exports: [RouterModule],
})
export class TaskManagementRoutingModule {}
