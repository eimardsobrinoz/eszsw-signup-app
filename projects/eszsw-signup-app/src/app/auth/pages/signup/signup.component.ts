import { Component, OnInit } from '@angular/core';
import { AuthComponentsTag } from '../../../core/config/consts';
import { AuthForm } from '../../shared/interfaces/auth-form.interface';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'eszsw-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: AuthForm;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.signUpForm = this.authService.getSignUpForm;
  }

  get getComponentTag(){
    return AuthComponentsTag.SING_UP;
  }
}
