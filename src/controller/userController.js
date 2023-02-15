import db from "../models/index";
import userService from "../services/userService"
import User from "../models/user"

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let pass = req.body.pass;
    // let check email and pass
    if (!email || !pass) { // neu kho co email hoac pass thi tra ve ve false
        return res.status(200).json({
            errCode: 1,
            errMess: 'Chua Nhap Email || Pass',
            userData: {}
        })
    } else {
        // let check email exits
        // compare pass
        let userData = await userService.handleUserlogin(email, pass)
        // return userInfo
        // access_token: JWT
        return res.status(200).json({
            userData
        })
    }
}

let handleGetUser = async (req, res) => {
    let id = req.body.id;
    let data = await userService.getUserData(id)
    return res.status(200).json({
        err: 2,
        mess: 'OK',
        data
    })
}

let detailUser = async (req, res) => {
    let userID = req.query.id
    if (userID) {
        let user = await userService.detailUserService(userID)
        if (user) {
            return res.render('detailUser', { data: user })
        } else {
            return res.send('Khong Ton Tai Nguoi Dung Nay ')
        }

    } else {
        console.log('ID rong')
        return res.send('Khong Ton Tai Nguoi Dung Nay ')
    }

}
let editUser = async (req, res) => {
    let userID = req.query.id
    if (userID) {
        // check nguoi dung trong database theo userID truyen vao
        let user = await userService.editUserService(userID)
        if (user) {
            console.log(user)
            return res.render('editUser.ejs', { data: user })
        } else {
            return res.send('Nguoi Dung Khong Ton Tai')
        }

    } else {
        return res.send('Nguoi Dung Khong Ton tai')
    }

}
let updateUser = async (req, res) => { // ham controller su ly logic truoc khi chuyen du lieu cho service
    // console.log(req.body)
    let userData = req.body
    let errCode = await userService.doEditUserService(userData)
    console.log(errCode)
    if (errCode.errCode === 0) {
        return res.send('Cap Nhat Thanh Cong')
    } else {
        return res.send('Loi Cap Nhat Nguoi Dung')
    }

}

let deleteUser = async (req, res) => {
    let userID = req.query.id
    if (userID) { // check req co gui id hop le hay khong
        let data = await userService.deleteUserService(userID)
        return res.send('Da Xoa Nguoi Dung Thanh Cong')
    } else {
        return res.send('Nguoi Dung Khong Ton Tai! Xin Thu Lai')
    }

}

let Register = async (req, res) => {
    // Get user input.
    const { name, email, tel, pass } = req.body;
    // Validate user input.
    if (!(email && pass && name && tel)) {
        return res.status(400).send("All input is required");
    } else {
        //
        let User = {
            name: name,
            email: email,
            tel: tel,
            pass: pass
        }
        let result = await userService.registerService(User)
        if (result) {
            if (result.errCode === 409) {
                return res.status(409).send("User Already Exist. Please Login");
            } else {
                if (result.errCode === 201) {
                    res.status(201).json(result.user);
                }
            }
        } else {
            res.status(401).send("Loi Ket Noi DataBase Thu lai");
        }
    }
    // Validate if the user already exists.
    // Encrypt the user password.
    // Create a user in our database.
    // And finally, create a signed JWT token.

}
let Login = (req, res) => {

}

module.exports = {     // xuat ra mot object nhieu ham
    handleLogin: handleLogin,
    handleGetUser: handleGetUser,
    detailUser: detailUser,
    editUser: editUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    Register: Register,
    Login: Login,
}