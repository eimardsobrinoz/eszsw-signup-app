import { HttpService } from './../http-service/http.service';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage-service/storage.service';
import { Router } from '@angular/router';
import { ErrorService } from '../error-service/error.service';
import { Observable } from 'rxjs';
import { AuthEndPoints, ApiMethod } from '../../enums/endpoints';
import { AuthForm } from '../../../auth/shared/interfaces/auth-form.interface';
import { CustomInput } from '../../../auth/shared/models/custom-input';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $activeUser: Observable<boolean>;

  constructor(
    private httpService: HttpService,
    private storage: StorageService,
    private router: Router,
    private error: ErrorService
  ) { }

  // loginyout(loginPayload: LoginPayload): void {
  //   this._http.requestCall(AuthEndPoints.LOGIN, ApiMethod.POST, loginPayload).subscribe(res = {
  //     this._storage.saveToken(res.auth_token);
  //     this._error.userNotification(200, 'You successfully logged');
  //     this._storage.saveToken(res.auth_token);
  //   },
  //     error => console.log(error));
  // }

  // logininternet(username, password) {
  //   return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
  //     .pipe(map(user => {
  //       // store user details and jwt token in local storage to keep user logged in between page refreshes
  //       localStorage.setItem('user', JSON.stringify(user));
  //       this.userSubject.next(user);
  //       return user;
  //     }));
  // }

  logout() {
    // remove user from local storage and set current user to null
    // localStorage.removeItem('user');
    // this.userSubject.next(null);
    // this.router.navigate(['/account/login']);
  }

  // get getLoginForm() {
  //   let loginForm: AuthForm = {
  //     "inputsControls": [],
  //     "btnLabel": "Sign In"
  //   };
  //   let inputs: CustomInput[] = [
  //     {
  //       "isRequired": true,
  //       "label": "Email",
  //       "errorMsg": {
  //         "emptyLbl": "Enter email",
  //         "formatLbl": "Error in email format"
  //       },
  //       "name": "Email",
  //       "type":"mail",
  //       "pattern": "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}"
  //     },
  //     {
  //       "isRequired": true,
  //       "label": "Password",
  //       "errorMsg": {
  //         "emptyLbl": "Enter password",
  //         "formatLbl": "Error in password format"
  //       },
  //       "name": "Password",
  //       "type": "password"
  //     }
  //   ]
  //   loginForm.inputsControls = inputs;
  //   return loginForm;
  // }


  getLoginForm(): Observable<AuthForm> {
    return this.httpService.requestCall(AuthEndPoints.LOGIN_FORM, ApiMethod.GET) as Observable<AuthForm>;
  }
  getSignUpForm(): Observable<AuthForm> {
    return this.httpService.requestCall(AuthEndPoints.LOGIN_FORM, ApiMethod.GET) as Observable<AuthForm>;
  }
  getResetPasswordForm(): Observable<AuthForm> {
    return this.httpService.requestCall(AuthEndPoints.RESET_PASSWORD_FORM, ApiMethod.GET) as Observable<AuthForm>;
  }
  getMailConfirmForm(): Observable<AuthForm> {
    return this.httpService.requestCall(AuthEndPoints.MAIL_CONFIRMATION_FORM, ApiMethod.GET) as Observable<AuthForm>;
  }

}
