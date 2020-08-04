export class ExperienceDTO {
    constructor(user_id, title, type, company, location, start_date, end_date, description) {
        this.user_id = user_id;
        this.title = title;
        this.type = type;
        this.company = company;
        this.location = location;
        this.start_date = start_date;
        this.end_date = end_date;
        this.description = description;
    }
}