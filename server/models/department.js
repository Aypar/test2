const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
const BaseSchema = require('./base');
let DepartmentSchema = new BaseSchema({
    name: {type: String},
    parent: {type: Schema.Types.ObjectId, ref: 'Department'},
    code:{type:String},
    created_at: {type: Date, default: new Date()},
    modified_at: {type: Date},
    is_deleted: {type: Boolean, default: false}
});

let DepartmentModel = mongoose.model('Department', DepartmentSchema);
module.exports = DepartmentModel;