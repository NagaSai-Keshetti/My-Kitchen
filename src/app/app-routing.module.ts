import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MenuCategoriesComponent } from './menu-categories/menu-categories.component';

const routes: Routes = [
  { path: 'login', component: LoginComponentComponent },
  { path: 'menu-categories', component: MenuCategoriesComponent },
  { path: '', component: LoginComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
