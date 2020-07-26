import { RoutePath } from 'projects/eszsw-signup-app/src/app/core/enums/route.paths';
import { User } from './../../interfaces/user-interface';
import { environment } from 'projects/eszsw-signup-app/src/environments/environment';
import { HttpService } from './../http-service/http.service';
import { Injectable, NgZone } from '@angular/core';
import { StorageService } from '../storage-service/storage.service';
import { Router } from '@angular/router';
import { ErrorService } from '../error-service/error.service';
import { Observable } from 'rxjs';
import { AuthEndPoints, ApiMethod } from '../../enums/endpoints';
import { AuthForm } from '../../../auth/shared/interfaces/auth-form.interface';
import { map } from 'rxjs/operators';
import { AccountService } from '../account-service/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  activeUser$: Observable<boolean>;

  constructor(
    private httpService: HttpService,
    private storage: StorageService,
    private router: Router,
    private error: ErrorService,
    private accountService: AccountService
  ) { }

  signUp(user: User): Observable<User> {
    // this.storage.saveToken(res.auth_token);
    this.storage.setLocalObject('user', JSON.stringify(user));
    // this.userSubject.next(user);
    return this.httpService.requestCall(AuthEndPoints.SIGNUP, ApiMethod.POST, environment.apiUrl, user) as Observable<User>;
  }
  logout() {
    localStorage.removeItem('user');
    // this.userSubject.next(null);
    this.accountService.setActiveUser(null);
    this.router.navigate([RoutePath.LOGIN]);
  }

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

  getLoginForm(): Observable<AuthForm>  {
    return this.httpService.requestCall(AuthEndPoints.LOGIN_FORM, ApiMethod.GET, environment.apiAuthUrl) as Observable<AuthForm>;
  }
  getSignUpForm(): Observable<AuthForm> {
    return this.httpService.requestCall(AuthEndPoints.SIGN_UP_FORM, ApiMethod.GET, environment.apiAuthUrl) as Observable<AuthForm>;
  }
  getResetPasswordForm(): Observable<AuthForm> {
    return this.httpService.requestCall(AuthEndPoints.RESET_PASSWORD_FORM, ApiMethod.GET, environment.apiAuthUrl) as Observable<AuthForm>;
  }
  getMailConfirmForm(): Observable<AuthForm> {
    return this.httpService.requestCall(AuthEndPoints.MAIL_CONFIRMATION_FORM, ApiMethod.GET, environment.apiAuthUrl) as Observable<AuthForm>;
  }

  isValidEmail(email: string): Observable<any> {
    return this.httpService.requestCall(AuthEndPoints.EMAIL_REGISTERED, ApiMethod.GET, environment.apiAuthUrl, email)
          .pipe(map( res => res.status));
  }


}
