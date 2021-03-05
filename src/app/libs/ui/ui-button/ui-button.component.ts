import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss']
})
export class UiButtonComponent implements OnInit {

  @Input() buttonColor: string;
  @Input() buttonText: string;
  @Input() buttonSize: string;
  @Output() onButtonClick = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

  }

  onClick() {
    this.onButtonClick.emit();
  }

}
