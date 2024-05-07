const {Schema, model} = require('../connection')
const contactSchema =  new Schema ({
    name:  String,
    email: String,
    query: String
});
module.exports =  model('contact', contactSchema)