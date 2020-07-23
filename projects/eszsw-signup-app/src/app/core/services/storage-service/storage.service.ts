import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../util-service/util.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private util: UtilService,
    private router:Router
  ) {}

  saveToken(token: string):void {
    localStorage.setItem('$esz-token', token);
  }
  getToken() {
    return localStorage.getItem('$esz-token');
  }
  removeToken() {
    localStorage.removeItem('$esz-token');
  }
  setLocalObject(key: string, value:any) {
    localStorage.setItem(key, this.util.encrypt(JSON.stringify(value)));
  }
  getLocalObject(key: string):string {
    let localObj: string = ''; 
    const item: string | null = localStorage.getItem(key);
    if (item) {
      localObj = JSON.parse(this.util.decrypt(item));
    }
    return localObj;
  }
 
}
