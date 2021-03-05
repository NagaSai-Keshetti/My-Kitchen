import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-ui-input-text',
  templateUrl: './ui-input-text.component.html',
  styleUrls: ['./ui-input-text.component.scss']
})
export class UiInputTextComponent implements OnInit {
  @Input() value: string;

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.value = this.value || "";
  }
  onInput(val: string) {
    this.valueChange.emit(val);
  }

}
