import db from "../models/index";
import userService from "../services/userService"

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let pass = req.body.pass;
    // let check email and pass
    if (!email || !pass) { // neu kho co email hoac pass thi tra ve ve false
        return res.send({
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

module.exports = {     // xuat ra mot object nhieu ham
    handleLogin: handleLogin,
}