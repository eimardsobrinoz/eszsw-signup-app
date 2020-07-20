import { Component, OnInit } from '@angular/core';
import { AuthComponentsTag } from '../../../core/config/consts';

@Component({
  selector: 'esz-sw-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  get getComponentTag(){
    return AuthComponentsTag.SING_UP;
  }
}
