import { CoverLetterEntity } from '../entities/CoverLetterEntity';

export const add = async (coverletterDTO) => {
    try {
        let newCoverLetter = new CoverLetterEntity();
        newCoverLetter.user_id = coverletterDTO.user_id;
        newCoverLetter.title = coverletterDTO.title;
        newCoverLetter.body = coverletterDTO.body;
        const createdCoverLetter = await newCoverLetter.save();
        return createdCoverLetter;
    } catch (err) {
        throw err;
    }
}

export const detail = async (id) => {
    try {
        let detailCoverLetter = await CoverLetterEntity.findById(id);
        return detailCoverLetter;
    } catch (err) {
        throw err;
    }
}

export const deleteById = async (id) => {
    try {
        let removedCoverLetter = await CoverLetterEntity.findByIdAndRemove(id);
        return removedCoverLetter;
    } catch (err) {
        throw err;
    }
}

export const updateById = async (id, coverletterDTO) => {
    try {
        let updateCoverLetter = await CoverLetterEntity.findById(id);
        newCoverLetter.title = coverletterDTO.title;
        newCoverLetter.body = coverletterDTO.body;
        return await updateCoverLetter.save();
    } catch (err) {
        throw err;
    }
}

export const findByUserId = async (userId) => {
    try {
        let detailCoverLetter = await CoverLetterEntity.find({
            user_id: userId
        });
        return detailCoverLetter;
    } catch (err) {
        throw err;
    }
}

