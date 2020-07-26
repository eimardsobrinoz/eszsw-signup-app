import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthForm } from '../../../shared/interfaces/auth-form.interface';
import { AuthService } from 'projects/eszsw-signup-app/src/app/core/services/auth-service/auth.service';
import { AuthComponentsTag } from 'projects/eszsw-signup-app/src/app/core/enums/component-tags';

@Component({
  selector: 'eszsw-mail-confirm',
  templateUrl: './mail-confirm.component.html',
  styleUrls: ['./mail-confirm.component.scss']
})
export class MailConfirmComponent implements OnInit {

  mailConfirmForm: AuthForm | Observable<AuthForm>;
  mailConfirmtxt: string;
  textLink: string;
  linkLbl: string;
  linkPath: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.getFormData();
    this.mailConfirmtxt = 'Please input your email again and we will send you a confirmation mail in order to verify your identity';
    this.textLink = 'Better to go back?';
    this.linkLbl = 'Sign In!';
    this.linkPath = '';
  }
  getFormData(): void {
    this.mailConfirmForm = this.authService.getMailConfirmForm();
  }

  get getComponentTag() {
    return AuthComponentsTag.MAIL_CONFIRMATION;
  }

}

