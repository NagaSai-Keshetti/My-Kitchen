import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.scss']
})
export class GroceriesComponent implements OnInit {
  cardName: string;
  constructor() { }

  ngOnInit(): void {
  }

  onMenuItemClick(event) {
    this.cardName = event.srcElement.outerText;
    console.log(this.cardName);
  }
}
