import { AuthService } from './../../../core/services/auth.service';
import { AuthForm } from './../../shared/interfaces/auth-form.interface';
import { Component, OnInit } from '@angular/core';
import { AuthComponentsTag } from '../../../core/config/consts';
import { CustomInput } from '../../shared/models/custom-input';

@Component({
  selector: 'eszsw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: AuthForm;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.authService.getLoginForm;
  }

  get getComponentTag(){
    return AuthComponentsTag.LOGIN;
  }

}
