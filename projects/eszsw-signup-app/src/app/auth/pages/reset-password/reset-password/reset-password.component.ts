import { Component, OnInit } from '@angular/core';
import { AuthService } from 'projects/eszsw-signup-app/src/app/core/services/auth-service/auth.service';
import { AuthForm } from '../../../shared/interfaces/auth-form.interface';
import { RoutePath } from 'projects/eszsw-signup-app/src/app/core/enums/route.paths';

@Component({
  selector: 'eszsw-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: AuthForm;
  textLink:string;
  linkLbl:string;
  linkPath:string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.getFormData();
    this.textLink= 'You remembered your password?';
    this.linkLbl= 'Sign In!';
    this.linkPath= RoutePath.LOGIN;
  }

  getFormData(): void {
    this.authService.getResetPasswordForm().subscribe(
      (resetPasswordForm: AuthForm) => this.resetPasswordForm = resetPasswordForm
    );
  }

}
