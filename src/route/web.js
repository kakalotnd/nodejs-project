import express from "express";
import homeController from "../controller/homeController"

let router = express.Router();

let initWebRouters = (app) => {
    console.log('chay den day')
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/login', homeController.getLoginPage);

    return app.use("/", router);
}

module.exports = initWebRouters;