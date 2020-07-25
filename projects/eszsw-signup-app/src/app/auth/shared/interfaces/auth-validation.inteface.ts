export interface AuthValidation {
    required: boolean;
    pattern?: string;
    available?: boolean;
    minLength?: number;
    lowerUppercaseFormat?: boolean;
  }