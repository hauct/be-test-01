const postCreateCustomer = async (req, res) => {
    let {name, address, phone, email, description} = req.body;
    let imageUrl = ""
    //image: String
    if (!req.files || Object.keys(req.files).length == 0) {
        //do nothong
    } else {
        let result = await uploadSingleFile(req.files.image);
        console.log(">>> check result: ", result)
    }

    

};

module.exports = {
    postCreateCustomer
}