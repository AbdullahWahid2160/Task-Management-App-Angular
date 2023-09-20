import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page.component';

const appRoutes: Routes = [
  // Redirect the root URL to the Task Management module
  {
    path: '',
    component: LandingPageComponent,
  },

  // Task Management module route
  {
    path: 'task-management',
    loadChildren: () =>
      import('../task-management/task-management.module').then(
        (m) => m.TaskManagementModule
      ),
  },

  // Shopping Store module route
  {
    path: 'shopping-store',
    loadChildren: () =>
      import('../shopping-store/shopping-store.module').then(
        (m) => m.ShoppingStoreModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
