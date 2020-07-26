import { Injectable } from '@angular/core';
import { CustomErrorCodes, ClientError } from '../../enums/error-codes';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private authService: AuthService) { }

  public whichError(errorCode: number, errorMessage: string):void {
    let errorType: string = '';
    // It allows us to navigate to specific error screen or generic on, tracking the error message
    switch(errorCode) {
      case CustomErrorCodes.UN_KNOWN:
        break;
      case ClientError.HTTP_401_UNAUTHORIZED:
        // Logout anauthorized user
        errorType = 'User Unauthorized';
        this.authService.logout();
        break;
      case ClientError.HTTP_400_BAD_REQUEST:
        break;
      default:
        alert('Unkown Error Code');
    }
    this.notifyUser(errorType,errorMessage);
  }

  // We can send error information to Kibana to track the errors
  public notifyUser(errorType:string, notification: string):void {
    alert(errorType + notification);
  }
}
