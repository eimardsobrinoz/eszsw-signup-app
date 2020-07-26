import { Observable, isObservable } from 'rxjs';
import { AuthForm } from './../../interfaces/auth-form.interface';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthFormStatus } from '../../interfaces/auth-validation.inteface';

@Component({
  selector: 'eszsw-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit  {
 
  @Input() formFormat$: AuthForm | Observable<AuthForm>;
  @Output() onSubmitForm:EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  public formFormat: AuthForm;
  public formGroup: FormGroup;
  public formStatus: AuthFormStatus;
  public validForm: boolean;

  constructor() { 
  }

  ngOnInit(): void {
    this.initialize();  
    this.onFormChanges();
  }

  public initialize(): void {
    this.formGroup = new FormGroup({});
    this.formStatus = AuthFormStatus.INVALID;
    this.validForm = false;
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
    (this.formFormat as AuthForm)?.inputsControls?.forEach( control => this.formGroup.addControl(control.name, new FormControl('',[Validators.required])));
  }


  public onTouch(): void { }

  public onFormChanges():void {
    this.formGroup.statusChanges.subscribe( status =>{
      this.formStatus = status;
      if (this.formStatus == AuthFormStatus.VALID) {
        this.validForm = true;
      } else {
        this.validForm = false;
      }
    });
  }


  public onSubmit(): void {
    this.onSubmitForm.emit(this.formGroup);
  }

}

