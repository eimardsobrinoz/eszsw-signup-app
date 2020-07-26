import { RoutePath } from 'projects/eszsw-signup-app/src/app/core/enums/route.paths';
import { User } from './../../../core/interfaces/user-interface';
import { AuthFormComponent } from './../../shared/components/auth-form/auth-form.component';
import { AuthForm } from './../../shared/interfaces/auth-form.interface';
import { AuthService } from 'projects/eszsw-signup-app/src/app/core/services/auth-service/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthComponentsTag } from '../../../core/enums/component-tags';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { AccountService } from '../../../core/services/account-service/account.service';

@Component({
  selector: 'eszsw-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @ViewChild('formComponent') formComponent:AuthFormComponent;

  signUpForm: AuthForm | Observable<AuthForm>;

  constructor(private authService: AuthService, private accountService: AccountService,
              private router: Router) { }

  ngOnInit(): void {
    this.getFormData();
  }

  ngAfterViewInit(): void {
    // this.setPasswordValidations();
  }

  public getFormData(): void {
    // The way to get the data as considered. Potential of dynamic forms. From json, static services, backend, etc 
    this.signUpForm = this.authService.getSignUpForm();
  }

  public signUp(form: FormGroup): void {
    const user: User = {
      firstName: form.get('firstname')?.value,
      lastName: form.get('lastname')?.value,
      email: form.get('email')?.value
    }
    this.authService.signUp(user).subscribe( res => {
        console.log('Success: ',res);
        this.accountService.setActiveUser(user); 
        this.router.navigate([RoutePath.HOME]);
      },
      (error: Event) => {
        console.log('Error: ',error);
      }
    );
  }

  // setPasswordValidations() {
  //   const firstNameControl: any = this.formComponent.formGroup.controls['lastname'];
  //   console.log('Emilioo firstNAme control in signup: ', firstNameControl);
  // }

  get getComponentTag(){
    return AuthComponentsTag.SING_UP;
  }


}
