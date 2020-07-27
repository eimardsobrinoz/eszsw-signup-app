import { FormGroup } from '@angular/forms';
import { RoutePath } from '../../../core/enums/route.paths';
import { AuthService } from 'projects/eszsw-signup-app/src/app/core/services/auth-service/auth.service';
import { AuthForm } from './../../shared/interfaces/auth-form.interface';
import { Component, OnInit } from '@angular/core';
import { AuthComponentsTag } from '../../../core/enums/component-tags';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'eszsw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: AuthForm | Observable<AuthForm>;
  public textLink: string;
  public linkLbl: string;
  public linkPath: string;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initialize();
  }

  public initialize(): void {
    this.getFormData();
    this.textLink = 'Forgot your password?';
    this.linkLbl = 'Change it now!';
    this.linkPath = RoutePath.RESET_PASSWORD;
  }

  public getFormData(): void {
    this.loginForm =  this.authService.getLoginForm();
  }

  public login(form: FormGroup): void {
    this.router.navigate([RoutePath.MAIL_CONFIRMATION], { relativeTo: this.route });
  }

  get getComponentTag() {
    return AuthComponentsTag.LOGIN;
  }

}
