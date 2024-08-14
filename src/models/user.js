const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
      type:String,
      require:true
    }
    , address: String
    , phone: String
    , image: String
    , email: String
    , description: String
  }
, {timestamps : true}
);
  
const User = mongoose.model('User', userSchema);

module.exports = User;