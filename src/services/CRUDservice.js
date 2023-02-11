import bcrypt from 'bcryptjs';
import db from '../models/index';

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    // su ly tao du lieu va luu vao database
    return new Promise(async (resolve, reject) => {
        try {
            // ma hoa pass
            let hasspassFrombcrypt = await hasPassUser(data.Password)
            // tao du lieu database
            await db.User.create({ // ham thu vien ho tro gia tri nhap vao la object {}
                name: data.name,
                email: data.Email,
                tel: data.tel,
                pass: hasspassFrombcrypt
            })
            resolve('ok! Tao Nguoi Dung Thanh Cong') // de resolve() cung duoc
        } catch (e) {
            reject(e)
        }
    })
}

// hash pass
let hasPassUser = (pass) => {
    return new Promise(async (resolve, reject) => { // luon tra ve gia tri
        try {
            let hashPass = await bcrypt.hashSync(pass, salt); // su dung await
            resolve(hashPass)  // tuong duong voi return
        } catch (e) {
            reject(e)
        }
    })
}


module.exports = {
    createNewUser: createNewUser
}