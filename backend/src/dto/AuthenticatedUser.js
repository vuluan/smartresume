export default class AuthenticatedUser {
    constructor(email, accessToken) {
        this.email = email;
        this.accessToken = accessToken;
    }
}