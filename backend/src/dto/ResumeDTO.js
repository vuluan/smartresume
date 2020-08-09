export class ResumeDTO {
    constructor(user_id, title, description, education, experience, profile, objective) {
        this.user_id = user_id;
        this.title = title;
        this.profile = profile;
        this.objective = objective
        this.description = description;
        this.education = education;
        this.experience = experience;
    }
}