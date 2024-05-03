const {Schema, model} = require('../connection');

const myschema = new Schema({
    fname: {type:String, required: true},
    lname: {type:String, required: true},
    email: {type:String, required: true, unique: true},
    contact: {type:String},  
    address: {type:String},
    password: {type:String, required: true},
    role: {type:String, default: "admin"},
    avatar: {type:String, default: "avatar_placeholder.png"},
    createdAt: Date
});

module.exports = model('userData',myschema);