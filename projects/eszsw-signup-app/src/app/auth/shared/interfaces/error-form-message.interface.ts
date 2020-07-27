export interface ErrorFormMessage {
  required: string;
  format?: string;
  minLength?: string;
  lowerUppercaseFormat?: string;
  mailNotAvailable?: string;
  containsOthersControlsValue?:string;
}