const mongoose = require('mongoose');
const BaseSchema = require('./base');
let UserSchema = new BaseSchema({

    email: {type: String, unique: true, index: true},
    password: {type: String},
    is_admin:{type:Boolean}
});
let UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;