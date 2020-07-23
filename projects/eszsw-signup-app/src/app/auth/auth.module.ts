import { CustomInputComponent } from './shared/components/custom-input/custom-input.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { AuthFormComponent } from './shared/components/auth-form/auth-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
    CustomInputComponent,
    AuthFormComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
