import { RoutePath } from 'projects/eszsw-signup-app/src/app/core/enums/route.paths';
import { User } from './../../interfaces/user-interface';
import { environment } from 'projects/eszsw-signup-app/src/environments/environment';
import { HttpService } from './../http-service/http.service';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage-service/storage.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthEndPoints, ApiMethod } from '../../enums/endpoints';
import { AuthForm } from '../../../auth/shared/interfaces/auth-form.interface';
import { map } from 'rxjs/operators';
import { AccountService } from '../account-service/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: HttpService,
    private storage: StorageService,
    private router: Router,
    private accountService: AccountService
  ) { }

  public signUp(user: User): Observable<User> {
    // this.storage.saveToken(res.auth_token);
    this.storage.setLocalObject('user', JSON.stringify(user));
    // this.activeUser$.next(user);
    return this.httpService.requestCall(AuthEndPoints.SIGNUP, ApiMethod.POST, environment.apiUrl, user) as Observable<User>;
  }

  public logout(): void {
    localStorage.removeItem('user');
    // this.activeUser$.next(null);
    this.accountService.setActiveUser(null);
    this.router.navigate([RoutePath.LOGIN]);
  }

  public getLoginForm(): Observable<AuthForm>  {
    return this.httpService.requestCall(AuthEndPoints.LOGIN_FORM, ApiMethod.GET, environment.apiAuthUrl) as Observable<AuthForm>;
  }
  public getSignUpForm(): Observable<AuthForm> {
    return this.httpService.requestCall(AuthEndPoints.SIGN_UP_FORM, ApiMethod.GET, environment.apiAuthUrl) as Observable<AuthForm>;
  }
  public getResetPasswordForm(): Observable<AuthForm> {
    return this.httpService.requestCall(AuthEndPoints.RESET_PASSWORD_FORM, ApiMethod.GET, environment.apiAuthUrl) as Observable<AuthForm>;
  }
  public getMailConfirmForm(): Observable<AuthForm> {
    return this.httpService.requestCall(AuthEndPoints.MAIL_CONFIRMATION_FORM, ApiMethod.GET, environment.apiAuthUrl) as Observable<AuthForm>;
  }

  public isValidEmail(email: string): Observable<any> {
    return this.httpService.requestCall(AuthEndPoints.EMAIL_REGISTERED, ApiMethod.GET, environment.apiAuthUrl, email)
          .pipe(map( res => res.status));
  }

}
