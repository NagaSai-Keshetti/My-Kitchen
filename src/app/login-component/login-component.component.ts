import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  loginMail: string;
  loginPassword: string;
  validateCredentials: boolean;
  @Input() color: string;
  constructor(private appService: AppService,
    private router: Router) { }

  ngOnInit(): void {

  }

  login() {
    this.validateCredentials = this.appService.validateCredentials(this.loginMail, this.loginPassword);
    if (this.validateCredentials == true) {
      this.router.navigate(['/menu-categories']);
    }
  }

}
