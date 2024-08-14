const express = require('express'); //commonjs

const routerAPI = express.Router();

const {getUsersAPI, postCreateUserAPI
    , putUpdateUserAPI, deleteUserAPI
    , postUploadSingleFileAPI
    , postUploadMultipleFileAPI} = require('../controllers/apiController');

const {postCreateCustomer
    , postCreateArrayCustomer
    , getAllCustomers
    , putUpdateCustomers} = require('../controllers/customerController');

routerAPI.get('/', (req, res) => {
    res.send("hello world with api")
});

routerAPI.get('/abc', (req, res) => {
    res.status(201).json({
        data: "Hello world first api"
    })
});

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);
routerAPI.post('/file', postUploadSingleFileAPI);
routerAPI.post('/files', postUploadMultipleFileAPI);

routerAPI.post('/customers', postCreateCustomer);
routerAPI.post('/customers-many', postCreateArrayCustomer);
routerAPI.get('/customers', getAllCustomers);
routerAPI.put('/customers', putUpdateCustomers);

module.exports = routerAPI; //export default