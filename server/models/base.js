const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// let BaseSchema = new Schema({
//     created_at: {type: Date},
//     modified_at: {type: Date},
//     is_deleted: {type: Boolean, default: false}
// });


class BaseSchema extends Schema {
    constructor(model) {
        model.created_at = {type: Date};
        model.modified_at = {type: Date};
        model.is_deleted = {type: Boolean, default: false};
        super(model);
    }
}

module.exports = BaseSchema;

