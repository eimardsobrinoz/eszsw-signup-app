import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading/loading.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [LoadingComponent],
  imports: [
    //vendor
    CommonModule,
    RouterModule,
    // Material
    MatIconModule
  ],
  exports: [
    //vendor
    CommonModule,
    RouterModule,
    // Material
    MatIconModule,
    //added
    LoadingComponent
  ]
})
export class SharedModule { }
