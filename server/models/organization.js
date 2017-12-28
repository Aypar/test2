const mongoose = require('mongoose');
const BaseSchema = require('./base');
let OrganizationSchema = new BaseSchema({
    name: {type: String},
    parent: {type: BaseSchema.ObjectId, ref: 'Organization'},
    created_at: {type: Date, default: new Date()},
    modified_at: {type: Date},
    is_deleted: {type: Boolean, default: false}
});

let OrganizationModel = mongoose.model('Organization', OrganizationSchema);
module.exports = OrganizationModel;