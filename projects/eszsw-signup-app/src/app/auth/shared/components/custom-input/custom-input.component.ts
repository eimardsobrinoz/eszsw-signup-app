import { ErrorFormMessage } from './../../interfaces/error-form-message.interface';
import { Component, OnInit, Input, ViewChild, ElementRef, Self, Optional, forwardRef } from '@angular/core';
import {
  ControlValueAccessor, Validator, AbstractControl,
  ValidatorFn, Validators, NgControl, AsyncValidatorFn
} from '@angular/forms';
import { AuthValidation } from '../../interfaces/auth-validation.inteface';
import { AuthService } from 'projects/eszsw-signup-app/src/app/core/services/auth-service/auth.service';

@Component({
  selector: 'eszsw-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements ControlValueAccessor, Validator, OnInit {


  @ViewChild('input') input: ElementRef;
  @Input() type: string = 'text';
  @Input() controlValidation: AuthValidation;
  @Input() pattern: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() errorMsg: ErrorFormMessage;
  public disabled: boolean;
  public control: AbstractControl | null;

  constructor(@Self() public controlAux: NgControl, private authService: AuthService) {
    controlAux.valueAccessor = this;
    this.control = controlAux.control;
  }

  ngOnInit() {
    this.setValidation();
  }
  
  setValidation() {
    const control = this.controlAux.control;
    let syncValidators: ValidatorFn[] = [];
    let asyncValidators: AsyncValidatorFn[] = [];
    if (control) {
      if (control.validator) {  
        syncValidators = [control.validator];
      }
      if (control.asyncValidator) {  
        asyncValidators = [control.asyncValidator];;
      }
      
      this.setSyncronousValidation(syncValidators);
      this.setASyncronousValidation(asyncValidators);

      control.setValidators(syncValidators);
      control.setAsyncValidators(asyncValidators);
      control.updateValueAndValidity();
      console.log('Validators insideee emilio: ', control);
    }
    // console.log('Validators outside emilio: ', control);

  }

  onChange(event: Event) { }

  onTouched() { }

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(c: AbstractControl): { [key: string]: any; } {
    const validators: ValidatorFn[] = [];
    if (this.controlValidation.required) {
      validators.push(Validators.required);
    }
    if (this.controlValidation.pattern) {
      validators.push(Validators.pattern(this.controlValidation.pattern));
    }

    return validators;
  }

  setSyncronousValidation(syncValidators: ValidatorFn[]) {
    if (this.controlValidation.required) {
      syncValidators.push(Validators.required);
    }
    if (this.controlValidation.pattern) {
      syncValidators.push(Validators.pattern(this.controlValidation.pattern));
    }
    
    if (this.controlValidation.minLength) {
      syncValidators.push(Validators.minLength(this.controlValidation.minLength));
    }
    if (this.controlValidation.lowerUppercaseFormat) {
      syncValidators.push(this.lowercaseValidator);
    }
  }
  setASyncronousValidation(asyncValidators: AsyncValidatorFn[]) {
    if (this.controlValidation.available) {
      asyncValidators.push(this.availableMail.bind(this));
    }
  }
 

  lowercaseValidator(c: AbstractControl): { [k: string]: boolean } | null {
    let regexLowercase = /[a-z]/g;
    let regexUppercase = /[A-Z]/g;
    if (regexLowercase.test(c.value) && regexUppercase.test(c.value)) {
      return null;
    } else {
      return { lowerUppercaseFormat: true }
    }
  }

  // Asyncronous Validation example
  availableMail(control: AbstractControl): Promise<{[k: string]: boolean} | null> {
    return new Promise<{[k: string]: boolean} | null>( (resolve, reject) => {
      // Emulating checking in the data Base if it is available
      setTimeout(()=> {
        this.authService.isValidEmail(control.value).subscribe(
          status => {
            if (status) {
              resolve(null);
            } else {
              resolve({mailNotAvailable: true })
           }
          },
          error => reject()
        );
      }, 3000);
    });
  }

  get isThereError(): boolean {
    let showError: boolean = false;
    if (this.controlAux.control?.touched && this.controlAux.control?.errors) {
        showError = true; 
    }       
    return showError;
  }


}
