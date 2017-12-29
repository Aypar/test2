export class Employee {
    constructor() {
        this.personal_info = {
            birthday: new Date(),
            identity_number: null,
            marital_status: null,
            military_service: null,
            disability_level: 0,
            nationality: null,
        };
        this.skills = [null];
        this.documents = [null];
        this.general_info = {
            name: null,
            last_name: null,
            access_type: null,
            branch: null,
            department: null,
            email: null,
            exit_date: null,
            hire_date: new Date(),
            image: null,
            manager: null,
            position: null,
            work_type: null,
            work_email: null

        };
        this.address_info = {
            address_line_1: null,
            address_line_2: null,
            city: null,
            phone_number: null,
            postal_code: null,
            country: null
        };
        this.bank_account = {
            account_type: null,
            bank_name: null,
            iban: null,
            account_number: null
        }
    }

    _id: String;
    personal_info: {
        birthday: Date,
        identity_number: String,
        marital_status: String,
        military_service: String,
        disability_level: Number,
        nationality: String,


    };
    skills: [{ skill: String, level: Number }];
    documents: [
        {
            type: String,
            attachment: String,
            status: String,
        }
        ];
    general_info: {
        name: String,
        last_name: String,
        department: String,
        position: String,
        email: String,
        work_email: String,
        work_type: String,
        hire_date: Date,
        exit_date: Date,
        branch: String,
        access_type: String,
        image: String,
        manager: String,
    };
    address_info: {
        address_line_1: String,
        address_line_2: String,
        phone_number: String,
        country: String,
        city: String,
        postal_code: String,
    };
    bank_account: {
        bank_name: String,
        account_type: String,
        account_number: String,
        iban: String,
    };
    emergency_state_info: {
        name: String,
        degree: String,
        phone: String,
    };
    vacations: [{
        type: String,
        start_date: Date,
        end_date: { type: String },
        days: { type: String },
        delegation: {
            type: String,
        }
    }];
}
