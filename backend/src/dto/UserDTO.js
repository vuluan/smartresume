export class UserDTO {
    constructor(email, password, confirmedPassword) {
        this.email = email;
        this.password = password;
        this.confirmedPassword = confirmedPassword;
    }
}