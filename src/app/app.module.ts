import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskManagementModule } from '../task-management/task-management.module';
import { TaskManagementRoutingModule } from '../task-management/task-management-routing.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    TaskManagementModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
