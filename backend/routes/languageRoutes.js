import { add } from '../controllers/languageControllers';
import { authRequired } from '../controllers/userControllers';

const routes = (app) => {
    app.route('/api/language/add')
        .post((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, add);
}


export default routes;
