import { getProfile } from '../controllers/profileControllers';
import { authRequired } from '../controllers/userControllers';

const routes = (app) => {
    app.route('/api/profile')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, getProfile);
}


export default routes;
