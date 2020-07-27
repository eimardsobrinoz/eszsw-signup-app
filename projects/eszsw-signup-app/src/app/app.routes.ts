import { AuthGuard } from './core/guards/auth/auth.guard';
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
      canActivate: [AuthGuard],
      loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) 
    },
    { 
      path: RoutePath.ADMIN,
      canActivate: [AuthGuard],
      // Interesting to use canLoad guard, to inject an step before loading the children routes.
      // canLoad:[adminPermisionsGuard]
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
