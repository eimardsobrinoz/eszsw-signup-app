import { AuthComponentsTag } from './../core/config/consts';
import { SignupComponent } from './pages/signup/signup.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, ActivatedRoute, Router, NavigationEnd, ActivationEnd } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { filter, map, first } from 'rxjs/operators';
import { ComponentTag } from '../core/interfaces/component-tag.interface';

@Component({
  selector: 'eszsw-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @ViewChild(RouterOutlet) ro: RouterOutlet;
  public context: string;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event:ActivationEnd) => event instanceof ActivationEnd),
      first(), // Instead of first, I can filter again ActivationEnd without using above ViewChild and RouterOutlet
      map( (event:ActivationEnd) => event.snapshot.data) 
    ).subscribe((data: ComponentTag) => this.context =  data.componentTag);
  }

  ngOnInit(): void {

  }

  onActivate(): void {
    this.getCurrentContext();
  }

  // Just to show two ways of obtaining the data
  getCurrentContext() {
    if (this.ro && this.ro.component) {
      this.context = (this.ro.component as LoginComponent | SignupComponent).getComponentTag;
    }
  }

  get inLogin(): boolean {
    let inlogin: boolean = false;
    if (this.context === AuthComponentsTag.LOGIN) {
      inlogin = true;
    }
    return inlogin;
  }
  get inSignUp(): boolean {
    let inSignup: boolean = false;
    if (this.context === AuthComponentsTag.SING_UP) {
      inSignup = true;
    }
    return inSignup;
  }
}
