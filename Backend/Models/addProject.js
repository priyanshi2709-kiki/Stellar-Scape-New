const {Schema, model} = require('../connection');

const myschema = new Schema({
    name: {type:String, required: true},
    description: {type:String, required: true},
    longDesc: {type:String, required: true},
    image: {type:String, required: true},
    status: {type:String, default:'pending'},
    internCount: {type:Number},
    createdAt: Date,
});

module.exports = model('project',myschema);