import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { AuthFormComponent } from './components/auth-form/auth-form.component';



@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    //vendor
    CommonModule,
    RouterModule,
    //material
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    //vendor
    CommonModule,
    RouterModule,
    // added
    AuthFormComponent,
    //material
    MatCardModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
