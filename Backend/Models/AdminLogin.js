const {Schema, model} = require('../connection')
const adminSchema =  new Schema ({
    name:  String,
    password: String
});
module.exports =  model('admin', adminSchema)