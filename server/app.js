const mongoose = require('mongoose');
const app = require('express')();
const body_parser = require('body-parser');
const routes = require('./routes');

require('./models')();

app.use(body_parser.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
// app.use((req, res, next) => {
//
//     if (req.method === 'GET') {
//         if (req.query.find_query) {
//             req.query.find_query.is_deleted = false;
//         }
//
//         req.page_size = req.query.page_size || 10;
//         req.page_index = req.query.page_index || 0;
//     }
//
//     if (req.method === 'POST') {
//         req.page_size = req.query.page_size || 10;
//         req.page_index = req.query.page_index || 0;
//     }
//     console.log(req);
// console.log('qqqqq');
//     next();
// });
app.use('/api/human-resource/employee', routes.employee);
app.use('/api/branch', routes.branch);
app.use('/api/department', routes.department);
app.use('/api/document-types', routes.documentType);
app.use('/api/position', routes.position);
app.use('/api/user', routes.user);
app.use('/api/auth', routes.auth);



app.listen(3000);

mongoose.connect('mongodb://127.0.0.1:27017');
