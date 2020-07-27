import { ErrorService } from './../services/error-service/error.service';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private errorService:ErrorService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            retry(1),
            catchError( (err: HttpErrorResponse) =>  this.handleError(err)
        ))
    }

  /**
   * This function is used to handle the received error when calling any api 
   * @params error
   */
    handleError(error: HttpErrorResponse): Observable<HttpEvent<any>> {
    let error$: Observable<HttpEvent<any>> = throwError(error);
    if(error.error instanceof ErrorEvent) {
      console.log('An error occurred: ',error.message);
    } else {
      this.errorService.whichError(error.status, error.message);
      error$ = throwError( {error: error.message, status: error.status});
    }
    return error$;
  }
}