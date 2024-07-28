const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('home.ejs')
}

const getABC = (req, res) => {
    res.send('Check ABC')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const postCreateUser = (req, res) => {
    console.log(">>> req.body: ", req.body)
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    // let {email, name, city} = req.body
    console.log(">>> email = ", email, " name = ", name, " city = ", city)

    // connection.query(
    //     `INSERT INTO Users (email, name, city) 
    //      VALUES (?, ?, ?)`,
    //      [email, name, city],
    //      function(err, results){
    //         console.log(results)
    //         res.send('Created user succesfully')
    //      }
    // )
}

module.exports = {
    getHomepage,
    getABC,
    getHoiDanIT,
    getCreatePage,
    postCreateUser
}