const {uploadSingleFile} = require('../services/fileService')

const {createCustomerService
     , createArrayCustomerService
     , getAllCustomerService
     , putUpdateCustomerService
     , deleteACustomerService
     , deleteArrayCustomerService
} = require('../services/customerService')

const Joi = require('joi')

const postCreateCustomer = async (req, res) => {
    let {name, address, phone, email, description} = req.body;
    const schema = Joi.object({
        name: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required()    
        , address: Joi.string()
        // , phone: Joi.string()
        //         .pattern(new RegExp('^[0-9]{8,11}$'))
        // , email: Joi.string().email()
        // , description: Joi.string()
    })
    const {error} = schema.validate(req.body, {abortEarly: false});
    if (error) {
        return res.status(200).json({
            msg: error
        })    
    } else {
    let imageUrl = ""
    //image: String
    if (!req.files || Object.keys(req.files).length == 0) {
        //do nothing
    } else {
        let result = await uploadSingleFile(req.files.image);
        imageUrl = result.path
    }

    let customerData = {
        name: name
        , address: address
        , phone: phone
        , email: email
        , description: description
        , image: imageUrl
    }

    let customer = await createCustomerService(customerData)

    return res.status(200).json(
        {
            EC:0
            , data: customer
        }
    )  
    }
};

const postCreateArrayCustomer =  async (req, res) => {
    let customers = await createArrayCustomerService(req.body.customers)
    
    if (customers) {
        return res.status(200).json(
            {
                EC: 0
                , data: customers
            }
        )
    } else {
        return res.status(200).json(
            {
                EC: -1
                , data: customers
            }
        )
    }

}

const getAllCustomers =  async (req, res) => {
    let result = await getAllCustomerService();
    return res.status(200).json(
        {
            EC: -1
            , data: result
        }
    )
}

const putUpdateCustomers = async (req, res) => {
    // let {id, name, email, address} = req.body;
    let id = req.body.id;
    let email = req.body.email;
    let name = req.body.name;
    let address = req.body.address;

    let result =  await putUpdateCustomerService(id, name, email, address)
    return res.status(200).json(
        {
            EC: 0
            , data: result
        }
    )
}

const deleteACustomer = async (req, res) => {
    // let {id, name, email, address} = req.body;
    let id = req.body.id;

    let result =  await deleteACustomerService(id)
    return res.status(200).json(
        {
            EC: 0
            , data: result
        }
    )
}

const deleteArrayCustomer = async(req, res) => {
    let ids = req.body.ids;
    console.log(">>> check ids: ", ids);
    let result = await deleteArrayCustomerService(ids);
    return res.status(200).json(
        {
            EC: 0
            , data: result
        }
    )
}

module.exports = {
    postCreateCustomer
    , postCreateArrayCustomer
    , getAllCustomers
    , putUpdateCustomers
    , deleteACustomer
    , deleteArrayCustomer
}