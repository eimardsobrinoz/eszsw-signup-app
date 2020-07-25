import { RoutePath } from 'projects/eszsw-signup-app/src/app/core/enums/route.paths';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'auth' 
    },
    {
      path: RoutePath.HOME,
      loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) 
    },
    { 
      path: RoutePath.ADMIN,
      loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)},
    { 
      path: RoutePath.AUTH, 
      component: AuthComponent,
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
    },
    {
      path: '**',
      redirectTo: 'auth' 
    } 
  ];


export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true } );
