import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './Signup.component.html',
  styleUrls: ['./Signup.component.scss']
})
export class SignupComponent implements OnInit {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  signup() {

  }

}
