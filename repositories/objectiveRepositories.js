import { ObjectiveEntity} from '../entities/ObjectiveEntity';

export const add = async (objectiveDTO) => {
    try {
        let newObjective = new ObjectiveEntity();newObjective.user_id = objectiveDTO.user_id; 
        newObjective.objective = objectiveDTO.objective; 
        const createdObjective = await newObjective.save();
    return createdObjective;
} catch (err) {
    throw err;
}
}

export const detail = async (id) => {
    try {
        let detailObjective = await ObjectiveEntity.findById(id);
        return detailObjective;
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        let removedObjective = await ObjectiveEntity.findByIdAndRemove(id);
        return removedObjective;
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, objectiveDTO) => {
    try {
        let updateObjective = await ObjectiveEntity.findById(id);
newObjective.objective = objectiveDTO.objective; 
             return await updateObjective.save();
} catch (err) {
    throw err;
}
}

export const findByUserId = async (userId) => {
    try {
        let detailObjective = await ObjectiveEntity.find({
            user_id: userId
        });
        return detailObjective;
    } catch (err) {
        throw err;
    }
}
