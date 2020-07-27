import { AuthComponentsTag } from '../core/enums/component-tags';
import { SignupComponent } from './pages/signup/signup.component';
import { Component, OnInit, ViewChild, ViewEncapsulation, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, ActivationEnd } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { filter, map, first } from 'rxjs/operators';
import { ComponentTag } from '../core/interfaces/component-tag.interface';
import { RoutePath } from '../core/enums/route.paths';
import { ResetPasswordComponent } from './pages/reset-password/reset-password/reset-password.component';
import { MailConfirmComponent } from './pages/mail-confirm/mail-confirm/mail-confirm.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'eszsw-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit, OnDestroy{
  @ViewChild(RouterOutlet) ro: RouterOutlet;

  public subscription: Subscription[];
  public textLoginLink: string;
  public loginLinkLbl: string;
  public loginLinkPath: string; 
  public textSignupLink: string; 
  public signupLinkLbl: string; 
  public signupLinkPath: string; 

  public context: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initialize();
    this.getComponentTag();
  }

  public getComponentTag(): void {
    this.subscription.push(this.router.events.pipe(
      filter((event:ActivationEnd) => event instanceof ActivationEnd),
      first(), // Instead of first, I can filter again ActivationEnd without using above ViewChild and RouterOutlet
      map( (event:ActivationEnd) => event.snapshot.data) 
    ).subscribe((data: ComponentTag) => this.context =  data.componentTag));
  }

  public onActivate(): void {
    this.getCurrentContext();
  }

  public initialize(): void {
    this.subscription = [];
    this.textLoginLink= 'Not a Member?';
    this.loginLinkLbl= 'Sign up!';
    this.loginLinkPath= RoutePath.SIGN_UP;
    this.textSignupLink= "You've already an account?";
    this.signupLinkLbl= 'Sign in!';
    this.signupLinkPath= '';
  }

  // Just to show two ways of obtaining the data
  public getCurrentContext(): void {
    if (this.ro && this.ro.component) {
      this.context = (this.ro.component as LoginComponent | SignupComponent | ResetPasswordComponent | MailConfirmComponent).getComponentTag;
    }
  }

  get inSignup(): boolean {
    let inSignup: boolean = false;
    if (this.context === AuthComponentsTag.SING_UP) {
      inSignup = true;
    }
    return inSignup;
  }

  ngOnDestroy(): void {
    this.subscription.forEach( subscription => subscription.unsubscribe());
  }
 
}
