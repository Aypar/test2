const mongoose = require('mongoose');
const BaseSchema = require('./base');
let EmployeeSchema = new BaseSchema({
    personal_info: {
        birthday: {type: Date},
        identity_number: {type: String, index: true, unique: true},
        marital_status: {type: String, enum: ['Male', 'Female']},
        military_service: {type: String, enum: ['Completed', 'NotCompleted']},
        disability_level: {type: Number},
        nationality: {type: String},
        skills: [
            {skill: {type: BaseSchema.ObjectId, ref: 'Skill'}, level: Number}
        ]

    },
    documents:
        [
            {
                type: {type: BaseSchema.ObjecId, ref: 'DocumentType'},
                attachment: {type: String},
                status: {type: String, enum: ['Valid', 'Invalid', 'Critic', 'Renewal']}
            }
        ],
    general_info: {
        name: {type: String},
        last_name: {type: String},
        department: {type: BaseSchema.ObjectId, ref: 'Department'},
        position: {type: BaseSchema.ObjectId, ref: 'Position'},
        email: {type: String},
        work_email: {type: String},
        work_type: {type: String},
        hire_date: {type: Date, default: new Date()},
        branch: {type: BaseSchema.ObjectId, ref: 'Branch'},
        access_type: {type: String},
        image: {type: String},
        manager: {type: BaseSchema.ObjectId, ref: 'Employee'},
    },
    address_info: {
        address: {type: String},
        phone_number: {type: String},
        country: {type: String},
        city: {type: String},
        postal_code: {type: String}
    },
    bank_account: {
        bank_name: {type: String},
        account_type: {type: String, enum: ['DepositAccount', 'CheckingAccount', 'CheckAccount', 'Other']},
        account_number: {type: String},
        iban: {type: String},
    },
    emergency_state_info: {
        name: {type: String},
        degree: {type: String},
        phone: {type: String}
    },
    vacations: [{
        type: BaseSchema.ObjectId,
        ref: 'Vacation',
        start_date: {type: Date},
        end_date: {type: String},
        days: {type: String},
        delegation: {
            type: BaseSchema.ObjectId,
            ref: 'Employee'
        }
    }]
});


let EmployeeModel = mongoose.model('EmployeeModel', EmployeeSchema);
module.exports = EmployeeModel;