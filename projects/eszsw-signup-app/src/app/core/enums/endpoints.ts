export enum ApiMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

export enum AuthEndPoints {
    LOGIN = "/auth/token/login/",
    LOGOUT_USER = "/auth/token/logout",
    REFRESH_USER = "/auth/users/me/",
    SIGNUP = "/users",
    RESET_PASSWORD = "/auth/users/",
    MAIL_CONFIRMATION = "/auth/users/",
    LOGIN_FORM = "/loginForm",
    SIGN_UP_FORM = "/signupForm",
    RESET_PASSWORD_FORM = "/resetPasswordForm",
    MAIL_CONFIRMATION_FORM= "/mailConfirmationForm",
    EMAIL_REGISTERED= "/isValidEmail",
}