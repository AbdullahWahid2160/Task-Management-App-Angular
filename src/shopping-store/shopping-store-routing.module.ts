import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component.';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { HomeComponent } from './components/home/home.component';
import { StoreLandingpageComponent } from './shopping-store-landing-page.component.';
import { CategoriesComponent } from './components/category/category.component';

const shoppingStoreRoutes: Routes = [
  {
    path: '',
    component: StoreLandingpageComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'users', component: UserListComponent },
      { path: 'category', component: CategoriesComponent },
      //   { path: 'add-user' },
      //   { path: 'edit-user/:id' },
      { path: 'products', component: ProductsListComponent },
      { path: 'add-product', component: ProductFormComponent },
      { path: 'edit-product/:id', component: ProductFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(shoppingStoreRoutes)],
  exports: [RouterModule],
})
export class ShoppingStoreRoutingModule {}
