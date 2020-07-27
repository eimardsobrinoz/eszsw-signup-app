import { AuthFormStatus } from './../../interfaces/auth-validation.inteface';
import { ErrorFormMessage } from './../../interfaces/error-form-message.interface';
import { Component, OnInit, Input, Self, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor, Validator, AbstractControl, ValidatorFn, Validators,
  NgControl, AsyncValidatorFn
} from '@angular/forms';
import { AuthValidation } from '../../interfaces/auth-validation.inteface';
import { AuthService } from 'projects/eszsw-signup-app/src/app/core/services/auth-service/auth.service';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'eszsw-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {

  @ViewChild('input') input: ElementRef;
  @Input() type: string = 'text';
  @Input() controlValidation: AuthValidation;
  @Input() pattern: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() errorMsg: ErrorFormMessage;

  public subscriptions: Subscription[];
  public isDisabled: boolean;
  public control: AbstractControl | null;

  constructor(@Self() private controlDirective: NgControl, private authService: AuthService) {
    controlDirective.valueAccessor = this;
  }

  ngOnInit(): void {
    this.initialize();
    setTimeout(() => this.setValidation(), 0);
  }

  onChange(event: Event) {
  }

  onTouched() { }

  writeValue(el: any): void {
    if (this.input) {
      this.input.nativeElement.value = el;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
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

  public initialize(): void {
    this.subscriptions = [];
  }

  public setValidation(): void {
    if (this.controlDirective && this.controlDirective.control) {
      this.control = this.controlDirective.control;
      let syncValidators: ValidatorFn[] = [];
      let asyncValidators: AsyncValidatorFn[] = [];

      if (this.control.validator) {
        syncValidators = [this.control.validator];
      }
      if (this.control.asyncValidator) {
        asyncValidators = [this.control.asyncValidator];;
      }

      this.setSyncronousValidation(syncValidators);
      this.setASyncronousValidation(asyncValidators);

      this.control.setValidators(syncValidators);
      this.control.setAsyncValidators(asyncValidators);
      this.control.updateValueAndValidity();
    }
  }

  public setSyncronousValidation(syncValidators: ValidatorFn[]): void {
    if (this.controlValidation.required) {
      syncValidators.push(Validators.required);
    } else {
      this.control?.clearAsyncValidators();
    }
    if (this.controlValidation.pattern) {
      syncValidators.push(Validators.pattern(this.controlValidation.pattern));
    }
    if (this.controlValidation.email) {
      syncValidators.push(Validators.email);
    }
    if (this.controlValidation.minLength) {
      syncValidators.push(Validators.minLength(this.controlValidation.minLength));
    }
    if (this.controlValidation.lowerUppercaseFormat) {
      syncValidators.push(this.lowercaseValidator);
    }
  }
  public setASyncronousValidation(asyncValidators: AsyncValidatorFn[]): void {
    if (this.controlValidation.available) {
      asyncValidators.push(this.availableMail.bind(this));
    }
  }

  public lowercaseValidator(c: AbstractControl): { [k: string]: boolean } | null {
    let regexLowercase = /[a-z]/g;
    let regexUppercase = /[A-Z]/g;
    if (regexLowercase.test(c.value) && regexUppercase.test(c.value)) {
      return null;
    } else {
      return { lowerUppercaseFormat: true }
    }
  }

  // Asyncronous Validation example
  public availableMail(control: AbstractControl): Promise<{ [k: string]: boolean } | null> {
    this.authService.isValidEmail(control.value);

    return new Promise<{ [k: string]: boolean } | null>((resolve, reject) => {
      // Emulating checking in the data Base if it is available with delay operator
      this.subscriptions.push(this.authService.isValidEmail(control.value)
        .pipe(
          delay(500)
        )
        .subscribe(
          status => {
            // test unhappy scenario typing 'email@error.co') or changing the flat status to false in mocks
            if (status && control.value !== 'email@error.co') {
              resolve(null);
            } else {
              resolve({ mailNotAvailable: true })
            }
          },
          error => reject()
        ));
    });
  }

  get isThereError(): boolean {
    let showError: boolean = false;
    if (this.control?.touched && this.control?.errors) {
      showError = true;
    }
    return showError;
  }

  get statusPending(): boolean {
    let pending: boolean = false;
    if (!this.control?.errors?.required && this.control?.dirty && this.control?.status == AuthFormStatus.PENDING) {
      pending = true;
    }
    return pending;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }


}
