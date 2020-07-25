import { AuthFormComponent } from './../../shared/components/auth-form/auth-form.component';
import { AuthForm } from './../../shared/interfaces/auth-form.interface';
import { AuthService } from 'projects/eszsw-signup-app/src/app/core/services/auth-service/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthComponentsTag } from '../../../core/enums/component-tags';
import { AbstractControl, NgControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'eszsw-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @ViewChild('formComponent') formComponent:AuthFormComponent;

  signUpForm: AuthForm | Observable<AuthForm>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getFormData();
  }

  getFormData(): void {
    this.signUpForm = this.authService.getSignUpForm();
  }

  get getComponentTag(){
    return AuthComponentsTag.SING_UP;
  }


}
