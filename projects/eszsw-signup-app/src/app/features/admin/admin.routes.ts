import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
    {
      path: '',
      component: AdminComponent
    } 
];


export const ADMIN_ROUTES = RouterModule.forChild(adminRoutes);
