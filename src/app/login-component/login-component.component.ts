import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  loginMail;
  loginPassword: string;
  validateCredentials: boolean;
  showErrorMessage = false;
  constructor(private appService: AppService,
    private router: Router) { }

  ngOnInit(): void {


  }

  emailEntered(event) {
    this.loginMail = event.value;
  }

  login() {
    this.validateCredentials = this.appService.validateCredentials(this.loginMail, this.loginPassword);
    if (this.validateCredentials == true) {
      this.router.navigate(['/home']);
      this.showErrorMessage = false;
    } else {
      this.showErrorMessage = true;
    }
  }

}
