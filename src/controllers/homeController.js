const connection = require('../config/database')
const {getAllUsers, getUserById, 
    updateUserById, deleteUserById} = require('../services/CRUDService')

const User = require('../models/user')

const getHomepage = async (req, res) => {
    let results = await User.find({});
    return res.render('home.ejs', {listUsers: results})
}

const getABC = (req, res) => {
    res.send('Check ABC')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);

    res.render('edit.ejs', {userEdit : user}) //x <- y
}

const postCreateUser = async (req, res) => {
    console.log(">>> req.body: ", req.body)
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    
    // await User.create({
    //     email:email,
    //     name:name,
    //     city:city
    // }
    // );

    await User.create({
        email,
        name,
        city
    }
    );

    res.send('Created user succeed !')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const postUpdateUser = async (req, res) => {
    console.log(">>> req.body: ", req.body)
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId
    // let {email, name, city} = req.body
    console.log(">>> email = ", email, " name = ", name, " city = ", city, "userId = ", userId);
    
    await updateUserById(email, name, city, userId);

    res.redirect('/');
}

const postDeleteUser = async(req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);

    res.render('delete.ejs', {userEdit : user})
}

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId;
    await deleteUserById(id);
    res.redirect('/');
}

postHandleRemoveUser
module.exports = {
    getHomepage,
    getABC,
    getHoiDanIT,
    getCreatePage,
    getUpdatePage,
    postCreateUser,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}