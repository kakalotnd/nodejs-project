
let getHomePage = (req, res) => {
    return res.send('xin chao test nodejs')
}

let getAboutPage = (req, res) => {
    return res.send('Day La Trang Gioi Thieu')
}

let getLoginPage = (req, res) => {
    return res.render('login.ejs')
}


module.exports = {     // xuat ra mot object nhieu ham
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getLoginPage: getLoginPage,
}