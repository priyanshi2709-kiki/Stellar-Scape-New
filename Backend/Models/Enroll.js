const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    intern :  {type: Types.ObjectId, ref: 'user'},
    project : {type: Types.ObjectId, ref: 'project'},
    status : {type:String, default: "pending"},
    contributions : Array,
    createdAt: Date
});

module.exports = model('enroll',myschema);
