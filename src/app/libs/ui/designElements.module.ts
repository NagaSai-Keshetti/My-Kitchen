import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiLabelComponent } from './ui-label/ui-label.component';
import { UiInputComponent } from './ui-input/ui-input.component';
import { UiInputTextComponent } from './ui-input-text/ui-input-text.component';
import { UiInputEmailComponent } from './ui-input-email/ui-input-email.component';
import { UiInputPasswordComponent } from './ui-input-password/ui-input-password.component';

@NgModule({
  declarations: [
    UiButtonComponent,
    UiLabelComponent,
    UiInputComponent,
    UiInputTextComponent,
    UiInputEmailComponent,
    UiInputPasswordComponent
  ],
  exports: [
    UiInputComponent,
    UiButtonComponent,
    UiLabelComponent,
    UiInputTextComponent,
    UiInputEmailComponent,
    UiInputPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DesignElementsModule { }
