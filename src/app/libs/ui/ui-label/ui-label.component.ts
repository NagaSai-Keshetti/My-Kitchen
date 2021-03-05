import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ui-label',
  templateUrl: './ui-label.component.html',
  styleUrls: ['./ui-label.component.scss']
})
export class UiLabelComponent implements OnInit {
  @Input() labelText: string;
  constructor() { }

  ngOnInit(): void {
  }

}
