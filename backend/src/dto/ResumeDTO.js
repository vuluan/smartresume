export class ResumeDTO {
    constructor(user_id, title, description, education, experience, profile, objective, skills, languages) {
        this.user_id = user_id;
        this.title = title;
        this.profile = profile;
        this.objective = objective
        this.description = description;
        this.education = education;
        this.experience = experience;
        this.skills = skills
        this.languages = languages
    }
}