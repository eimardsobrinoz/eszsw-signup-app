import { AuthService } from 'projects/eszsw-signup-app/src/app/core/services/auth-service/auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthComponentsTag } from '../../../core/config/consts';
import { AuthForm } from '../../shared/interfaces/auth-form.interface';

@Component({
  selector: 'eszsw-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: AuthForm;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getFormData();
  }

  getFormData(): void {
    this.authService.getSignUpForm().subscribe(
      (signUpForm: AuthForm) => this.signUpForm = signUpForm
    );
  }

  get getComponentTag(){
    return AuthComponentsTag.SING_UP;
  }
}
