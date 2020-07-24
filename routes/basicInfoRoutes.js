import { add, detail, deleteById, updateById, findByUserId, validate } from '../controllers/basicInfoControllers';
import { authRequired } from '../controllers/userControllers';

const routes = (app) => {
    app.route('/api/basicinfo/add')
        .post((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, validate('createBasicInfo'), add);

    app.route('/api/basicinfo/:id')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, detail);

    app.route('/api/basicinfo/list/:id')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, findByUserId);

    app.route('/api/basicinfo')
        .delete((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, validate('deleteBasicInfo'), deleteById);

    app.route('/api/basicinfo')
        .put((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, validate('updateBasicInfo'), updateById);
}


export default routes;
