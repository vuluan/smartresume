export class BasicInfoDTO {
    constructor(user_id, 
        firstName,
        lastName,
        email,
        phone,
        address,
        country,
        region,
        gitHub,
        linkedin) {
        this.user_id = user_id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.country = country;
        this.region = region;
        this.gitHub = gitHub;
        this.linkedin = linkedin;
    }
}