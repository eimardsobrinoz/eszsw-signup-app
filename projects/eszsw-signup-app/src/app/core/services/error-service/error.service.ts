import { Injectable } from '@angular/core';
import { CustomErrorCodes, ClientError, SuccessCodes } from '../../enums/error-codes';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  whichError(errorCode: number, errorMessage: string) {
    switch(errorCode) {
      case CustomErrorCodes.UN_KNOWN:
        // 'Server is Down'
        break;
      case ClientError.HTTP_400_BAD_REQUEST:
        break;
      default:
        alert('Unkown Error Code');
    }
  }
  userNotification(notificationCode: number, notification: string) {
    switch(notificationCode) {
      case SuccessCodes.HTTP_200_OK:
        break;
      default:
        alert('Unkown Success Action');
    }
  }
}
