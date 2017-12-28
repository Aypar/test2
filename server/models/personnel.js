const mongoose = require('mongoose');
const BaseSchema = require('./base');
let PersonnelSchema = new BaseSchema({

    name: {type: String},
    last_name: {type: String},
    identity_number: {type: String},
    organization: {type: BaseSchema.ObjectId, ref: 'Organization'},
    position: {type: BaseSchema.ObjectId, ref: 'Position'},
    created_at:{type:Date,default:new Date()},
    modified_at:{type:Date},
    is_deleted:{type:Boolean,default:false}
});

PersonnelSchema.index({identity_number: 1, tenant: 1}, {unique: true});

let PersonnelModel = mongoose.model('PersonnelRoutes', PersonnelSchema);
module.exports = PersonnelModel;