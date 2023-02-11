import express from "express";
import homeController from "../controller/homeController"

let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/login', homeController.getLoginPage);
    router.get('/create-user', homeController.createUser);
    router.post('/post-crud', homeController.postCrud);

    return app.use("/", router);
}

module.exports = initWebRouters;