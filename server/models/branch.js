const mongoose = require('mongoose');
const BaseSchema = require('./base');
let BranchSchema = new BaseSchema({

    name: {type: String, unique: true, index: true},

});
let BranchModel = mongoose.model('Branch', BranchSchema);
module.exports = BranchModel;