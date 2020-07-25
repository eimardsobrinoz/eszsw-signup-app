import { AuthFormComponent } from './../../../auth/shared/components/auth-form/auth-form.component';
import { SignupComponent } from './../../../auth/pages/signup/signup.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate,  } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompleteFormGuard implements CanDeactivate<SignupComponent> {
  canDeactivate(comp: SignupComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const formComponent: AuthFormComponent = comp.formComponent;

    // Instead of window.confirm, It is perfect to build a custom confirm dialog component 
    return comp.formComponent.formGroup.pristine || window.confirm('Form not completed! Are you sure you want to exit?');
  }
  
}
