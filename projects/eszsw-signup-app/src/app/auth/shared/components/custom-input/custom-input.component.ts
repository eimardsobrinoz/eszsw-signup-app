import { ErrorFormMessage } from './../../interfaces/error-form-message.interface';
import { Component, OnInit, Input, ViewChild, ElementRef, Self, Optional, forwardRef } from '@angular/core';
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, AbstractControl,
  ValidatorFn, Validators, NG_VALIDATORS, NgControl, NgForm
} from '@angular/forms';

@Component({
  selector: 'eszsw-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements ControlValueAccessor, Validator, OnInit {


  @ViewChild('input') input: ElementRef;
  public disabled: boolean;

  @Input() type: string = 'text';
  @Input() isRequired: boolean = false;
  @Input() pattern: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() errorMsg: ErrorFormMessage;

  constructor(@Self() public controlAux: NgControl) {
    this.controlAux.valueAccessor = this;
  }

  ngOnInit() {
    this.setValidation();
  }
  
  setValidation() {
    const control = this.controlAux.control;
    if (control) {
      let validators: ValidatorFn[] = [];
      if (control.validator) {
        validators = [control.validator];
      }
      if (this.isRequired) {
        validators.push(Validators.required);
      }
      if (this.pattern) {
        validators.push(Validators.pattern(this.pattern));
      }
      control.setValidators(validators);
      control.updateValueAndValidity();
    }
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
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    return validators;
  }

  get showError(): boolean {
    let showError: boolean = false;
    if (this.controlAux && this.controlAux.control && !this.controlAux.control.valid
      && this.controlAux.control.touched) {
      showError = true
    }
    return showError;
  }


}
