import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ui-input-password',
  templateUrl: './ui-input-password.component.html',
  styleUrls: ['./ui-input-password.component.scss']
})
export class UiInputPasswordComponent implements OnInit {

  @Input() value: string;

  @Input() showConfirmPasswordField: boolean;

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  @Input() confirmPasswordValue: string;

  @Output() confirmPasswordValueChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('password') passwordInput: ElementRef;

  @ViewChild('confirmPassword') confirmPasswordInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.value = this.value || "";
    this.confirmPasswordValue = this.confirmPasswordValue || "";
  }
  onInput(val: string) {
    this.valueChange.emit(val);
  }

  onConfirmPassInput(val: string) {
    this.confirmPasswordValueChange.emit(val);
  }

  togglePassword() {
    var toggleEyeIcon = document.getElementById('toggleIcon');
    var passInput = this.passwordInput.nativeElement;
    this.showOrHidePassword(toggleEyeIcon, passInput);
    // if (toggleEyeIcon.className == 'fa fa-eye-slash') {
    //   passInput.type = "text";
    //   toggleEyeIcon.className = "fa fa-eye";
    // } else {
    //   passInput.type = "password";
    //   toggleEyeIcon.className = "fa fa-eye-slash";
    // }
  }

  toggleConfirmPassword() {
    var toggleConfirmPassEyeIcon = document.getElementById("toggleIconForConfirmPass");
    var confirmPassInput = this.confirmPasswordInput.nativeElement;
    this.showOrHidePassword(toggleConfirmPassEyeIcon, confirmPassInput);
  }

  showOrHidePassword(eyeIcon, passwordInput) {
    if (eyeIcon.className == 'fa fa-eye-slash') {
      passwordInput.type = "text";
      eyeIcon.className = "fa fa-eye";
    } else {
      passwordInput.type = "password";
      eyeIcon.className = "fa fa-eye-slash";
    }
  }
}
