import express from "express";
import homeController from "../controller/homeController"
import userController from "../controller/userController"

let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/login', homeController.getLoginPage);
    router.get('/create-user', homeController.createUser);
    router.post('/post-crud', homeController.postCrud);

    // xay dung api
    router.get('/api/login', userController.handleLogin);

    return app.use("/", router);
}

module.exports = initWebRouters;