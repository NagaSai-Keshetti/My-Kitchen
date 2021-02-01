import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  validateCredentials(mail, password) {
    if (mail == 'saialekyakeshetty@gmail.com' && password == 'Saialekya@125') {
      return true;
    } else {
      return false;
    }
  }
}
