import { RoutePath } from '../core/enums/route.paths';
import { MailConfirmComponent } from './pages/mail-confirm/mail-confirm/mail-confirm.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password/reset-password.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const authRoutes: Routes = [
    {
      path: '',
      component: LoginComponent,
      data: { componentTag: 'Login'} 
    },
    {
      path: RoutePath.LOGIN,
      component: LoginComponent,
      data: { componentTag: 'Login'} 
    },
    {
      path: RoutePath.SIGN_UP,
      component: SignupComponent,
      data: { componentTag: 'Signup'} 
    },
    {
      path: RoutePath.RESET_PASSWORD,
      component: ResetPasswordComponent,
      data: { componentTag: 'ResetPassword'} 
    },
    {
      path: RoutePath.MAIL_CONFIRMATION,
      component: MailConfirmComponent,
      data: { componentTag: 'MailConfirmation'} 
    }
  ];


export const AUTH_ROUTES = RouterModule.forChild(authRoutes);
