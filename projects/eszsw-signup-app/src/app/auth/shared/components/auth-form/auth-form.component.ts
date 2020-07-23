import { AuthForm } from './../../interfaces/auth-form.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'eszsw-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit  {
 
  @Input() form: AuthForm;
  @Output() onSubmitForm:EventEmitter<NgForm> = new EventEmitter<NgForm>();

  constructor() { }

  ngOnInit() {
    console.log("Emilioo: ", this.form);
  }

  onTouch() { }

  onSubmit(f: NgForm) {
    console.log(f);
    this.onSubmitForm.emit(f);
  }

}

