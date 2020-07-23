import { RoutePath } from '../../../core/enums/route.paths';
import { AuthService } from 'projects/eszsw-signup-app/src/app/core/services/auth-service/auth.service';
import { AuthForm } from './../../shared/interfaces/auth-form.interface';
import { Component, OnInit } from '@angular/core';
import { AuthComponentsTag } from '../../../core/config/consts';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'eszsw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: AuthForm;
  textLink: string;
  linkLbl: string;
  linkPath: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.getFormData();
    this.textLink = 'Forgot your password?';
    this.linkLbl = 'Change it now!';
    this.linkPath = RoutePath.RESET_PASSWORD;
  }

  getFormData(): void {
    this.authService.getLoginForm().subscribe(
      (loginForm: AuthForm) => this.loginForm = loginForm
    );
  }

  get getComponentTag() {
    return AuthComponentsTag.LOGIN;
  }


  login(form: NgForm) {
    console.log('Trying to log in', form);

    this.router.navigate([RoutePath.MAIL_CONFIRMATION]);
  }

}
