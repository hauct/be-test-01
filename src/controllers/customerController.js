const {uploadSingleFile} = require('../services/fileService')

const {createCustomerService
     , createArrayCustomerService
     , getAllCustomerService
     , putUpdateCustomerService
} = require('../services/customerService')

const postCreateCustomer = async (req, res) => {
    let {name, address, phone, email, description} = req.body;
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
    let {id, name, email, address} = req.body;
    let result =  await putUpdateCustomerService(id, name, email, address)
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
}