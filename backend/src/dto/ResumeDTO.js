export class ResumeDTO {
    constructor(user_id, title, description, education, experience) {
        this.user_id = user_id;
        this.title = title;
        this.description = description;
        this.education = education;
        this.experience = experience;
    }
}