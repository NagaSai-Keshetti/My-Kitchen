import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.scss']
})
export class UiInputComponent implements OnInit {
  @Input() inputType: string;
  @Input() value: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  updateModel() {
    console.log(this.value)
    this.valueChange.emit(this.value)
  }
}
