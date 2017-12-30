const mongoose = require('mongoose');
const Schema =  mongoose.Schema;
const BaseSchema = require('./base');
let EmployeeSchema = new BaseSchema({
    personal_info: {
        birthday: {type: Date},
        identity_number: {type: String, index: true, unique: false},
        marital_status: {type: String, enum: [null,'Male', 'Female']},
        military_service: {type: String, enum: [null,'Completed', 'NotCompleted']},
        disability_level: {type: Number},
        nationality: {type: String}
    },
    skills: [
        {skill: {type: Schema.Types.ObjectId, ref: 'Skill'}, level: Number}
    ],
    documents:
        [
            {
                type: {type: Schema.Types.ObjectId, ref: 'DocumentType'},
                attachment: {type: String},
                status: {type: String, enum: [null,'Valid', 'Invalid', 'Critic', 'Renewal']}
            }
        ],
    general_info: {
        name: {type: String},
        last_name: {type: String},
        department: {type: Schema.Types.ObjectId, ref: 'Department'},
        position: {type: Schema.Types.ObjectId, ref: 'Position'},
        email: {type: String},
        work_email: {type: String},
        work_type: {type: String},
        hire_date: {type: Date, default: new Date()},
        exit_date: {type: Date},
        branch: {type: Schema.Types.ObjectId, ref: 'Branch'},
        access_type: {type: String},
        image: {type: String},
        manager: {type: Schema.Types.ObjectId, ref: 'Employee'},
    },
    address_info: {
        address_line_1: {type: String},
        address_line_2: {type: String},
        phone_number: {type: String},
        country: {type: String},
        city: {type: String},
        postal_code: {type: String}
    },
    bank_account: {
        bank_name: {type: String},
        account_type: {type: String, enum: [null,'DepositAccount', 'CheckingAccount', 'CheckAccount', 'Other']},
        account_number: {type: String},
        iban: {type: String},
    },
    emergency_state_info: {
        name: {type: String},
        degree: {type: String},
        phone: {type: String}
    },
    vacations: [{
        type: Schema.Types.ObjectId,
        ref: 'Vacation',
        start_date: {type: Date},
        end_date: {type: String},
        days: {type: String},
        delegation: {
            type: Schema.Types.ObjectId,
            ref: 'Employee'
        }
    }]
});


let EmployeeModel = mongoose.model('Employee', EmployeeSchema);
module.exports = EmployeeModel;