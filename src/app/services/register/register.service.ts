import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private dbService: NgxIndexedDBService) {}
  registerUser(user) {
    this.dbService
      .add('people', {
        firstName: user.registerFirstName,
        lastName: user.registerLastName,
        email: user.registerEmailAddress,
        password: user.registerPassword
      })
      .then(
        () => {},
        error => {
          console.log(error);
        }
      );
  }
}
