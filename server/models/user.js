const mongoose = require('mongoose');
const BaseSchema = require('./base');
let UserSchema = new BaseSchema({

    email: {type: String, unique: true, index: true},
    password: {type: String},
    created_at:{type:Date,default:new Date()},
    modified_at:{type:Date},
    is_deleted:{type:Boolean,default:false}
});
let UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;