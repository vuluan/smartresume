export default class AuthenticatedUser {
    constructor(userId, email, accessToken) {
        this.userId = userId;
        this.email = email;
        this.accessToken = accessToken;
    }
}