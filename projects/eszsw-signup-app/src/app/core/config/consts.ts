// REST Apis
export enum ApiMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

// Authenticate enpoints
export enum AuthEndPoints {
    LOGIN = "/auth/token/login/",
    CURRENT_USER = "/auth/users/me/",
    LOGOUT_USER = "/auth/token/logout",
    REGISTER = "/auth/users/",
    CHECK_SERVER = "/checkserver/"
}

// REST Apis
export enum AuthComponentsTag {
    LOGIN = "Login",
    SING_UP = "Signup",
    EMAIL_CONFIRM = "EmailConfirm",
    FORGOT_PASSWORD = "ForgotPassword",
    RESET_PASSWORD = "ResetPassword"
}