const {Schema, model} = require('../connection')
const projectSchema =  new Schema ({
    pname:  String,
    pdescription: String,
    pprice: String,
    pcategory: String,
    image: String
});
module.exports =  model('project', projectSchema)