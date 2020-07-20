import { Component, OnInit } from '@angular/core';
import { AuthComponentsTag } from '../../../core/config/consts';

@Component({
  selector: 'esz-sw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  get getComponentTag(){
    return AuthComponentsTag.LOGIN;
  }

}
