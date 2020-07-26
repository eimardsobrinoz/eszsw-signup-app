import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user-interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private _activeUser: User | null;

  constructor() { }

  public isUserLogged(): boolean {
    let userLogged: boolean = false;
    if (this.getActiveUser) {
      userLogged = true;
    }
    return userLogged;
  }

  get getActiveUser(): User | null{
    return this._activeUser;
  }
  
  public setActiveUser(user: User | null): void {
    this._activeUser = user;
  }
}
