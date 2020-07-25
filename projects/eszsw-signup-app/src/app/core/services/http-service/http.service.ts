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

  requestCall(api: AuthEndPoints, method: ApiMethod, apiUrl:string = environment.apiUrl, data?: any): Observable<any> {
    let body = {};
    let response: Observable<any>;
    switch (method) {
      case ApiMethod.GET:
        response = this.http.get(`${apiUrl}${api}`);
          
        break;
      case ApiMethod.POST:
        if (data) {
          body = data;
        }
        response = this.http.post(`${apiUrl}${api}`, body);
          
        break;
      case ApiMethod.PUT:
        if (data) {
          body = data;
        }
        response = this.http.put(`${apiUrl}${api}`, body);
          
        break;
      case ApiMethod.DELETE:
        response = this.http.delete(`${apiUrl}${api}`);
          
        break;
      default:
        response = this.http.get(`${apiUrl}${api}`);
          
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
