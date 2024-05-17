const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    projectId: {type: Types.ObjectId, ref: 'project'},
    task1: String,
    desc1: String,
    task2: String,
    desc2: String,
    task3: String,
    desc3: String,
    task4: String,
    desc4: String,
    task5: String,
    desc5: String,
    status: {type:String, default:'pending'},
    progress: {type:String, default:'0%'},
    createdAt: Date,
    content: String,
});

module.exports = model('task',myschema);