import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const homeRoutes: Routes = [
    {
      path: '',
      component: HomeComponent
    } 
];


export const HOME_ROUTES = RouterModule.forChild(homeRoutes);
