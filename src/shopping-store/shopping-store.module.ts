import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationService } from './services/auth.service';
import { LoginComponent } from './components/user/login/login.component';
import { ShoppingStoreRoutingModule } from './shopping-store-routing.module';
import { TokenService } from './services/token.service';
import { ProfileComponent } from './components/user/profile/profile.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component.';
import { ProductFormComponent } from './components/products/product-form/product-form.component';
import { HomeComponent } from './components/home/home.component';
import { StoreLandingpageComponent } from './shopping-store-landing-page.component.';
import { CategoriesComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    LoginComponent,
    StoreLandingpageComponent,
    HomeComponent,
    ProfileComponent,
    UserListComponent,
    CategoriesComponent,
    ProductsListComponent,
    ProductFormComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ShoppingStoreRoutingModule,
  ],
  providers: [AuthenticationService, TokenService],
})
export class ShoppingStoreModule {}
