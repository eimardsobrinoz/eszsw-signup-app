import { RoutePath } from 'projects/eszsw-signup-app/src/app/core/enums/route.paths';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../../services/account-service/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public accountService: AccountService,
    public router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userAllowed: boolean = false;
    if ( this.accountService.isUserLogged() ) {
      userAllowed = true;
    } else {
      // I can be displayed any message, dialog, alert component if considered
      console.log( 'User not allowed' );
      this.router.navigate([RoutePath.AUTH]);
      userAllowed = false;
    }
    return userAllowed;
  }
  
}
