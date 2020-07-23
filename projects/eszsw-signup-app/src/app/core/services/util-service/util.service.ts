import { Injectable } from '@angular/core';
// import { AES,enc } from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class UtilService {
  encrypKey: string = 'AIzaSyBnzbMr90FUKJOFHDErlHbX1WGIkBLYPE'

  constructor() { }

  /**
   * This function is used for description the data using crypto JS
   * @params data
   * @params key
   */

   decrypt(data: string, key:string = this.encrypKey): string {
    // return AES.decrypt(data, key).toString(enc.Utf8);
    return '';
   }

   /**
   * Encript using crypto JS
   * @params data
   * @params key
   */
    encrypt(data: string, key:string = this.encrypKey): string {
      // return AES.encrypt(data, key).toString();
      return '';
    }
  }