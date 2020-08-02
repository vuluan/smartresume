
   import { add, detail, deleteById, updateById, findByUserId, validate } from '../controllers/jobprofileControllers';
import { authRequired } from '../controllers/userControllers';

const routes = (app) => {
    app.route('/api/jobprofile/add')
        .post((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, validate('createJobprofile'), add);

    app.route('/api/jobprofile/:id')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, detail);

    app.route('/api/jobprofile/list/:id')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, findByUserId);

    app.route('/api/jobprofile')
        .delete((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, validate('deleteJobprofile'), deleteById);

    app.route('/api/jobprofile')
        .put((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, authRequired, validate('updateJobprofile'), updateById);
}


export default routes;
   