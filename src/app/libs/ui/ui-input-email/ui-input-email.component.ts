import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ui-input-email',
  templateUrl: './ui-input-email.component.html',
  styleUrls: ['./ui-input-email.component.scss']
})
export class UiInputEmailComponent implements OnInit, AfterViewInit {

  @Input() value: string;

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  @ViewChild('email') emailInput: ElementRef;

  enteredEmail: string;

  isValidEmailFormat = true;

  constructor() { }

  ngOnInit(): void {
    this.value = this.value || "";
  }

  ngAfterViewInit() {
    // this.addValidator();
  }

  onInput(val: string) {
    this.enteredEmail = this.emailInput.nativeElement.value;
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    this.isValidEmailFormat = pattern.test(this.enteredEmail);
    console.log(this.isValidEmailFormat);
    this.valueChange.emit(val);
  }

  validateEmail() {
    // return {
    //   message: 'soemthing',
    //   type: 'inValidEmail'
    // }
    this.enteredEmail = this.emailInput.nativeElement.value;
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    this.isValidEmailFormat = pattern.test(this.enteredEmail);
    console.log(this.isValidEmailFormat);

  }

  addValidator() {
    this.enteredEmail = this.emailInput.nativeElement.value;
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    this.isValidEmailFormat = pattern.test(this.enteredEmail);
    console.log(this.isValidEmailFormat);
    // this.emailInput.nativeElement.onComponentReady().then(value => {
    //   this.emailInput.nativeElement.addValidator(this.validateEmail)
    // }
    // );
  }

}
