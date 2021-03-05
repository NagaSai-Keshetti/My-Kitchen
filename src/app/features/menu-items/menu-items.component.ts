import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {
  cardName: string;
  constructor() { }

  ngOnInit(): void {
  }

  onMenuItemClick(event) {
    this.cardName = event.srcElement.outerText;
    console.log(this.cardName);
  }
}
