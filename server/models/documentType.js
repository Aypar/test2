const mongoose = require('mongoose');
const BaseSchema = require('./base');
let DocumentTypeSchema = new BaseSchema({

    name: {type: String, unique: true, index: true},

});
let DocumentTypeModel = mongoose.model('DocumentType', DocumentTypeSchema);
module.exports = DocumentTypeModel;