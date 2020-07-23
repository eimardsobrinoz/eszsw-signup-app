import { ErrorFormMessage } from '../interfaces/error-form-message.interface';

export class CustomInput {
    isRequired: boolean;
    label: string;
    errorMsg: ErrorFormMessage;
    name:string;
    type?:string;
    pattern?:string;
}
