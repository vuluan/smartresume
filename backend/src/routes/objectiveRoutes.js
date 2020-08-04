import { add, detail, deleteById, updateById, findByUserId, validate } from '../controllers/objectiveControllers';
import { authRequired } from '../controllers/userControllers';

const routes = (app) => {
    app.route('/api/objective/add')
        .post((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, validate('createObjective'), add);

    app.route('/api/objective/:id')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, detail);

    app.route('/api/objective/list/:id')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, findByUserId);

    app.route('/api/objective')
        .delete((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, validate('deleteObjective'), deleteById);

    app.route('/api/objective')
        .put((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, validate('updateObjective'), updateById);
}


export default routes;
