import db from "../models/index";
import CRUDService from "../services/CRUDservice";

let getHomePage = async (req, res) => {
    // load database
    try {
        let data = await db.User.findAll()
        return res.render('homePage.ejs', { data: data });
    } catch (e) {
        console.log(e)
    }
}

let getAboutPage = (req, res) => {
    return res.send('Day La Trang Gioi Thieu')
}

let getLoginPage = (req, res) => {
    return res.render('login.ejs')
}

let createUser = (req, res) => {
    return res.render('createUser.ejs')
}

let postCrud = async (req, res) => {
    let mess = await CRUDService.createNewUser(req.body) // chuyen vao data body vao trong ham service de su ly
    console.log(mess)
    return res.send('Tao Co So Du Lieu')
}

module.exports = {     // xuat ra mot object nhieu ham
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getLoginPage: getLoginPage,
    createUser: createUser,
    postCrud: postCrud,
}