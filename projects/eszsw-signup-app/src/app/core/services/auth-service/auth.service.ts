import { environment } from 'projects/eszsw-signup-app/src/environments/environment';
import { HttpService } from './../http-service/http.service';
import { Injectable, NgZone } from '@angular/core';
import { StorageService } from '../storage-service/storage.service';
import { Router } from '@angular/router';
import { ErrorService } from '../error-service/error.service';
import { Observable } from 'rxjs';
import { AuthEndPoints, ApiMethod } from '../../enums/endpoints';
import { AuthForm } from '../../../auth/shared/interfaces/auth-form.interface';
import { CustomInput } from '../../../auth/shared/models/custom-input-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $activeUser: Observable<boolean>;

  constructor(
    private httpService: HttpService,
    private storage: StorageService,
    private router: Router,
    private error: ErrorService,
    // public afAuth: AngularFireAuth, // Inject Firebase auth service
    public ngZone: NgZone // NgZone service to remove outside scope warning
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


  // verification email

// SendVerificationMail() {
//   return this.afAuth.auth.currentUser.sendEmailVerification()
//   .then(() => {
//     this.router.navigate(['<!-- enter your route name here -->']);
//   })
// }


//   SignUp(email, password) {
//     return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
//       .then((result) => {
//         this.SendVerificationMail(); // Sending email verification notification, when new user registers
//       }).catch((error) => {
//         window.alert(error.message)
//       })
//   }

//   SignIn(email, password) {
//     return this.afAuth.auth.signInWithEmailAndPassword(email, password)
//       .then((result) => {
//         if (result.user.emailVerified !== true) {
//           this.SendVerificationMail();
//           window.alert('Please validate your email address. Kindly check your inbox.');
//         } else {
//           this.ngZone.run(() => {
//             this.router.navigate(['<!-- enter your route name here -->']);
//           });
//         }
//         this.SetUserData(result.user);
//       }).catch((error) => {
//         window.alert(error.message)
//       })
//   }

}
