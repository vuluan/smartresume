import { add, detail, deleteById, updateById, findByUserId, validate } from '../controllers/projectControllers';
import { authRequired } from '../controllers/userControllers';

const routes = (app) => {
    app.route('/api/project/add')
        .post((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, validate('createProject'), add);

    app.route('/api/project/:id')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, detail);

    app.route('/api/project/list/:id')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, findByUserId);

    app.route('/api/project')
        .delete((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, validate('deleteProject'), deleteById);


    app.route('/api/project')
        .put((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, validate('updateProject'), updateById);
}


export default routes;
