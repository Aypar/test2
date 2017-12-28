const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BaseSchema = require('./base');
let PositionSchema = new BaseSchema({

    name: {type: String},

});

let PositionModel = mongoose.model('Position', PositionSchema);
module.exports = PositionModel;