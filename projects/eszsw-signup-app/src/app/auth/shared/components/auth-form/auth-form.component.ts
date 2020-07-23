import { AuthForm } from './../../interfaces/auth-form.interface';
import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'eszsw-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit  {
 
  @Input() form: AuthForm;
  constructor() { }

  ngOnInit() {
    console.log("Emilioo: ", this.form);
  }

  onTouch() { }

  onSubmit(f: NgForm) {
    console.log(f);
  }

}

