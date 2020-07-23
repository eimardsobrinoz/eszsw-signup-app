import { CustomInput } from './../../auth/shared/models/custom-input';
import { AuthForm } from './../../auth/shared/interfaces/auth-form.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get getLoginForm() {
    let loginForm: AuthForm = {
      "inputsControls": [],
      "btnLabel": "Sign In"
    };
    let inputs: CustomInput[] = [
      {
        "isRequired": true,
        "label": "Email",
        "errorMsg": {
          "emptyLbl": "Enter email",
          "formatLbl": "Error in email format"
        },
        "name": "Email",
        "type":"mail",
        "pattern": "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}"
      },
      {
        "isRequired": true,
        "label": "Password",
        "errorMsg": {
          "emptyLbl": "Enter password",
          "formatLbl": "Error in password format"
        },
        "name": "Password",
        "type": "password"
      }
    ]
    loginForm.inputsControls = inputs;
    return loginForm;
  }

  get getSignUpForm() {
    let signUpForm: AuthForm = {
      "inputsControls": [],
      "btnLabel": "Sign Up"
    };
    let inputs: CustomInput[] = [
      {
        "isRequired": true,
        "label": "Username",
        "errorMsg": {
          "emptyLbl": "Enter usermane"
        },
        "name": "Username"
      },
      {
        "isRequired": true,
        "label": "Email",
        "errorMsg": {
          "emptyLbl": "Enter email",
          "formatLbl": "Error in email format"
        },
        "name": "Email",
        "type":"email",
        "pattern": "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}"
      },
      {
        "isRequired": true,
        "label": "Password",
        "errorMsg": {
          "emptyLbl": "Enter password",
          "formatLbl": "Error in password format"
        },
        "name": "Password",
        "type": "password"
      }
    ]
    signUpForm.inputsControls = inputs;
    return signUpForm;
  }

}
