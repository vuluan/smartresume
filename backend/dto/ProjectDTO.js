export class ProjectDTO {
    constructor(user_id, name, description, duties, skills) {
        this.user_id = user_id;
        this.name = name;
        this.description = description;
        this.duties = duties;
        this.skills = skills;
    }
}