const {Schema, model} = require('../connection')
const projectSchema =  new Schema ({
    pname:  String,
    pinfo: String,
    pdescription: String,
    pcategory: String,
    image: String
});
module.exports =  model('project', projectSchema)