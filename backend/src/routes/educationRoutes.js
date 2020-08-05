import { add, detail, deleteById, updateById, findByUserId, validate } from '../controllers/educationControllers';
import { authRequired } from '../controllers/userControllers';

const routes = (app) => {
    app.route('/api/education/add')
        .post((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, validate('createEducation'), add);

    app.route('/api/education/:id')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, detail);

    app.route('/api/education/list/:id')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, findByUserId);

    app.route('/api/education')
        .delete((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, validate('deleteEducation'), deleteById);

    app.route('/api/education')
        .put((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, validate('updateEducation'), updateById);
}


export default routes;
