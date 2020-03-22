const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create a Schema
const user =new Schema({
    firstname : {
        type: String
    },
    lastname : {
        type: String
    },
    email : {
        type: String
    },
    mob : {
        type: String
    },
    username : {
        type : String
    },
    password : {
        type : String
    }
    requests:{
        type : Array
    }
});

module.exports = mongoose.model('user', user);