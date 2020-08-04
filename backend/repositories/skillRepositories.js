import { SkillEntity } from '../entities/SkillEntity';
import { isNullOrUndefined } from '../shared/utils/generalUtilities';

export const add = async (skillDTO) => {
    try {
        let newSkill = new SkillEntity();
        newSkill.user_id = skillDTO.user_id;
        newSkill.skill_name = skillDTO.skill_name;
        newSkill.is_hard_skill = skillDTO.is_hard_skill;
        const createdSkill = await newSkill.save();
        return createdSkill;
    } catch (err) {
        throw err;
    }
}


export const deleteById = async (id) => {
    try {
        let removedSkill = await SkillEntity.findByIdAndRemove(id);
        return removedSkill;
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, skillDTO) => {
    try {
        let updateSkill = await SkillEntity.findById(id);

        if (isNullOrUndefined(updateSkill))
            return null;

        updateSkill.skill_name = skillDTO.skill_name;
        updateSkill.is_hard_skill = skillDTO.is_hard_skill;
        return await updateSkill.save();
    } catch (err) {
        throw err;
    }
}

export const findByUserId = async (userId) => {
    try {
        let lstSkills = await SkillEntity.find({
            user_id: userId
        });
        return lstSkills;
    } catch (err) {
        throw err;
    }
}

