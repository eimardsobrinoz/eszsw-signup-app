import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  currentUser: any;
  constructor() { }

  isUserLogged(): boolean {
    let userLogged: boolean = false;
    if (this.currentUser) {
      userLogged = true;
    }
    return userLogged;
  }
}
