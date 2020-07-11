import { logger } from '../shared/utils/loggerUtilities';
import HttpResponseResult from '../shared/models/HttpResponseResult';


export const getProfile = async (req, res) => {
    try {
        const userInfo = req.userInfo;

        return await res.send(new HttpResponseResult(true, "", userInfo));

    } catch (err) {
        if (err.isBusinessException) {
            return await res.send(new HttpResponseResult(false, err.message, null));
        }
        logger.error(err);
        console.log(err);
        return await res.status(err.code | 400).send(new HttpResponseResult(false, err, null));
    }
}