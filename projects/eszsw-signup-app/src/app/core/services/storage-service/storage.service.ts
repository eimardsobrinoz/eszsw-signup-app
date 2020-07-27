import { Injectable } from '@angular/core';
import { UtilService } from '../util-service/util.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private util: UtilService) {}

  public saveToken(token: string): void {
    localStorage.setItem('$esz-token', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('$esz-token');
  }

  public removeToken(): void {
    localStorage.removeItem('$esz-token');
  }

  public setLocalObject(key: string, value:any): void {
    localStorage.setItem(key, this.util.encrypt(JSON.stringify(value)));
  }

  public getLocalObject(key: string):string {
    let localObj: string = ''; 
    const item: string | null = localStorage.getItem(key);
    if (item) {
      localObj = JSON.parse(this.util.decrypt(item));
    }
    return localObj;
  }
 
}
