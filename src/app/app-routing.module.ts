import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponent } from './features/home/home.component';
import { SignupComponent } from './features/Signup/Signup.component';
import { MenuItemsComponent } from './features/menu-items/menu-items.component';
import { GroceriesComponent } from './features/groceries/groceries.component';

const routes: Routes = [
  { path: 'login', component: LoginComponentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'menu', component: MenuItemsComponent },
  { path: 'groceries', component: GroceriesComponent },
  { path: '', component: LoginComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
