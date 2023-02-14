import express from "express";
import homeController from "../controller/homeController"
import userController from "../controller/userController"

let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/login', homeController.getLoginPage);
    router.get('/create-user', homeController.createUser);
    router.get('/detail-user/', userController.detailUser);
    router.get('/edit-user', userController.editUser);//form lay thong tin de chinh sua
    router.post('/update-user', userController.updateUser);// update thong tin nguoi dung name, tel
    router.post('/post-crud', homeController.postCrud); // tao nguoi dung moi

    // xay dung api
    router.get('/api/login', userController.handleLogin);
    router.get('/api/getUser', userController.handleGetUser)

    return app.use("/", router);
}

module.exports = initWebRouters;