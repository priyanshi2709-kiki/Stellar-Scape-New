const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    projectId: {type: Types.ObjectId, ref: 'project'},
    head1: String,
    desc1: String,
    head2: String,
    desc2: String,
    head3: String,
    desc3: String,
    head4: String,
    desc4: String,
    head5: String,
    desc5: String,
    status: {type:String, default:'pending'},
    progress: {type:String, default:'0%'},
    createdAt: Date,
    content: String,
});

module.exports = model('task',myschema);