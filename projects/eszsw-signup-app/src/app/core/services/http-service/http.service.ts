import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../error-service/error.service';
import { environment } from 'projects/eszsw-signup-app/src/environments/environment';
import { catchError } from 'rxjs/operators';
import { AuthEndPoints, ApiMethod } from '../../enums/endpoints';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  methods: ApiMethod;
  constructor(
    private http: HttpClient,
    private _error: ErrorService
  ) { }

  /**
  * This function is used to handle how to make api calls providing the method, the api and data is needed (put/post).
  * @params method
  * @params api
  * @params data
  */

  requestCall(api: AuthEndPoints, method: ApiMethod, data?: Observable<any>) {
    let body = {};
    let response;
    switch (method) {
      case ApiMethod.GET:
        response = this.http.get(`${environment.apiUrl}${api}`);
          
        break;
      case ApiMethod.POST:
        if (data) {
          body = data;
        }
        response = this.http.post(`${environment.apiUrl}${api}`, body);
          
        break;
      case ApiMethod.PUT:
        if (data) {
          body = data;
        }
        response = this.http.put(`${environment.apiUrl}${api}`, body);
          
        break;
      case ApiMethod.DELETE:
        response = this.http.delete(`${environment.apiUrl}${api}`);
          
        break;
      default:
        response = this.http.get(`${environment.apiUrl}${api}`);
          
        break;
    }
    return response;
  }

  /**
   * This function is used to handle the received error when calling any api 
   * @params error
   */
  // handleError(error: HttpErrorResponse, self) {
  //   if(error.error instanceof ErrorEvent) {
  //     console.log('An error occurred: ',error.error.message);
  //   } else {
  //     this._error.whichError(error.status, error.error.message);
  //     return throwError( {error: error.message, status: error.status});
  //   }
  // }
}
