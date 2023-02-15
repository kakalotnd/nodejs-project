import bcrypt from 'bcryptjs';
import e from 'express';
import db from '../models/index';
const jwt = require('jsonwebtoken');
require('dotenv').config();

const salt = bcrypt.genSaltSync(10);

let handleUserlogin = (email, pass) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExit = await checkEmail(email)
            if (isExit) {
                let user = await db.User.findOne({  // lay userData
                    attributes: ['name', 'email', 'pass', 'roleid'],
                    where: {
                        email: email
                    },
                    raw: true
                })
                if (user) {
                    // compare password
                    let isPassCompare = await bcrypt.compareSync(pass, user.pass); // true ham so sanh mat khau
                    delete user.pass; // xoa truong password chong hack mat khau
                    if (isPassCompare) {

                        resolve({  // tra ve la dung
                            errCode: 0,
                            errMess: 'ok',
                            userData: user
                        })
                    } else {
                        resolve({
                            errCode: 2,
                            errMess: 'Sai Pass Word',
                            userData: user
                        })
                    }
                } else {
                    //error nguoi dung khong ton tai
                    resolve({
                        errCode: 1,
                        errMess: 'Nguoi Dung Khong Ton Tai',
                        userData: {}
                    })
                }

            } else {
                // error nguoi dung khong ton tai
                resolve({
                    errCode: 1,
                    errMess: 'Nguoi Dung Khong Ton Tai',
                    userData: {}
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let checkEmail = (emailUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            let use = await db.User.findOne({
                where: {
                    email: emailUser
                }
            })
            if (use) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getUserData = (id) => {
    return new Promise((resolve, reject) => {
        try {
            let dataUser = {}
            if (id) {

            } else {
                console.log('ID Rong')
                resolve({
                    dataUser
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}
let detailUserService = async (id) => { // Ham service kiem tra dieu kien va thao tac truc tiep voi database
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: id
                },
                raw: true
            })
            if (user) {
                resolve(user)
            } else {
                resolve()  // tra ra bien rong
            }
        } catch (e) {
            reject(e)
        }
    })

}

let editUserService = async (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: userId
                },
                attributes: { exclude: ['pass'] },
                raw: true
            })
            if (user) {
                resolve(user)
            } else {
                resolve()  // tra ra bien rong
            }
        } catch (e) {
            reject(e)
        }
    })
}
let doEditUserService = async (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log('do edit', user)
            let userId = user.id
            // check id co ton tai
            if (userId) {
                let check = await db.User.findOne({
                    where: { id: userId }
                })
                console.log(check)

                if (check) {
                    let doUpdate = await db.User.update(
                        {
                            name: user.name,
                            email: user.email,
                            tel: user.tel
                        }, {
                        where: {
                            id: userId
                        }
                    });

                    resolve({
                        errCode: 0,
                        errMess: "Cap Nhat Nguoi Dung Thanh Cong"
                    })
                } else {
                    resolve({
                        errCode: 1,
                        errMess: "Khong Ton Tai Nguoi Dung"
                    })
                }
            } else {
                resolve({
                    errCode: 1,
                    errMess: "Khong Ton Tai Nguoi Dung"
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}

let deleteUserService = async (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
            })
            if (user) {// ton tai nguoi dung
                // Delete everyone named "Jane"
                let check = await db.User.destroy({
                    where: {
                        id: userId
                    }
                });
                console.log('Check Delete: === ', check)
                resolve({
                    errCode: 0,
                    errMess: "Xoa Thanh Cong"
                })
            } else {
                resolve({
                    errCode: 1,
                    errMess: "Nguoi Dung Khong Ton Tai"
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let registerService = async (UserData) => {
    return new Promise(async (resolve, reject) => {
        try {

            // check if user already exist
            // Validate if user exist in our database
            console.log(UserData)
            let oldUser = await db.User.findOne({
                where: { email: UserData.email }
            });

            if (oldUser) {
                resolve({
                    errCode: 409,
                    errMess: "User Already Exist. Please Login",
                    user: {}
                })
            }

            console.log('Check pass: ', UserData.pass)
            //Encrypt user password
            let encryptedPassword = await bcrypt.hashSync(UserData.pass, salt); // su dung await

            // Create user in our database
            let user = await db.User.create({
                name: UserData.name,
                email: UserData.email.toLowerCase(), // sanitize: convert email to lowercase
                tel: UserData.tel,
                pass: encryptedPassword,
            });

            // get userID
            // console.log('Check User Create: ', user)

            // Create token
            let email = user.email
            const token = jwt.sign(
                { user_id: user.id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "10s", // 2d ....
                }
            );
            // save user token
            user.token = token;

            // return new user
            resolve({
                errCode: 201,
                errMess: 'Successed',
                user: user
            })
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    handleUserlogin: handleUserlogin,
    getUserData: getUserData,
    detailUserService: detailUserService,
    editUserService: editUserService,
    doEditUserService: doEditUserService,
    deleteUserService: deleteUserService,
    registerService: registerService

}