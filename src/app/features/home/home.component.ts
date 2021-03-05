import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardName: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onMenuItemClick(event) {
    this.cardName = event.srcElement.outerText;
    this.router.navigate(['/' + this.cardName.toLowerCase()]);
  }
}
