import { ProjectEntity } from '../entities/ProjectEntity';
import { isNullOrUndefined } from '../shared/utils/generalUtilities';

export const add = async (projectDTO) => {
    try {
        let newProject = new ProjectEntity();
        newProject.user_id = projectDTO.user_id;
        newProject.name = projectDTO.name;
        newProject.description = projectDTO.description;
        newProject.duties = projectDTO.duties;
        newProject.skills = projectDTO.skills;
        const createdProject = await newProject.save();
        return createdProject;
    } catch (err) {
        throw err;
    }
}

export const detail = async (id) => {
    try {
        let project = await ProjectEntity.findById(id);
        return project;
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        let removedProject = await ProjectEntity.findByIdAndRemove(id);
        return removedProject;
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, projectDTO) => {
    try {
        let updateProject = await ProjectEntity.findById(id);
        if (isNullOrUndefined(updateProject))
            return null;

        updateProject.name = projectDTO.name;
        updateProject.description = projectDTO.description;
        updateProject.duties = projectDTO.duties;
        updateProject.skills = projectDTO.skills;
        return await updateProject.save();
    } catch (err) {
        throw err;
    }
}

export const findByUserId = async (userId) => {
    try {
        let lstProjects = await ProjectEntity.find({
            user_id: userId
        });
        return lstProjects;
    } catch (err) {
        throw err;
    }
}

