import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading/loading.component';



@NgModule({
  declarations: [LoadingComponent],
  imports: [
    //vendor
    CommonModule,
    RouterModule,
  ],
  exports: [
    //vendor
    CommonModule,
    RouterModule,
    //added
    LoadingComponent
  ]
})
export class SharedModule { }
