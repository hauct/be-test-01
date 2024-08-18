const express = require('express'); //commonjs

const routerAPI = express.Router();

const {getUsersAPI, postCreateUserAPI
    , putUpdateUserAPI, deleteUserAPI
    , postUploadSingleFileAPI
    , postUploadMultipleFileAPI
} = require('../controllers/apiController');

const {postCreateCustomer
    , postCreateArrayCustomer
    , getAllCustomers
    , putUpdateCustomers
    , deleteACustomer
    , deleteArrayCustomer
} = require('../controllers/customerController');

const {postCreateProject
} = require('../controllers/projectController');

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
routerAPI.delete('/customers', deleteACustomer);
routerAPI.delete('/customers-many', deleteArrayCustomer);

routerAPI.post('/projects', postCreateProject);

routerAPI.get('/info', (req, res) => {
    console.log(">>> check query", req.query)
    return res.status(200).json({
        data: req.query
    })
});

routerAPI.get('/info/:name/:email', (req, res) => {
    console.log(">>> check params", req.params)
    return res.status(200).json({
        data: req.params
    })
});


module.exports = routerAPI; //export default