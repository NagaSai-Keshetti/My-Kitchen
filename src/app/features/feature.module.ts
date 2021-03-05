import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './Signup/Signup.component';
import { HomeComponent } from "./home/home.component";
import { MenuItemsComponent } from "./menu-items/menu-items.component";
import { GroceriesComponent } from "./groceries/groceries.component";
import { DesignElementsModule } from '../libs/ui/designElements.module';

@NgModule({
  declarations: [
    SignupComponent,
    HomeComponent,
    MenuItemsComponent,
    GroceriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DesignElementsModule
  ],
  exports: [
    SignupComponent,
    HomeComponent,
    MenuItemsComponent,
    GroceriesComponent
  ],
  providers: []
})
export class FeatureModule { }
