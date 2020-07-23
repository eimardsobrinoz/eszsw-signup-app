import { SignupComponent } from './pages/signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthComponent } from './auth.component';

const authRoutes: Routes = [
    {
      path: '',
      component: LoginComponent,
      data: { componentTag: 'Login'} 
    },
    {
      path: 'login',
      component: LoginComponent,
      data: { componentTag: 'Login'} 
    },
    {
      path: 'signup',
      component: SignupComponent,
      data: { componentTag: 'Signup'} 
    }
  ];


export const AUTH_ROUTES = RouterModule.forChild(authRoutes);
