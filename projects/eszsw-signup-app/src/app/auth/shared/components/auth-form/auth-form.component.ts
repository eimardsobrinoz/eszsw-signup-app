import { Observable, isObservable } from 'rxjs';
import { AuthForm } from './../../interfaces/auth-form.interface';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'eszsw-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit  {
 
  @Input() formFormat$: AuthForm | Observable<AuthForm>;
  formFormat: AuthForm;
  @Output() onSubmitForm:EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  formGroup: FormGroup;

  constructor() { 
  }

  ngOnInit(): void {
    this.initialize();  
  }

  public initialize(): void {
    this.formGroup = new FormGroup({});
    if (isObservable<AuthForm>(this.formFormat$)){
        this.obtainFormData();
    } else {
      this.formFormat =  this.formFormat$ as AuthForm;
      this.buildFormGroup();  
    }
  }

  public obtainFormData(): void {
    (this.formFormat$ as Observable<AuthForm>).subscribe(
      (form: AuthForm) => {
        this.formFormat = form;
        this.buildFormGroup();
      }
    );  
  }

  public buildFormGroup(): void {
    (this.formFormat as AuthForm).inputsControls.forEach( control => this.formGroup.addControl(control.name, new FormControl()));
  }


  public onTouch(): void { }

  public onSubmit(): void {
    this.onSubmitForm.emit(this.formGroup);
  }

}

