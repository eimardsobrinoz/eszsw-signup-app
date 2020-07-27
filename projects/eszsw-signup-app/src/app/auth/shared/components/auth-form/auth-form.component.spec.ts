import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFormComponent } from './auth-form.component';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


// ISOLATED TESTS
describe('AuthFormComponent', () => {
  let component: AuthFormComponent;
  let fixture: ComponentFixture<AuthFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    buildEmptyFormGroup();
  });

  function buildEmptyFormGroup() {
      component.formGroup.addControl('firstname',new FormControl('', Validators.required));
      component.formGroup.addControl('lastname',new FormControl('', Validators.required));
      component.formGroup.addControl('password',new FormControl('', Validators.required));
      component.formGroup.addControl('email',new FormControl('', Validators.required));
  }
  function buildValidFormGroup() {
    component.formGroup.reset({});
    component.formGroup.addControl('firstname',new FormControl('Thomas', Validators.required));
    component.formGroup.addControl('lastname',new FormControl('Shelby', Validators.required));
    component.formGroup.addControl('password',new FormControl('MyPassword', Validators.required));
    component.formGroup.addControl('email',new FormControl('thomas@shelby.co.uk', Validators.required));
}

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component initial state', () => {
    expect(component.formGroup).toBeDefined();
    expect(component.formGroup.valid).toBeFalsy();
    expect(component.formGroup.invalid).toBeTruthy();
    expect(component.formGroup.status).toEqual('INVALID');
    expect(component.formGroup.errors).toBeFalsy();
  });

  xit('form should be valid when onSubmit()', () => {
      buildValidFormGroup();
      component.onSubmit();
      expect(component.formGroup.valid).toBeTruthy();
      expect(component.formGroup.invalid).toBeFalsy();
      expect(component.formGroup.status).toEqual('VALID');
      expect(component.formGroup.errors).toBeFalsy();
      expect(component.formGroup.value).toBeDefined();
  });
  it('email empty should be invalid', (() => {
    const emailControl: AbstractControl = component.formGroup.get("email") as AbstractControl;
    emailControl.setValue("");
    expect(emailControl.value).toEqual("");
    expect(emailControl.valid).toBeFalsy();
    expect(emailControl.invalid).toBeTruthy();
    expect(emailControl.status).toEqual("INVALID");
    expect(emailControl.errors?.required).toBeTruthy();
    emailControl.setValue("test");
    expect(emailControl.value).toEqual("test");
  }));

  it('email with bad format should be invalid', (() => {
    const emailControl: AbstractControl = component.formGroup.get("email") as AbstractControl;
    emailControl.setValidators(Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}"));
    emailControl.setValue("test");
    expect(emailControl.valid).toBeFalsy();
    expect(emailControl.invalid).toBeTruthy();
    expect(emailControl.status).toEqual("INVALID");
    expect(emailControl.errors?.pattern).toBeTruthy();
    emailControl.setValue("thomas@shelby.co.uk");
    expect(emailControl.value).toEqual("thomas@shelby.co.uk");
    expect(emailControl.valid).toBeTruthy();
    expect(emailControl.invalid).toBeFalsy();
    expect(emailControl.status).toEqual("VALID");
    expect(emailControl.errors?.pattern).toBeFalsy();
  }));

  it('firstname empty should be invalid', (() => {
    const firstName: AbstractControl = component.formGroup.get("firstname") as AbstractControl;
    firstName.setValue("");
    expect(firstName.value).toEqual("");
    expect(firstName.valid).toBeFalsy();
    expect(firstName.invalid).toBeTruthy();
    expect(firstName.status).toEqual("INVALID");
    expect(firstName.errors?.required).toBeTruthy();
    firstName.setValue("test");
    expect(firstName.value).toEqual("test");
    expect(firstName.valid).toBeTruthy();
    expect(firstName.invalid).toBeFalsy();
    expect(firstName.status).toEqual("VALID");
    expect(firstName.errors?.required).toBeFalsy();
  }));
  it('lastname empty should be invalid', (() => {
    const lastName: AbstractControl = component.formGroup.get("lastname") as AbstractControl;
    lastName.setValue("");
    expect(lastName.value).toEqual("");
    expect(lastName.valid).toBeFalsy();
    expect(lastName.invalid).toBeTruthy();
    expect(lastName.status).toEqual("INVALID");
    expect(lastName.errors?.required).toBeTruthy();
    lastName.setValue("test");
    expect(lastName.value).toEqual("test");
    expect(lastName.valid).toBeTruthy();
    expect(lastName.invalid).toBeFalsy();
    expect(lastName.status).toEqual("VALID");
    expect(lastName.errors?.required).toBeFalsy();
  }));

  it('password empty should be invalid', (() => {
    const passwordControl: AbstractControl = component.formGroup.get("password") as AbstractControl;
    passwordControl.setValue("");
    expect(passwordControl.value).toEqual("");
    expect(passwordControl.errors?.required).toBeTruthy();
    passwordControl.setValue("MyPassword");
    expect(passwordControl.value).toEqual("MyPassword");
  }));

  it('password with less than 8 charactares should be invalid', (() => {
    const passWord: AbstractControl = component.formGroup.get("password") as AbstractControl;
    passWord.setValidators(Validators.minLength(8));
    passWord.setValue("passwor");
    expect(passWord.valid).toBeFalsy();
    expect(passWord.invalid).toBeTruthy();
    expect(passWord.status).toEqual("INVALID");
    expect(passWord.errors?.minlength).toBeTruthy();
    passWord.setValue("password");
    expect(passWord.valid).toBeTruthy();
    expect(passWord.invalid).toBeFalsy();
    expect(passWord.status).toEqual("VALID");
    expect(passWord.errors?.minlength).toBeFalsy();
  }));
  
 
});





