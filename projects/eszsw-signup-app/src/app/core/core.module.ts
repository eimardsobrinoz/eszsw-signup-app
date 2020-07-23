import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './layout/header/header.component';
import { AsideLeftComponent } from './layout/aside-left/aside-left.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    AsideLeftComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class CoreModule { }
