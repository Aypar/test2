$(() => {

    let data_table = $('#employee_data_table').mDatatable({
        data: {
            saveState: {cookie: false},
        },
        search: {
            input: $('#generalSearch'),
        },
        columns: [
            {
                field: 'Name',
                type: 'text',
            },
            {
                field: 'Last Name',
                type: 'text',

            },
            {
                field: 'Actions',


            },
        ],
    });

});