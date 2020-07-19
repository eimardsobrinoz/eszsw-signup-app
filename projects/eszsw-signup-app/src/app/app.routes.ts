import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'auth' 
    },
    {
      path: 'home',
      loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) 
    },
    { 
      path: 'admin',
      loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)},
    { 
      path: 'auth', 
      component: AuthComponent,
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
    },
    {
      path: '**',
      redirectTo: 'auth' 
    } 
  ];


export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true } );
